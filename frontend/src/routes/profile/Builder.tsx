// Copyright © 2024 Navarrotech

// Typescript
import type { FormInvalid } from '@/types'

// React.js
import { useState } from 'react'
import { Navigate } from 'react-router'

// Redux
import { useSelector, dispatch } from '@/store'
import { setUser } from '@/modules/auth/reducer'

// API
import { updateAccount } from '@/modules/generated/routes'
import urls from '../urls'

// UI
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

// Components
import BuilderTemplate from './BuilderTemplate'
import Meme from '@/common/Meme'
import BuildProfile from './BuildProfile'
import UploadMedia from './UploadMedia'

// Misc
import memeStyles from "@/common/Meme.module.sass"

export default function ProfileBuilder() {
  const { t } = useTranslation()

  const [ firstNameMeme, setFirstNameMeme ] = useState<boolean>(true)
  const [ lastNameMeme, setLastNameMeme ] = useState<boolean>(true)
  const [ errors, setErrors ] = useState<FormInvalid>([])
  const [ draft, setDraft ] = useState<string>("")
  const user = useSelector(state => state.user.current)!

  console.log(user)
  console.log({
    firstNameMeme,
    lastNameMeme
  })

  if (!user.first_name) {
    if (firstNameMeme){
      setFirstNameMeme(false)
      return <></>
    }

    return <BuilderTemplate
      title={t('profile_builder_first_name')}
      disabled={!draft.length}
      nextText={t('next')}
      errors={errors}
      onNext={async function updateFirstName() {
        const { status, struct, data } = await updateAccount({ first_name: draft })
        if (status === 200) {
          if (data?.id){
            dispatch(
              setUser(data)
            )
          }
          setErrors([])
          setDraft("")
        }
        if (struct === "FormsInvalid") {
          setErrors(data.invalid)
        }
        if (data?.message) {
          setErrors([data.message])
        }
      }}
    >
      <div className="field">
        <div className="control has-icons-left">
          <input
            autoFocus
            className="input"
            type="text"
            placeholder={t('first_name_placeholder')}
            value={draft}
            onChange={e => setDraft(e.target.value)}
          />
          <span className="icon is-left">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </div>
      </div>
    </BuilderTemplate>
  }

  if (!firstNameMeme) {
    return <BuilderTemplate
      title={t('profile_builder_welcome_first_name', { first_name: user.first_name })}
      nextText={t('nice')}
      errors={errors}
      onNext={() => {
        setFirstNameMeme(true)
      }}
    >
      <Meme
        imageUrl="/images/patrick.jpg"
        topText={t('profile_builder_patrick_meme_1')}
        bottomText={t('profile_builder_patrick_meme_2', { first_name: user.first_name })}
      />
    </BuilderTemplate>
  }

  if (!user.last_name) {
    if (lastNameMeme) {
      setLastNameMeme(false)
      return <></>
    }

    return <BuilderTemplate
      title={t('profile_builder_last_name')}
      disabled={!draft.length}
      nextText={t('next')}
      errors={errors}
      onNext={async function updateLastName() {
        const { status, struct, data } = await updateAccount({ last_name: draft })
        if (status === 200) {
          if (data?.id){
            dispatch(
              setUser(data)
            )
          }
          setErrors([])
          setDraft("")
        }
        if (struct === "FormsInvalid") {
          setErrors(data.invalid)
        }
        if (data?.message) {
          setErrors([data.message])
        }
      }}
    >
      <div className="field">
        <div className="control has-icons-left">
          <input
            autoFocus
            className="input"
            type="text"
            placeholder={t('last_name_placeholder')}
            value={draft}
            onChange={e => setDraft(e.target.value)}
          />
          <span className="icon is-left">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </div>
      </div>
      <div className="field">
        <p className='is-size-7'>{ t('profile_builder_last_name_disclosuer') }</p>
      </div>
    </BuilderTemplate>
  }

  if (!lastNameMeme) {
    return <BuilderTemplate
      title={t('excellent') + "."}
      nextText={t('excellent')}
      errors={errors}
      onNext={() => {
        setLastNameMeme(true)
      }}
    >
      <Meme
        imageUrl="/images/darth-vader.jpg"
        topText={t('profile_builder_sideous_meme_1')}
        bottomText={t('profile_builder_sideous_meme_2', { first_name: user.first_name, last_name: user.last_name })}
        className={memeStyles.sideous}
      />
    </BuilderTemplate>
  }

  if (!user.dating_profile) {
    return <BuildProfile />
  }

  if (!user.media) {
    return <UploadMedia />
  }

  return <Navigate to={urls.app} />
}
