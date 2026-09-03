/**
 * The view counter.
 *
 * Backed by an Upstash-compatible Redis REST endpoint — which is what Vercel
 * KV is underneath, so either set of environment variables works:
 *
 *   KV_REST_API_URL      + KV_REST_API_TOKEN        (Vercel KV / Upstash)
 *   UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
 *
 * With neither configured this returns `views: null` and the page shows no
 * number at all. That is deliberate: an invented or client-side-only figure on
 * a portfolio used for job applications is worse than no figure.
 *
 * No SDK — two fetches against a documented REST shape.
 */
export const dynamic = 'force-dynamic'

const KEY = 'portfolio:views'

function creds() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
  return url && token ? { url: url.replace(/\/$/, ''), token } : null
}

async function redis(command) {
  const c = creds()
  if (!c) return null
  try {
    const res = await fetch(`${c.url}/${command}/${KEY}`, {
      headers: { Authorization: `Bearer ${c.token}` },
      cache: 'no-store',
    })
    if (!res.ok) return null
    const data = await res.json()
    const n = Number(data?.result)
    return Number.isFinite(n) ? n : 0
  } catch {
    // The store being unreachable must never break the page it sits on.
    return null
  }
}

const json = (views) =>
  Response.json(
    { views, configured: Boolean(creds()) },
    { headers: { 'Cache-Control': 'no-store' } }
  )

/** Read the current count without changing it. */
export async function GET() {
  return json(await redis('get'))
}

/** Count this visit, then return the new total. */
export async function POST() {
  return json(await redis('incr'))
}
