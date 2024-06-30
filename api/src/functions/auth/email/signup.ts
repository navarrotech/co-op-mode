// Copyright © 2024 Navarrotech

// Typescript
import type { users } from "@prisma/client"
import type { Route } from "@/types"

// Utility
import yup, {
    phoneValidator,
    OTPValidator
} from '@/lib/validators'
import formatNumber from "@/utility/formatNumber"
import { sanitize } from "@/lib/protobuf"

// Core
import Plivo from "@/lib/plivo"
import redisClient from "@/lib/redis"
import database from "@/lib/database"

type Body = {
    phone: string
    OTP?: string
}

const validator = yup.object().shape({
    body: yup.object().shape({
        phone: phoneValidator()
        .required(),
        OTP: OTPValidator()
            .optional(),
    }).noUnknown()
})

const route: Route = {
    method: "post",
    path: "/auth/v1/phone/signup",
    validator,
    inboundStruct: "SignupRequest",
    handler: async function signupHandler(request, response) {
        const { phone, OTP } = request.body as Body

        const userExists = await database.users.findUnique({
            where: {
                phone
            }
        })

        if (userExists) {
            response.status(409)
            response.sendProto("AuthResponse", {
                message: request.__("signup_exists"),
                authorized: false,
                user: null,
            })
            return
        }

        let isVerified = false

        // Verify the phone number with an OTP
        if (!OTP) {
            try {
                // Send the OTP to the phone number
                const result = await Plivo.verify.initiate(phone)
                await Promise.all([
                    // Save the verification uuid to redis
                    redisClient.set(`OTP:${phone}`, result.verificationUuid),
                    // Set it to expire in 10 minutes
                    redisClient.expire(`OTP:${phone}`, 60 * 10),
                ])

                response.status(200)
                response.sendProto("AuthResponse", {
                    message: request.__("otp_sent", { phone: formatNumber(phone) }),
                    authorized: false,
                    user: null,
                })
                return
            }
            catch (error) {
                // TODO: "Code already sent", "phone already verified", "code expired", etc
                console.error(error)
            }
        }
        
        if (!isVerified) {
            try {
                const verificationUuid = await redisClient.get(`OTP:${phone}`)
                if (!verificationUuid) {
                    response.status(401)
                    response.sendProto("AuthResponse", {
                        message: request.__("otp_expired"),
                        authorized: false,
                        user: null,
                    })
                    return
                }

                // This will throw an error if it's not successful
                const result = await Plivo.verify.verify(verificationUuid, OTP)
                isVerified = true
            }
            catch (error) {
                console.error(error)
            }
        }

        const { language } = request

        let user: users;
        try {
            try {
                user = await database.users.create({
                    data: {
                        first_name,
                        last_name,
                        phone,
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
                }
                else {
                    console.error("[Signup Error] :: ", error)
                    response.status(500)
                    response.sendProto("AuthResponse", {
                        message: request.__("generic_error"),
                        authorized: false,
                        user: null,
                    })
                }
            }

            await Promise.all([
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
