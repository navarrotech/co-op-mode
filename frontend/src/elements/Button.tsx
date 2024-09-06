// Copyright © 2024 Navarrotech

// Documentation:
// https://bulma.io/documentation/elements/button/

// Core
import { useNavigate } from 'react-router'

// Typescript
import type { MouseEventHandler, ReactNode } from 'react'
import type { BulmaColor } from '@/types'

export type ButtonProps = {
  id?: string

  primary?: boolean
  secondary?: boolean
  ghost?: boolean
  warning?: boolean
  danger?: boolean
  success?: boolean
  info?: boolean
  link?: boolean

  small?: boolean
  medium?: boolean
  large?: boolean

  title?: string
  inverted?: boolean
  outlined?: boolean
  rounded?: boolean

  to?: string
  disableFocusing?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>

  color?: BulmaColor
  children: ReactNode
  className?: string
  fullwidth?: boolean
  disabled?: boolean
  loading?: boolean
  light?: boolean
  dark?: boolean
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export function Button(props: ButtonProps) {
  const navigate = useNavigate()

  const {
    primary,
    secondary,
    ghost,
    warning,
    danger,
    success,
    info,
    link,
    dark,
    light,

    small,
    medium,
    large,

    to,
    disableFocusing = false,
    inverted,
    outlined,
    rounded,

    className,
    children,
    disabled,
    loading,
    color,
    fullwidth,
    ...rest
  } = props

  const statusClasses = [
    primary && 'is-primary',
    secondary && 'is-secondary',
    warning && 'is-warning',
    danger && 'is-danger',
    success && 'is-success',
    info && 'is-info',
    link && 'is-link',

    inverted && 'is-inverted',
    rounded && 'is-rounded',
    outlined && 'is-outlined',

    small && 'is-small',
    medium && 'is-medium',
    large && 'is-large',

    ghost && 'is-ghost',
    disabled && 'is-disabled',
    loading && 'is-loading',
    dark && 'is-dark',
    light && 'is-light',
  ].filter(Boolean).join(' ')

  // On click middleware to ensure the JS protections match the CSS protections
  const onClick: MouseEventHandler<HTMLButtonElement> = (...event) => {
    if (!rest.onClick || disabled || loading) {
      return
    }

    rest.onClick(...event)
  }

  const colorClass = color ? `is-${color}` : ''
  const sizeClass = fullwidth ? 'is-fullwidth' : ''

  const classes = `button ${className || ''} ${statusClasses} ${colorClass} ${sizeClass}`.trim()

  return (
    <button
      type='button'
      className={classes}
      disabled={disabled || loading}
      {...rest}
      onMouseDown={(event) => {
        // On click middleware
        if (disableFocusing) {
          event.preventDefault()
        }
        props.onMouseDown?.(event)
      }}
      onClick={(event) => {
        if (to) {
          navigate(to)
        }
        onClick?.(event)
      }}
    >
      {children}
    </button>
  )
}
