// Copyright © 2024 Navarrotech

// Core
import { useMemo, useRef } from 'react'

// Typescript
import type {
  AutoFill,
  CSSProperties,
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  TextareaHTMLAttributes,
} from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import type { FactoryType } from '@/types'

// UI
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/elements/Button'

// Hooks
import { useTranslation } from 'react-i18next'
import { get } from 'lodash-es'

type InputProps = InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>

export type FactoryInputProps<T> = {
  // Manually defined:
  name: string
  label?: string

  factory: FactoryType<T>

  // Special Optional:
  invisible?: boolean
  saveOnBlur?: boolean
  resetOnBlur?: boolean
  showSaveButton?: boolean
  showCounter?: boolean
  saveIndividually?: boolean
  fullwidth?: boolean

  // Optional:
  disabled?: boolean
  autoFocus?: boolean
  isTextarea?: boolean
  autoComplete?: AutoFill
  placeholder?: string
  className?: string
  icon?: IconDefinition
  onBlur?: () => void
  onChange?: (data: T) => void
  rows?: number
  style?: CSSProperties
  resizable?: boolean
}

export function MakeInput<W>(props: FactoryInputProps<W>) {
  const { t, } = useTranslation()

  const {
    // Required:
    name,
    label,

    // Factory:
    factory: {
      save: saveAll,
      root,
      proxy,
      schema,
      updateLocally,
      updateOneFieldAndSave,
      errors,
      errorMessages,
      isValid,
      hasChanged,
    },

    // Special optional:
    invisible = false,
    saveOnBlur = false,
    resetOnBlur = false,
    showSaveButton = false,
    showCounter = false,
    saveIndividually = false,
    fullwidth = false,

    // Optional:
    icon,
    placeholder = label,
    isTextarea = false,
    disabled = false,
    autoComplete='off',
    resizable = false,
    className = '',
    onBlur,
    onChange,
    ...rest
  } = props

  const keyChain = name.split('.')

  const input = useRef<HTMLInputElement & HTMLTextAreaElement>(null)
  const saveButton = useRef<HTMLDivElement>(null)

  let field = schema?.fields[
    keyChain[0]
  ]
  for (let i = 1; i < keyChain.length; i++) {
    const key = keyChain[i]
    // @ts-ignore
    const subField = field?.fields[key]
    if (subField) {
      field = subField
    }
  }

  const max: number | undefined = useMemo(() => {
    if (!field || !schema) {
      return undefined
    }

    const description = field.describe()
    try {
      // @ts-ignore
      for (const test of description.tests) {
        if (test.name === 'max') {
          return test.params.max as number
        }
      }
    }
    catch (error: any) {
      console.error(error)
    }

    return undefined
    // eslint-disable-next-line
  }, [ schema ])

  const min: number | undefined = useMemo(() => {
    if (!field || !schema) {
      return undefined
    }

    const description = field.describe()
    try {
      // @ts-ignore
      for (const test of description.tests) {
        if (test.name === 'min') {
          return test.params.min as number
        }
      }
    }
    catch (error: any) {
      console.error(error)
    }

    return undefined
    // eslint-disable-next-line
  }, [ schema ])

  if (!field) {
    console.warn(
      'Field not found in schema, factory cannot make input:',
      { name, schema, },
    )
    return <></>
  }

  const value = get(proxy, keyChain)

  let controlClass = 'control'
  if (icon) {
    controlClass += ' has-icons-left'
  }
  if (invisible) {
    controlClass += ' invisible'
  }
  if (showSaveButton) {
    controlClass += ' has-save-button'
  }
  if (fullwidth) {
    controlClass += ' is-expanded'
  }

  let tooltipText = t('actions.save')
  if (!hasChanged) {
    tooltipText = t('validator.no_changes')
  }
  else if (!isValid) {
    tooltipText = t('validator.invalid_cannot_save')
  }

  let inputClassname = isTextarea
    ? 'textarea'
    : 'input'
  if (className) {
    inputClassname += ` ${className}`
  }
  // @ts-ignore
  if (errors[name]) {
    inputClassname += ' is-danger'
  }
  if (!resizable) {
    inputClassname += ' no-resize'
  }
  if (fullwidth) {
    inputClassname += ' is-fullwidth'
  }

  function save() {
    if (saveIndividually) {
      updateOneFieldAndSave(
        name as any,
        value,
      )
      return
    }
    saveAll()
  }

  const inputProps: InputProps = {
    id: String(name),
    name: String(name),
    autoComplete: autoComplete,
    className: inputClassname,
    maxLength: max,
    // @ts-ignore
    type: field.type === 'number'
      ? 'number'
      : 'text',
    disabled,
    value,
    min,
    max,
    placeholder: placeholder && t(placeholder),
    onBlur: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onBlur?.()

      if (saveOnBlur) {
        save()
      }

      const target = event.relatedTarget
      if (!resetOnBlur) {
        return
      }
      if (saveButton?.current?.contains(target)) {
        return
      }

      // @ts-ignore
      updateLocally(name as any, root[name])
    },
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (disabled) {
        return
      }

      // Infer the type of value from the yup validator
      let value = event.target.value as W

      // @ts-ignore
      if (field.type === 'number') {
        // @ts-ignore
        value = parseFloat(event.target.value)

        // @ts-ignore
        if (isNaN(value)) {
          console.warn('Preventing update, value creates NaN:', event.target.value)
          return
        }
      }

      updateLocally(name as any, value as any)

      onChange?.(value)
    },
    onKeyDown: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (event.key === 'Escape') {
        input.current?.blur()
      }
      else if (event.key === 'Enter' && (showSaveButton || event.ctrlKey)) {
        save()
        input.current?.blur()
      }
    },
    ...rest,
  }

  let fieldClassname = 'field'
  if (fullwidth) {
    fieldClassname += ' is-fullwidth'
  }

  return <div className={ fieldClassname }>
    { label
      ? <label className='label'>{ t(label) }</label>
      : <></>
    }
    <div className={ controlClass + ' is-relative' }>
      {
        isTextarea
          ? (
            // @ts-ignore
            <textarea
              key={ `factory-${String(name)}` }
              ref={ input }
              { ...inputProps }
            />
          )
          : (
            <input
              key={ `factory-${String(name)}` }
              ref={ input }
              { ...inputProps }
            />
          )
      }
      { icon
        ? <span className='icon is-left'>
          <FontAwesomeIcon icon={ icon } />
        </span>
        : <></>
      }
      { showCounter
        ? max
          ? <p className='max-length'>{ value.length } / { max }</p>
          : <p className='max-length'>{ value.length }</p>
        : <></>
      }
      { showSaveButton && hasChanged
        ? <div className='block buttons is-right' ref={ saveButton }>
          <Button
            success
            title={ tooltipText }
            disabled={ !isValid }
            onClick={ () => {
              save()
              input.current?.blur()
            } }
          >
            <span className='icon'>
              <FontAwesomeIcon icon={ faCheck } />
            </span>
          </Button>
        </div>
        : <></>
      }
    </div>
    { /* @ts-ignore */ }
    { errorMessages[name] }
  </div>
}
