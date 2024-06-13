// Copyright © 2024 Navarrotech

import type { Route } from '@/types'

// Email
import emailLogin from './email/login'
import emailSignup from './email/signup'

// All
import logout from './logout'
import check from './check'

const routes: Route[] = [
    emailLogin,
    emailSignup,

    logout,
    check,
]

export default routes
