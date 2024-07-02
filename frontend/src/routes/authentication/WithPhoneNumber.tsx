// Copyright © 2024 Navarrotech

// React.js
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

// Smart components
import Help from '@/elements/Help'
import AdvancedSelect from '@/elements/AdvancedSelect'
import Button from '@/elements/Button'

// Redux
import { setUser } from '@/modules/auth/reducer'
import { dispatch } from '@/store'

// Utility
import { phoneValidator } from '@/modules/validators'
import urls, { externalUrls } from '../urls'

// Iconography
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { authorizeByPhone } from '@/modules/generated/routes'
import { useTranslation } from 'react-i18next'

const validator = phoneValidator()

export default function WithPhoneNumber() {
  const navigate = useNavigate()

  const [ countryCode, setCountryCode ] = useState<string>('US +1')
  const [ error, setError ] = useState<string>('')
  const [ phoneNumber, setPhoneNumber ] = useState<string>('')
  const [ isLoading, setIsLoading ] = useState<boolean>(false)

  const { t } = useTranslation()

  // @ts-ignore
  const fullNumber = `+${countryCodesToValues[countryCode]||'1'}${phoneNumber}`

  let isValid = false
  try {
    isValid = validator.isValidSync(fullNumber)
  }
  catch (e) {}

  async function submit() {
    if (!isValid || isLoading) {
      return
    }

    setError('')
    setIsLoading(true)

    const { data, struct, status } = await authorizeByPhone({
      phone: fullNumber
    })

    setIsLoading(false)

    if (status === 204 || status === 200 || status === 409) {
      const user = struct === 'AuthResponse' ? data?.user : {}
      dispatch(
        // @ts-ignore
        setUser({
          ...user,
          phone: fullNumber
        })
      )
      navigate(urls.phoneVerify)
      return
    }

    if (data?.message) {
      setError(data.message)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        submit()
      }
      else if (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Escape') {
        if (phoneNumber.length === 0) {
          history.back()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [ submit ])
    
  return <section className="section is-stacked">
    <div className="block">
      <Button ghost onClick={() => history.back()}>
        <span className="icon">
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
      </Button>
    </div>
    <div className="block">
      <h1 className="title">{ t('enter_phone') }</h1>
    </div>
    <div className="block">
      <div className="field has-addons">
        <div className="control">
          <AdvancedSelect
            title='Select Country Code'
            options={countryCodes}
            value={countryCode}
            onSelect={(value) => setCountryCode(value)}
          >
            <button className="button is-select-prompt" type="button">
              <span>{ countryCode }</span>
              <span className="icon">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
          </AdvancedSelect>
        </div>
        <div className="control is-fullwidth">
          <input
            autoFocus
            className="input"
            type="text"
            autoComplete='tel'
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.replaceAll(/\D/g, ''))}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                submit()
              }
            }}
            max={15}
          />
        </div>
      </div>
      <p>{ t('phone_help') }</p>
    </div>
    { error && <div className="block notification is-danger is-size-7">{ error }</div> }
    <div className="block">
      <Help url={externalUrls.myPhoneNumberChanged}>
        <strong>{ t('phone_changed') }</strong>
      </Help>
    </div>
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

const countryCodes = [
  { key: 'US +1', value: 'US +1', text: '+1 United States' },
  { key: 'CA +1', value: 'CA +1', text: '+1 Canada' },
  { key: 'GB +44', value: 'GB +44', text: '+44 United Kingdom' },
  { key: 'AU +61', value: 'AU +61', text: '+61 Australia' },
  { key: 'IN +91', value: 'IN +91', text: '+91 India' },
  { key: 'JP +81', value: 'JP +81', text: '+81 Japan' },
  { key: 'DE +49', value: 'DE +49', text: '+49 Germany' },
  { key: 'FR +33', value: 'FR +33', text: '+33 France' },
  { key: 'BR +55', value: 'BR +55', text: '+55 Brazil' },
  { key: 'CN +86', value: 'CN +86', text: '+86 China' },
  { key: 'SE +46', value: 'SE +46', text: '+46 Sweden' },
  { key: 'NO +47', value: 'NO +47', text: '+47 Norway' },
  { key: 'DK +45', value: 'DK +45', text: '+45 Denmark' },
  { key: 'FI +358', value: 'FI +358', text: '+358 Finland' },
  { key: 'IS +354', value: 'IS +354', text: '+354 Iceland' },
  { key: 'NL +31', value: 'NL +31', text: '+31 Netherlands' },
  { key: 'CH +41', value: 'CH +41', text: '+41 Switzerland' },
  { key: 'IE +353', value: 'IE +353', text: '+353 Ireland' },
  { key: 'AT +43', value: 'AT +43', text: '+43 Austria' },
  { key: 'BE +32', value: 'BE +32', text: '+32 Belgium' },
  { key: 'NZ +64', value: 'NZ +64', text: '+64 New Zealand' },
  { key: 'SG +65', value: 'SG +65', text: '+65 Singapore' },
  { key: 'KR +82', value: 'KR +82', text: '+82 South Korea' },
  { key: 'IT +39', value: 'IT +39', text: '+39 Italy' },
  { key: 'ES +34', value: 'ES +34', text: '+34 Spain' },
  { key: 'PT +351', value: 'PT +351', text: '+351 Portugal' },
  { key: 'GR +30', value: 'GR +30', text: '+30 Greece' },
  { key: 'IL +972', value: 'IL +972', text: '+972 Israel' },
  { key: 'LU +352', value: 'LU +352', text: '+352 Luxembourg' },
  { key: 'CY +357', value: 'CY +357', text: '+357 Cyprus' },
  { key: 'MT +356', value: 'MT +356', text: '+356 Malta' },
  { key: 'Other', value: 'Other', text: 'Other' }
]

const countryCodesToValues = {
  'US +1': '1',
  'CA +1': '1',
  'GB +44': '44',
  'AU +61': '61',
  'IN +91': '91',
  'JP +81': '81',
  'DE +49': '49',
  'FR +33': '33',
  'BR +55': '55',
  'CN +86': '86',
  'SE +46': '46',
  'NO +47': '47',
  'DK +45': '45',
  'FI +358': '358',
  'IS +354': '354',
  'NL +31': '31',
  'CH +41': '41',
  'IE +353': '353',
  'AT +43': '43',
  'BE +32': '32',
  'NZ +64': '64',
  'SG +65': '65',
  'KR +82': '82',
  'IT +39': '39',
  'ES +34': '34',
  'PT +351': '351',
  'GR +30': '30',
  'IL +972': '972',
  'LU +352': '352',
  'CY +357': '357',
  'MT +356': '356',
  'Other': ''
}
