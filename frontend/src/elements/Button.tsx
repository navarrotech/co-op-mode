// Copyright © 2024 Navarrotech

// Documentation:
// https://bulma.io/documentation/elements/button/

// Typescript
import type { ReactNode } from "react";
import type { BulmaColor } from "@/common/Colors";

type Props = {
    primary?: boolean
    secondary?: boolean
    ghost?: boolean
    warning?: boolean
    error?: boolean
    success?: boolean
    info?: boolean
    link?: boolean

    inverted?: boolean

    color?: BulmaColor
    children: ReactNode
    className?: string
    fullwidth?: boolean
    disabled?: boolean
    loading?: boolean
    light?: boolean
    dark?: boolean
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function Button(props: Props){
    const {
        primary,
        secondary,
        ghost,
        warning,
        error,
        success,
        info,
        link,
        dark,
        light,

        inverted,
        
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
        error && 'is-error',
        success && 'is-success',
        info && 'is-info',
        link && 'is-link',

        inverted && 'is-inverted', 
        
        ghost && 'is-ghost',
        disabled && 'is-disabled',
        loading && 'is-loading',
        dark && 'is-dark',
        light && 'is-light',
    ].filter(Boolean).join(' ');

    const colorClass = color ? `is-${color}` : '';
    const sizeClass = fullwidth ? 'is-fullwidth' : '';

    const classes = `button ${className || ''} ${statusClasses} ${colorClass} ${sizeClass}`.trim();

    return (
        <button
            type="button"
            className={classes}
            disabled={disabled || loading}
            {...rest}
        >
            {children}
        </button>
    );
}
