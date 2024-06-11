// Copyright © 2023 Navarrotech

import { supportedLanguages } from "./language"

import * as yup from "yup"

export const color = () =>yup
  .string()
  .typeError("color must be a string")
  .trim()
  .min(4, "color is too short")
  .max(7, "color is too long")
  .matches(
    /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    "color must be a valid hex color"
  )
  .required("color is required")

export const languageValidator = () => yup
  .string()
  .typeError("Language must be a string")
  .trim()
  .min(2, "Language must be at least 2 characters")
  .max(2, "Language must be less than 2 characters")
  .oneOf(supportedLanguages, "Language is not supported")

// export const coreSchema = () => yup.object({
//   id: yup
//     .string()
//     .required("ID is required"),
// })

export default yup
