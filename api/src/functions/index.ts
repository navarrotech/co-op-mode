// Copyright © 2023 Navarrotech

// Typescript
import type { Route } from 'navarrotech-express'

// Routes
import auth from './auth'
import sync from './sync'
import test from './test'

// Dynamic
import MakeRoutes from './crud'

export const routes: Route[] = [
    ...auth,
    sync,
    test,
]
