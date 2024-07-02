// Copyright © 2024 Navarrotech

const urls = {
  index: '/',

  // Auth
  welcome: '/welcome',
  google: '/auth/google',
  discord: '/auth/discord',
  phoneStart: '/auth/phone',
  phoneVerify: '/auth/phone/confirm',

  // Entry point for building profile:
  // If it's a profile build in progress, the entry point will redirect to the profile build page
  buildProfile: '/app/profile/build',

  logout: '/logout',

  // Application
  app: '/app',
  dashboard: '/app/dashboard',
  matching: '/app/dashboard/matching',

  // Misc
  termsOfService: '/terms-of-service',
  privacyPolicy: '/privacy-policy'
}

export const externalUrls = {
  myPhoneNumberChanged: 'TODO'
}

export default urls
