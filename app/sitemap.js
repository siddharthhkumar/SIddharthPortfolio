const SITE = 'https://s-iddharth-portfolio.vercel.app'

/**
 * The home page, three case studies, and the documents. The résumés and the
 * paper are listed because they are real destinations a search engine should
 * be able to surface.
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
    ...[
      'siddharth-data-analyst',
      'siddharth-business-analyst-mis',
      'siddharth-operations',
      'siddharth-product-manager',
      'siddharth-social-media-manager',
      'siddharth-seo-content-writer',
    ].map((f) => ({ url: `${SITE}/resumes/${f}.pdf`, lastModified: now, priority: 0.5 })),
  ]
}
