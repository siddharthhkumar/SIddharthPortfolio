import './layout.css'
import '@/styles/globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Siddharth Kumar — Business & Research Analyst',
  description: 'Portfolio of Siddharth Kumar - Business Analyst, Research Analyst, and Community Builder',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div id="cur"></div>
        <div id="cur-ring"></div>
        <Navigation />
        {children}
        <Footer />
        <script src="/cursor.js" />
      </body>
    </html>
  )
}
