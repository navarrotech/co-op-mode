// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "@/types"
import type { preferences } from "@prisma/client"

import * as yup from 'yup'

const validator = yup.object().shape({
    body: yup.object().shape({
        // id: yup
        //     .string()
        //     .typeError("validator_type::ID::string")
        //     .min(1)
        //     .max(32)
        //     .required(),
        id: yup
            .number()
            .typeError("validator_type::ID::number")
            .min(1)
            .max(32)
            .required(),
        owner_id: yup
            .string()
            .typeError("validator_type::ID::string")
            .min(1)
            .max(32)
            .required(),
    })
})

const route: Route = {
    method: "post",
    path: "/test",
    validator,
    handler: async function testHandler(request, response) {
        console.log(request.body)

        const mockData: preferences = {
            id: "-1",
            owner_id: "-1",
            language: "en",
        }

        response.status(200)
        response.sendProto("Preferences", mockData)
    }
}

export default route