//Copyright © 2024 Navarrotech.

import type { Route } from '@/types'

// Email
// import emailLogin from './phone/login'
// import emailSignup from './phone/signup'

// Phone
import authorizeByPhone from './phone/authorize'

// All
import logout from './logout'
import check from './check'

const routes: Route[] = [
  // emailLogin,
  // emailSignup,
  authorizeByPhone,

  logout,
  check
]

export default routes
