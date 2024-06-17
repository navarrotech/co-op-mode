// Copyright © 2024 Navarrotech

// Typescript
import database from "@/lib/database"
import type { Route } from "@/types"

const route: Route = {
    method: "delete",
    path: "/api/v1/account",
    inboundStruct: null,
    handler: async function deleteAccountHandler(request, response) {
        try {
            const { id: owner_id } = request.session.user

            const user = await database.users.delete({
                where: {
                    id: owner_id
                }
            })

            if (!user) {
                response.sendStatus(400)
                return
            }
            
            const where = {
                owner_id
            }
            
            const media = await database.media.findMany({ where })

            // TODO: Delete media from storage bucket
            // media.forEach(({ path }) => {
            // })

            await Promise.all([
                database.preferences.delete({ where }),
                database.dating_profile.delete({ where }),
                database.permanent_limits.delete({ where }),
                database.daily_limits.delete({ where }),
                database.monthly_limits.delete({ where }),
                database.status.delete({ where }),
                database.passwords.deleteMany({ where }),
                database.likes.deleteMany({
                    where: {
                        OR: [
                            { owner_id },
                            { target_id: owner_id }
                        ]
                    }
                }),
                database.dislikes.deleteMany({
                    where: {
                        OR: [
                            { owner_id },
                            { target_id: owner_id }
                        ]
                    }
                }),
                database.conversations.deleteMany({
                    where: {
                        OR: [
                            { user1_id: owner_id },
                            { user2_id: owner_id }
                        ]
                    }
                }),
                database.messages.deleteMany({
                    where: {
                        owner_id
                    }
                }),
                database.media.deleteMany({
                    where: {
                        owner_id
                    }
                }),
            ])

            await request.session.destroyAsync()

            response.sendStatus(200)
        } catch(e) {
            console.error("[DELETE ACCOUNT ERROR] :: ", e)
            response.status(500)
            response.sendProto("ServerError", {
                message: request.__("generic_error")
            })
            return
        }
        response.sendStatus(200)
    }

}

export default route
