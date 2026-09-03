import { skillGroups } from '@/data/skills'
import certifications, { honours } from '@/data/certifications'
import styles from './Toolkit.module.css'

/**
 * The toolkit.
 *
 * Four columns of plain lists. No proficiency bars, no percentages, no five
 * stars out of five — none of those would mean anything, and a recruiter
 * reading this knows it.
 *
 * The certifications sit underneath at the size certifications deserve: real,
 * worth listing, not worth a section of their own. Names are exactly as
 * issued; no credential IDs or completion dates have been invented.
 */
export default function Toolkit() {
  return (
    <section className="band band-sub" id="toolkit">
      <div className="wrap">
        <h2 className="sr">What I work with</h2>

        <div className="marker" aria-hidden="true">
          <span className="dot" />
          <p className="m-label">What I work with</p>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((g, i) => (
            <div key={g.id} className={styles.group} data-reveal style={{ '--d': `${i * 50}ms` }}>
              <h3 className={styles.groupTitle}>{g.title}</h3>
              <p className={styles.caption}>{g.caption}</p>
              <ul className={styles.skills}>
                {/* Six each. A longer list does not read as more capable, it
                    reads as unedited. */}
                {g.skills.slice(0, 6).map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.certs} data-reveal>
          <p className={`m-label ${styles.certLabel}`}>Certified · {certifications.length}</p>
          <ul className={styles.certList}>
            {certifications.map((c) => (
              <li key={c.name} className={styles.cert}>
                <span className={styles.certName}>{c.name}</span>
                {c.issuer && <span className={styles.certIssuer}>{c.issuer}</span>}
              </li>
            ))}
            {honours.map((h) => (
              <li key={h.name} className={`${styles.cert} ${styles.honour}`}>
                <span className={styles.certName}>{h.name}</span>
                <span className={styles.certIssuer}>{h.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
