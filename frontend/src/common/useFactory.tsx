// Copyright © 2024 Navarrotech

// Core
import { useEffect, useState } from 'react'

// Typescript
import type { Validator } from '@/modules/validators'
import type { Routes } from '@/modules/generated/routes'
import type { FactoryType } from '@/types'

// Hooks
import { useSchemaBuilder } from '@/common/useValidator'
import { useTranslation } from 'react-i18next'

// Utility
import { isEqual, set } from 'lodash-es'
import { newToast } from '@/modules/toasts/utility'
import { ValidationError } from 'yup'

type useFactoryOptions<T> = {
  normalize?: (data: any) => T,
  onSave?: (data: T) => void,
  onError?: (error: any) => void,
}

type RouteType = typeof Routes[keyof typeof Routes];

export function useFactory<T>(
  validator: Validator,
  root: T,
  saveFunction: RouteType,
  options: useFactoryOptions<T> = {},
): FactoryType<T> {
  const { t, } = useTranslation()

  // Options
  const {
    normalize,
    onSave,
  } = options

  // Local state that updates when parent root is updated
  // In case someone else changes the data or we init
  const [ proxy, setProxy, ] = useState<T>(
    normalize
      ? normalize(root)
      : root,
  )
  useEffect(() => {
    if (!root) {
      return
    }

    let value: T = root
    if (normalize) {
      value = normalize(root)
    }

    if (isEqual(value, proxy)) {
      return
    }

    setProxy(value)
    // eslint-disable-next-line
  }, [ root, normalize, ])

  const validimogrifier = useSchemaBuilder<T>(validator, proxy)

  type ObjectKey = keyof T

  const hasChanged = !isEqual( proxy, root )

  async function save(newProxy: T = proxy): Promise<boolean> {
    const hasChanged = !isEqual( newProxy, root )

    if (!hasChanged) {
      console.log('No changes to save')
      return false
    }

    if (!validimogrifier.isValid) {
      console.warn(
        'Refusing to save invalid data:',
        validimogrifier,
        { newProxy, root, },
      )
      return false
    }

    try {
      // @ts-ignore
      const response = await saveFunction(newProxy)

      if (response.status === 200) {
        setProxy(
          response.data as T,
        )
      }
      else if (response.status === 400) {
        console.error(
          'Error saving data:',
          response.data,
          { newProxy, root, },
        )
        newToast({
          color: 'danger',
          message: t('errors.failed_to_save'),
        })
      }
      else {
        console.warn('!unhandled response status', response)
      }

      if (onSave) {
        onSave(newProxy)
      }

      return true
    }
    catch (error: any) {
      console.error(
        'Error saving data:',
        error,
        { newProxy, root, },
      )
    }

    return false
  }

  function updateLocally<K extends ObjectKey>(key: K | string, value: T[K]): T {
    const newProxy = {
      ...set(
        proxy as object,
        key,
        value,
      ) as T,
    }

    setProxy(newProxy)

    return newProxy
  }

  async function updateOneFieldAndSave<K extends ObjectKey>(
    key: K | string,
    value: T[K],
  ): Promise<boolean> {
    if (!value) {
      console.warn(`Couldn't save (updateOneFieldAndSave) empty value for key at: ${String(key)}`)
    }

    // @ts-ignore
    value = String(value).trim()

    const newProxy = {
      ...set(
        proxy as object,
        key,
        value,
      ) as T,
    }

    const hasChanged = !isEqual( newProxy, root )

    if (!hasChanged) {
      console.log('No changes to save')
      return false
    }

    const errs: Record<string, ValidationError> = {}

    try {
      await validimogrifier.schema.validate(newProxy, {
        abortEarly: false,
        stripUnknown: true,
      })
    }
    catch (error: any) {
      if (error instanceof ValidationError) {
        error.inner.forEach((err) => {
          errs[err.path!] = err
        })
      }
      else {
        console.error('Error validating data:', error)
        return false
      }
    }

    const newProxyFieldError = errs[key as string]

    if (newProxyFieldError) {
      console.warn(
        'Refusing to save invalid data in updateOneFieldAndSave:',
        {
          newProxy,
          newProxyFieldError,
          value,
        },
      )
      return false
    }

    try {
      // @ts-ignore
      const response = await saveFunction(newProxy)

      if (response.status === 200) {
        setProxy(
          response.data as T,
        )
      }
      else if (response.status === 400) {
        console.error(
          'Error saving data:',
          response.data,
          { newProxy, root, },
        )
        newToast({
          color: 'danger',
          message: t('errors.failed_to_save'),
        })
      }
      else {
        console.warn('!unhandled response status', response)
      }

      if (onSave) {
        onSave(newProxy)
      }

      return true
    }
    catch (error: any) {
      newToast({
        color: 'danger',
        message: t('errors.failed_to_save'),
      })
      console.error(
        'Error saving data:',
        error,
        { newProxy, root, },
      )
    }

    return false
  }

  return {
    root,
    proxy,
    save,
    updateLocally,
    hasChanged,
    updateOneFieldAndSave,
    errorMessages: validimogrifier.errorMessages,
    errors: validimogrifier.errors,
    isValid: validimogrifier.isValid,
    schema: validimogrifier.schema,
  }
}
