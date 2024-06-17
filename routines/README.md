# Routines service

This service's responsibility is to run timers and execute bulk database actions on timers.

For example, "delete all reset password requests after 1 hour of being opened" or "update all statuses that say 'active' but haven't heard from in 20 minutes to be set to inactive."

Usually a basic cleanup service

# Scalability
This service was designed to always be a singleton, and vertically scale (if needed, but should never be needed)
