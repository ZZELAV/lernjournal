#!/bin/bash

# ---
# This script stops the docker container.
# ---

echo -e "\033[0;36m::: Stopping development mode..."

STATUS="$(docker ps | grep docusaurus)"
if [ "${STATUS}" != "" ]; then
    echo -e "\033[0;36m::: Removing docker container..."
    docker compose down > /dev/null 2>&1
    echo -e "\033[0;32m::: Docker container removed successfully."
else
    echo -e "\033[0;33m::: Docker container is not running."
fi
