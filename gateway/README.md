# Gateway service

This service is responsible for sending near-realtime notifications and events back to the user.

The API uses a prisma middleware that will publish any change to a table (create/update/delete) to rabbit mq through a protobuf.
Those publishes are subscribed to here in the gateway, and the gateway connects socket.io websockets to the frontend that will publish relevant/authorized data to the appropriate users.

The data published from the Gateway to the frontend (via the websocket) is done through Protobuf as well.

Some data is more realtime demanding than others. For example, a new message is considered high priority for realtime, but a new dislike is considered a very low priority for realtime.

# Scalability
This service is designed to horizontally scale
