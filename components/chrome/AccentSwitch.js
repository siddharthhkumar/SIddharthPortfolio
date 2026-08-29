'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme, themes } from '@/contexts/ThemeContext'
import styles from './AccentSwitch.module.css'

/** Four restrained accents. One is live at a time; the page never mixes them. */
export default function AccentSwitch() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className={styles.root} ref={rootRef}>
      {open && (
        <div className={styles.menu} role="radiogroup" aria-label="Accent colour">
          {Object.entries(themes).map(([key, data]) => (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={theme === key}
              className={`${styles.option} ${theme === key ? styles.active : ''}`}
              onClick={() => {
                setTheme(key)
                setOpen(false)
              }}
            >
              <span className={styles.chip} style={{ background: data.primary }} aria-hidden="true" />
              <span className="tag">{data.name}</span>
            </button>
          ))}
        </div>
      )}

      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Change accent colour"
      >
        <span className={styles.dot} aria-hidden="true" />
      </button>
    </div>
  )
}
