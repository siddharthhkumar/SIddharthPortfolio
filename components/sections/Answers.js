import { faqs } from '@/data/faq'
import styles from './Answers.module.css'

/**
 * Straight answers.
 *
 * This section exists for two reasons and both of them matter.
 *
 * The first is the reader: someone deciding whether to send an email has four
 * or five specific questions, and making them infer the answers from a case
 * study is rude.
 *
 * The second is honesty about the markup. app/layout.js publishes an FAQPage
 * graph built from this same file, and structured data is only legitimate when
 * the content it describes is actually on the page. Shipping the schema with
 * nothing visible behind it would be exactly the kind of claim-without-evidence
 * the rest of this site refuses to make.
 *
 * Native <details>, so it opens without a line of JavaScript and works for a
 * keyboard the moment it renders.
 */
export default function Answers() {
  return (
    <section className="band" id="answers">
      <div className="wrap">
        <h2 className="sr">Straight answers</h2>

        <div className="marker" aria-hidden="true">
          <span className="dot" />
          <p className="m-label">Straight answers</p>
          <p className="m-label">{faqs.length} questions</p>
        </div>

        <div className={styles.layout}>
          <p className={`d-title ${styles.title}`} data-reveal>
            The questions people actually ask.
          </p>

          <div className={styles.list} data-reveal>
            {faqs.map((f, i) => (
              <details key={f.q} className={styles.item} name="answers">
                <summary className={styles.q}>
                  <span className={styles.n}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.qText}>{f.q}</span>
                  <span className={styles.mark} aria-hidden="true" />
                </summary>
                <p className={styles.a}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
