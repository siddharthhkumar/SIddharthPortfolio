import WorldFrame from './WorldFrame'
import styles from './ResearchWorld.module.css'
import { researchWorld } from '@/data/worlds'
import research from '@/data/research'
import Reveal from '@/components/motion/Reveal'

/**
 * VI · RESEARCH — the journal.
 *
 * The only world that inverts to paper. Composition: journal front matter,
 * an abstract set at a reading measure, a numbered method, and a figure plate
 * showing the study's structure.
 *
 * The plate deliberately shows shape, not results. Accuracy, F1 and the
 * winning model are not recorded in any verified source, so this page states
 * that rather than drawing a chart it cannot source.
 */
export default function ResearchWorld({ domain }) {
  return (
    <WorldFrame domain={domain} light>
      {{
        title: (
          <>
            <Reveal variant="rise">
              <p className={`mono ${styles.journal}`}>
                Journal of Intelligent Computing System &nbsp;·&nbsp; May 2026
              </p>
            </Reveal>
            <Reveal variant="mask" delay={80}>
              <h1 className={styles.title}>{research.title}</h1>
            </Reveal>
            <Reveal variant="rise" delay={200}>
              <p className={styles.byline}>
                <span className={styles.authors}>
                  {research.authors.map((a, i) => (
                    <span key={a.name} className={a.self ? styles.authorSelf : styles.author}>
                      {a.name}
                      <sup className={styles.mark}>
                        {a.mark}
                        {a.corresponding ? '*' : ''}
                      </sup>
                      {i < research.authors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </span>
                <span className={styles.affil}>
                  {research.department}, {research.affiliation}
                </span>
                <span className={`mono ${styles.corr}`}>* Corresponding author</span>
              </p>
            </Reveal>
          </>
        ),
        body: (
          <>
            {/* ── Front matter ── */}
            <section className={`bay ${styles.frontBay}`}>
              <dl className={styles.front}>
                {researchWorld.frontMatter.map((f, i) => (
                  <Reveal as="none" key={f.key} variant="rise" delay={i * 55}>
                    <div className={styles.frontRow}>
                      <dt className={`mono ${styles.frontKey}`}>{f.key}</dt>
                      <dd className={styles.frontVal}>{f.value}</dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </section>

            {/* ── Abstract ── */}
            <section className={`bay ${styles.absBay}`}>
              <div className={styles.absGrid}>
                <Reveal variant="rise" className={styles.absLabelWrap}>
                  <h2 className={`mono ${styles.absLabel}`}>Abstract</h2>
                </Reveal>
                <Reveal variant="rise" delay={90} className={styles.absBody}>
                  <p className={styles.abstract}>{research.abstract}</p>
                </Reveal>
              </div>
            </section>

            {/* ── Figure 1: the study, drawn ── */}
            <section className={`bay ${styles.figBay}`}>
              <Reveal variant="rise" className={styles.plate}>
                <div className={styles.plateFrame}>
                  <StudyPlate />
                </div>
                <p className={styles.plateCaption}>
                  <span className={`mono ${styles.figNum}`}>Fig. 1</span>
                  Study structure — a 110-participant survey instrumented with the USS-21 scale,
                  split into two comparable feature families and passed through supervised
                  classification with cross-validation.
                </p>
              </Reveal>

              <ol className={styles.figures}>
                {researchWorld.figures.map((f, i) => (
                  <Reveal as="none" key={f.label} variant="rise" delay={i * 90}>
                    <li className={styles.figure}>
                      <span className={styles.figValue}>{f.n}</span>
                      <span className={styles.figLabel}>{f.label}</span>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </section>

            {/* ── Method ── */}
            <section className={`bay ${styles.methodBay}`}>
              <Reveal variant="rise">
                <h2 className={`mono ${styles.sectionLabel}`}>Method</h2>
              </Reveal>
              <ol className={styles.method}>
                {researchWorld.method.map((m, i) => (
                  <Reveal as="none" key={m.n} variant="rise" delay={i * 70}>
                    <li className={styles.step}>
                      <span className={`mono ${styles.stepNum}`}>{m.n}</span>
                      <div className={styles.stepBody}>
                        <h3 className={styles.stepLabel}>{m.label}</h3>
                        <p className={styles.stepText}>{m.body}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </section>

            {/* ── Results, as published ── */}
            <section className={`bay ${styles.resultBay}`}>
              <Reveal variant="rise">
                <h2 className={`mono ${styles.sectionLabel}`}>Results</h2>
              </Reveal>

              <Reveal variant="rise" delay={80} className={styles.tableWrap}>
                <table className={styles.table}>
                  <caption className={styles.tableCaption}>
                    <span className={`mono ${styles.figNum}`}>Table 1</span>
                    {researchWorld.tableFull.caption}
                  </caption>
                  <thead>
                    <tr>
                      {researchWorld.tableFull.columns.map((c, i) => (
                        <th key={c} scope="col" className={i === 0 ? styles.thModel : styles.thNum}>
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {researchWorld.tableFull.rows.map((r) => (
                      <tr key={r.model} className={r.best ? styles.rowBest : undefined}>
                        <th scope="row" className={styles.tdModel}>
                          {r.model}
                        </th>
                        <td className={`mono ${styles.tdNum}`}>{r.acc.toFixed(3)}</td>
                        <td className={`mono ${styles.tdNum}`}>{r.mcc.toFixed(3)}</td>
                        <td className={`mono ${styles.tdNum}`}>{r.f1.toFixed(3)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Reveal>

              <Reveal variant="rise" delay={140} className={styles.tableWrap}>
                <table className={styles.table}>
                  <caption className={styles.tableCaption}>
                    <span className={`mono ${styles.figNum}`}>Table 2</span>
                    {researchWorld.tableConfigs.caption}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col" className={styles.thModel}>
                        Configuration
                      </th>
                      <th scope="col" className={styles.thNum}>
                        Accuracy
                      </th>
                      <th scope="col" className={styles.thNum}>
                        MCC
                      </th>
                      <th scope="col" className={styles.thNum}>
                        Weighted F1
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {researchWorld.tableConfigs.rows.map((r) => (
                      <tr key={r.model}>
                        <th scope="row" className={styles.tdModel}>
                          {r.model}
                          {r.note && <span className={styles.rowNote}>{r.note}</span>}
                        </th>
                        <td className={`mono ${styles.tdNum}`}>{r.acc.toFixed(3)}</td>
                        <td className={`mono ${styles.tdNum}`}>{r.mcc.toFixed(3)}</td>
                        <td className={`mono ${styles.tdNum}`}>{r.f1.toFixed(3)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Reveal>
            </section>

            {/* ── Fig. 2: what students said against what the scale said ── */}
            <section className={`bay ${styles.matrixBay}`}>
              <Reveal variant="rise" className={styles.matrixWrap}>
                <div className={styles.matrix}>
                  <span className={`mono ${styles.axisSelf}`}>Self-reported</span>
                  <span className={`mono ${styles.axisUss}`}>USS-derived</span>
                  <span className={`mono ${styles.hHigh}`}>High</span>
                  <span className={`mono ${styles.hLow}`}>Low</span>
                  <span className={`mono ${styles.vHigh}`}>High</span>
                  <span className={`mono ${styles.vLow}`}>Low</span>

                  {researchWorld.perception.cells.map((c) => (
                    <span
                      key={`${c.self}-${c.uss}`}
                      className={`${styles.cell} ${
                        c.agree ? styles.cellAgree : styles.cellDisagree
                      }`}
                      style={{ '--w': c.n / 43 }}
                    >
                      <span className={styles.cellN}>{c.n}</span>
                    </span>
                  ))}
                </div>

                <p className={styles.plateCaption}>
                  <span className={`mono ${styles.figNum}`}>Fig. 2</span>
                  {researchWorld.perception.caption}. {researchWorld.perception.agreement} agreed
                  with the scale; {researchWorld.perception.disagreement} did not.
                </p>
              </Reveal>
            </section>

            {/* ── Findings ── */}
            <section className={`bay ${styles.findBay}`}>
              <Reveal variant="rise">
                <h2 className={`mono ${styles.sectionLabel}`}>Findings</h2>
              </Reveal>

              <ol className={styles.findings}>
                {researchWorld.findings.map((f, i) => (
                  <Reveal as="none" key={f} variant="rise" delay={i * 70}>
                    <li className={styles.findingItem}>
                      <span className={`mono ${styles.findingNum}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className={styles.findingText}>{f}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>

              <Reveal variant="rise" delay={160}>
                <p className={styles.omission}>
                  <span className={`mono ${styles.noteMark}`}>Limitation</span>
                  {researchWorld.limitation}
                </p>
              </Reveal>

              <Reveal variant="rise" delay={220} className={styles.access}>
                <a
                  href={research.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`link ${styles.paperLink}`}
                  data-cursor="paper"
                >
                  Read the full paper
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </a>
                <span className={`mono ${styles.methods}`}>
                  {research.methods.join(' · ')}
                </span>
              </Reveal>
            </section>
          </>
        ),
      }}
    </WorldFrame>
  )
}

/** The study's shape, drawn as a journal plate. No values are asserted. */
function StudyPlate() {
  return (
    <svg
      viewBox="0 0 640 210"
      className={styles.svg}
      role="img"
      aria-label="Diagram of the study structure: 110 participants surveyed with the USS-21 scale, split into psychological and lifestyle feature families, compared through supervised classification with cross-validation."
    >
      <line x1="26" y1="184" x2="614" y2="184" className={styles.axis} />
      <line x1="26" y1="20" x2="26" y2="184" className={styles.axis} />

      {/* The cohort, drawn as a mass rather than asserted as a number */}
      <g className={styles.cohort}>
        {Array.from({ length: 110 }).map((_, i) => (
          <circle key={i} cx={42 + (i % 22) * 6} cy={40 + Math.floor(i / 22) * 9} r="2.1" />
        ))}
      </g>
      <text x="42" y="104" className={styles.plateText}>
        110 participants
      </text>
      <text x="42" y="122" className={styles.plateTextMuted}>
        USS-21 scale
      </text>

      {/* Split into two comparable feature families */}
      <line x1="184" y1="72" x2="258" y2="48" className={styles.link} />
      <line x1="184" y1="72" x2="258" y2="118" className={styles.link} />

      <rect x="258" y="30" width="146" height="34" className={styles.box} />
      <text x="270" y="52" className={styles.plateText}>
        Psychological
      </text>

      <rect x="258" y="100" width="146" height="34" className={styles.box} />
      <text x="270" y="122" className={styles.plateText}>
        Lifestyle
      </text>

      <line x1="404" y1="47" x2="452" y2="76" className={styles.link} />
      <line x1="404" y1="117" x2="452" y2="88" className={styles.link} />

      <rect x="452" y="58" width="158" height="48" className={styles.boxLive} />
      <text x="466" y="80" className={styles.plateText}>
        Supervised
      </text>
      <text x="466" y="98" className={styles.plateText}>
        classification
      </text>

      <line x1="531" y1="106" x2="531" y2="146" className={styles.link} />
      <text x="452" y="164" className={styles.plateTextMuted}>
        Cross-validated
      </text>
    </svg>
  )
}
