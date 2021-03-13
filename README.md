# A template Node.js app to get started on Orb
Last README update: 2021-03-13 

This repository contains the minimum required files to host a Node.js API on [Orb's RapidFire API service](https://www.orbclouds.com/documentation#orb-rapidfire).

The app contained in this repository is LIVE at https://start-node.api.orb-apps.com. Send the following request to see a reply:

`curl https://start-node.api.orb-apps.com`

## Key Files

There are three main files that Orb looks at to publish your app:
- `index.js`: This file contains the code that your server will run.
- `docker-compose.yml`: This file specifies the Docker configuration, including which ports are exposed. Orb requires that deployed APIs listen on `PORT 8000`. More information on Docker Compose can be found [here, at Docker's official documentation](https://docs.docker.com/compose/).
- `Dockerfile`: This file specifies the Node version, build script, and start command that will be used to deploy your application. More information on additional Dockerfile configuration options can be found here, at [Docker's official documentation](https://docs.docker.com/engine/reference/builder/).

## How to Deploy

Orb provides a number of flexible options for deploying this example application:

### Trial Deployment

This repository, and any similarly structured public repository, can be deployed with no account sign-up and no credit card using Orb's Trial service.

Simply follow these instructions to deploy:

1. Copy the GitHub web URL: `https://github.com/orbclouds/start-node`.
2. Visit Orb's [Trial](https://www.orbclouds.com/deploy-an-app#submit-a-repo) deployment webpage.
3. Paste the GitHub web URL, choose the type of app, and click `Deploy`!
4. Sit back, and watch your app go LIVE!

### Standard Deployment

This repository, and a public or private repository of any structure can be deployed to Orb's hyper-optimized RapidFire edge cloud using Orb's Standard deployment Service.

Simply follow these instructions to deploy:

1. [Create a Standard tier account](https://www.orbclouds.com/create-an-account) on Orb
2. [Sign in](https://console.orbclouds.com/) to the Orb management console
3. Click `Deploy An App` and follow the on-screen instructions to fully customize your deployment name, domain, and other details.
4. Watch your app go LIVE and start deploying an unlimited number of other apps for no extra cost!

## Contact

We're always here to help and answer questions. Please [get in touch](https://www.orbclouds.com/get-in-touch) with us!
