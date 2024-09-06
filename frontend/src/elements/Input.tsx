// Copyright © 2024 Navarrotech

// Typescript
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'

// UI
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

type Props = {
  // Required
  id: string // ID is good practice, we should require it
  value: string
  onChange: (value: string) => void
  placeholder: string

  // Fancy optional
  icon?: IconDefinition
  label?: string
  showClearButton?: boolean

  // Optional
  disabled?: boolean
  autoFocus?: boolean
  autoComplete?: string
  rootClassname?: string
  className?: string
}

export function Input(props: Props) {
  const { t, i18n, } = useTranslation()

  const {
    id,
    value,
    onChange,

    rootClassname = '',
    showClearButton = false,
    disabled = false,
  } = props

  let className = 'input'
  if (props.className) {
    className += (' ' + props.className)
  }
  if (disabled) {
    className += ' is-disabled'
  }

  const placeholder = i18n.exists(props.placeholder)
    ? t(props.placeholder)
    : props.placeholder

  const label = props.label && i18n.exists(props.label)
    ? t(props.label)
    : props.label

  return <div className={`field ${rootClassname}`}>
    { label ? <label className='label'>{label}</label> : <></> }
    <div className={`control ${props.icon ? 'has-icons-left' : ''}`}>
      <input
        id={id}
        autoFocus={props.autoFocus}
        autoComplete={props.autoComplete}
        className={className}
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          if (disabled) {
            return
          }
          onChange(e.target.value)
        }}
        // Don't use disabled={disabled} because it's stops event propagation
        onFocus={(e) => {
          if (disabled) {
            // @ts-ignore
            e.target.blur()
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            e.preventDefault()
            e.stopPropagation()
            // @ts-ignore
            e.target?.blur()
          }
        }}
      />
      { showClearButton && !!value
        ? <button
          className='delete clear-input-button'
          onClick={() => onChange('')}
        />
        : <></>
      }
      { props.icon
        ? <span className='icon is-left'>
          <FontAwesomeIcon icon={props.icon} />
        </span>
        : <></>
      }
    </div>
  </div>
}

