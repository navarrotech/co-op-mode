// Copyright © 2024 Navarrotech

import axios from 'axios'

export const API = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        // This is initialized in Initialization.tsx
        'Authorization': 'Bearer '
    },
    withCredentials: true
})
