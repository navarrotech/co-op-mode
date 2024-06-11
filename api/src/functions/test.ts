// Copyright © 2024 Navarrotech

// Typescript
import { adapters } from "@/lib/protobuf"
import type { Route } from "@/types"
import type { preferences } from "@prisma/client"

const route: Route = {
    method: "post",
    path: "/test",
    handler: async function loginHandler(request, response) {
        const mockData: preferences = {
            id: "-1",
            language: "en",
            owner_id: "-1",
        }

        // @ts-ignore
        const construct = adapters.preferences(mockData)

        response.status(200)
        response.sendProto("Preferences", construct, "Test successful")
        // response.status(200).send("Test successful")
    }

}

export default route


