// Copyright © 2024 Navarrotech

// Typescript
import type { users } from "@prisma/client"
import type { Route } from "@/types"

// Constants

// Utility
import * as yup from 'yup'
import database from "@/lib/database"
import { sanitize } from "@/lib/protobuf"
import passwordHash from "password-hash"

type Body = {
    first_name: string
    last_name: string
    email: string
    password: string
}

const validator = yup.object().shape({
    body: yup.object().shape({
        first_name: yup
            .string()
            .typeError("")
            .trim()
            .max(32)
            .min(3)
            .required(),
        last_name: yup
            .string()
            .typeError("")
            .trim()
            .max(32)
            .min(3)
            .required(),
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
            .matches(/[\W_]/, "validator_password")
            .required(),
    })
})

const route: Route = {
    method: "post",
    path: "/auth/signup",
    validator,
    handler: async function signupHandler(request, response) {

        let {
            first_name,
            last_name,
            email,
            password,
        } = request.body as Body

        email = email.trim().toLowerCase()
        password = password.trim()
        first_name = first_name.trim()
        last_name = last_name.trim()

        const { language } = request

        let user: users;
        try {
            try {
                user = await database.users.create({
                    data: {
                        first_name,
                        last_name,
                        email,
                    },
                })
            } catch (error) {
                if (error?.code === "P2002") {
                    response.status(409)
                    response.sendProto("AuthResponse", {
                        message: request.__("signup_exists"),
                        authorized: false,
                        user: null,
                    })
                    return
                } else {
                    console.error("[Signup Error] :: ", error)
                    response.status(500)
                    response.sendProto("AuthResponse", {
                        message: request.__("generic_error"),
                        authorized: false,
                        user: null,
                    })
                }
            }

            const startTime = Date.now()
            const generatedPassword = passwordHash.generate(password, {
                algorithm: "sha256",
                saltLength: 32,
                iterations: 10_000
            })
            const stopTime = Date.now()
            console.info(`New password hash generated in ${stopTime - startTime}ms`)

            await Promise.all([
                database.passwords.create({
                    data: {
                        owner_id: user.id,
                        value: generatedPassword
                    }
                }),
                database.preferences.create({
                    data: {
                        owner_id: user.id,
                        language
                    }
                }),
                database.permanent_limits.create({
                    data: {
                        owner_id: user.id
                    }
                }),
                database.daily_limits.create({
                    data: {
                        owner_id: user.id
                    }
                }),
                database.monthly_limits.create({
                    data: {
                        owner_id: user.id
                    }
                }),
                database.status.create({
                    data: {
                        owner_id: user.id,
                    }
                }),
            ])

        } catch (error) {
            response.status(500)
            response.sendProto("AuthResponse", {
                message: request.__("generic_error"),
                authorized: false,
                user: null,
            })
            return
        }
        
        request.session.user = user
        request.session.authorized = true

        response.status(200)
        response.sendProto("AuthResponse", {
            message: request.__("signup_success"),
            authorized: true,
            user: sanitize(user),
        })

        await request.session.saveAsync()
    }

}

export default route
