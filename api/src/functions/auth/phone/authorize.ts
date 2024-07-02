//Copyright © 2024 Navarrotech.

// Typescript
import type { users } from '@prisma/client'
import type { Route } from '@/types'

// Utility
import yup, {
  phoneValidator,
  OTPValidator
} from '@/lib/validators'
import formatNumber from '@/utility/formatNumber'
import { sanitize } from '@/lib/protobuf'

// Core
import Plivo from '@/lib/plivo'
import redisClient from '@/lib/redis'
import database from '@/lib/database'
import { PLIVO_APP_NUMBER } from '@/env'

const TWOFA_CODE_EXPIRE_TIME = 60 * 5 // 5 minutes

type Body = {
  phone: string
  channel?: string
  OTP?: string
}

const validator = yup.object().shape({
  body: yup.object().shape({
    phone: phoneValidator()
      .required(),
    OTP: OTPValidator()
      .optional()
  }).noUnknown()
})

const route: Route = {
  method: 'post',
  path: '/auth/v1/authorizeByPhone',
  validator,
  inboundStruct: 'AuthorizeByPhoneRequest',
  handler: async function authorizeByPhoneHandler(request, response) {
    const { phone, OTP, channel = 'SMS' } = request.body as Body

    const verificationCode = await redisClient.get(`OTP:${phone}`)

    // Verify the phone number with an OTP
    if (!OTP) {

      // TODO: Rate-limit this.
      // The user needs to be able to request a new code after 60 seconds
      // if (verificationCode) {
      //   response.status(409)
      //   response.sendProto("AuthResponse", {
      //       message: request.__("otp_already_sent", { phone: formatNumber(phone) }),
      //       authorized: false,
      //       user: null,
      //   })
      //   return
      // }

      const code = Math.floor(100000 + Math.random() * 900000)
      // Save the new verification uuid to redis
      await redisClient.set(`OTP:${phone}`, code)
      // Set it to expire
      await redisClient.expire(`OTP:${phone}`, TWOFA_CODE_EXPIRE_TIME)

      try {
        // Send the OTP to the phone number
        if (channel === 'Call') {
          await Plivo.calls.create(
            PLIVO_APP_NUMBER, // CallerId/Source
            phone, // Destination
            'https://twofa-answerurl.herokuapp.com/answer_url/' + code // Answer URL
          )
        }
        else {
          // TODO: Enable this after Plivo is setup
          // await Plivo.messages.create(
          //   PLIVO_APP_NUMBER,
          //   phone,
          //   request.__("otp_message", { code: String(code) }),
          // )
          console.log('2FA code: ' + code)
        }

        response.status(204)
        response.sendProto('AuthResponse', {
          message: request.__('otp_sent', { phone: formatNumber(phone) }),
          authorized: false,
          user: null
        })
        return
      }
      catch (error) {
        // TODO: "Code already sent", "phone already verified", "code expired", etc
        console.error(error)
        return
      }
    }

    const userExists = await database.users.findUnique({
      where: {
        phone
      }
    })

    const OTPVerified = OTP === verificationCode

    if (!OTPVerified) {
      response.status(403)
      response.sendProto('AuthResponse', {
        message: request.__('otp_invalid'),
        authorized: false,
        user: null
      })
      return
    }

    redisClient.del(`OTP:${phone}`)

    if (userExists) {
      request.session.user = userExists
      request.session.authorized = true

      response.status(200)
      response.sendProto('AuthResponse', {
        message: request.__('login_success'),
        authorized: true,
        user: sanitize(userExists)
      })

      await request.session.saveAsync()

      return
    }

    let user: users
    try {
      user = await database.users.create({
        data: {
          phone
        }
      })
    }
    catch (error) {
      if (error?.code === 'P2002') {
        response.status(409)
        response.sendProto('AuthResponse', {
          message: request.__('signup_exists'),
          authorized: false,
          user: null
        })
        return
      }
      else {
        console.error('[Signup Error] :: ', error)
        response.status(500)
        response.sendProto('AuthResponse', {
          message: request.__('generic_error'),
          authorized: false,
          user: null
        })
      }
    }

    const { language } = request

    await Promise.all([
      database.preferences.create({
        data: {
          owner_id: user.id,
          language
        }
      }),
      database.dating_profile.create({
        data: {
          owner_id: user.id
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
          owner_id: user.id
        }
      })
    ])

    request.session.user = user
    request.session.authorized = true

    response.status(200)
    response.sendProto('AuthResponse', {
      message: request.__('signup_success'),
      authorized: true,
      user: sanitize(user)
    })

    await request.session.saveAsync()
  }

}

export default route
