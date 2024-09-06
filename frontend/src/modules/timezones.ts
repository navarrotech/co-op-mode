// Copyright © 2024 Navarrotech

import timezones from 'timezones-list'
import moment from 'moment-timezone'

export type TimeZone = typeof timezones[number]

export const timezonesByCode = timezones.reduce((acc, tz) => {
  acc[tz.tzCode] = tz
  return acc
}, {} as Record<string, TimeZone>)

export function getDefaultTimezone() {
  const saved = localStorage.getItem('timezone')
  if (saved) {
    moment.tz.setDefault(saved)
    return saved
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  return timezonesByCode[timezone]?.tzCode || timezone
}

export function setDefaultTimezone(timezone: string) {
  localStorage.setItem('timezone', timezone)
  moment.tz.setDefault(timezone)
}

console.log(getDefaultTimezone())
console.log(timezonesByCode)

export {
  moment,
  timezones,
}
