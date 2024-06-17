# Analytics service

This service is responsible for counting numbers!

Changes (create/update/delete) to tables are emitted through rabbit mq, and when those tables change it's good to keep track of what is happening.

There are global analytics tracked on Redis for all-time totals, and totals logged daily (w/ a 30 day expiration)

There are also tables like "profile_analytics" that track how many views/likes/dislikes/superlikes/reports that profiles get.
The analytics service will automatically fill in those values, so the API doesn't have to worry about analytical data in the database.

Because analytics are considered lower priority, this process can rest at a lower CPU and slower throughput is acceptable
