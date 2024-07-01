// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "@/types"

// Utility
import requireAuth from "@/middleware/requireAuth"
import { sanitize } from "@/lib/protobuf"
import database from "@/lib/database"

const route: Route = {
    method: "post",
    path: "/api/v1/sync",
    middlewares: [ requireAuth ],
    inboundStruct: null,
    handler: async function syncHandler(request, response) {
        const userid = request.session.user.id

        const [ user, conversations ] = await Promise.all([
            database.users.findUnique({
                where: {
                    id: userid
                },
                include: {
                    // // Don't include:
                    // passwords: false,
                    // linked_accounts: false,
                    limits: true,
                    daily_limits: true,
                    monthly_limits: true,
                    status: false,

                    // // Include:
                    preferences: true,
                    dating_profile: true,
                    media: true,
                    likes: true,
                    dislikes: true,
                }
            }),
            database.conversations.findMany({
                where: {
                    OR: [
                        { user1_id: userid },
                        { user2_id: userid },
                    ]
                },
                include: {
                    messages: false,
                }
            })
        ])

        if (!user) {
            response.status(400)
            response.sendProto("ServerError", {
                message: request.__('generic_error'),
            })
            return
        }

        const {
            limits,
            daily_limits,
            monthly_limits,
            preferences,
            dating_profile,
            media,
            likes,
            dislikes,
            ...coreUser
        } = user

        response.status(200)
        response.sendProto("SyncResponse", {
            conversations: conversations.map(sanitize),
            preferences,
            datingProfile: sanitize(dating_profile),
            media: media.map(sanitize),
            limits: {
                permanent: sanitize(limits),
                monthly: sanitize(monthly_limits),
                daily: sanitize(daily_limits),
            },
            // @ts-ignore
            user: sanitize(user),
        })

        request.session.user = coreUser
        await request.session.saveAsync()
    }

}

export default route

