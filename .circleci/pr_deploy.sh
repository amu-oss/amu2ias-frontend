#!/usr/bin/env bash

if [ -z "$CIRCLE_PR_USERNAME" -o "$CIRCLE_PROJECT_USERNAME" != "amu-oss" ]; then
    echo "Not a PR. Skipping surge deployment"
    exit 0
fi

yarn add surge

export SURGE_LOGIN=amu-oss@gmail.com

export DEPLOY_DOMAIN=https://pr-${CIRCLE_PR_NUMBER}-${CIRCLE_PR_USERNAME}-${CIRCLE_PR_REPONAME}.surge.sh
./node_modules/.bin/surge --project ./dist --domain $DEPLOY_DOMAIN

curl --request POST "https://api.github.com/repos/amu-oss/amu2ias-frontend/issues/${CIRCLE_PR_NUMBER}/comments?access_token=${GITHUB_API_TOKEN}" --data '{"body":"PR Successfully Deployed : '"${DEPLOY_DOMAIN}"'"}'
