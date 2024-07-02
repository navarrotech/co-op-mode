//Copyright © 2024 Navarrotech.

// This should be created upon sign up!

// Typescript
// import type { Route } from "@/types"
// import type { dating_profile } from "@prisma/client"

// // Utility
// import { datingProfileValidator } from "@/lib/validators"
// import database from "@/lib/database"
// import { sanitize } from "@/lib/protobuf"

// type Body = dating_profile

// const validator = datingProfileValidator(false).noUnknown()

// const route: Route = {
//     method: "post",
//     path: "/api/v1/dating_profile",
//     validator,
//     handler: async function createDatingProfileHandler(request, response) {
//         const { id: owner_id } = request.session.user
//         const datingProfile = request.body as Body

//         const createdProfile = await database.dating_profile.create({
//             data: {
//                 ...datingProfile,
//                 owner_id
//             },
//             include: {
//                 analytics: true
//             }
//         })

//         response.status(200)
//         response.sendProto("DatingProfile", sanitize(createdProfile) as any)
//     }
// }

// export default route

