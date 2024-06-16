// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "@/types"

// Utility
import database from "@/lib/database"

const timeouts = {}

export function clearExitTimeout(owner_id: string){
    clearTimeout(
        timeouts[owner_id]
    )
}

const route: Route = {
    method: "put",
    path: "/api/v1/status/exit",
    handler: async function exitHandler(request, response) {
        const { id: owner_id } = request.session.user

        if (timeouts[owner_id]){
            clearExitTimeout(owner_id)
        }
        timeouts[owner_id] = setTimeout(async () => {
            await database.status.update({
                where: {
                    owner_id
                },
                data: {
                    online: false,
                    time_active: 0,
                    last_seen: new Date(),
                }
            })

        }, 1_000 * 30) // 30 seconds

        response.sendStatus(200)
    }
}

export default route
