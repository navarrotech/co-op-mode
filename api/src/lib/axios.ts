//Copyright © 2024 Navarrotech.

import axios from 'axios'
import { PLIVO_AUTH_ID, PLIVO_APP_UUID, PLIVO_TOKEN } from '@/env'

export const plivoApi = axios.create({
  baseURL: 'https://api.plivo.com/',
  headers: {
    'Authorization': `Basic ${Buffer.from(`${PLIVO_AUTH_ID}:${PLIVO_TOKEN}`).toString('base64')}`,
    'Content-Type': 'application/json'
  }
})

export const sendVerificationText = async (phone: string) => {
  plivoApi.post(`v1/Account/${PLIVO_AUTH_ID}/Verify/`, {
    app_uuid: PLIVO_APP_UUID,
    recipient: phone,
    channel: 'sms'
  })
}
