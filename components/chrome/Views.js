'use client'

import { useEffect, useState } from 'react'
import styles from './Views.module.css'

/**
 * How many people have opened this.
 *
 * One increment per browser session, held in sessionStorage — a reload should
 * not inflate the number and neither should React re-running an effect.
 *
 * If no store is configured (see VIEWS.md) the component renders nothing at
 * all rather than a zero or a placeholder. An invented figure on a portfolio
 * used for job applications is worse than no figure.
 */
export default function Views() {
  const [views, setViews] = useState(null)

  useEffect(() => {
    let cancelled = false

    const run = async () => {
      let counted = false
      try {
        counted = sessionStorage.getItem('sk:viewed') === '1'
      } catch {
        // Blocked storage. Counting once more is a smaller problem than
        // failing to show the number at all.
      }

      try {
        const res = await fetch('/api/views', { method: counted ? 'GET' : 'POST', cache: 'no-store' })
        if (!res.ok) return
        const data = await res.json()
        if (cancelled || typeof data.views !== 'number') return
        setViews(data.views)
        if (!counted) {
          try {
            sessionStorage.setItem('sk:viewed', '1')
          } catch {}
        }
      } catch {
        // Offline, or the route is unavailable. Nothing to show; nothing breaks.
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [])

  if (views === null) return null

  return (
    <span className={styles.views}>
      <span className={styles.label}>Opened</span>
      <span className={styles.n}>{views.toLocaleString('en-IN')}</span>
      <span className={styles.label}>times</span>
    </span>
  )
}
