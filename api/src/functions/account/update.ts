// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "@/types"
import type { users } from "@prisma/client"

// Utility
import database from "@/lib/database"
import yup, { emailValidator, firstNameValidator, lastNameValidator } from "@/lib/validators"

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

            // TODO: if email changed, re-send verification email and unverify

            await database.users.update({
                where: {
                    id: owner_id,
                },
                data
            })

            response.sendStatus(200)
        } catch(e){}
        response.sendStatus(200)
    }

}

export default route
