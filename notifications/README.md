# Notifications service

This service is primarily used to:
1. Email the user
2. Send an app push notification to the user
3. Send a SMS notification to the user

This service will subscribe to RabbitMQ's data regarding table changes (create/update/delete) and send push notifications, sms notifications, or emails to the user as needed.

This service will also be triggerable from the routine service to send followup emails or weekly reports

This service will also be triggable from the API if the API needs to send a password reset or multi factor authentication SMS

# Scalability
It is designed to be horizontally scaled, but it shouldn't need to be horizontally scaled and can be a singleton if we do this correctly.
