// Copyright © 2023 Navarrotech

import { defaultLanguage, supportedLanguages } from "./language"

import * as yup from "yup"

export const color = () =>yup
  .string()
  .typeError("")
  .trim()
  .min(4)
  .max(7)
  .matches(
    /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    "color must be a valid hex color"
  )
  .required("color is required")

export const languageValidator = () => yup
  .string()
  .typeError("")
  .trim()
  .default(defaultLanguage)
  .oneOf(supportedLanguages)

export const preferencesValidator = () => yup.object({
  language: languageValidator(),
})

export const ageValidator = () => yup
    .number()
    .typeError("")
    .min(16)
    .max(100)

export const genderValidator = () => yup
    .string()
    .typeError("")
    .trim()
    .oneOf(["NonBinary", "Male", "Female", "Other"])

export const relationshipValidator = () => yup
  .string()
  .typeError("")
  .trim()
  .oneOf([
    "Unknown", "Monogomy", "EthicalNonMonogomy",
    "OpenRelationship", "Polyamory", "OpenToExploring",
  ])

export const firstNameValidator = () => yup
  .string()
  .typeError("")
  .trim()
  .max(32)
  .min(3)

export const lastNameValidator = () => yup
  .string()
  .typeError("")
  .trim()
  .max(32)
  .min(3)

export const emailValidator = () => yup
  .string()
  .typeError("")
  .email()
  .trim()
  .lowercase()
  .max(128)
  .min(3)

export const phoneValidator = () => yup
  .string()
  .typeError("")
  .trim()
  .matches(/^\+[1-9]\d{1,14}$/, "validator_phone")
  .max(16)
  .min(10)

export const OTPValidator = () => yup
  .string()
  .typeError("")
  .trim()
  .matches(/^\d{6}$/, "validator_otp")
  .max(6)
  .min(6)

export const passwordValidator = () => yup
  .string()
  .typeError("")
  .trim()
  .min(8)
  .max(128)
  .matches(/[\W_]/, "validator_password")

export const datingProfileValidator = (setRequired: boolean = false) => yup.object({
  birthday: setRequired
    ? ageValidator().required()
    : ageValidator().optional(), 
  gender: setRequired
    ? genderValidator().required()
    : genderValidator().optional(),
  height: yup
    .number()
    .typeError("")
    .min(1)
    .max(128)
    .optional(),
  bio: yup
    .string()
    .typeError("")
    .trim()
    .min(1)
    .max(512)
    .optional(),
  prompts: yup
    .array()
    .typeError("")
    .of(
      yup.object({
        question: yup
          .string()
          .trim()
          .min(1)
          .max(128)
          .required(),
        answer: yup
          .string()
          .trim()
          .min(1)
          .max(128)
          .required()
      })
    )
    .optional()
    .max(3),
  known_langs: yup
    .array()
    .typeError("")
    .of(
      languageValidator()
    )
    .max(10)
    .optional(),
  location: yup
    .string()
    .typeError("")
    .trim()
    .max(32)
    .optional(),
  location2: yup
    .string()
    .typeError("")
    .trim()
    .max(32)
    .optional(),
  school: yup
    .string()
    .typeError("")
    .trim()
    .max(64)
    .optional(),
  job_title: yup
    .string()
    .typeError("")
    .trim()
    .max(64)
    .optional(),
  company: yup
    .string()
    .typeError("")
    .trim()
    .max(64)
    .optional(),
  top_song: yup
    .string()
    .typeError("")
    .trim()
    .max(32)
    .optional(),
  top_artist: yup
    .string()
    .typeError("")
    .trim()
    .max(32)
    .optional(),
  pronouns: yup
    .string()
    .typeError("")
    .trim()
    .max(16)
    .optional(),
  height_unit: yup
    .string()
    .typeError("")
    .trim()
    .oneOf(["Unknown", "Imperial", "Metric"])
    .optional(),
  sexuality: yup
    .string()
    .typeError("")
    .trim()
    .oneOf([
      "Unknown", "Straight", "Gay", "Lesbian", "Bisexual",
      "Asexual", "Demisexual", "Pansexual", "Queer", 
    ])
    .optional(),
  education: yup
    .string()
    .typeError("")
    .trim()
    .oneOf([
      "Unknown", "Bachelors", "InCollege", "HighSchool",
      "PhD", "InGradSchool", "Masters", "TradeSchool",
    ])
    .optional(),
  looking_for: yup
    .string()
    .typeError("")
    .trim()
    .oneOf([
      "Unknown", "LongTermRelationship", "ShortTermRelationship",
      "LongTermOpenToShort", "ShortTermOpenToLong", "NewFriends",
      "Unsure"
    ])
    .optional(),
  relationship: yup
    .string()
    .typeError("")
    .trim()
    .oneOf([
      "Unknown", "Monogomy", "EthicalNonMonogomy",
      "OpenRelationship", "Polyamory", "OpenToExploring",
    ])
    .optional(),
  family_plans: yup
    .string()
    .typeError("")
    .trim()
    .oneOf([
      "Unknown", "WantsChildren", "DoesntWantChildren",
      "HaveChildrenWantMore", "HaveChildrenDontWantMore", "Unsure",
    ])
    .optional(),
  workout: yup
    .string()
    .typeError("")
    .trim()
    .oneOf([
      "Unknown", "Everyday", "Often", "Sometimes", "Never",
    ])
    .optional(),
  personality: yup
    .string()
    .typeError("")
    .trim()
    .oneOf([
      "Unknown", "INTJ", "INTP", "ENTJ", "ENTP", "INFJ",
      "INFP", "ENFJ", "ISTJ", "ISFJ", "ESTJ", "ESFJ",
      "ISTP", "ISFP", "ESTP", "ESFP",
    ])
    .optional(),
  smokes: yup
    .string()
    .typeError("")
    .trim()
    .oneOf([
      "Unknown", "YesSmokes", "OccassionallySmokes",
      "SociallySmokes", "OkayWithSmokes", "NeverSmokes",
    ])
    .optional(),
  drinks: yup
    .string()
    .typeError("")
    .trim()
    .oneOf([
      "Unknown", "NotForMe", "Sober",
      "OnSpecialOccasions", "Socially", "Regularly",
    ])
    .optional(),
  cannabis: yup
    .string()
    .typeError("")
    .trim()
    .oneOf([
      "Unknown", "YesSmokes", "OccassionallySmokes",
      "SociallySmokes", "OkayWithSmokes", "NeverSmokes",
    ])
    .optional(),

  // Flags
  banned: yup
    .boolean()
    .typeError("")
    .optional(),

  use_smart_photos: yup
    .boolean()
    .typeError("")
    .optional(),
  hide_distance: yup
    .boolean()
    .typeError("")
    .optional(),
  hide_age: yup
    .boolean()
    .typeError("")
    .optional(),
  dnd_mode: yup
    .boolean()
    .typeError("")
    .optional(),
  show_sexuality: yup
    .boolean()
    .typeError("")
    .optional(),
  show_gender: yup
    .boolean()
    .typeError("")
    .optional(),
  show_pronouns: yup
    .boolean()
    .typeError("")
    .optional(),
})

export const listRouteValidator = () => yup.object().shape({
  take: yup
    .number()
    .typeError("")
    .min(1)
    .max(100)
    .default(50)
    .optional(),
  skip: yup
    .number()
    .typeError("")
    .min(0)
    .default(0)
    .optional(),
})

export type ListRouteBody = {
  take: number
  skip: number
}

export default yup
