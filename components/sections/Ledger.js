import ledger from '@/data/ledger'
import styles from './Ledger.module.css'

/**
 * The ledger.
 *
 * The one place on the page where the figures are allowed to be enormous.
 * Verb, figure, unit, and a line underneath saying where it came from — so a
 * number is never doing the work of a claim on its own.
 *
 * Every figure is recorded in research.js, leadership.js or projects.js. If a
 * row cannot point at one of those it does not go here.
 */
export default function Ledger() {
  return (
    <section className="band band-sub" id="ledger">
      <div className="wrap">
        <div className="marker">
          <span className="dot" />
          <p className="m-label">{ledger.label}</p>
        </div>

        <h2 className={`d-title ${styles.title}`} data-reveal>
          {ledger.title}
        </h2>

        <ol className={styles.rows}>
          {ledger.rows.map((r, i) => (
            <li
              key={r.verb}
              className={styles.row}
              data-tone={r.tone}
              data-reveal
              style={{ '--d': `${i * 55}ms` }}
            >
              <span className={styles.verb}>{r.verb}</span>

              <span className={styles.figureBox}>
                <span className={`d-mega ${styles.figure}`}>{r.figure}</span>
                <span className={styles.unit}>{r.unit}</span>
              </span>

              <span className={styles.note}>{r.note}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
