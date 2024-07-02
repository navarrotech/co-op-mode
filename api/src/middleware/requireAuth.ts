//Copyright © 2024 Navarrotech.

import type { Request, Response, NextFunction } from '@/types'

export default function requireAuth(request: Request, response: Response, next: NextFunction) {
  if (!request?.session?.authorized || !request?.session?.user?.id) {
    response.status(401)
    response.sendProto('AuthResponse', {
      message: request.__(
        request.method === 'GET'
          ? 'unauthorized_access'
          : 'unauthorized_action'
      ),
      authorized: false,
      user: null
    })
    return
  }

  next()
}
