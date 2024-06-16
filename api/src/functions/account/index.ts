// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from '@/types'

// Routes
import deleteAccount from './delete'
import updateAccount from './update'

const routes: Route[] = [
    deleteAccount,
    updateAccount,
]

export default routes
