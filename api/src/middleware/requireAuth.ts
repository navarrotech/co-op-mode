// Copyright © 2024 Navarrotech

import type { Request, Response, NextFunction } from "navarrotech-express"

export default function requireAuth(request: Request, response: Response, next: NextFunction) {
    if (!request?.session?.authorized || !request?.session?.user?.id) {
        response.status(401).send({
            code: 401,
            message: "You are not authorized to access this resource.",
            success: false
        })
        return
    }

    next()
}
