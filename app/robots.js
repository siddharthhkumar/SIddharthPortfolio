const SITE = 'https://s-iddharth-portfolio.vercel.app'

/** Everything is public and crawlable — there is nothing here to hide. */
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  }
}
