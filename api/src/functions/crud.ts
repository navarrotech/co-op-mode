// //Copyright © 2024 Navarrotech.

// import type { Request, Response, Route } from 'src/apiTypes'
// import database, { type PrismaTableNames } from 'src/lib/database'

// import * as yup from 'yup'

// type Props = {
//     baseRoute: string,
//     validator: yup.AnyObjectSchema,
//     prismaTable: PrismaTableNames
// }

// // Function that will take a base route like "/accounts" and create 4 "routes" with validation and such for it
// export default function MakeRoutes(props: Props): Route[] {
//   const { baseRoute, validator } = props
//   const list: Route = {
//     handler: async function DynamicListRoute(req: Request, res: Response){
//       try {
//         const { limit, offset } = req.query
//         const { id:ownerid } = req.session.user
//         const list = await database[props.prismaTable].findMany({ 
//           where: {
//             ownerid
//           },
//           take: limit,
//           skip: offset
//         })
//         res.status(200).send({ result: list })
//       }
//       catch (error){
//         console.log(error)
//         if (!res.headersSent) {
//           res.sendStatus(500)
//         }
//       }
//     },
//     path: baseRoute,
//     method: 'get',
//     validator: yup.object().shape({
//       limit: yup
//         .number()
//         .typeError('limit must be a number')
//         .min(1, 'limit must be greater than 0')
//         .max(1000, 'limit must be less than 1000')
//         .default(100)
//         .notRequired(),
//       offset: yup
//         .number()
//         .min(0, 'offset must be greater than 0')
//         .typeError('offset must be a number')
//         .default(0)
//         .notRequired()
//     })
//   }
//   const create: Route = {
//     handler: async function DynamicCreateRoute(req: Request, res: Response){
//       try {
//         const { id:ownerid } = req.session.user
//         const created = await database[props.prismaTable].create({
//           data: {
//             ...req.body,
//             ownerid
//           }
//         })
//         res.status(201).send(created)
//       }
//       catch (error){
//         console.log(error)
//         if (!res.headersSent) {
//           res.sendStatus(500)
//         }
//       }
//     },
//     path: baseRoute,
//     method: 'post',
//     validator: yup.object().shape({
//       body: validator
//         .noUnknown(true)
//     })
//   }
//   const update: Route = {
//     handler: async function DynamicUpdateRoute(req: Request, res: Response){
//       try {
//         const { id: ownerid } = req.session.user
//         const { id } = req.params
//         const updated = await database[props.prismaTable].update({
//           where: {
//             id
//           },
//           data: {
//             ...req.body,
//             ownerid,
//             updated: new Date()
//           }
//         })
//         res.status(200).send(updated)
//       }
//       catch (error){
//         console.log(error)
//         if (!res.headersSent) {
//           res.sendStatus(500)
//         }
//       }
//     },
//     path: `${baseRoute}/:id`,
//     method: 'put',
//     validator: yup.object().shape({
//       body: validator
//         .noUnknown(true)
//     })
//   }
//   const remove: Route = {
//     handler: async function DynamicRemoveRoute(req: Request, res: Response){
//       try {
//         const { id: ownerid } = req.session.user
//         const { id } = req.params
//         const removed = await database[props.prismaTable].deleteMany({
//           where: {
//             id,
//             ownerid
//           }
//         })
//         res.status(200).send(removed)
//       }
//       catch (error){
//         console.log(error)
//         if (!res.headersSent) {
//           res.sendStatus(500)
//         }
//       }
//     },
//     path: `${baseRoute}/:id`,
//     method: 'delete',
//     validator: yup.object().shape({
//       body: yup
//         .object()
//         .shape({
//           id: yup
//             .string()
//             .typeError('id must be a string')
//             .required()
//         })
//         .noUnknown(true)
//     })
//   }
//   return [ list, create, update, remove ]
// }
