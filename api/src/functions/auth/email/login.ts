// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "@/types"

// Utility
import * as yup from 'yup'
import database from "@/lib/database"
import { sanitize } from "@/lib/protobuf"
import passwordHash from "password-hash"

type Body = {
    email: string
    password: string
}

const validator = yup.object().shape({
    body: yup.object().shape({
        email: yup
            .string()
            .typeError("")
            .email()
            .trim()
            .lowercase()
            .max(128)
            .min(3)
            .required(),
        password: yup
            .string()
            .typeError("")
            .trim()
            .min(8)
            .max(128)
            .required()
    })
})

const route: Route = {
    method: "post",
    path: "/auth/login",
    validator,
    inboundStruct: "LoginRequest",
    handler: async function loginHandler(request, response) {

        let { email, password } = request.body as Body
        email = email.trim().toLowerCase()

        const user = await database.users.findUnique({
            where:{
                email
            },
            include: {
                passwords: true
            }
        })

        const latestPassword = user?.passwords?.sort((a, b) => a.created_at > b.created_at ? -1 : 1)[0]
        if (!user || !latestPassword) {
            response.status(401)
            response.sendProto("AuthResponse", {
                authorized: false,
                user: null,
                message: request.__("login_invalid")
            })
            return
        }

        const isValid = passwordHash.verify(password, latestPassword.value)
        if (!isValid){
            response.status(401)
            response.sendProto("AuthResponse", {
                authorized: false,
                user: null,
                message: request.__("login_invalid")
            })
            return
        }

        delete user.passwords
        request.session.user = user
        request.session.authorized = true

        response.status(200)
        response.sendProto("AuthResponse", {
            authorized: true,
            user: sanitize(user),
            message: request.__("login_success")
        })

        await request.session.saveAsync()
    }

}

export default route
