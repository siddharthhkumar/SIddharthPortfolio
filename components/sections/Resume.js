import { resumeGroups } from '@/data/resumes'
import styles from './Resume.module.css'

/**
 * Six résumés, filed.
 *
 * One document describing everything describes nothing, so there are six and
 * each one is written for the role it is going to. The note under each says
 * when to use it — which is really an instruction to a recruiter, so it is
 * written as one.
 *
 * Every file exists in public/resumes/. Nothing here links to a document that
 * has not been produced.
 */
export default function Resume() {
  return (
    <section className="band" id="resume">
      <div className="wrap">
        <div className="marker">
          <span className="dot" />
          <p className="m-label">Résumé</p>
          <p className="m-label">Pick the one that fits</p>
        </div>

        <h2 className={`d-title ${styles.title}`} data-reveal>
          Six of them, because one would be vague.
        </h2>

        <div className={styles.groups}>
          {resumeGroups.map((g) => (
            <div key={g.id} className={styles.group} data-reveal>
              <div className={styles.groupHead}>
                <h3 className={styles.groupTitle}>{g.label}</h3>
                <p className={styles.groupBlurb}>{g.blurb}</p>
              </div>

              <ul className={styles.files}>
                {g.resumes.map((r) => (
                  <li key={r.id}>
                    <a href={r.file} className={styles.file} target="_blank" rel="noopener noreferrer">
                      <span className={styles.tab} aria-hidden="true" />

                      <span className={styles.fileMain}>
                        <span className={styles.role}>{r.role}</span>
                        <span className={styles.targets}>{r.targets}</span>
                        <span className={styles.when}>{r.when}</span>
                      </span>

                      <span className={styles.get}>PDF ↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
