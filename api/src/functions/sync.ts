// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "navarrotech-express"
import type { ApiResponse } from "@/types"

// Utility
import requireAuth from "@/middleware/requireAuth"
import database from "@/lib/database"

const route: Route = {
    method: "post",
    path: "/sync",
    middlewares: [ requireAuth ],
    handler: async function loginHandler(request, response) {
        const userid = request.session.user.id

        const [ user, conversations ] = await Promise.all([
            database.users.findUnique({
                where: {
                    id: userid
                },
                include: {
                    // Don't include:
                    passwords: false,
                    linked_accounts: false,
                    limits: false,
                    daily_limits: false,
                    monthly_limits: false,
                    status: false,

                    // Include:
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

        response
            .status(200)
            .send({
                code: 200,
                message: "Successfully synced user data.",
                success: true,
                data: {
                    user,
                    conversations,
                }
            } as ApiResponse)

        await request.session.saveAsync()
    }

}

export default route

