'use client'

import { useCallback, useEffect, useState } from 'react'
import { switchTheme } from '@/components/motion/themeSwitch'
import styles from './Keys.module.css'

/**
 * Keyboard shortcuts, and the card that explains them.
 *
 * Hidden, but not secret: press ? and a printed card appears with the whole
 * list on it. Nothing here is required to use the site, and every shortcut is
 * a single unmodified key, so it stays out of the browser's way.
 *
 * The guard matters more than the feature. If focus is inside a field, or a
 * modifier is held, or the visitor is midway through a native find, this does
 * nothing at all — a portfolio that swallows Ctrl+F is a worse portfolio.
 */
const ROWS = [
  { keys: ['?'], what: 'Show this card' },
  { keys: ['T'], what: 'Switch day / night' },
  { keys: ['W'], what: 'Jump to selected work' },
  { keys: ['R'], what: 'Jump to the résumés' },
  { keys: ['C'], what: 'Jump to contact' },
  { keys: ['Esc'], what: 'Close' },
]

const THEMES = ['light', 'dark']

export default function Keys() {
  const [open, setOpen] = useState(false)

  const cycleTheme = useCallback(() => {
    const root = document.documentElement
    const os = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const now = root.getAttribute('data-theme') || os
    const next = now === 'dark' ? 'light' : 'dark'

    // From the keyboard there is nothing to start the wipe from, so it opens
    // from the middle of the screen.
    switchTheme(() => {
      root.setAttribute('data-theme', next)
      try {
        localStorage.setItem('theme', next)
      } catch {}
    })

    // The toggle in the nav reads its own state on mount, so nudge it.
    window.dispatchEvent(new CustomEvent('sk:theme', { detail: next }))
  }, [])

  const jump = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    else window.location.href = `/#${id}`
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return

      const el = document.activeElement
      const tag = el?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el?.isContentEditable) {
        return
      }

      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key === '?') {
        e.preventDefault()
        setOpen((v) => !v)
        return
      }

      switch (e.key.toLowerCase()) {
        case 't':
          cycleTheme()
          break
        case 'w':
          jump('work')
          break
        case 'r':
          jump('resume')
          break
        case 'c':
          jump('contact')
          break
        default:
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [cycleTheme, jump])

  if (!open) return null

  return (
    <div
      className={styles.scrim}
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard shortcuts"
    >
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <div className={styles.head}>
          <p className="m-label">Keyboard</p>
          <button type="button" className={styles.close} onClick={() => setOpen(false)}>
            Close
          </button>
        </div>

        <dl className={styles.rows}>
          {ROWS.map((r) => (
            <div key={r.what} className={styles.row}>
              <dt className={styles.keys}>
                {r.keys.map((k) => (
                  <kbd key={k} className={styles.kbd}>
                    {k}
                  </kbd>
                ))}
              </dt>
              <dd className={styles.what}>{r.what}</dd>
            </div>
          ))}
        </dl>

        <p className={styles.foot}>
          Nothing here is necessary. It is just faster if you already know it is there.
        </p>
      </div>
    </div>
  )
}
