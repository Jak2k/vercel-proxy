# vercel-proxy

A simple proxy hostable on Vercel.

## Example use case

You create a discord bot with the new HTTP API, but you don't want to change the URL every time you create a new tunnel for development. This is where vercel-proxy comes in. You just deploy it to Vercel and put your tunnel url into the edge-config. You could also automate this with the Vercel API.

## How to use

1. Fork this repository
2. Open your vercel dashboard and import the repository
3. Connect an edge-config to the project
4. Set the target `host` variable to you tunnel url and optionally set the `headers` variable to an array of headers you want to forward. (e.g. `["Bot-Token"]`)

## How it works

The proxy just calls the target url with the same method, path and body as the request it received. It also forwards the headers specified in the edge-config.

## Future plans

- [ ] Add support for query parameters
- [ ] Add support for only allowing certain hosts to use the proxy

## Development

1. Clone/fork this repository
2. Run `pnpm install` or `npm install`
3. Run `pnpm i -g vercel` or `npm i -g vercel`
4. Run `vercel dev` to start the development server
