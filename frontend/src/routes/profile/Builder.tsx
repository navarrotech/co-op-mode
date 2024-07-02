// Copyright © 2024 Navarrotech

// Typescript
import type { IDatingProfile, IUser } from '@/modules/protobuf/schema'
import type { FormInvalid } from '@/types'

// React.js
import { useState } from 'react'
import { Navigate } from 'react-router'

// Redux
import { useSelector, dispatch } from '@/store'
import { setUser } from '@/modules/auth/reducer'
import { setProfile } from '@/modules/dating/reducer'

// API
import { updateAccount, updateDatingProfile } from '@/modules/generated/routes'
import urls from '../urls'

// UI
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faMars, faPlus, faVenus } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import moment from 'moment'

// Components
import BuilderTemplate from './BuilderTemplate'
import Button from '@/elements/Button'
import Meme from '@/elements/Meme'
import UploadMedia from './UploadMedia'

// Misc
import memeStyles from "@/elements/Meme.module.sass"
import Confirm from '@/elements/Confirm'

export default function ProfileBuilder() {
  const { t } = useTranslation()

  const [ firstNameMeme, setFirstNameMeme ] = useState<boolean>(true)
  const [ lastNameMeme, setLastNameMeme ] = useState<boolean>(true)
  const [ errors, setErrors ] = useState<FormInvalid>([])
  const [ draft, setDraft ] = useState<string>("")
  const [ draftArr, setDraftArr ] = useState<string[]>([])
  const [ confirm, setConfirm ] = useState<boolean>(false)
  const user = useSelector(state => state.user.current)!
  const datingProfile = useSelector(state => state.dating.profile)

  if (!user.first_name) {
    if (firstNameMeme){
      console.log(`First name not found, setting meme to be shown`)
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
      console.log(`Last name not found, setting meme to be shown`)
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

  if (!datingProfile?.gender) {
    return <BuilderTemplate
      title={t('gender_title')}
      nextText={t('continue')}
      disabled={!draft}
      errors={errors}
      onNext={async () => {
        if (!draft) {
          return
        }
        const { status, struct, data } = await updateDatingProfile({
          gender: draft
        })
        if (status === 200 && struct === "DatingProfile") {
          dispatch(
            setProfile(data)
          )
          setDraft("")
        }
      }}
    >
      <div className="block buttons is-centered">
        <Button
          info
          fullwidth
          className='is-logo'
          inverted={draft !== "Male"}
          onClick={() => setDraft("Male")}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faMars} />
          </span>
          <span>{ t('gender_male') }</span>
        </Button>
        <Button
          info
          fullwidth
          className='is-logo'
          inverted={draft !== "Female"}
          onClick={() => setDraft("Female")}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faVenus} />
          </span>
          <span>{ t('gender_female') }</span>
        </Button>
        <Button
          info
          fullwidth
          className='is-logo'
          inverted={draft !== "NonBinary"}
          onClick={() => setDraft("NonBinary")}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faPlus} />
          </span>
          <span>{ t('gender_non_binary') }</span>
        </Button>
      </div>
    </BuilderTemplate>
  }

  if (!datingProfile?.wanting?.length) {
    return <BuilderTemplate
      title={t('who_do_you_want_to_date')}
      nextText={t('select')}
      disabled={draftArr.length === 0}
      errors={errors}
      onNext={async () => {
        if (!draftArr.length) {
          return
        }
        const { status, struct, data } = await updateDatingProfile({
          wanting: draftArr
        })
        if (status === 200 && struct === "DatingProfile") {
          dispatch(
            setProfile(data)
          )
          setDraft("")
          setDraftArr([])
        }
      }}
    >
      <div className="block buttons is-centered">
        <Button
          info
          fullwidth
          className='is-logo'
          inverted={!draftArr.includes("Male")}
          onClick={() => draftArr.includes("Male")
            ? setDraftArr(draftArr.filter(gender => gender !== "Male"))
            : setDraftArr([ ...draftArr, "Male" ])
          }
        >
          <span className="icon">
            <FontAwesomeIcon icon={faMars} />
          </span>
          <span>{ t('gender_male_plural') }</span>
        </Button>
        <Button
          info
          fullwidth
          className='is-logo'
          inverted={!draftArr.includes("Female")}
          onClick={() => draftArr.includes("Female")
            ? setDraftArr(draftArr.filter(gender => gender !== "Female"))
            : setDraftArr([ ...draftArr, "Female" ])
          }
        >
          <span className="icon">
            <FontAwesomeIcon icon={faVenus} />
          </span>
          <span>{ t('gender_female_plural') }</span>
        </Button>
        <Button
          info
          fullwidth
          className='is-logo'
          inverted={!draftArr.includes("NonBinary")}
          onClick={() => draftArr.includes("NonBinary")
            ? setDraftArr(draftArr.filter(gender => gender !== "NonBinary"))
            : setDraftArr([ ...draftArr, "NonBinary" ])
          }
        >
          <span className="icon">
            <FontAwesomeIcon icon={faPlus} />
          </span>
          <span>{ t('gender_non_binary_plural') }</span>
        </Button>
      </div>
    </BuilderTemplate>
  }

  if (!datingProfile?.birthday) {
    if (confirm) {
      const yearsFromNow = Math.abs(moment(draft).diff(moment(), 'years'))
      return <Confirm
        title={t('confirm_birthday', { age_years: yearsFromNow })}
        onYes={async () => {
          const { status, struct, data } = await updateDatingProfile({
            birthday: draft
          })
          if (status === 200 && struct === "DatingProfile") {
            dispatch(
              setProfile(data)
            )
            setDraft("")
            setConfirm(false)
          }
        }}
        onNo={() => setConfirm(false)}
        onCancel={() => setConfirm(false)}
      >
        <div className="block">
          <p>{ t('confirm_birthday_warning') }</p>
        </div>
      </Confirm>
    }
    return <BuilderTemplate
      title={t('birthday_title')}
      nextText={t('continue')}
      errors={errors}
      onNext={async () => {
        if (!draft) {
          console.log(`Draft is empty, returning`)
          return
        }
        setConfirm(true)
      }}
    >
      <div className="field">
        <div className="control has-icons-left">
          <input
            autoFocus
            className="input"
            type="date"
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

  if (!user.media) {
    // return <UploadMedia />
  }

  // TODO: Check if we can access notifications
  

  // TODO: Check if we can access location


  console.log("Profile building complete, redirecting to app")

  return <Navigate to={urls.app} />
}

export function isProfileComplete(user: IUser, datingProfile: IDatingProfile) {
  return user
    && user.first_name
    && user.last_name
    && datingProfile
    && datingProfile.gender
    && datingProfile.birthday
    && datingProfile.looking_for?.length
    // && user.media?.length // TODO: Media!
}
