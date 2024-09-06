// Copyright © 2024 Navarrotech

// React.js & Router
import { Navigate, Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

// Outlets
import { AuthorizedOutlet } from '@/routes/authentication/Outlet'

// Constants
import { urls } from './urls'

// Pages
import { Welcome } from './authentication/Welcome'
import { WithPhoneNumber } from './authentication/WithPhoneNumber'
import { VerifyPhoneNumber } from './authentication/VerifyPhoneNumber'
import { ProfileBuilder } from './profile/Builder'
import { Logout } from './authentication/Logout'
import { ProfileCompletionOutlet } from './profile/hooks'
import { MatchingPage } from './dating/MatchingPage'
import { DiscoverPage } from './dating/DiscoverPage'
import { MatchesPage } from './dating/MatchesPage'
import { ConversationsPage } from './messages/ConversationsPage'
import { AccountPage } from './profile/AccountPage'
import { SettingsView } from './profile/Settings'

/*
 * Homepage and marketing should be in a separate repository!
 * This repository only focuses on the application, not marketing.
 */

export function Router() {
  return <BrowserRouter>
    <Routes>
      {/* Index */}
      <Route index path={urls.index} element={<Navigate to={urls.welcome} />} />

      {/* Authentication */}
      <Route path={urls.welcome}  element={<Welcome />} />
      <Route path={urls.phoneStart} element={<WithPhoneNumber />} />
      <Route path={urls.phoneVerify} element={<VerifyPhoneNumber />} />
      <Route path={urls.logout}  element={<Logout />} />

      {/* Primary Application */}
      
      {/* This outlet ensures that all nested routes are authorized: */}
      <Route path={urls.app} element={<AuthorizedOutlet />}>
        <Route path={urls.buildProfile} element={<ProfileBuilder />} />

        {/* This route ensures that the user's profile is fully completed
         before letting users access these nested routes */}
        <Route path={urls.dashboard} element={<ProfileCompletionOutlet />}>
          <Route path={urls.matching} element={<MatchingPage />} />
          <Route path={urls.discover} element={<DiscoverPage />} />
          <Route path={urls.likes} element={<MatchesPage />} />
          <Route path={urls.messages} element={<ConversationsPage />} />
          <Route path={urls.profile} element={<AccountPage />} />
          <Route path={urls.settings} element={<SettingsView />} />
        </Route>

        <Route path={urls.dashboard} element={<Navigate to={urls.matching} />} />
        <Route path={urls.app} element={<Navigate to={urls.matching} />} />
      </Route>

      {/* Misc */}
      <Route path={urls.termsOfService} element={<h1></h1>} />
      <Route path={urls.privacyPolicy} element={<h1></h1>} />

      {/* Catch-all 404 */}
      <Route path='*' element={<Navigate to={urls.welcome} />} />
    </Routes>
  </BrowserRouter>
}
