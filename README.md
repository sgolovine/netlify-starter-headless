# Netlify Starter Headless

Create API's with Netlify Functions.

## What is it?

AWS Serverless functions are awesome, but having to deal with
AWS to get it all setup properly isn't. This starter kit lets
you quickly build full fledged serverless API's using Netlify

## What's Included

- Typescript Support out of the box.
- Local dev environment using netlify-cli
- Base path changed from `/.netlify/functions` to `/api`

## Project Structure

```bash
netlify-starter-headless
  api/* -> build output for functions
  public/* -> placeholder for frontend
  src/* -> serverless functions

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

## Changing the base path

Typically when you create a function in Netlify, you have to call it like this: `curl http://localhost:8888/.netlify/functions/my-func-name`. This starter includes a redirect in `netlify.toml` that will allow you to make calls like this instead: `curl http://localhost:8888/api/my-func-name`. If you want to change the base path, modify the `[[ redirects ]]` block in `netlify.toml`

```toml
[[ redirects ]]
  from = "/api/v1/*"
  to = "/.netlify/functions/:splat"
  status = 200

```

You will now be able to call your endpoints like `curl http://localhost:8888/api/v1/my-func-name`
