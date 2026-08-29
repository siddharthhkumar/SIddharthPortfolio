import { DM_Sans, DM_Mono, Instrument_Serif } from 'next/font/google'
import '@/styles/globals.css'
import Nav from '@/components/chrome/Nav'
import SideRail from '@/components/chrome/SideRail'
import AccentSwitch from '@/components/chrome/AccentSwitch'
import Cursor from '@/components/chrome/Cursor'
import Footer from '@/components/chrome/Footer'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { TransitionProvider } from '@/components/transition/TransitionProvider'
import profile from '@/data/profile'

const sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const mono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const DESCRIPTION =
  'B.Tech Information Technology graduate working across business and data analysis, operations, product prototyping, digital growth and content. Lead author of peer-reviewed machine-learning research.'

export const metadata = {
  metadataBase: new URL('https://s-iddharth-portfolio.vercel.app'),
  title: {
    default: 'Siddharth Kumar — Product, Data & Business',
    template: '%s — Siddharth Kumar',
  },
  description: DESCRIPTION,
  keywords: [
    'Siddharth Kumar',
    'Business Analyst',
    'Data Analyst',
    'Product Manager',
    'Operations Analyst',
    'SEO Content Writer',
    'Social Media Manager',
    'Power BI',
    'SQL',
    'Portfolio',
  ],
  authors: [{ name: 'Siddharth Kumar' }],
  creator: 'Siddharth Kumar',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Siddharth Kumar',
    title: 'Siddharth Kumar — Product, Data & Business',
    description:
      'The number on the dashboard is never the whole story. Work across business, data, product, operations and digital growth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siddharth Kumar — Product, Data & Business',
    description:
      'The number on the dashboard is never the whole story.',
  },
  robots: { index: true, follow: true },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0b0c',
  colorScheme: 'dark',
}

// Structured data. Every field maps to something already verified in data/.
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: 'Business, Data & Product',
  description: DESCRIPTION,
  email: `mailto:${profile.contact.email}`,
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: profile.education.institution,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  sameAs: [profile.social.linkedin, profile.social.github, profile.social.instagram],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider>
          <TransitionProvider>
            <a href="#main" className="skip">
              Skip to content
            </a>
            <Cursor />
            <Nav />
            <SideRail />
            {children}
            <Footer />
            <AccentSwitch />
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
