'use client'

import { useEffect, useState } from 'react'
import { switchTheme, centreOf } from '@/components/motion/themeSwitch'
import styles from './ThemeToggle.module.css'

/**
 * Paper, charcoal, or whatever the machine says.
 *
 * Three states, not two. "Auto" is the default and stamps nothing on the
 * root, so the page follows the OS; choosing paper or charcoal stamps
 * data-theme and wins over it. The choice is written to localStorage and
 * re-applied by the inline script in the head before first paint — without
 * that, a dark-mode visitor gets a paper-white flash on every load.
 *
 * One button rather than three, because it lives inside the nav pill and
 * three would double its width. The accessible name always says both where
 * you are and where the next press goes, so it is never a mystery control.
 */
const ORDER = ['light', 'dark']

const NAMES = {
  light: 'Day',
  dark: 'Night',
}

export default function ThemeToggle() {
  const [mode, setMode] = useState('auto')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let saved = null
    try {
      saved = localStorage.getItem('theme')
    } catch {
      // Private mode or blocked storage. Following the OS is a fine outcome.
    }
    // Two states, and the machine still gets a say: with nothing stored the
     // button shows whichever the operating system is already asking for, so
     // a dark-mode visitor's first press goes to day rather than back to
     // where they started.
    const os = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    setMode(ORDER.includes(saved) ? saved : os)
    setReady(true)
  }, [])

  // The keyboard shortcut (T) changes the theme without going through this
  // button, so listen for it — otherwise the icon and the page disagree.
  useEffect(() => {
    const sync = (e) => ORDER.includes(e.detail) && setMode(e.detail)
    window.addEventListener('sk:theme', sync)
    return () => window.removeEventListener('sk:theme', sync)
  }, [])

  const next = ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length]

  const advance = (event) => {
    setMode(next)

    // The whole page changes in one frame; the wipe is what makes that read
    // as a deliberate change rather than a flicker. It starts from this
    // button, so the theme looks like it comes out of the control.
    switchTheme(() => {
      document.documentElement.setAttribute('data-theme', next)
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* storage blocked — the choice still applies for this session */
      }
    }, centreOf(event.currentTarget))
  }

  return (
    <button
      type="button"
      className={styles.btn}
      onClick={advance}
      // Rendered inert until the stored choice is known, so the icon can
      // never briefly show the wrong state.
      data-ready={ready ? 'true' : 'false'}
      data-mode={mode}
      aria-label={`Theme: ${NAMES[mode]}. Switch to ${NAMES[next]}.`}
      title={`Theme: ${NAMES[mode]}`}
    >
      <span className={styles.icon} aria-hidden="true">
        {/* Sun, moon and a half-and-half disc for auto. One SVG, three
            states, switched by opacity so the change reads as a dissolve. */}
        <svg viewBox="0 0 20 20" width="16" height="16" focusable="false">
          <g className={styles.sun}>
            <circle cx="10" cy="10" r="3.6" fill="currentColor" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
              <line
                key={a}
                x1="10"
                y1="1.8"
                x2="10"
                y2="3.6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                transform={`rotate(${a} 10 10)`}
              />
            ))}
          </g>
          <path
            className={styles.moon}
            d="M15.6 12.4A6.6 6.6 0 0 1 7.6 4.4a6.6 6.6 0 1 0 8 8Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </button>
  )
}
