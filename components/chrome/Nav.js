'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import styles from './Nav.module.css'

/**
 * The navigation, as an object.
 *
 * A single floating pill rather than a bar across the top — it sits on the
 * page the way a paper tab sits on a desk, and it never spans the full width.
 * Five destinations is the whole of it. The résumé stays visible at every
 * width because it is the one thing a recruiter is looking for.
 *
 * Links are hashes on the home page and absolute paths from a case study, so
 * "Work" always goes somewhere sensible no matter which page you are on.
 */
const LINKS = [
  { hash: '#work', label: 'Work' },
  { hash: '#thinking', label: 'Thinking' },
  { hash: '#leadership', label: 'Leadership' },
  { hash: '#about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [home, setHome] = useState(true)
  const [hidden, setHidden] = useState(false)

  // Whether hash links can stay hashes. Read after mount so the markup is
  // identical on the server for every route.
  useEffect(() => {
    setHome(window.location.pathname === '/')
  }, [])

  // The pill retreats on the way down and comes back on the way up, so it is
  // never sitting on top of the thing you scrolled to read.
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > 260 && y > last)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape closes the sheet; so does the viewport going wide again, which
  // would otherwise leave it open and invisible behind the desktop layout.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 861px)')
    const onWide = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onWide)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onWide)
    }
  }, [open])

  const to = (hash) => (home ? hash : `/${hash}`)

  return (
    <header className={`${styles.shell} ${hidden && !open ? styles.away : ''}`}>
      <div className={styles.pill}>
        <Link href="/" className={styles.mark} aria-label="Siddharth Kumar — home">
          <span className={styles.monogram} aria-hidden="true">
            SK
          </span>
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.hash} href={to(l.hash)} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href={to('#contact')} className={styles.cta}>
          <span className={styles.ctaDot} aria-hidden="true" />
          Get in touch
        </a>

        <ThemeToggle />

        <button
          type="button"
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`${styles.bars} ${open ? styles.barsOpen : ''}`} aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      {open && (
        <nav className={styles.sheet} aria-label="Menu">
          {LINKS.map((l) => (
            <a
              key={l.hash}
              href={to(l.hash)}
              className={styles.sheetLink}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href={to('#contact')} className={styles.sheetLink} onClick={() => setOpen(false)}>
            Contact
          </a>
          <a href={to('#resume')} className={styles.sheetLink} onClick={() => setOpen(false)}>
            Résumé
          </a>
        </nav>
      )}
    </header>
  )
}
