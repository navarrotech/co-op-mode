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
            id: "-1",
            owner_id: "-1",
            language: "en",
        }

        response.status(200)
        response.sendProto("Preferences", mockData)
    }

}

export default route