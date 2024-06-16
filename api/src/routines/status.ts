// Copyright © 2024 Navarrotech

import database from "@/lib/database"

async function cleanupStatuses() {
    await database.status.deleteMany({
        where: {
            last_seen: {
                lt: new Date(
                    Date.now() - 1000 * 60 * 20 // 20 minutes ago
                )
            }
        }
    })
}

export default cleanupStatuses
