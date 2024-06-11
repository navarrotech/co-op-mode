// Copyright © 2024 Navarrotech

// Typescript
import type { users } from "@prisma/client"
import type { Route } from "navarrotech-express"

// Utility
// import sendProto, { formatForProto } from "@/lib/protobuf"

const route: Route = {
    method: "get",
    path: "/auth/check",
    handler: async function loginHandler(request, response) {
        if (request.session.user && request.session.authorized) {
            // sendProto(
            //     response,
            //     "User",
            //     formatForProto({
            //         code: 200,
            //         message: "User is authorized",
            //         success: true,
            //         data: formatForProto(
            //             request.session.user as users
            //         )
            //     })
            // )
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
