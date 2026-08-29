'use client'

import styles from './SideRail.module.css'
import profile from '@/data/profile'

/**
 * A quiet vertical rail: the year, a hairline, and the two links a recruiter
 * actually opens. Only appears when there is genuine room beside the column.
 */
export default function SideRail() {
  return (
    <aside className={styles.rail} aria-label="Elsewhere">
      <span className={`tag ${styles.year}`}>Portfolio — 2026</span>
      <span className={styles.line} />
      <a
        href={profile.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`tag ${styles.link}`}
        data-cursor="open"
      >
        LinkedIn
      </a>
      <a
        href={profile.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`tag ${styles.link}`}
        data-cursor="open"
      >
        GitHub
      </a>
    </aside>
  )
}
