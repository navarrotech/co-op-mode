// Copyright © 2024 Navarrotech

// Based on the Bulma modal
// https://bulma.io/documentation/components/modal/

// React.js
import { createPortal } from 'react-dom'

// Typescript
import { useEffect, type ReactNode } from 'react'
import type { ActionButton } from '@/types'

// Components
import { Button } from './Button'

// Misc
import { useTranslation } from 'react-i18next'

type ModalProps = {
    id: string
    show: boolean
    title: string
    large?: boolean
    className?: string
    onClose: () => void
    children: ReactNode // Body content
    actions: ActionButton[]
}

const modalsElement = document.getElementById('modals') as HTMLDivElement

export function Modal(props: ModalProps) {
  const { t, i18n, } = useTranslation()

  function onClose(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    event.preventDefault()
    props.onClose()
  }

  // Keyboard listener to close the modal on the 'escape' key
  useEffect(() => {
    if (!props.show) {
      return () => {}
    }

    const listener = function modalKeyboardListener(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose(event as any)
      }
    }

    document.addEventListener('keydown', listener)

    return () => {
      document.removeEventListener('keydown', listener)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ props.show, ])

  if (!props.show) {
    return <></>
  }

  const { id, children, actions, large = false, } = props
  let { className = '', title = '', } = props

  if (large) {
    className += ' is-large'
  }

  if (i18n.exists(title)) {
    title = t(title)
  }

  return createPortal(
    <div id={ id } className={ `modal is-active ${className}` }>
      <div className='modal-background' onClick={ onClose as any }></div>
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>{ title }</p>
          <button className='delete is-large' onClick={ onClose }></button>
        </header>
        <section className='modal-card-body'>{
          children
        }</section>
        <footer className='modal-card-foot buttons is-right'>{
          actions.map((action, index) => (
            <Button
              key={ index }
              color={ action.color }
              loading={ action.loading }
              disabled={ action.disabled }
              onClick={ function modalButtonClicked(event) {
                if (action.disabled || action.loading) {
                  return
                }
                action.onClick?.()
                if (action.closeAfterOnClick) {
                  onClose(event)
                }
              } }
            >
              <span>{
                i18n.exists(action.text)
                  ? t(action.text)
                  : action.text
              }</span>
            </Button>
          ))
        }</footer>
      </div>
    </div>,
    modalsElement,
    id,
  )
}
