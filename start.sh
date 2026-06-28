#!/bin/sh
set -e

# Capture Render's public port FIRST, before we reuse the PORT variable
# name for the internal API process below.
RENDER_PORT="${PORT:-3000}"

echo "=== Starting PocketBase ==="
cd /app/apps/pocketbase

# OPTIONAL: restore pb_data from a remote backup on every boot, since Render's
# free-tier disk is wiped on restart/redeploy. Skip this if you don't need
# data to persist between restarts (e.g. fully migration-driven content).
# Example using an S3-compatible bucket (uncomment + configure if needed):
# if [ -n "$BACKUP_URL" ]; then
#   curl -L "$BACKUP_URL" -o /tmp/pb_data.zip
#   unzip -o /tmp/pb_data.zip -d ./pb_data
# fi

mkdir -p ./pb_data

./pocketbase serve \
  --http=0.0.0.0:8090 \
  --encryptionEnv=PB_ENCRYPTION_KEY \
  --dir=./pb_data \
  --migrationsDir=./pb_migrations \
  --hooksDir=./pb_hooks \
  --hooksWatch=false &

PB_PID=$!

echo "=== Waiting for PocketBase to become healthy ==="
for i in $(seq 1 30); do
  if curl -sf http://localhost:8090/api/health > /dev/null; then
    echo "PocketBase is up"
    break
  fi
  sleep 1
done

echo "=== Starting API on internal port 3001 ==="
cd /app/apps/api
export PORT=3001
node src/main.js &
API_PID=$!

# Render's actual public port was provided to this script as $RENDER_PORT
# (captured at the very top, before we overwrote PORT above for the API).
echo "=== Starting gateway (frontend + proxy) on public port ${RENDER_PORT:-3000} ==="
cd /app
export PORT="${RENDER_PORT:-3000}"
node gateway.js &
WEB_PID=$!

wait $PB_PID $API_PID $WEB_PID
