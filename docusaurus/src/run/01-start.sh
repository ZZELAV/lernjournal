#!/bin/bash

# ---
# This script starts the docker container.
# ---

echo -e "\033[0;36m::: Starting development mode..."

STATUS="$(systemctl is-active docker.service)"
if [ "${STATUS}" = "active" ]; then
    echo -e "\033[0;32m::: 'docker.service' is already running."
else
    echo -e "\033[0;33m::: 'docker.service' is not running. Starting..."
    systemctl start docker.service
    echo -e "\033[0;32m::: 'docker.service' started successfully."
fi

echo -e "\033[0;36m::: Starting docker container as daemon..."
docker compose up -d > /dev/null 2>&1
echo -e "\033[0;32m::: Daemon started.\n"

echo -e "\033[0;36m::: To check the docker logs run 'docker compose logs -f'"
echo -e "\033[0;36m::: To stop the application run 'src/run/stop.sh'."
