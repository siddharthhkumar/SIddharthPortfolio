import current from '@/data/current'
import Views from '@/components/chrome/Views'
import styles from './Currently.module.css'

/**
 * Currently.
 *
 * The part of the site that is supposed to go out of date, which is the whole
 * point of putting a date on it. Everything is edited in data/current.js —
 * one file, four lines, and the date at the top of it drives the printed
 * label in the hero, the strip here and the footer.
 *
 * Drawn as a pinned index card, because that is what it is: a note to whoever
 * is reading, replaced when it stops being true.
 *
 * The view counter is only mounted when a store is actually configured. It
 * always hid itself when there was nothing to show, but it hid itself after
 * a fetch — one request, on every page load, to be told null.
 */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function printed(iso) {
  const d = new Date(`${iso}T00:00:00Z`)
  return `${String(d.getUTCDate()).padStart(2, '0')} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`
}

/** Whether a view store is configured. See VIEWS.md. */
const countable = Boolean(
  (process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL) &&
    (process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN)
)

export default function Currently() {
  return (
    <section className="band" id="currently">
      <div className="wrap">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <div className="marker">
              <span className="dot" />
              <p className="m-label">Currently</p>
            </div>

            <h2 className={`d-title ${styles.title}`} data-reveal>
              What I am in the middle of.
            </h2>
          </div>

          <div className={styles.card} data-reveal>
            <span className={styles.pin} aria-hidden="true" />

            <dl className={styles.entries}>
              {current.entries.map((e) => (
                <div key={e.key} className={styles.entry}>
                  <dt className={styles.key}>{e.key}</dt>
                  <dd className={styles.value}>
                    <span className={styles.headline}>{e.value}</span>
                    {e.note && <span className={styles.note}>{e.note}</span>}
                  </dd>
                </div>
              ))}
            </dl>

            <p className={styles.next}>{current.next}</p>

            <div className={styles.stamp}>
              <span className={styles.stampItem}>
                <span className={styles.stampKey}>Last edited</span>
                <time dateTime={current.updated} className={styles.stampVal}>
                  {printed(current.updated)}
                </time>
              </span>

              <span className={styles.stampItem}>
                <span className={styles.stampKey}>Version</span>
                <span className={styles.stampVal}>{current.version}</span>
              </span>

              <span className={styles.stampItem}>
                <span className={styles.stampKey}>Status</span>
                <span className={styles.stampVal}>
                  <span className={styles.live} aria-hidden="true" />
                  Online
                </span>
              </span>

              {countable && <Views />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
