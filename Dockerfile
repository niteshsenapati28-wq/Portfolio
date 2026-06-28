FROM node:22-bookworm-slim

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends curl && rm -rf /var/lib/apt/lists/*

# Install root deps (concurrently etc.)
COPY package.json package-lock.json* ./
COPY apps/api/package.json apps/api/package.json
COPY apps/web/package.json apps/web/package.json
COPY apps/pocketbase/package.json apps/pocketbase/package.json

RUN npm install --workspaces --include-workspace-root

# Copy the rest of the source
COPY apps ./apps

# Build the frontend (outputs to /app/dist/apps/web)
RUN npm run build --prefix apps/web

# Make sure PocketBase binary is executable
RUN chmod +x apps/pocketbase/pocketbase

# Install a tiny gateway: serves the built frontend AND proxies API/PocketBase
RUN npm install express http-proxy-middleware

COPY gateway.js ./gateway.js

# Render gives us $PORT — the API will bind to it, PocketBase always binds to 8090 internally
ENV PB_HOST=http://localhost:8090

COPY start.sh ./start.sh
RUN chmod +x ./start.sh

EXPOSE 3000

CMD ["./start.sh"]
