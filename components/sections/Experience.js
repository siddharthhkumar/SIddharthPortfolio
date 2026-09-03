import experience, { featuredExperienceIds } from '@/data/experience'
import styles from './Experience.module.css'

/**
 * Experience, without the timeline.
 *
 * A dated list is a résumé, and there is already a résumé. This is closer to
 * a masthead: the year set large in the margin, the company at heading size,
 * and two or three lines of what the work actually consisted of.
 *
 * Three roles carry their detail — two lines each, not three — and the rest
 * collapse to a single ruled line, because listing eight internships at equal
 * weight tells a reader nothing about which ones mattered.
 */
const featured = new Set(featuredExperienceIds)

/** The first four-digit year in the period string, set large in the margin. */
const startYear = (period) => period.match(/\d{4}/)?.[0] ?? ''

export default function Experience() {
  const lead = experience.filter((r) => featured.has(r.id))
  const rest = experience.filter((r) => !featured.has(r.id))

  return (
    <section className="band" id="experience">
      <div className="wrap">
        <h2 className="sr">Experience</h2>

        <div className="marker" aria-hidden="true">
          <span className="dot" />
          <p className="m-label">Experience</p>
          <p className="m-label">{experience.length} roles</p>
        </div>

        <div className={styles.lead}>
          {lead.map((r, i) => (
            <article key={r.id} className={styles.role} data-reveal style={{ '--d': `${i * 60}ms` }}>
              <div className={styles.when}>
                <span className={styles.year}>{startYear(r.period)}</span>
                <span className={styles.span}>{r.period}</span>
                {r.current && (
                  <span className={styles.now}>
                    <span className={styles.dot} aria-hidden="true" />
                    Now
                  </span>
                )}
              </div>

              <div className={styles.what}>
                <h3 className={`d-head ${styles.company}`}>{r.company}</h3>
                <p className={styles.title}>
                  {r.title} · {r.focus}
                  {r.location && <span className={styles.place}> · {r.location}</span>}
                </p>

                <p className={styles.summary}>{r.summary}</p>

                {r.bullets.length > 0 && (
                  <ul className={styles.bullets}>
                    {r.bullets.slice(0, 2).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}

                <ul className={styles.tags}>
                  {r.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* The rest, at the weight they deserve. */}
        <div className={styles.also} data-reveal>
          <p className={`m-label ${styles.alsoLabel}`}>And before that</p>
          <ul className={styles.compact}>
            {rest.map((r) => (
              <li key={r.id} className={styles.line}>
                <span className={styles.lineWhen}>{r.period}</span>
                <span className={styles.lineWho}>{r.company}</span>
                <span className={styles.lineWhat}>{r.focus}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
