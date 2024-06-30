// Copyright © 2024 Navarrotech

// React.js
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router'

// Redux
import { reducerReset } from '@/modules/actions'
import { logout as apiLogout } from '@/modules/generated/routes'

// UI
import { LoaderLayout } from '@/common/Loader'

// Constants
import urls from '../urls'

export default function Logout() {
  const [ isFinished, setFinished ] = useState<boolean>(false)

  useEffect(() => {
    Promise.all([
      apiLogout().catch(console.error),
      reducerReset().catch(console.error),
    ]).finally(() => {
      setFinished(true)
    })
  }, [])

  if (!isFinished) {
    return <LoaderLayout />
  }

  return <Navigate to={urls.index} />
}
