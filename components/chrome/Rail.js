'use client'

import { useEffect, useState } from 'react'
import styles from './Rail.module.css'

/**
 * Where you are on a long page.
 *
 * A column of ticks down the right edge, one per band. The one you are in is
 * drawn longer and in the accent; hovering the rail prints the names beside
 * them. It is a scrollbar that knows what the sections are called.
 *
 * Two things keep it from being decoration. It is a real control — every tick
 * is a button that scrolls to its section, reachable by keyboard, with a
 * proper accessible name. And it removes itself entirely below 1100px, where
 * there is no margin to put it in and the page is being thumbed rather than
 * navigated.
 *
 * It also stays out of the way of the hero. The first screen is a composition
 * and twelve ticks in its margin are twelve marks it did not ask for, so the
 * rail fades in only once the hero has been scrolled past.
 *
 * The active section is decided by one IntersectionObserver with a band-shaped
 * root margin, not by arithmetic on scroll position.
 */
// Must stay in the same order as the sections in app/page.js — the ticks are
// a map of the page, and a map in the wrong order is worse than none.
const SECTIONS = [
  { id: 'resume', label: 'Résumé' },
  { id: 'ledger', label: 'The ledger' },
  { id: 'ask-me', label: 'Ask anything' },
  { id: 'work', label: 'Selected work' },
  { id: 'thinking', label: 'How I think' },
  { id: 'experience', label: 'Experience' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'about', label: 'About' },
  { id: 'answers', label: 'Answers' },
  { id: 'contact', label: 'Contact' },
]

export default function Rail() {
  const [active, setActive] = useState(null)
  const [shown, setShown] = useState(false)
  const [past, setPast] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(min-width: 1100px)').matches) return
    if (!('IntersectionObserver' in window)) return

    const nodes = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean)
    if (!nodes.length) return

    setShown(true)

    // A narrow band across the middle of the viewport: whichever section is
    // crossing it is the one being read.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    nodes.forEach((n) => io.observe(n))

    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  if (!shown) return null

  return (
    <nav className={styles.rail} data-past={past ? 'true' : 'false'} aria-label="Sections on this page">
      <ul className={styles.list}>
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              className={styles.tick}
              data-on={active === s.id ? 'true' : 'false'}
              onClick={() =>
                document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
              aria-label={`Go to ${s.label}`}
              aria-current={active === s.id ? 'true' : undefined}
            >
              <span className={styles.name}>{s.label}</span>
              <span className={styles.line} aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
