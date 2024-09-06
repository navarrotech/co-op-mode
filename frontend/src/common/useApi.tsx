// Copyright © 2024 Navarrotech

// Core
import { useState } from 'react'

// Typescript
import type { ReactNode } from 'react'
import type { RouteNames } from '@/modules/generated/routes'
import type { ValidationError } from 'yup'

// Modules
import { Routes } from '@/modules/generated/routes'
import { showError } from './useValidator'
import { useTranslation } from 'react-i18next'

// Probably deprecated, use useFactory instead

export function useSaveApi<T extends Record<string, any> = any>(
  route: RouteNames,
  initialState: T,
) {
  const { t, } = useTranslation()

  type Errors = Partial<Record<keyof T, ReactNode>>

  const [ proxy, setProxy, ] = useState<T>(initialState)
  const [ errors, setErrors, ] = useState<Errors>({})
  const [ loading, setLoading, ] = useState<boolean>(false)

  async function save() {
    if (loading) {
      return
    }

    setLoading(true)

    const apiHandler = Routes[route]
    // @ts-ignore
    const response = await apiHandler(proxy)

    setLoading(false)

    if (response.status === 200) {
      setProxy(response.data as T)
    }
    else if (response.status === 400) {
      const data = response.data as Record<keyof T, ValidationError | undefined>
      const errors: Errors = {}

      for (const [ key, value, ] of Object.entries(data)) {
        if (value) {
          // @ts-ignore
          errors[key] = showError(value, t)
        }
      }

      setErrors(errors)
    }
    else {
      console.warn('Unhandled response: ', response)
    }
  }

  return {
    t,
    proxy,
    setProxy,
    errors,
    loading,
    save,
  }
}
