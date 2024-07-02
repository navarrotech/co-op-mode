//Copyright © 2024 Navarrotech.

// // Typescript
// import type { Route } from "@/types"
// import type { dating_profile } from "@prisma/client"

// // Utility
// import yup, { datingProfileValidator } from "@/lib/validators"
// import database from "@/lib/database"

// type Body = dating_profile

// const validator = yup.object().shape({
//     body: datingProfileValidator(false).noUnknown()
// })

// Discontinued: Why would the user ever manually effect their own analytics?
// Server side should always be the one doing this!
// const route: Route = {
//     method: "post",
//     path: "/api/v1/dating_profile",
//     validator,
//     handler: async function createDatingProfileHandler(request, response) {
//         const { id: owner_id } = request.session.user
//         const datingProfile = request.body as Body



//         response.status(200)
//         // response.sendProto("Preferences", preferences)
//     }

// }

// export default route

