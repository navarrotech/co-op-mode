// Copyright © 2024 Navarrotech

import type { BulmaColor } from '@/types'
import { ReactNode } from 'react'

type Props = {
  id?: string
  title?: string
  checked: boolean
  onChange: (checked: boolean) => void
  rounded?: boolean
  color?: BulmaColor,
  label?: string | ReactNode
  disabled?: boolean
  className?: string
  small?: boolean
  large?: boolean
}

export function ToggleSwitch(props: Props) {
  const {
    color = 'primary',
    checked,
    onChange,
    rounded = true,
    label,
    disabled,
    className = '',
    small,
    large,
    ...rest
  } = props

  const classes = [
    `switch is-${color}`,
    className,
    disabled && 'is-disabled',
    rounded && 'is-rounded',
    small && 'is-small',
    large && 'is-large',
  ].filter(Boolean).join(' ')

  return (
    <label className={classes}>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        {...rest}
      />
      <span className='slider'></span>
      { label }
    </label>
  )
}
