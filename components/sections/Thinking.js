import thinking from '@/data/thinking'
import styles from './Thinking.module.css'

/**
 * How I think.
 *
 * The explanation for why the work looks scattered. Four questions in the
 * order they actually get asked, each stamped with the discipline that
 * answers it and footed with something already in the record.
 *
 * Drawn as a descending stair rather than four equal cards, because the
 * point is that they happen in sequence — the shape has to carry that, or the
 * section is just a values grid with better copy.
 */
export default function Thinking() {
  return (
    <section className="band" id="thinking">
      <div className="wrap">
        <div className="marker">
          <span className="dot" />
          <p className="m-label">{thinking.label}</p>
        </div>

        <div className={styles.head}>
          <h2 className={`d-title ${styles.title}`} data-reveal>
            {thinking.title}
          </h2>
          <p className={`t-lede ${styles.lede}`} data-reveal style={{ '--d': '90ms' }}>
            {thinking.lede}
          </p>
        </div>

        <ol className={styles.stair}>
          {thinking.steps.map((s, i) => (
            <li
              key={s.n}
              className={styles.step}
              style={{ '--i': i, '--d': `${i * 70}ms` }}
              data-tone={s.tone}
              data-reveal
            >
              <div className={styles.stepHead}>
                <span className={styles.n}>{s.n}</span>
                <span className={styles.discipline}>{s.discipline}</span>
              </div>

              <h3 className={`d-head ${styles.question}`}>{s.question}</h3>
              <p className={styles.body}>{s.body}</p>

              <p className={styles.proof}>
                <span className={styles.proofMark} aria-hidden="true" />
                {s.proof}
              </p>
            </li>
          ))}
        </ol>

        {/* The fifth question. Deliberately not part of the numbered set —
            it is the habit underneath the sequence, not another step in it. */}
        <div className={styles.coda} data-reveal>
          <p className={styles.codaLead}>{thinking.coda.line}</p>
          <p className={`d-title ${styles.codaQ}`}>{thinking.coda.question}</p>
          <p className={`t-body ${styles.codaBody}`}>{thinking.coda.body}</p>
        </div>
      </div>
    </section>
  )
}
