'use client'

import { useState } from 'react'
import styles from './SystemChain.module.css'

/**
 * Gnosis AI — product anatomy.
 *
 * A signal chain: the question enters on the left and leaves as a decision on
 * the right. Hovering or focusing a stage lights the path up to that point,
 * so the reader can feel where in the system they are. Pure DOM + CSS.
 */
export default function SystemChain({ stages, caption }) {
  const [active, setActive] = useState(-1)

  return (
    <figure className={styles.chain}>
      <ol className={styles.track} onMouseLeave={() => setActive(-1)}>
        {stages.map((stage, i) => (
          <li
            key={stage.key}
            className={`${styles.stage} ${i <= active ? styles.lit : ''}`}
            style={{ '--i': i }}
          >
            <button
              type="button"
              className={styles.node}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-describedby={`stage-${stage.key}`}
            >
              <span className={styles.dot} aria-hidden="true" />
              <span className={`mono ${styles.index}`}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.label}>{stage.label}</span>
            </button>

            <p id={`stage-${stage.key}`} className={styles.note}>
              {stage.note}
            </p>

            {i < stages.length - 1 && <span className={styles.wire} aria-hidden="true" />}
          </li>
        ))}
      </ol>

      <figcaption className={`tag ${styles.caption}`}>{caption}</figcaption>
    </figure>
  )
}
