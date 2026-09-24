import { resumeGroups, resumes } from '@/data/resumes'
import styles from './Resume.module.css'

/**
 * Résumés, filed.
 *
 * One document describing everything describes nothing, so there are several
 * and each one is written for the role it is going to. The note under each
 * says when to use it — which is really an instruction to a recruiter, so it
 * is written as one.
 *
 * The count in the headline is read from the data, not typed — a résumé
 * removed from data/resumes.js (a broken PDF link, say) can't leave a stale
 * "six" behind.
 *
 * Every file exists in public/resumes/. Nothing here links to a document that
 * has not been produced.
 */
const NUMBER_WORDS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight']

export default function Resume() {
  const count = NUMBER_WORDS[resumes.length] || String(resumes.length)

  return (
    <section className="band" id="resume">
      <div className="wrap">
        <div className="marker">
          <span className="dot" />
          <p className="m-label">Résumé</p>
          <p className="m-label">Pick the one that fits</p>
        </div>

        <h2 className={`d-title ${styles.title}`} data-reveal>
          {count} of them, because one would be vague.
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
                  <li key={r.id} className={styles.fileWrap}>
                    <span className={styles.folderTab} data-tone={r.tone} aria-hidden="true">
                      {r.disciplineLabel}
                    </span>

                    <a
                      href={r.file}
                      className={styles.file}
                      data-tone={r.tone}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Download ${r.downloadLabel || r.role} (PDF)`}
                    >
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
