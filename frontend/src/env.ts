// Copyright © 2024 Navarrotech

export const NODE_ENV = import.meta.env.NODE_ENV || 'development'
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
export const GATEWAY_URL = import.meta.env.VITE_GATEWAY_URL || 'http://localhost:4000'

console.log('Running in ' + NODE_ENV + ' mode')
