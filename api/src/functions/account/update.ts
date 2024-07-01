// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "@/types"
import type { users } from "@prisma/client"

// Utility
import database from "@/lib/database"
import { sanitize } from "@/lib/protobuf"
import yup, {
    emailValidator,
    firstNameValidator,
    lastNameValidator,
} from "@/lib/validators"

type Body = Partial<users>

const validator = yup.object().shape({
    body: yup.object().shape({
        email: emailValidator()
            .optional(),
        first_name: firstNameValidator()
            .optional(),
        last_name: lastNameValidator()
            .optional(),
    }).noUnknown()
})

const route: Route = {
    method: "patch",
    path: "/api/v1/account",
    validator,
    inboundStruct: "User",
    handler: async function updateAccountHandler(request, response) {
        try {
            const { id: owner_id } = request.session.user

            const data = request.body as Body

            // @ts-ignore
            delete data.owner_id
            delete data.created_at
            delete data.updated_at
            delete data.id

            // TODO: if email changed, re-send verification email and unverify

            await database.users.update({
                where: {
                    id: owner_id,
                },
                data
            })
        } catch(e){}

        const latestUser = await database.users.findFirst({
            where: {
                id: request.session.user.id
            }
        })

        request.session.user.first_name = latestUser.first_name
        request.session.user.last_name = latestUser.last_name
        request.session.user.email = latestUser.email

        response.status(200)
        response.sendProto("User", sanitize(latestUser))

        request.session.saveAsync()
    }

}

export default route
