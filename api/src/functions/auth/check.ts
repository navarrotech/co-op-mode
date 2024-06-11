// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "navarrotech-express"

const route: Route = {
    method: "get",
    path: "/auth/check",
    handler: async function loginHandler(request, response) {
        if (request.session.user && request.session.authorized) {
            response
                .status(200)
                .send({
                    user: request.session.user,
                    authorized: true
                })
            return
        }

        response
            .status(200)
            .send({
                user: null,
                authorized: false
            })
    }

}

export default route
