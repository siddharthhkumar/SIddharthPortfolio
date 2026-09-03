import { leadership } from '@/data/leadership'
import ContactSheet from '@/components/visual/ContactSheet'
import styles from './Leadership.module.css'

/**
 * Everything run outside a job.
 *
 * The community page has its own slot in Selected Work, so it is not repeated
 * here — this is the rest: a developer chapter, a national hackathon's media
 * desk, a film society founded from nothing, and two smaller chapters.
 *
 * The headline on each is the point of it; the stats are secondary and set
 * small, because "20+ member creative team" is only interesting once you know
 * he founded the thing they were a team for.
 *
 * The contact sheet closes the band, running the full width of the window.
 * It belongs here rather than in a section of its own: every frame on it was
 * shot at one of the things listed above.
 */
const SKIP = new Set(['gbu-community'])

export default function Leadership() {
  const items = leadership.filter((l) => !SKIP.has(l.id))

  return (
    <section className="band band-sub" id="leadership">
      <div className="wrap">
        <div className="marker">
          <span className="dot" />
          <p className="m-label">Led, founded, organised</p>
        </div>

        <div className={styles.head}>
          <h2 className={`d-title ${styles.title}`} data-reveal>
            The part that was never anyone&rsquo;s job.
          </h2>
          <p className={`t-lede ${styles.lede}`} data-reveal style={{ '--d': '80ms' }}>
            Four years of campus work, none of it assigned. It is where the writing, the
            photography and most of what I know about getting people to turn up came from.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((l, i) => (
            <article
              key={l.id}
              className={styles.item}
              data-reveal
              style={{ '--d': `${i * 60}ms` }}
            >
              <div className={styles.itemHead}>
                <p className={styles.role}>{l.role}</p>
                <p className={styles.period}>{l.period}</p>
              </div>

              <h3 className={styles.headline}>{l.headline}</h3>
              <p className={styles.org}>{l.org}</p>

              {l.stats.length > 0 && (
                <dl className={styles.stats}>
                  {l.stats.map((s) => (
                    <div key={s.label} className={styles.stat}>
                      <dt className={styles.statValue}>{s.value}</dt>
                      <dd className={styles.statLabel}>{s.label}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <ul className={styles.details}>
                {l.details.slice(0, 2).map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              {/* Only where a real URL exists. A card with no link simply
                  does not show one. */}
              {l.link?.href && (
                <a
                  className={styles.out}
                  href={l.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor={l.link.label}
                >
                  {l.link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Edge to edge. A contact sheet is a physical object roughly a metre
          wide; cropping it into a text column wastes the one thing it has. */}
      <div className={styles.sheet} data-reveal>
        <ContactSheet />
      </div>
    </section>
  )
}
