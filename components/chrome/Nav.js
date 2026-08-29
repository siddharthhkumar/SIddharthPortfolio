'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'
import profile from '@/data/profile'
import domains from '@/data/domains'

/**
 * Contextual navigation.
 *
 * The bar carries three things and nothing else: who this is, where you
 * currently are, and a way in. No section list sits on screen permanently —
 * the eight pages live inside the panel, subordinate to the six disciplines,
 * because the disciplines are the structure of the site and the pages are
 * just addresses within it.
 *
 * No hamburger on desktop: the control is the word "Index".
 */

// Destinations that genuinely exist. Experience and Leadership are not
// homepage sections any more — that material lives inside the disciplines,
// so these point where it actually is rather than at a dead anchor.
const PAGES = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/practice/data', within: 'in Data & Operations' },
  { label: 'Work', href: '/#work' },
  { label: 'Research', href: '/practice/research', within: 'a discipline' },
  { label: 'Leadership', href: '/practice/social', within: 'in Social & Operations' },
  { label: 'Résumés', href: '/#resumes' },
  { label: 'Contact', href: '/#contact' },
]

// Homepage sections, used only to name where the reader currently is.
const SECTIONS = [
  { id: 'top', label: 'Opening' },
  { id: 'practice', label: 'The practice' },
  { id: 'work', label: 'Proof' },
  { id: 'about', label: 'The short version' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [lifted, setLifted] = useState(false)
  const [section, setSection] = useState('Opening')

  const activeDomain = domains.find((d) => pathname === d.route) || null

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Name the section in view — only meaningful on the hub.
  useEffect(() => {
    if (activeDomain) return
    const nodes = SECTIONS.map((s) => ({ s, el: document.getElementById(s.id) })).filter((x) => x.el)
    if (!nodes.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (!hit) return
        const match = SECTIONS.find((s) => s.id === hit.target.id)
        if (match) setSection(match.label)
      },
      { rootMargin: '-20% 0px -66% 0px', threshold: 0 }
    )

    nodes.forEach(({ el }) => io.observe(el))
    return () => io.disconnect()
  }, [activeDomain, pathname])

  // Close on route change, and lock the page while the panel is open.
  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header className={`${styles.bar} ${lifted ? styles.lifted : ''} ${open ? styles.barOver : ''}`}>
        <Link href="/" className={styles.mark}>
          <span className={styles.markName}>{profile.name}</span>
          <span className={`mono ${styles.markLine}`}>Business · Data · Product</span>
        </Link>

        {/* Where you are. The only thing in the bar that changes. */}
        <p className={styles.here} aria-live="polite">
          {activeDomain ? (
            <>
              <span
                className={styles.hereDot}
                style={{ '--c': activeDomain.accent }}
                aria-hidden="true"
              />
              <span className={`mono ${styles.hereNum}`}>{activeDomain.numeral}</span>
              <span className={styles.hereLabel}>{activeDomain.label}</span>
            </>
          ) : (
            <>
              <span className={styles.hereDot} aria-hidden="true" />
              <span className={`mono ${styles.hereLabel}`}>{section}</span>
            </>
          )}
        </p>

        <button
          type="button"
          className={styles.trigger}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="nav-panel"
        >
          <span className={styles.triggerWord}>{open ? 'Close' : 'Index'}</span>
          <span className={styles.triggerRule} aria-hidden="true" />
        </button>
      </header>

      <nav
        id="nav-panel"
        className={`${styles.panel} ${open ? styles.panelOpen : ''}`}
        aria-label="Site navigation"
        {...(open ? {} : { inert: '' })}
      >
        <div className={styles.panelInner}>
          {/* ── The six. The structure of the site. ── */}
          <div className={styles.practice}>
            <p className={`mono ${styles.panelLabel}`}>The practice</p>

            <ol className={styles.domains}>
              {domains.map((d, i) => {
                const current = activeDomain?.id === d.id
                return (
                  <li key={d.id} style={{ '--i': i, '--c': d.accent }}>
                    <Link
                      href={d.route}
                      className={`${styles.domain} ${current ? styles.domainOn : ''}`}
                      data-cursor="enter"
                    >
                      <span className={`mono ${styles.domainNum}`}>{d.numeral}</span>
                      <span className={styles.domainName}>{d.label}</span>
                      <span className={styles.domainLine}>{d.line}</span>
                      {current && (
                        <span className={`mono ${styles.youAreHere}`}>
                          <span className={styles.pulse} aria-hidden="true" />
                          Exploring
                        </span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ol>
          </div>

          {/* ── The eight. Addresses, deliberately quieter. ── */}
          <div className={styles.pages}>
            <p className={`mono ${styles.panelLabel}`}>Pages</p>

            <ul className={styles.pageList}>
              {PAGES.map((p, i) => (
                <li key={p.label} style={{ '--i': i }}>
                  <Link href={p.href} className={styles.page}>
                    <span className={styles.pageLabel}>{p.label}</span>
                    {p.within && <span className={`mono ${styles.pageWithin}`}>{p.within}</span>}
                  </Link>
                </li>
              ))}
            </ul>

            <div className={styles.panelFoot}>
              <a
                href={`mailto:${profile.contact.email}`}
                className={`mono ${styles.footLink}`}
                data-cursor="email"
              >
                {profile.contact.email}
              </a>
              <span className={`mono ${styles.footNote}`}>{profile.contact.location}</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
