// Copyright © 2024 Navarrotech

// import { createSlice } from "@reduxjs/toolkit"

// import type { PayloadAction } from "@reduxjs/toolkit"
// import { type IDislikes, type ILikes } from "../protobuf/schema"

// export type State = {
//   likes: ILikes[],
//   dislikes: IDislikes[],
// }

// const initialState: State = {
//   likes: [],
//   dislikes: [],
// }

// const slice = createSlice({
//   name: 'likes',
//   initialState,
//   reducers: {
//     setLikes(state, action: PayloadAction<ILikes[]>) {
//       state.likes = action.payload
//       return state
//     },
//     upsertLike(state, action: PayloadAction<ILikes>) {
//       const index = state.likes.findIndex(like => like.id === action.payload.id)
//       if (index !== -1) {
//         state.likes[index] = action.payload
//       } else {
//         state.likes.push(action.payload)
//       }
//       return state
//     },
//     updateLike(state, action: PayloadAction<ILikes>) {
//       const index = state.likes.findIndex(like => like.id === action.payload.id)
//       if (index !== -1) {
//         state.likes[index] = action.payload
//       }
//       return state
//     },
//     deleteLike(state, action: PayloadAction<ILikes>) {
//       state.likes = state.likes.filter(like => like.id !== action.payload.id)
//       return state
//     },

//     setDislikes(state, action: PayloadAction<IDislikes[]>) {
//       state.dislikes = action.payload
//       return state
//     },
//     upsertDislike(state, action: PayloadAction<IDislikes>) {
//       const index = state.dislikes.findIndex(dislike => dislike.id === action.payload.id)
//       if (index !== -1) {
//         state.dislikes[index] = action.payload
//       } else {
//         state.dislikes.push(action.payload)
//       }
//       return state
//     },
//     updateDislike(state, action: PayloadAction<IDislikes>) {
//       const index = state.dislikes.findIndex(dislike => dislike.id === action.payload.id)
//       if (index !== -1) {
//         state.dislikes[index] = action.payload
//       }
//       return state
//     },
//     deleteDislike(state, action: PayloadAction<IDislikes>) {
//       state.dislikes = state.dislikes.filter(dislike => dislike.id !== action.payload.id)
//       return state
//     }
//   }
// })

// export const {
//   setLikes,
//   upsertLike,
//   updateLike,
//   deleteLike,

//   setDislikes,
//   upsertDislike,
//   updateDislike,
//   deleteDislike,
// } = slice.actions
