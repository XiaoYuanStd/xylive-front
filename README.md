# xylive-front

Frontend and APIs for [SRS](https://github.com/ossrs/srs).

Still under development, don't use it as nothing is provided to viewer.

# Setup

We recommend deploying via [Vercel](https://vercel.com).

## Database (Edge Config)

We provide reverse apis for token verification, so you need to create a database to store the stream tokens.

_Edge Config is for temporary use, its content is exposed directly to backend administrator. Will be changed in a future release._

If you're using Vercel, simply connect the Edge Config database to the project. Vercel will automatically create the variable.

Example:

```json5
{
  app: 'live',
  token: '?token=', // token prefix
  streams: [
    {
      name: 'john-doe',
      token: 'token-here',
    },
  ],
}
```

Client:

```
server -> rtmp://serverdomain/live
stream key -> john-doe?token=token-here
```

## SRS

Manually add `http_hooks` in your .conf file

```
http_hooks {
  enabled    on;
  on_publish https://frontdomain/api/publish;
  on_hls     https://frontdomain/api/publish;
}
```

## Environment Variables

### EDGE_CONFIG

**URL to Edge Config database.**

### SRS_API

**URL to SRS API.**

Example: `http://serverdomain:1985/api/v1`
