# The view counter

The card in the **Currently** section shows the last-edited date, the version,
a live-status dot, and — only if a store is connected — how many times the site
has been opened.

With no store configured the number is **hidden rather than faked**. An
invented figure on a portfolio used for job applications is worse than no
figure at all.

## Connecting it

Create an Upstash Redis database (the free tier is more than enough) or add
Vercel KV to the project, then set either pair of environment variables:

    KV_REST_API_URL          KV_REST_API_TOKEN
    UPSTASH_REDIS_REST_URL   UPSTASH_REDIS_REST_TOKEN

Redeploy. `app/api/views/route.js` increments `portfolio:views` once per
browser session — held in `sessionStorage`, so a reload does not inflate it —
and returns the total.

There is no SDK; it is two fetches against a documented REST shape. If the
store is ever unreachable, the route returns `null` and the page carries on
without the number.
