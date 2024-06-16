// Copyright © 2024 Navarrotech

import database from "../lib/database"

async function cleanupStatuses() {
    console.log("[INFO] Cleaning up old statuses...")

    const updated = await database.status.updateMany({
        where: {
            last_seen: {
                lt: new Date(
                    Date.now() - 1000 * 60 * 20 // 20 minutes ago
                )
            },
            online: true,
        },
        data: {
            online: false
        }
    })

    console.log(`  > Cleaned up ${updated.count} statuses`)
}

export default cleanupStatuses
