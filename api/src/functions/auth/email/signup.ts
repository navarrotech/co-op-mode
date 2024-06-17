// Copyright © 2024 Navarrotech

// Typescript
import type { users, Relationship, Gender } from "@prisma/client"
import type { Route } from "@/types"

// Utility
import yup, {
    ageValidator,
    emailValidator,
    firstNameValidator,
    genderValidator,
    lastNameValidator,
    passwordValidator,
    relationshipValidator
} from '@/lib/validators'
import database from "@/lib/database"
import { sanitize } from "@/lib/protobuf"

// Password
import passwordHash from "password-hash"
import checkStrength from "zxcvbn"

type Body = {
    first_name: string
    last_name: string
    email: string
    password: string
    age: number
    gender: Gender
    relationship: Relationship
}

const validator = yup.object().shape({
    body: yup.object().shape({
        first_name: firstNameValidator()
            .required(),
        last_name: lastNameValidator()
            .required(),
        email: emailValidator()
            .required(),
        password: passwordValidator()
            .required(),
        age: ageValidator()
            .required(),
        gender: genderValidator()
            .required(),
        relationship: relationshipValidator()
            .required(),
    }).noUnknown()
})

const route: Route = {
    method: "post",
    path: "/auth/signup",
    validator,
    inboundStruct: "SignupRequest",
    handler: async function signupHandler(request, response) {
        let {
            first_name,
            last_name,
            email,
            password,
            age,
            gender,
            relationship,
        } = request.body as Body

        email = email.trim().toLowerCase()
        password = password.trim()
        first_name = first_name.trim()
        last_name = last_name.trim()

        // Password strength check!
        const passwordStrength = checkStrength(password)

        // Must be at least a 2 out of 4
        if (passwordStrength.score < 2) {
            console.log(`Rejecting signup password with score of ${passwordStrength.score}/4`)
            response.sendProto("AuthResponse", {
                message: request.__("password_weak"),
                authorized: false,
                user: null,
            })
            return
        }

        const { language } = request

        let user: users;
        try {
            try {
                user = await database.users.create({
                    data: {
                        first_name,
                        last_name,
                        email,
                    }
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

            // const startTime = Date.now()
            const generatedPassword = passwordHash.generate(password, {
                algorithm: "sha256",
                saltLength: 32,
                iterations: 10_000
            })
            // const stopTime = Date.now()
            // console.info(`New password hash generated in ${stopTime - startTime}ms`)

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
                database.dating_profile.create({
                    data: {
                        owner_id: user.id,
                        age,
                        gender,
                        relationship
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
            console.error("[Signup Error] :: ", error)
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
