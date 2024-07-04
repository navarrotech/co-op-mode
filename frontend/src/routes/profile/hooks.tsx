// Copyright © 2024 Navarrotech

// React.js
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

// Redux
import { useSelector } from '@/store'

// Utility
import urls from '../urls'
import { isProfileComplete } from './Builder'

// Components
import Topbar from '@/routes/dashboard/Topbar'
import BottomBar from '../dashboard/BottomBar'

export function ProfileCompletionOutlet() {
  const user = useSelector(state => state.user.current)
  const datingProfile = useSelector(state => state.dating.profile)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user || !datingProfile) {
      console.log('Redirecting to welcome: There is no user or dating profile data')
      navigate(urls.welcome)
      return
    }
    if (!isProfileComplete(user!, datingProfile!)) {
      console.log('Redirecting to buildProfile: The profile is not complete')
      navigate(urls.buildProfile)
    }
  }, [ user, datingProfile ])

  return <div className="dashboard">
    <Topbar />
    <div className="dashboard-content">
      <Outlet />
    </div>
    <BottomBar />
  </div>
} 
