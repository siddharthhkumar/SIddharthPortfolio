import Image from 'next/image'
import profile from '@/data/profile'
import offClock from '@/data/offClock'
import current from '@/data/current'
import styles from './About.module.css'

/**
 * About, kept short.
 *
 * Two paragraphs and a column of facts. The four disciplines are not repeated
 * here as a grid of pillars — the whole page has already demonstrated them,
 * and a section that lists what you just read is padding.
 *
 * The portrait is the real photograph from the podium at Gautam Buddha
 * University, printed at a size that makes it a person rather than a headshot.
 */
export default function About() {
  const { about, education, contact, languages } = profile

  return (
    <section className="band band-sub" id="about">
      <div className="wrap">
        <div className="marker">
          <span className="dot" />
          <p className="m-label">{about.tag}</p>
        </div>

        <div className={styles.split}>
          <div className={styles.words} data-reveal>
            <h2 className={`d-title ${styles.title}`}>
              {about.title} <em className={styles.em}>{about.titleEm}</em>.
            </h2>

            <p className={styles.thesis}>{profile.opening}</p>

            <ul className={styles.bulletList}>
              {about.bullets.map((bullet, i) => {
                // Parse "**Key**: rest of sentence" → <strong>Key</strong>: rest
                const match = bullet.match(/^\*\*(.+?)\*\*:\s*(.+)$/)
                if (match) {
                  return (
                    <li key={i} className={`t-body ${styles.bulletItem}`}>
                      <strong>{match[1]}</strong>: {match[2]}
                    </li>
                  )
                }
                return <li key={i} className={`t-body ${styles.bulletItem}`}>{bullet}</li>
              })}
            </ul>

            <p className={`t-body ${styles.para}`}>{offClock.lines[1]}</p>

            <div className={styles.currentlySection} style={{ marginTop: '3rem' }}>
              <h3 className={`d-title`} style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Currently</h3>
              <dl className={styles.currentlyEntries}>
                {current.entries.map((e) => (
                  <div key={e.key} style={{ marginBottom: '1rem' }}>
                    <dt style={{ fontWeight: '600', color: 'var(--ink)' }}>{e.key}</dt>
                    <dd style={{ color: 'var(--ink-sub)' }}>
                      <span>{e.value}</span>
                      {e.note && <span style={{ display: 'block', fontSize: '0.85em', opacity: 0.8 }}>{e.note}</span>}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className={styles.aside} data-reveal style={{ '--d': '90ms' }}>
            <figure className={styles.portraitBox}>
              <Image
                src={about.image}
                alt={about.imageAlt}
                width={900}
                height={1600}
                sizes="(max-width: 900px) 92vw, 34vw"
                loading="lazy"
                className={styles.portrait}
              />
            </figure>

            <dl className={styles.facts}>
              <Fact term="Studied">
                {education.degree}
                <span className={styles.sub}>
                  {education.institution} · {education.period}
                </span>
              </Fact>

              <Fact term="Based in">{contact.location}</Fact>

              <Fact term="Languages">
                {languages.map((l) => (
                  <span key={l} className={styles.stacked}>
                    {l}
                  </span>
                ))}
              </Fact>

              <Fact term="Off the clock">
                {offClock.lines[0]}
              </Fact>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

function Fact({ term, children }) {
  return (
    <div className={styles.fact}>
      <dt className={styles.term}>{term}</dt>
      <dd className={styles.def}>{children}</dd>
    </div>
  )
}
