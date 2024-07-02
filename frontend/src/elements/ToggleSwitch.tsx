// Copyright © 2024 Navarrotech

import { BulmaColor } from '@/common/Colors'
import { ReactNode } from 'react'

type Props = {
    checked: boolean,
    onChange: (checked: boolean) => void
    rounded?: boolean
    color?: BulmaColor,
    label?: string | ReactNode
    disabled?: boolean
    className?: string
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export default function ToggleSwitch(props: Props) {
  const { color = 'primary', checked, onChange, rounded, label, disabled, className, ...rest } = props

  let classes = `switch is-${color}`

  if (disabled){
    classes += ' is-disabled'
  }
  if (rounded){
    classes += ' is-rounded'
  }

  return (
    <label className={classes}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        {...rest}
      />
      <span className="slider"></span>
      { label }
    </label>
  )
}
