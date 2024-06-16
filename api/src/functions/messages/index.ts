// Copyright © 2024 Navarrotech

import type { Route } from '@/types'

// CRUD
import createMessage from './create'
import updateMessage from './update'
import listMessages  from './list'
import deleteMessage from './delete'

import markRead from './markRead'
import markReceived from './markReceived'

const routes: Route[] = [
    createMessage,
    updateMessage,
    listMessages,
    deleteMessage,

    markRead,
    markReceived,    
]

export default routes

