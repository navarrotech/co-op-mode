// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "@/types"

// Utility
import * as yup from 'yup'
import database from "@/lib/database"
import redisClient from "@/lib/redis"

// Utility
import { sanitize } from "@/lib/protobuf"
import { phoneValidator } from "@/lib/validators"

type Body = {
    phone: string
}

const validator = yup.object().shape({
    body: yup.object().shape({
        phone: phoneValidator()
            .required(),
    })
})

const route: Route = {
    method: "post",
    path: "/auth/v1/phone/login",
    validator,
    inboundStruct: "LoginRequest",
    handler: async function loginHandler(request, response) {
        const { phone } = request.body as Body

        // const codeSent

        const user = await database.users.findUnique({
            where:{
                phone
            }
        })

        if (!user) {
            response.status(409)
            response.sendProto("AuthResponse", {
                message: request.__("login_not_found"),
                authorized: false,
            })
            return
        }

        return

        request.session.user = user
        request.session.authorized = true

        response.status(200)
        response.sendProto("AuthResponse", {
            message: request.__("login_success"),
            user: sanitize(user),
            authorized: true,
        })

        await request.session.saveAsync()
    }

}

export default route
