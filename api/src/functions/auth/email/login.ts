// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "navarrotech-express"

// Utility
import * as yup from 'yup'
import database from "@/lib/database"
import passwordHash from "password-hash"

type Body = {
    email: string
    password: string
}

const validator = yup.object().shape({
    body: yup.object().shape({
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
            .required("Password is required")
    })
})

const route: Route = {
    method: "post",
    path: "/auth/login",
    validator,
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

        const latestPassword = user.passwords.sort((a, b) => a.created_at > b.created_at ? -1 : 1)[0]
        if (!user || !latestPassword) {
            // response.status(401).send({
            //     code: 401,
            //     message:"Invalid email/password combination",
            //     success: false,
            //     data: {
            //         authorized: false,
            //         user: null
            //     }
            // } as ApiResponse)
            return
        }

        const isValid = passwordHash.verify(password, latestPassword.value)
        if (!isValid){
            // response.status(401).send({
            //     code: 401,
            //     message:"Invalid email/password combination",
            //     success: false,
            //     data: {
            //         authorized: false,
            //         user: null
            //     }
            // } as ApiResponse)
            return
        }

        delete user.passwords
        request.session.user = user
        request.session.authorized = true

        // response
        //     .status(200)
        //     .send({
        //         code: 200,
        //         message: "Successfully logged in.",
        //         success: true,
        //         data: {
        //             authorized: true,
        //             user,
        //         }
        //     } as ApiResponse)

        await request.session.saveAsync()
    }

}

export default route
