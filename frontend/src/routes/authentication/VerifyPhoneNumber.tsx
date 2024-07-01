// Copyright © 2024 Navarrotech

// React.js
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router'

// Smart components
import Button from '@/elements/Button'

// Utility
import urls from '../urls'

// Iconography
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { authorizeByPhone } from '@/modules/generated/routes'
import { useTranslation } from 'react-i18next'
import { dispatch, useSelector } from '@/store'
import FormatNumber from '@/common/formatNumber'
import { setUser } from '@/modules/auth/reducer'
import { init } from '@/store/Initialization'

export default function VerifyPhoneNumber() {
  const phoneNumber = useSelector(state => state.user.current?.phone)
  const navigate = useNavigate()

  const [ error, setError ] = useState<string>("")
  const [ code, setCode ] = useState<string>("")
  const [ isLoading, setIsLoading ] = useState<boolean>(false)

  const { t } = useTranslation()
  let isValid = code.length === 6

  async function submit() {
    if (!isValid || isLoading || !phoneNumber) {
      return
    }

    setError("")
    setIsLoading(true)

    const { data, struct, status } = await authorizeByPhone({
      phone: phoneNumber,
      OTP: code,
    })

    setIsLoading(false)

    // Handle success
    if (status === 200 && data?.authorized === true) {
      const user = struct === "AuthResponse" ? data?.user : {}
      dispatch(
        setUser(user)
      )
      await init()
      navigate(urls.buildProfile)
      return
    }

    if (data?.message) {
      setError(data.message)
    }
    else {
      console.error(data)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        submit()
      }
      else if (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Escape') {
        if (code.length === 0) {
          history.back()
        }
      }
    }

    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault()
      const text = e.clipboardData?.getData('text').trim().replaceAll(/\D/gmi, '')
      if (text) {
        setCode(text)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('paste', handlePaste)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('paste', handlePaste)
    }
  })

  useEffect(() => {
    if (code.length === 6 && !isLoading) {
      submit()
    }
  }, [ code ])

  if (!phoneNumber) {
    return <Navigate to={urls.phoneStart} />
  }

  return <section className="section is-stacked">
    <div className="block">
      <Button ghost onClick={() => history.back()}>
        <span className="icon">
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
      </Button>
    </div>
    <div className="field">
      <h1 className="title">{ t('enter_code') }</h1>
    </div>
    <div className="block">
      <p>
        <FormatNumber phone={phoneNumber} />
      </p>
    </div>
    <div className="block">
      <div className="field">
        <div className="control">
          <input
            autoFocus
            className="input"
            type="text"
            autoComplete='one-time-code'
            placeholder="6 digit code"
            disabled={isLoading}
            value={code}
            onChange={e => setCode(e.target.value.trim().replaceAll(/\D/gmi, ''))}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                submit()
              }
            }}
            max={6}
          />
        </div>
      </div>
    </div>
    <div className="block">
      <ResendCode />
    </div>
    { error && <div className="block notification is-danger is-size-7">{ error }</div> }
    <div className="block v-spacer" />
    <div className="block buttons is-centered">
      <Button
        fullwidth
        primary={isValid}
        dark={!isValid}
        disabled={!isValid}
        loading={isLoading}
        onClick={submit}
      >
        { t('next') }
      </Button>
    </div>
  </section>
}

function ResendCode() {
  const { t } = useTranslation()
  const phoneNumber = useSelector(state => state.user.current?.phone)
  const [ seconds, setTimeLeft ] = useState<number>(60)

  async function resendCode() {
    if (!phoneNumber) {
      return
    }

    await authorizeByPhone({
      phone: phoneNumber,
    })
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(s => s - 1)
    }, 1_000)

    return () => clearInterval(interval)
  }, [])

  if (seconds > 0) {
    return <p>{ t('resend_code_wait', { seconds }) }</p>
  }

  return <p onClick={resendCode}>{ t('resend_code', { seconds }) }</p>
}
