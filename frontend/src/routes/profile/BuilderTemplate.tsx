// Copyright © 2024 Navarrotech

// Typescript
import type { FormInvalid } from '@/types'

// React.js
import { useEffect } from 'react'
import { Button } from '@/elements/Button'

type Props = {
  disabled?: boolean
  onNext: () => void
  errors: FormInvalid,
  title: string
  children: React.ReactNode
  nextText: string
}

export function BuilderTemplate({ title, onNext, nextText, errors, disabled, children }: Props) {

  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onNext()
      }
    }
    document.addEventListener('keydown', keyListener)
    return () => {
      document.removeEventListener('keydown', keyListener)
    }
  }, [ onNext ])

  return <section className="section is-stacked">
    <figure className="block image is-64x64 is-centered">
      <img src="/logo.png" alt="Co-Op Mode" />
    </figure>
    <div className="block has-text-centered has-text-pretty">
      <h1 className="title is-size-4">{ title }</h1>
    </div>
    <div className="block">
      { children }
    </div>
    { errors?.length
      ? errors.map(({ key, message }) => <div key={key} className="block notification is-danger">{ message }</div>)
      : <></>
    }
    <div className="block v-spacer" />
    <div className="block buttons is-centered">
      <Button
        primary
        fullwidth
        disabled={disabled}
        onClick={onNext}
      >{
          nextText
        }</Button>
    </div>
  </section>
}

