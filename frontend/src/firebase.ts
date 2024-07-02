// Copyright © 2024 Navarrotech

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyAssDkkAL8o09daKhAfcFHTJ9n7yKSwUe4',
  authDomain: 'navarrotech-co-op-mode.firebaseapp.com',
  projectId: 'navarrotech-co-op-mode',
  messagingSenderId: '814067540159',
  appId: '1:814067540159:web:764107e6dc83942c77a60a',
  measurementId: 'G-1E7TNESQW6'
}

export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAnalytics = getAnalytics(firebaseApp)
