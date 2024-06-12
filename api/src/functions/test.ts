// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "@/types"
import type { preferences } from "@prisma/client"

const route: Route = {
    method: "post",
    path: "/test",
    handler: async function loginHandler(request, response) {
        console.log(request.body)

        const mockData: preferences = {
            id: "-1111111111",
            language: "en",
            owner_id: "-11111111111",
        }

        response.status(200)
        response.sendProto("Preferences", mockData)
    }

}

export default route