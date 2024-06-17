# co-op-mode
 A dating app for gamers

If using Windows, **run everything in WSL.**

Before starting, you'll need to generate some files in your environment with:
```bash
bash ./watch.sh
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

# Automating dev
Hot reload changes to schema.proto or auto doc, with `./watch.sh`
