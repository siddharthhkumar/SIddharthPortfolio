import Link from 'next/link'
import styles from './Tally.module.css'

/**
 * One hundred and ten marks.
 *
 * The survey behind the paper, counted out across the full width of the
 * window: one tick per student, and the thirty-two who disagreed with what
 * the University Stress Scale said about them drawn in the accent.
 *
 * It is a tally, not a plot. The positions carry no information and are not
 * pretending to — the count is the whole content, which is why the marks are
 * evenly spaced rather than scattered into a shape that would imply a
 * distribution nobody measured.
 *
 * Which thirty-two are marked is fixed rather than random: a small linear
 * congruential generator with a hard-coded seed, run once at build time. The
 * page renders identically on every load, and there is no client JavaScript
 * here at all.
 */
const TOTAL = 110
const DISAGREED = 32

/** Deterministic, so the server and the browser never disagree either. */
function pickDisagreed() {
  const order = Array.from({ length: TOTAL }, (_, i) => i)
  let seed = 32110
  for (let i = order.length - 1; i > 0; i--) {
    seed = (seed * 1103515245 + 12345) % 2147483648
    const j = seed % (i + 1)
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  return new Set(order.slice(0, DISAGREED))
}

const hits = pickDisagreed()

export default function Tally() {
  return (
    <div className={styles.tally}>
      <div className={styles.marks} aria-hidden="true">
        {Array.from({ length: TOTAL }, (_, i) => (
          <span
            key={i}
            className={styles.mark}
            data-hit={hits.has(i) ? 'true' : 'false'}
            style={{ '--i': i }}
          />
        ))}
      </div>

      <Link href="/work/research" className={styles.caption} data-cursor="The paper">
        <span className={styles.count}>110</span>
        <span className={styles.text}>
          students took the survey.{' '}
          <strong className={styles.strong}>Thirty-two disagreed</strong> with what it said about
          them.
        </span>
        <span className={styles.go} aria-hidden="true">
          →
        </span>
      </Link>
    </div>
  )
}
