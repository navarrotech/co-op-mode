// Copyright © 2024 Navarrotech

// React.js
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router'

// Redux
import { shutdown } from '@/modules/actions'
import { logout as apiLogout } from '@/modules/generated/routes'

// UI
import { LoaderLayout } from '@/elements/Loader'

// Constants
import { urls } from '../urls'

export function Logout() {
  const [ isFinished, setFinished ] = useState<boolean>(false)

  console.log('Logging out!')

  useEffect(() => {
    Promise.all([
      apiLogout().catch(console.error),
      shutdown().catch(console.error)
    ]).finally(() => {
      setFinished(true)
    })
  }, [])

  if (!isFinished) {
    return <LoaderLayout />
  }

  return <Navigate to={urls.index} />
}
