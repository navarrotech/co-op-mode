// Copyright © 2024 Navarrotech

import { useEffect, useState, type ReactNode } from 'react'

// Redux
import { dispatch, getState, useSelector } from '@/store'
import { finishInit, setDailyLimits, setMonthlyLimits, setPermanentLimits, setPreferences, setUser } from '@/modules/auth/reducer'
import { check, sync } from '@/modules/generated/routes'
import { setMedia, setProfile } from '@/modules/dating/reducer'
import { setConversations } from '@/modules/messages/reducer'

// Components
import ErrorLayout from '@/common/ErrorLayout'
import { LoaderLayout } from '@/elements/Loader'

// Utility + Environment
import { NODE_ENV } from '@/env'
import { useTranslation } from 'react-i18next'

type Props = {
    children: ReactNode
}

export const init = () => check()
  .then(({ data }) => {
    if (data?.user) {
      dispatch(
        setUser(data.user)
      )
      return sync()
    }
    return null
  })
  .then((response) => {
    if (!response) {
      return response
    }
    if (response.status === 200) {
      const {
        data: {
          datingProfile,
          limits: {
            daily,
            monthly,
            permanent
          },
          preferences,
          user,
          media=[],
          conversations=[]
        }
      } = response

      dispatch( setUser(user) )
      dispatch( setDailyLimits(daily) )
      dispatch( setMonthlyLimits(monthly) )
      dispatch( setPermanentLimits(permanent) )
      dispatch( setProfile(datingProfile) )
      dispatch( setPreferences(preferences) )
      dispatch( setMedia(media) )
      dispatch( setConversations(conversations) )
    }
    return response
  })
  .then(() => {
    dispatch(
      finishInit()
    )
    if (NODE_ENV === 'development') {
      console.log(
        getState()
      )
    }
  })

export default function Initialization({ children }: Props) {
  const [ error, setError ] = useState<string>('')
  const { t } = useTranslation()

  const isLoading = useSelector(state => state.user.loading)

  function attemptConnection() {
    init()
      .then(() => setError(''))
      .catch((error) => {
        if (error?.message === 'Failed to fetch') {
          console.error('Failed to connect to API')
          setError(t('failed_to_connect_to_api'))
          setTimeout(() => attemptConnection(), 1_500)
          return
        }
        console.error('Uncaught initialization error: ', error)
      })
  }

  useEffect(() => attemptConnection(), [])

  if (error) {
    return <ErrorLayout message={error} />
  }

  if (isLoading) {
    return <LoaderLayout />
  }

  return children
}
