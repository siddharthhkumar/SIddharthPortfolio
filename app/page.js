import Hero from '@/components/hero/Hero'
import Selected from '@/components/work/Selected'
import Ledger from '@/components/sections/Ledger'
import Experience from '@/components/sections/Experience'
import Toolkit from '@/components/sections/Toolkit'
import Thinking from '@/components/sections/Thinking'
import Leadership from '@/components/sections/Leadership'
import Recognition from '@/components/sections/Recognition'
import About from '@/components/sections/About'
import Answers from '@/components/sections/Answers'
import Resume from '@/components/sections/Resume'
import TableOfContents from '@/components/nav/TableOfContents'

/**
 * The home page.
 *
 * A server component from top to bottom — the only client JavaScript on the
 * page is the nav, the theme toggle, the tagline, the cassette transport, the
 * view counter and the single reveal observer. Everything else, including
 * every diagram and the colour-grading demo, is HTML, CSS and SVG.
 *
 * The order is an argument, not a template:
 *
 *   Hero          who he is and what he does, in words anyone can read
 *   Résumé         all six, immediately. A recruiter who came for one
 *                  document should not have to scroll past a case study to
 *                  find it; everyone else scrolls straight past it.
 *   Ledger         the figures, large — the fastest possible read of the CV
 *   Selected       the work those figures came out of
 *   Thinking       how he works, and why the range is one habit not four
 *   Experience     where that happened, and for whom
 *   Leadership     the range that no job asked for
 *   Recognition    the two documents a stranger can open and check
 *   Toolkit        what it was all done with
 *   About         the short version, for anyone who scrolled to it first
 *   Answers       the four or five specific questions, answered plainly
 *
 * Contact is the footer, in app/layout.js — a separate section above it would
 * be the same four links twice.
 */
export default function Home() {
  return (
    <main id="main">
      <Hero />
      <TableOfContents />
      <Resume />
      <Ledger />
      <Selected />
      <Thinking />
      <Experience />
      <Leadership />
      <Recognition />
      <Toolkit />
      <About />
      <Answers />
    </main>
  )
}
