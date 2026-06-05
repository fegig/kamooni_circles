---

description: Set up a local Matrix server (Synapse) for development
---

## Prerequisites

Ensure `.env` and `.env.local` exist with required variables:

- `MATRIX_DOMAIN` — use `localhost` for local development (used when generating Synapse config)
- `NEXT_PUBLIC_MATRIX_DOMAIN` — same as `MATRIX_DOMAIN` (used by frontend for Matrix IDs)
- `MONGO_ROOT_USERNAME`, `MONGO_ROOT_PASSWORD` — must match the MongoDB container credentials
- `SYNAPSE_POSTGRES_USERNAME`, `SYNAPSE_POSTGRES_PASSWORD` — for Postgres (used by Synapse)

## Steps

1. Generate the Synapse configuration:
```powershell
docker compose -f docker-compose.local.setup.yml up synapse_setup
```

2. Start the local services (Matrix, Postgres, MinIO, Mongo, Qdrant):
```powershell
docker compose -f docker-compose.local.yml up -d
```

3. Create a new Matrix user (replace `username` and `password` with your desired credentials):
```powershell
docker compose -f docker-compose.local.yml exec synapse register_new_matrix_user -u username -p password -a -c /data/homeserver.yaml http://localhost:8008
```

4. Update `.env.local` with the Matrix user credentials (if needed) and ensure `MATRIX_DOMAIN` matches the value used in step 1.

5. Start the Circles app (in a separate terminal):
```powershell
bun run dev
```

6. Access the app at http://localhost (via nginx proxy) or http://localhost:3000 (direct).
