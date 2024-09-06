// Copyright © 2024 Navarrotech

import type { ReactNode } from 'react'
import type { TFunction } from 'i18next'
import type { Location, Params } from 'react-router'
import type { AnyObjectSchema, ValidationError } from 'yup'

// //////////////////////////// //
//       Common UI types        //
// //////////////////////////// //

export type BulmaColor = 'primary'
  | 'secondary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white'
  | 'black'
  | 'text'
  | 'ghost'

export type ActionButton = {
  text: string
  color?: BulmaColor
  loading?: boolean
  disabled?: boolean
  closeAfterOnClick?: boolean
  onClick?: () => void
}
  
export type T = TFunction<'translation', undefined>

export type PathFunctionProps = Location
  & Readonly<Params<string>>
  & {
    userId?: string,
  }
  & Record<string, any>

// //////////////////////////// //
//      Common Proxy Types      //
// //////////////////////////// //

export type SetTimeout = ReturnType<typeof setTimeout>
export type SetInterval = ReturnType<typeof setInterval>

// //////////////////////////// //
//   Typescript generic types   //
// //////////////////////////// //

/* Example:
 * type Callback = () => Promise<void>
 * UnPromise<Callback> === () => void
 */
export type UnPromise<T> = T extends (...args: infer A) => Promise<infer R>
  ? (...args: A) => R
  : T
/* Example:
 * type Callback = () => void
 * ToPromise<Callback> === () => Promise<void>
 */
export type ToPromise<T> = T extends (...args: infer A) => infer R
  ? (...args: A) => Promise<R>
  : T

// Removes all optional attributes from a type
export type Certain<T> = {
  [K in keyof T]-?: T[K];
};

// //////////////////////////// //
//        Factory types         //
// //////////////////////////// //

export type FactoryType<T> = {
  // From factory builder:
  root: T,
  proxy: T,
  save: () => Promise<boolean>,
  updateLocally: <K extends keyof T>(key: K | string, value: T[K]) => void,
  updateOneFieldAndSave: <K extends keyof T>(key: K | string, value: T[K]) => Promise<boolean>,
  hasChanged: boolean,

  // From schema builder:
  schema: AnyObjectSchema,
  isValid: boolean,
  errors: Partial<Record<keyof T, ValidationError>>,
  errorMessages: Partial<Record<keyof T, ReactNode>>,
}
