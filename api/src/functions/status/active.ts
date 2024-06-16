// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "@/types"

// Utility
import * as yup from "yup"
import database from "@/lib/database"
import { sanitize } from "@/lib/protobuf"
import { clearExitTimeout } from "./onExit"

type Body = {
    time_active: number
}

const validator = yup.object().shape({
    body: yup.object().shape({
        time_active: yup.number().required()
    })
})

const route: Route = {
    method: "put",
    path: "/api/v1/status/active",
    validator,
    handler: async function statusActiveHandler(request, response) {
        const { id: owner_id } = request.session.user
        const { time_active } = request.body as Body

        clearExitTimeout(owner_id)

        const status = await database.status.update({
            where: {
                owner_id
            },
            data: {
                online: true,
                time_active,
                last_seen: new Date(),
            }
        })

        response.status(200)
        response.sendProto("Status", sanitize(status))
    }
}

export default route
