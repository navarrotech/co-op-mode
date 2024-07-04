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

// If successful, it'll return true
// If stalled, it'll return null
// If failed, it'll return a string that represents the error
export async function init() {
  try {

    const checkData = await check()
    if (!checkData?.data?.user) {
      if (checkData.data?.authorized === false) {
        dispatch(
          finishInit()
        )
        return true
      }
      console.error('Failed to check user auth state from API', {
        checkData: checkData?.data
      })
      return null
    }
  
    dispatch(
      setUser(checkData.data.user)
    )
  
    const syncData = await sync()
  
    if (syncData?.status !== 200) {
      console.error('Failed to sync data from API', {
        syncData: syncData?.data
      })
      return null
    }
    
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
    } = syncData
  
    dispatch( setUser(user) )
    dispatch( setDailyLimits(daily) )
    dispatch( setMonthlyLimits(monthly) )
    dispatch( setPermanentLimits(permanent) )
    dispatch( setProfile(datingProfile) )
    dispatch( setPreferences(preferences) )
    dispatch( setMedia(media) )
    dispatch( setConversations(conversations) )
  
    console.log('Init finished')
  
    if (NODE_ENV === 'development') {
      console.log(
        getState()
      )
    }
  
    dispatch(
      finishInit()
    )

    return true
  }
  catch (error: any) {
    // TODO: I think this should be occuring in the api/proto layer, and the error state saved to Redux
    // That way we don't have to re-write it for all these other functions
    if (error?.message === 'Failed to fetch') {
      console.error('Failed to connect to API')
      return 'failed_to_connect_to_api'
    }
    console.error('Uncaught initialization error: ', error)
  }
} 

let isInProgress = false

export default function Initialization({ children }: Props) {
  const [ error, setError ] = useState<string>('')
  const { t } = useTranslation()

  const isLoading = useSelector(state => state.user.loading)

  // @ts-ignore
  useEffect(() => {
    async function attemptConnection() {
      if (isInProgress) {
        return
      }
      isInProgress = true

      const initResult = await init()
      isInProgress = false

      // If successful
      if (initResult === true) {
        setError('')
        return
      }

      if (typeof initResult === 'string') {
        setError(t(initResult))
        setTimeout(() => attemptConnection(), 1_500)
        return
      }

      if (initResult === null) {
        setTimeout(() => attemptConnection(), 1_500)
        return
      }
    }

    attemptConnection()
  }, [])

  if (error) {
    return <ErrorLayout message={error} />
  }

  if (isLoading) {
    return <LoaderLayout />
  }

  return children
}
