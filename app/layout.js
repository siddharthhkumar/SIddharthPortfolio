import { Archivo, Fraunces, IBM_Plex_Mono } from 'next/font/google'
import '@/styles/globals.css'
import Nav from '@/components/chrome/Nav'
import SideRail from '@/components/chrome/SideRail'
import AccentSwitch from '@/components/chrome/AccentSwitch'
import Cursor from '@/components/chrome/Cursor'
import Footer from '@/components/chrome/Footer'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { TransitionProvider } from '@/components/transition/TransitionProvider'
import profile from '@/data/profile'

// Archivo over the usual grotesques: it has a squarer, more engineered
// skeleton that holds up at label sizes without reading as a UI default.
const sans = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

// Fraunces carries optical sizing, so the same face can be a quiet 18px
// caption and a 7rem headline without looking like two different decisions.
const display = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const DESCRIPTION =
  'Siddharth Kumar works across data, operations, product, content and research. Recruitment and logistics analysis, a four-person product team, a university community built from nothing, and a peer-reviewed paper on student stress.'

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
      'Most of my work starts where an assumption stops holding. Data, operations, product, social, content and research.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siddharth Kumar — Product, Data & Business',
    description:
      'Most of my work starts where an assumption stops holding.',
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
