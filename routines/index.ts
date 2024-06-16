// Copyright © 2024 Navarrotech

import { initDatabase, closeDatabase } from "./lib/database"
import cleanupStatuses from "./routines/status"

async function init() {
    cleanupStatuses()

    setInterval(
        () => cleanupStatuses(),
        1_000 * 60 * 5 // 5 minutes
    )

    console.log("[PASS] Routines started up")
}

Promise.all([
    initDatabase()
])
    .then(() => init())
