//Copyright © 2024 Navarrotech.

// Typescript
import type { Route } from '@/types'

// Utility
import { sanitize } from '@/lib/protobuf'
import database from '@/lib/database'

const route: Route = {
  method: 'get',
  path: '/auth/v1/check',
  inboundStruct: null,
  handler: async function checkHandler(request, response) {
    if (request.session?.user && request.session.authorized) {
      const user = await database.users.findFirst({
        where: {
          id: request.session.user.id
        }
      })
      response.status(200)
      response.sendProto('AuthResponse', {
        message: request.__('authorized'),
        user: sanitize(user),
        authorized: true
      })
      return
    }

    response.status(200)
    response.sendProto('AuthResponse', {
      message: request.__('unauthorized'),
      user: null,
      authorized: false
    })
  }

}

export default route
