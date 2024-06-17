// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "@/types"

// Utility
import database from "@/lib/database"
import { sanitize } from "@/lib/protobuf"
import yup from "@/lib/validators"

const validator = yup.object().shape({
    body: yup.object().shape({
        target_id: yup
            .string()
            .typeError("")
            .trim()
            .uuid()
            .required(""),
    }).noUnknown()
})

type Body = {
    target_id: string
}

const route: Route = {
    method: "post",
    path: "/api/v1/matching/like",
    validator,
    inboundStruct: "Dislikes",
    handler: async function matchDislikeHandler(request, response) {
        const { id: owner_id } = request.session.user

        const { target_id } = request.body as Body

        const [ exists, superDeleteCheck, regularDeleteCheck ] = await Promise.all([
            database.dislikes.findFirst({
                where: {
                    owner_id,
                    target_id,
                }
            }),
            database.likes.deleteMany({
                where: {
                    owner_id,
                    target_id,
                    is_super: false
                }
            }),
            database.likes.deleteMany({
                where: {
                    owner_id,
                    target_id,
                    is_super: true
                }
            }),
        ])

        if (exists) {
            response.status(200)
            response.sendProto("Dislikes", sanitize(exists))
            return
        }

        const [ dislikeDoc, previousConversation ] = await Promise.all([
            database.dislikes.create({
                data: {
                    owner_id,
                    target_id
                },
            }),
            // Was it a match previously?
            database.conversations.findMany({
                where: {
                    OR: [
                        { user1_id: owner_id,  user2_id: target_id },
                        { user1_id: target_id, user2_id: owner_id  },
                    ]
                }
            })
        ])

        if (previousConversation.length) {
            Promise.all([
                database.conversations.deleteMany({
                    where: {
                        id: {
                            in: previousConversation.map(({ id }) => id)
                        }
                    }
                })
            ])
        }

        response.status(201)
        response.sendProto("Dislikes", sanitize(dislikeDoc))
    }

}

export default route
