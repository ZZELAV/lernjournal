#!/bin/bash

# ---
# This script deploys the application using npm.
# ---

PAKVER="$(npm pkg get version)"
echo -e "\033[0;36m::: Current package version is ${PAKVER}"
echo -e "\033[0;35m::: Is this ok? [Y/n]"
read OK

if [[ $OK == "Y" || $OK = "y" || $OK = "" ]]; then
    echo -e "\033[0;36m::: Package is actual."
elif [[ $OK == "N" || $OK == "n" ]]; then
    echo -e "\033[0;33m::: Aborting..."
    exit 0
fi

echo -e "\033[0;35m::: Should a 'git push' to the main branch be executed? [Y/n]"
read PUSH

if [[ $PUSH == "Y" || $PUSH == "y" || $PUSH == "" ]]; then
    echo -e "\033[0;36m::: Pushing..."
    git push
    echo -e "\033[0;32m::: Pushed successfully."
fi

echo -e "\033[0;36m::: Removing 'node_modules'..."
rm -rf node_modules
echo -e "\033[0;32m::: Removed successfully."

echo -e "\033[0;36m::: Installing node packages..."
npm install
echo -e "\033[0;32m::: Installed successfully."

echo -e "\033[0;36m::: Deploying..."
npm run deploy
echo -e "\033[0;32m::: Deployed successfully."
