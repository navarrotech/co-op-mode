// Copyright © 2024 Navarrotech

// Core
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

// Typescript
import type { IUpdateAccount } from '@/modules/generated/routes'
import type { Notification } from '@/modules/notifications'

// UI
import { ToggleSwitch } from '@/elements/ToggleSwitch'
import { Button } from '@/elements/Button'
import { Topbar } from '../dashboard/Topbar'
import { Input } from '@/elements/Input'

// Choosers
import { ThemeButton } from '@/elements/ThemeButton'
import { LanguageChooser } from '@/elements/LanguageChooser'
import { TimezoneChooser } from '@/elements/TimezoneChooser'

// Factory
import { useFactory } from '@/common/useFactory'
import { MakeInput } from '@/common/MakeInput'

// Redux
import { dispatch, useSelector } from '@/store'
import { changeNotification } from '@/modules/core/reducer'

// Utilities
import { accountValidator } from '@/modules/validators'
import { updateAccount } from '@/modules/generated/routes'
import { formatNumber } from '@/common/formatNumber'

// Iconography
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faCircleExclamation,
  faExternalLink,
  faHeadset,
  faSave,
  faSignOut,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

// Misc
import { build, version } from '@/version'
import { urls } from '../urls'

export function SettingsView() {
  // Core
  const navigate = useNavigate()
  const { t, } = useTranslation()

  // Data
  const user = useSelector(state => state.user.current)

  // Factory
  const factory = useFactory(
    accountValidator,
    {
      first_name: user?.first_name,
      last_name: user?.last_name,
      // email: user?.email,
    } as IUpdateAccount,
    updateAccount,
  )

  return <>
    <Topbar
      noLogo
      icon={faArrowLeft}
      title='pages.settings'
      onLogoClick={() => {
        navigate(urls.profile)
      }}
    >
      <Button
        id='save-settings-button'
        small
        primary
        disabled={!factory.hasChanged}
      >
        <span className='icon'>
          <FontAwesomeIcon icon={faSave} />
        </span>
        <span>{ t('actions.save') }</span>
      </Button>
    </Topbar>
    <div className='dashboard-content'>
      <div className='container is-max-fullhd'>
        <div className='subcontainer is-medium'>
          {/* Profile */}
          <div className='block box'>
            <label className='label box-label'>
              <span>{ t('labels.profile') }</span>
            </label>
            <div className='field level is-mobile'>
              <MakeInput
                name='first_name'
                label='labels.firstName'
                fullwidth
                factory={factory}
              />
              <MakeInput
                name='last_name'
                label='labels.lastName'
                fullwidth
                factory={factory}
              />
            </div>
            {/* <MakeInput
              name='email'
              label='labels.email'
              factory={factory}
            /> */}
            <Input
              id='phone-number'
              value={formatNumber(user?.phone)}
              onChange={() => {}}
              label='labels.phone'
              placeholder='labels.phone'
              disabled
            />
            <p className='help is-size-7'>{ t('help.phoneCannotBeChanged') }</p>
          </div>
          {/* Appearance */}
          <div className='block box'>
            <label className='label box-label'>
              <span>{ t('labels.appearance') }</span>
            </label>
            {/* Theme */}
            <div className='field level is-mobile'>
              <p>{ t('labels.theme') }</p>
              <ThemeButton />
            </div>
            {/* Language */}
            <div className='field level is-mobile'>
              <p>{ t('labels.language') }</p>
              <LanguageChooser button />
            </div>
            {/* Timezone */}
            <div className='field level is-mobile'>
              <p>{ t('labels.timezone') }</p>
              <TimezoneChooser />
            </div>
          </div>
          {/* Notifications */}
          {/* TODO: Implement notifications */}
          {/* <div className='block box'>
            <label className='label box-label'>
              <span>{ t('labels.notifications') }</span>
            </label>
            <div className='block'>
              <EnableNotification notification='new_message' />
              <EnableNotification notification='match' />
              <EnableNotification notification='liked' />
              <EnableNotification notification='daily_views' />
              <EnableNotification notification='inspiration' />
            </div>
          </div> */}
          {/* Community */}
          <div className='block '>
            <div className='block'>
              <label className='label has-divider is-centered'>
                <span>{ t('labels.community') }</span>
              </label>
            </div>
            {/* Help & Support */}
            <div className='field'>
              <Button
                id='help-support-button'
                fullwidth
                to={urls.support}
              >
                <span className='icon'>
                  <FontAwesomeIcon icon={faHeadset} />
                </span>
                <span>{ t('labels.support') }</span>
              </Button>
            </div>
            {/* Community Guidelines */}
            <div className='field'>
              <Button
                id='community-guidelines-button'
                fullwidth
                to={urls.guidelines}
              >
                <span className='icon'>
                  <FontAwesomeIcon icon={faUsers} />
                </span>
                <span>{ t('labels.guidelines') }</span>
              </Button>
            </div>
          </div>
          {/* Account */}
          <div className='block '>
            <div className='block'>
              <label className='label has-divider is-centered'>
                <span>{ t('labels.account') }</span>
              </label>
            </div>
            <div className='field'>
              <Button
                id='privacy-policy-button'
                fullwidth
                to={urls.privacyPolicy}
              >
                <span className='icon'>
                  <FontAwesomeIcon icon={faExternalLink} />
                </span>
                <span>{ t('legal.privacyPolicy') }</span>
              </Button>
            </div>
            <div className='field'>
              <Button
                id='terms-of-service-button'
                fullwidth
                to={urls.termsOfService}
              >
                <span className='icon'>
                  <FontAwesomeIcon icon={faExternalLink} />
                </span>
                <span>{ t('legal.termsOfService') }</span>
              </Button>
            </div>
            {/* Logout */}
            <div className='field'>
              <Button
                id='logout-button'
                fullwidth
                warning
                outlined
                inverted
                to={urls.logout}
              >
                <span className='icon'>
                  <FontAwesomeIcon icon={faSignOut} />
                </span>
                <span>{ t('actions.logout') }</span>
              </Button>
            </div>
            {/* Delete account */}
            <div className='field'>
              <Button
                id='delete-account-button'
                fullwidth
                danger
                outlined
                onClick={() => {
                  // TODO: Implement delete account!
                  console.log('delete account')
                }}
              >
                <span className='icon'>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                </span>
                <span>{ t('labels.deleteAccount') }</span>
              </Button>
            </div>
          </div>
          {/* Logo & Attribution */}
          <div className='block'>
            <div className='level is-mobile is-justify-content-center'>
              <figure className='image is-64x64'>
                <img src='/logo.png' alt={t('brand.vid')} />
              </figure>
              <div>
                <strong>{ t('brand.name') }</strong>
                <p className='is-size-7'>{
                  t('brand.version', {
                    version,
                  })  
                }</p>
                <p className='is-size-7'>{
                  t('brand.build', {
                    build,
                  })  
                }</p>
                <p className='is-size-7'>{
                  t('brand.vidMadeBy')  
                }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </> 
}

type EnableNotificationProps = {
  notification: Notification
}

function EnableNotification({ notification, }: EnableNotificationProps) {
  const { t, } = useTranslation()

  const setting = useSelector(state => state.core.notifications[notification])

  return <div className='field'>
    <div className='level is-mobile'>
      <strong>{
        t(`notifications.${notification}.title`)
      }</strong>
      <div className='level is-mobile'>
        <ToggleSwitch
          small
          checked={setting.email}
          onChange={(newIsChecked) => {
            dispatch(
              changeNotification({
                type: notification,
                email: newIsChecked,
              }),
            )
          }}
        />
        <ToggleSwitch
          small
          checked={setting.push}
          onChange={(newIsChecked) => {
            dispatch(
              changeNotification({
                type: notification,
                push: newIsChecked,
              }),
            )
          }}
        />
      </div>
    </div>
    <p className='help'>{
      t(`notifications.${notification}.description`)
    }</p>
  </div>
}
