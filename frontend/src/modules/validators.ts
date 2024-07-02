// Copyright © 2024 Navarrotech

import * as yup from 'yup'

export const phoneValidator = () => yup
  .string()
  .typeError('')
  .trim()
  .matches(/^\+[1-9]\d{1,14}$/, 'validator_phone')
  .max(16)
  .min(11)
