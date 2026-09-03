import Tagline from './Tagline'
import Cassette from './Cassette'
import Tally from './Tally'
import Ambience from '@/components/world/Ambience'
import tagline from '@/data/taglines'
import current from '@/data/current'
import styles from './Hero.module.css'

/**
 * The hero, at full height.
 *
 * Written for someone who has never heard of him. A greeting, one sentence in
 * plain words with one word that changes, one sentence saying what that means
 * in practice, and two ways in. Nothing on this screen needs a second reading
 * or any prior knowledge, which is the entire brief for it.
 *
 * Three bands stacked into one viewport: the rail of printed facts across the
 * top, the sentence and the cassette through the middle, and the survey tally
 * running the full width of the window along the floor.
 *
 * There used to be a second object here — a paper slip printed with 110 / 78 /
 * 32. The tally says the same thing at the size of the window, so the slip was
 * saying it twice. It is gone.
 */
const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

function printed(iso) {
  const d = new Date(`${iso}T00:00:00Z`)
  return `${String(d.getUTCDate()).padStart(2, '0')} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`
}

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <span className={styles.rules} aria-hidden="true" />

      {/* ── The rail. Four printed facts, no larger than they need to be ── */}
      <div className={`wrap ${styles.rail}`}>
        <p className={`m-label ${styles.railItem}`}>
          <Pin />
          Noida, India
        </p>

        <p className={`m-label ${styles.railItem}`}>
          <span className={styles.live} aria-hidden="true" />
          Open to work
        </p>

        <p className={`m-label ${styles.railItem} ${styles.railEnd}`}>
          <time dateTime={current.updated}>Updated {printed(current.updated)}</time>
        </p>

        <p className={`m-label ${styles.railItem} ${styles.railVersion}`}>v{current.version}</p>
      </div>

      {/* ── The middle ─────────────────────────────────────────────────── */}
      <div className={`wrap ${styles.main}`}>
        {/* Printed up the spine. Three words, and the order is the argument. */}
        <p className={styles.spine} aria-hidden="true">
          Product <span className={styles.slash}>/</span> Operations{' '}
          <span className={styles.slash}>/</span> Data
        </p>

        <div className={styles.left}>
          <p className={styles.greeting}>
            <span className={styles.greetDot} aria-hidden="true" />
            {tagline.greetingLead}{' '}
            <strong className={styles.greetName}>{tagline.greetingName}</strong>
          </p>

          <Tagline />

          {/* The sentence takes the full measure; the explanation and the
              object share the row underneath it. Nothing overlaps, and the
              headline is never squeezed into a column beside a card. */}
          <div className={styles.below}>
            <div className={styles.says}>
              <p className={styles.plain}>{tagline.plain}</p>

              <div className={styles.actions}>
                <a href="#work" className={styles.primary}>
                  See the work
                  <span aria-hidden="true">→</span>
                </a>
                <a href="#resume" className={styles.secondary}>
                  Résumé
                </a>
              </div>
            </div>

            <div className={styles.objects}>
              <Cassette />
              <Ambience />
            </div>
          </div>
        </div>
      </div>

      {/* ── The floor ──────────────────────────────────────────────────── */}
      <div className={`wrap ${styles.floor}`}>
        <Tally />
      </div>
    </section>
  )
}

function Pin() {
  return (
    <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true" focusable="false">
      <path
        d="M6 1a3.4 3.4 0 0 0-3.4 3.4C2.6 7 6 11 6 11s3.4-4 3.4-6.6A3.4 3.4 0 0 0 6 1Zm0 4.7a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Z"
        fill="currentColor"
      />
    </svg>
  )
}
