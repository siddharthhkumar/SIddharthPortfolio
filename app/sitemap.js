import { resumes } from '@/data/resumes'

const SITE = 'https://s-iddharth-portfolio.vercel.app'

/**
 * The home page, three case studies, and the documents. The résumés and the
 * paper are listed because they are real destinations a search engine should
 * be able to surface.
 *
 * Résumé URLs are read from data/resumes.js rather than typed here a second
 * time — this list previously hard-coded six filenames and had drifted from
 * what the page actually links: one (`siddharth-social-media-manager.pdf`)
 * no longer exists on disk, and another (`siddharth-product-manager.pdf`)
 * was never the file the résumé card actually points at. Reading `r.file`
 * directly means the sitemap can't drift from the real links again.
 */
export default function sitemap() {
  const now = new Date()

  return [
    { url: SITE, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...['gnosis-ai', 'documind-ai', 'research'].map((slug) => ({
      url: `${SITE}/work/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
    { url: `${SITE}/docs/260.pdf`, lastModified: now, priority: 0.6 },
    { url: `${SITE}/docs/LOR.pdf`, lastModified: now, priority: 0.5 },
    ...resumes.map((r) => ({ url: `${SITE}${r.file}`, lastModified: now, priority: 0.5 })),
  ]
}
