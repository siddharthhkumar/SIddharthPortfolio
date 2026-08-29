'use client'

import { useState } from 'react'
import styles from './DocumentFlow.module.css'

/**
 * DocuMind AI — the product, demonstrated rather than described.
 *
 * A document sits on the left. Stepping through the stages narrows it: the
 * page dims, one passage stays lit, a question appears, and the answer
 * arrives carrying its citation. Deliberately unlike the Gnosis chain — this
 * one is an interface, not a diagram.
 */
export default function DocumentFlow({ stages, caption }) {
  const [step, setStep] = useState(0)
  const stage = stages[step]

  return (
    <figure className={styles.flow}>
      <div className={styles.pane}>
        {/* ── Left: the document ── */}
        <div className={`${styles.page} ${styles[`s${step}`]}`} aria-hidden="true">
          <span className={`mono ${styles.pageMeta}`}>report.pdf — 52 pp</span>

          <div className={styles.lines}>
            {LINE_WIDTHS.map((width, i) => (
              <span
                key={i}
                className={`${styles.line} ${HIGHLIGHT.includes(i) ? styles.lineHit : ''}`}
                style={{ width: `${width}%`, '--i': i }}
              />
            ))}
          </div>

          <span className={`mono ${styles.pageCite}`}>p. 31</span>
        </div>

        {/* ── Right: the exchange ── */}
        <div className={styles.exchange}>
          <div className={`${styles.ask} ${step >= 3 ? styles.on : ''}`}>
            <span className={`tag ${styles.askLabel}`}>Question</span>
            <p className={styles.askText}>What does the report conclude about retention?</p>
          </div>

          <div className={`${styles.reply} ${step >= 4 ? styles.on : ''}`}>
            <span className={`tag ${styles.replyLabel}`}>Answer</span>
            <p className={styles.replyText}>
              <span className={styles.typing}>Grounded in the retrieved passage</span>
            </p>
            <span className={`mono ${styles.source}`}>
              <i aria-hidden="true" /> report.pdf · p. 31
            </span>
          </div>
        </div>
      </div>

      {/* ── Stepper ── */}
      <ol className={styles.steps}>
        {stages.map((s, i) => (
          <li key={s.key}>
            <button
              type="button"
              className={`${styles.step} ${i === step ? styles.stepOn : ''} ${
                i < step ? styles.stepDone : ''
              }`}
              onClick={() => setStep(i)}
              onMouseEnter={() => setStep(i)}
              onFocus={() => setStep(i)}
              aria-current={i === step ? 'step' : undefined}
            >
              <span className={`mono ${styles.stepNum}`}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.stepLabel}>{s.label}</span>
            </button>
          </li>
        ))}
      </ol>

      <p className={styles.note} role="status">
        {stage.note}
      </p>

      <figcaption className={`tag ${styles.caption}`}>{caption}</figcaption>
    </figure>
  )
}

// A page of prose, abstracted. The lit run is the passage that answers.
const LINE_WIDTHS = [96, 88, 92, 71, 94, 86, 90, 64, 93, 89, 82, 95, 76, 91, 87, 58]
const HIGHLIGHT = [8, 9, 10]
