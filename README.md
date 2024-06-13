# co-op-mode
 A dating app for gamers

If using Windows, run everything in WSL.

Before starting, setup dev env with:
```bash
bash ./gen.sh
```

This will generate the necessary schema.proto javascript files the serviecs will need
Currently, if you make a change to the root schema.proto, you will need to re-run that above command to regenerate types & javascript.

## Running services (api, redis, postgres, pgadmin):
Use `docker compose up` to start services

## Running frontend
```
cd frontend
yarn install
yarn run dev
```

Should be that simple! :)
