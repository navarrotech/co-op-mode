// Copyright © 2024 Navarrotech

import cleanupStatuses from "./status"

export default async function initRoutes() {
    cleanupStatuses()
    
    setInterval(
        () => cleanupStatuses(),
        1_000 * 60 * 5 // 5 minutes
    )

    console.log("[PASS] Routines started up")
}
