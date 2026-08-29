import WorldFrame from './WorldFrame'
import styles from './ContentWorld.module.css'
import { contentWorld } from '@/data/worlds'
import Reveal from '@/components/motion/Reveal'

/**
 * V · CONTENT — the publication.
 *
 * Composition: typography carries everything. A masthead, a thesis set as a
 * dropped-cap opening across real columns, three artifacts that genuinely
 * exist, and the engagements as a back-of-book index. No client logos, no
 * invented bylines, no fabricated article covers.
 */
export default function ContentWorld({ domain }) {
  return (
    <WorldFrame domain={domain}>
      {{
        title: (
          <>
            <Reveal variant="mask">
              <h1 className={styles.title}>Content</h1>
            </Reveal>
            <Reveal variant="rise" delay={140}>
              <p className={`mono ${styles.masthead}`}>
                Writing &amp; editorial &nbsp;·&nbsp; Siddharth Kumar &nbsp;·&nbsp; Vol. V
              </p>
            </Reveal>
          </>
        ),
        body: (
          <>
            {/* ── Opening: a real column setting ── */}
            <section className={`bay ${styles.openBay}`}>
              <Reveal variant="rise" className={styles.opening}>
                <p className={styles.thesis}>{contentWorld.thesis}</p>
              </Reveal>
            </section>

            {/* ── What gets written ── */}
            <section className={`bay ${styles.kindsBay}`}>
              <div className={styles.kindsGrid}>
                <Reveal variant="rise" className={styles.kindsCol}>
                  <h2 className={`tag ${styles.colLabel}`}>Writing</h2>
                  <ul className={styles.kinds}>
                    {contentWorld.writing.map((w) => (
                      <li key={w} className={styles.kind}>
                        {w}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal variant="rise" delay={110} className={styles.kindsCol}>
                  <h2 className={`tag ${styles.colLabel}`}>Research &amp; audience</h2>
                  <ul className={styles.kinds}>
                    {contentWorld.research.map((w) => (
                      <li key={w} className={styles.kind}>
                        {w}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </section>

            {/* ── Artifacts: three things that exist ── */}
            <section className={`bay ${styles.artBay}`}>
              <Reveal variant="rise">
                <h2 className={`tag ${styles.sectionLabel}`}>Selected work</h2>
              </Reveal>

              <ol className={styles.artifacts}>
                {contentWorld.artifacts.map((a, i) => (
                  <Reveal as="none" key={a.id} variant="rise" delay={i * 90}>
                    <li className={styles.artifact}>
                      <div className={styles.artRail}>
                        <span className={`mono ${styles.artNum}`}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className={`mono ${styles.artKind}`}>{a.kind}</span>
                      </div>

                      <div className={styles.artBody}>
                        <h3 className={styles.artTitle}>{a.title}</h3>
                        <p className={styles.artText}>{a.body}</p>
                        <p className={`mono ${styles.artMeta}`}>{a.meta}</p>
                        {a.href && (
                          <a
                            href={a.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`link ${styles.artLink}`}
                            data-cursor="paper"
                          >
                            {a.cta}
                          </a>
                        )}
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </section>

            {/* ── Engagements: back-of-book index ── */}
            <section className={`bay ${styles.indexBay}`}>
              <Reveal variant="rise">
                <h2 className={`tag ${styles.sectionLabel}`}>Where it was written</h2>
              </Reveal>

              <ul className={styles.index}>
                {contentWorld.engagements.map((e, i) => (
                  <Reveal as="none" key={e.id} variant="rise" delay={i * 70}>
                    <li className={styles.entry}>
                      <div className={styles.entryHead}>
                        <h3 className={styles.entryName}>{e.name}</h3>
                        <span className={styles.leaders} aria-hidden="true" />
                        <span className={`mono ${styles.entryPeriod}`}>{e.period}</span>
                      </div>
                      <p className={styles.entryBody}>{e.body}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </section>
          </>
        ),
      }}
    </WorldFrame>
  )
}
