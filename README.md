# Netlify Starter Headless

Create API's with Netlify Functions.

[![Netlify Status](https://api.netlify.com/api/v1/badges/51fc4c1d-3415-412d-ad9c-3afae5fe55ed/deploy-status)](https://app.netlify.com/sites/netlify-headless-starter/deploys)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sgolovine/netlify-starter-headless)

## Try it out

```bash

curl https://netlify-starter-headless.netlify.app/api/hello-world

```

## What is it?

AWS Serverless functions are awesome, but having to deal with
AWS to get it all setup properly isn't. This starter kit lets
you quickly build full fledged serverless API's using Netlify

## What's Included

- Typescript Support out of the box.
- dotenv support out of the box.
- Local dev environment using netlify-cli
- Base path changed from `/.netlify/functions` to `/api`

## Project Structure

```plaintext
netlify-starter-headless
  api/*    -> build output for functions
  public/* -> placeholder for frontend
  src/*    -> serverless functions

```

## Getting Started

```bash

git clone https://github.com/sgolovine/netlify-starter-headless.git ## Checkout

npm install ## Install Dependencies

npm run dev ## Start the dev server

```

Then run `curl http://localhost:8888/api/hello-world`.
should see the result:

```json
➜ curl http://localhost:8888/api/hello-world
{"message":"Hello World"}

```

## Installation

**Option 1**: One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sgolovine/netlify-starter-headless)

**Option 2**: Manual Install

1. Clone the repo: `git clone https://github.com/sgolovine/netlify-starter-headless.git`
2. Make any changes
3. Push to your own repository
4. Connect the repository to Netlify
