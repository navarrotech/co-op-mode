// Copyright © 2024 Navarrotech

import database from "./lib/database"

type Keys = "views"
    | "likes"
    | "dislikes"
    | "matches"
    | "superlikes"
    | "reports_from"
    | "reports_to"
    | "blocks_from"
    | "blocks_to"

export async function incrementDatingProfileAnalytics(owner_id: string, key: Keys, value = 1){
    await database.$executeRaw`
        update "profile_analytics"
        set "${key}" = "${key}" + ${value}
        where owner_id = '${owner_id}'
    `
    console.log(`  > Incremented dating profile '${key}' for ${owner_id} by ${value}`)
}
