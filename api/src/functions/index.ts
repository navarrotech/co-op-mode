//Copyright © 2024 Navarrotech.

// Typescript
import type { Route } from '@/types'

// Routes
import auth from './auth'
import account from './account'
import sync from './sync'

import datingProfile from './dating_profile'
import matching from './matching'
import preferences from './preferences'
import messages from './messages'
import conversations from './conversations'
import status from './status'

import test from './test'

// Dynamic
// import MakeRoutes from './crud'

const routes: Route[] = [
  ...auth,
  sync,

  ...preferences,
  ...status,
  ...account,
  ...datingProfile,
  ...messages,
  ...conversations,
  ...matching,

  test
]

export default routes
