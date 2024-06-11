// Copyright © 2024 Navarrotech

// Typescript
import type { users } from "@prisma/client"
import type { Route } from "navarrotech-express"

// Preferences
import { languageValidator } from "@/lib/validators"
import { defaultLanguage } from "@/lib/language"

// Utility
import * as yup from 'yup'
import database from "@/lib/database"
import passwordHash from "password-hash"

type Body = {
    first_name: string
    last_name: string
    email: string
    password: string
    language?: string
}

const validator = yup.object().shape({
    body: yup.object().shape({
        first_name: yup
            .string()
            .typeError("First name must be a string")
            .trim()
            .max(32, "First name must be less than 32 characters")
            .min(3, "First name must be at least 3 characters")
            .required("First name is required"),
        last_name: yup
            .string()
            .typeError("Last name must be a string")
            .trim()
            .max(32, "Last name must be less than 32 characters")
            .min(3, "Last name must be at least 3 characters")
            .required("Last name is required"),
        email: yup
            .string()
            .typeError("Email must be a string")
            .email("Please provide a valid email address")
            .trim()
            .lowercase()
            .max(128, "Email must be less than 128 characters")
            .min(3, "Email must be at least 3 characters")
            .required("Email is required"),
        password: yup
            .string()
            .typeError("Password must be a string")
            .trim()
            .min(8, "Password must be at least 8 characters")
            .max(128, "Password must be less than 128 characters")
            .matches(/[\W_]/, "Password must include at least one special character")
            .required("Password is required"),
        language: languageValidator()
            .notRequired()
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
            language = defaultLanguage
        } = request.body as Body

        email = email.trim().toLowerCase()
        first_name = first_name.trim()
        last_name = last_name.trim()

        let user: users;
        try {
            const existingUser = await database.users.findUnique({
                where: {
                    email
                }
            })

            if (existingUser) {
                // response.status(401).send({
                //     code: 401,
                //     message: "An account with this email already exists.",
                //     success: false
                // } as ApiResponse)
                return
            }

            user = await database.users.create({
                data: {
                    first_name,
                    last_name,
                    email,
                }
            })

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
            // response.status(500).send({
            //     code: 500,
            //     message: "An error occurred while creating your account. Please try again.",
            //     success: false
            // } as ApiResponse)
            return
        }
        
        request.session.user = user
        request.session.authorized = true

        // response
        //     .status(200)
        //     .send({
        //         code: 200,
        //         message: "Successfully created account.",
        //         success: true,
        //         data: {
        //             user,
        //             authorized: true
        //         }
        //     } as ApiResponse)

        await request.session.saveAsync()
    }

}

export default route
