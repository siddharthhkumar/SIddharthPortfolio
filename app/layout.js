import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'
import Nav from '@/components/chrome/Nav'
import Footer from '@/components/chrome/Footer'
import Reveal from '@/components/motion/RevealRoot'
import Keys from '@/components/chrome/Keys'
import Rail from '@/components/chrome/Rail'
import World from '@/components/world/World'
import CursorLabel from '@/components/motion/CursorLabel'
import profile from '@/data/profile'
import projects from '@/data/projects'
import research from '@/data/research'
import experience from '@/data/experience'
import { faqs } from '@/data/faq'

/**
 * Two fallbacks, no display face.
 *
 * The page is set in the system family — SF Pro on macOS and iOS — with
 * hierarchy coming from weight and tracking rather than from a second
 * typeface. Nothing here is a brand font; these two are only what the stacks
 * in globals.css fall through to off Apple platforms.
 *
 * Inter stands in for SF Pro and JetBrains Mono for SF Mono. Both are close
 * enough that the page reads the same on Windows as it does on a Mac, and
 * both are self-hosted by next/font, so there is no render-blocking round
 * trip to Google.
 */
const text = Inter({
  subsets: ['latin'],
  variable: '--font-text',
  display: 'swap',
  // Not preloaded, and deliberately. Both stacks in globals.css put the
  // system face first, so on macOS and iOS this file is never used — and a
  // font that is preloaded is fetched whether it is used or not. Leaving it
  // to be fetched on demand means Apple visitors download none of it. Off
  // Apple it is fetched as the page paints, and next/font's metric-adjusted
  // fallback keeps the swap from moving anything.
  preload: false,
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  // 700 is here for the name in the hero greeting — without the real cut the
  // browser synthesises a bold, which smears at 12px.
  weight: ['400', '500', '700'],
  // Same reasoning as above: SF Mono resolves first on Apple platforms.
  preload: false,
})

const elegant = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-elegant',
  display: 'swap',
  // Classic serif for elegant h3 and table headers
  weight: ['400', '500', '600', '700'],
  preload: false,
})

const SITE = 'https://s-iddharth-portfolio.vercel.app'

const DESCRIPTION =
  'Siddharth Kumar is an early-career technology and business professional (B.Tech IT, Gautam Buddha University) in Noida, India. Specializing in Data Analysis (SQL, Excel, Power BI), Business Analysis, Product Analytics / APM, and Digital Growth.'

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Siddharth Kumar — Data Analyst, Business Analyst & Product Analyst',
    template: '%s — Siddharth Kumar',
  },
  description: DESCRIPTION,
  applicationName: 'Siddharth Kumar',
  authors: [{ name: 'Siddharth Kumar', url: SITE }],
  creator: 'Siddharth Kumar',
  publisher: 'Siddharth Kumar',
  category: 'portfolio',
  keywords: [
    'Siddharth Kumar',
    'Siddharth Kumar data analyst',
    'Siddharth Kumar business analyst',
    'Siddharth Kumar product manager',
    'Siddharth Kumar digital marketing',
    'Siddharth Kumar BTech IT',
    'data analyst portfolio',
    'business analyst India',
    'associate product manager',
    'APM portfolio India',
    'product analyst',
    'KPI tracking dashboards',
    'Power BI dashboards',
    'SQL analytics',
    'Gautam Buddha University',
    'Noida data analyst',
  ],
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'en-IN': '/',
    },
  },
  openGraph: {
    type: 'profile',
    firstName: 'Siddharth',
    lastName: 'Kumar',
    locale: 'en_IN',
    url: SITE,
    siteName: 'Siddharth Kumar',
    title: 'Siddharth Kumar — Data Analyst, Business Analyst & Product Analyst',
    description: DESCRIPTION,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Siddharth Kumar' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siddharth Kumar — Data Analyst, Business Analyst & Product Analyst',
    description:
      'Data Analysis (SQL, Power BI), Business Analytics, Product Prototyping (Gnosis AI & DocuMind AI), and Peer-Reviewed Machine Learning Research.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f2ece1' },
    { media: '(prefers-color-scheme: dark)', color: '#16150f' },
  ],
}

/**
 * Structured data. Four graphs, each for a different reader: Person for
 * search engines, ScholarlyArticle so the paper is citable, FAQPage so answer
 * engines have literal pairs to quote, and CreativeWork per project.
 *
 * Every value is pulled from data/ — nothing is asserted twice.
 */
function schema() {
  const person = {
    '@type': 'Person',
    '@id': `${SITE}/#person`,
    name: profile.name,
    jobTitle: 'Data Analyst · Business Analyst · Product Analyst',
    description: DESCRIPTION,
    url: SITE,
    email: `mailto:${profile.contact.email}`,
    telephone: profile.contact.phone,
    knowsLanguage: ['English', 'German'],
    alumniOf: { '@type': 'CollegeOrUniversity', name: profile.education.institution },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    knowsAbout: [
      'Data analysis',
      'SQL',
      'Microsoft Excel',
      'Power BI',
      'Business analysis',
      'KPI tracking and dashboards',
      'Product management',
      'Product analytics',
      'Digital growth',
      'SEO content strategy',
      'Machine learning',
      'Artificial intelligence',
    ],
    sameAs: [
      profile.social.linkedin,
      profile.social.github,
      profile.social.medium,
      profile.social.instagram,
      profile.social.instagramPersonal,
    ].filter(Boolean),
    worksFor: experience
      .filter((r) => r.current)
      .map((r) => ({ '@type': 'Organization', name: r.company })),
  }

  const article = {
    '@type': 'ScholarlyArticle',
    '@id': `${SITE}/#research`,
    headline: research.title,
    abstract: research.abstract,
    author: research.authors.map((a) => ({ '@type': 'Person', name: a.name })),
    datePublished: '2026-05',
    isPartOf: { '@type': 'Periodical', name: 'Journal of Intelligent Computing System' },
    publisher: { '@type': 'Organization', name: research.publisher },
    url: `${SITE}${research.paper}`,
  }

  const works = projects.map((p) => ({
    '@type': 'CreativeWork',
    name: p.name,
    description: p.problem,
    creator: { '@id': `${SITE}/#person` },
    keywords: p.stack.join(', '),
    ...(p.links?.[0] ? { url: p.links[0].href } : {}),
  }))

  const faq = {
    '@type': 'FAQPage',
    '@id': `${SITE}/#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      person,
      article,
      faq,
      ...works,
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: SITE,
        name: `${profile.name} — Portfolio`,
        description: DESCRIPTION,
        publisher: { '@id': `${SITE}/#person` },
        inLanguage: 'en',
      },
    ],
  }
}

// Runs before first paint, so a stored dark choice never flashes paper-white.
const THEME_SCRIPT = `try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}`

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${text.variable} ${mono.variable} ${elegant.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema()) }}
        />
        <a href="#main" className="skip">
          Skip to content
        </a>
        <World />
        <Reveal />
        <Keys />
        <CursorLabel />
        <Nav />
        <Rail />
        {children}
        <Footer />
      </body>
    </html>
  )
}
