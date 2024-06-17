// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "@/types"

// Utility
import { sanitize } from "@/lib/protobuf"
import { users } from "@prisma/client"

const route: Route = {
    method: "get",
    path: "/auth/check",
    inboundStruct: null,
    handler: async function checkHandler(request, response) {
        if (request.session?.user && request.session.authorized) {
            response.status(200)
            response.sendProto("AuthResponse", {
                message: request.__("authorized"),
                user: sanitize(request.session.user as users),
                authorized: true
            })
            return
        }

        response.status(200)
        response.sendProto("AuthResponse", {
            message: request.__("unauthorized"),
            user: null,
            authorized: false
        })
    }

}

export default route
