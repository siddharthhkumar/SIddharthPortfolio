'use client'

import { useState } from 'react'
import WorldFrame from './WorldFrame'
import styles from './OperationsWorld.module.css'
import { operationsWorld } from '@/data/worlds'
import Reveal from '@/components/motion/Reveal'

/**
 * III · OPERATIONS — the control surface.
 *
 * Composition: horizontal and systematic. A live flow diagram across the top
 * showing how information actually moves through a business, then the systems
 * he has run, set as a register with their indicators. Nothing decorative —
 * this world should look like something you operate.
 */
export default function OperationsWorld({ domain }) {
  const [stage, setStage] = useState(-1)

  return (
    <WorldFrame domain={domain} lede={domain.line}>
      {{
        title: (
          <Reveal variant="mask">
            <h1 className={styles.title}>Operations</h1>
          </Reveal>
        ),
        body: (
          <>
            {/* ── The flow ── */}
            <section className={`bay ${styles.flowBay}`}>
              <Reveal variant="rise">
                <h2 className={`tag ${styles.label}`}>How information moves</h2>
              </Reveal>

              <div className={styles.flow} onMouseLeave={() => setStage(-1)}>
                <span className={styles.track} aria-hidden="true" />
                <span
                  className={styles.charge}
                  style={{ '--p': stage < 0 ? 0 : (stage + 1) / operationsWorld.flow.length }}
                  aria-hidden="true"
                />

                <ol className={styles.stations}>
                  {operationsWorld.flow.map((s, i) => (
                    <li key={s.key} className={styles.stationItem}>
                      <button
                        type="button"
                        className={`${styles.station} ${i <= stage ? styles.stationLit : ''}`}
                        onMouseEnter={() => setStage(i)}
                        onFocus={() => setStage(i)}
                        onBlur={() => setStage(-1)}
                      >
                        <span className={styles.box} aria-hidden="true">
                          <span className={styles.boxCore} />
                        </span>
                        <span className={styles.stationLabel}>{s.label}</span>
                        <span className={styles.stationNote}>{s.note}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* ── Capabilities, as a control list ── */}
            <section className={`bay ${styles.capBay}`}>
              <ul className={styles.caps}>
                {operationsWorld.capabilities.map((cap, i) => (
                  <Reveal as="none" key={cap} variant="rise" delay={i * 50}>
                    <li className={styles.cap}>
                      <span className={styles.capDot} aria-hidden="true" />
                      <span className={`mono ${styles.capName}`}>{cap}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </section>

            {/* ── Systems run ── */}
            <section className={`bay ${styles.sysBay}`}>
              <Reveal variant="rise">
                <h2 className={`tag ${styles.label}`}>Systems run</h2>
              </Reveal>

              <ol className={styles.systems}>
                {operationsWorld.systems.map((sys, i) => (
                  <Reveal as="none" key={sys.id} variant="rise" delay={i * 80}>
                    <li className={styles.system}>
                      <div className={styles.sysBar} aria-hidden="true">
                        <span className={`mono ${styles.sysIndex}`}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className={styles.sysRule} />
                      </div>

                      <div className={styles.sysMain}>
                        <header className={styles.sysHead}>
                          <h3 className={styles.sysName}>{sys.name}</h3>
                          <span className={`mono ${styles.sysPeriod}`}>{sys.period}</span>
                        </header>
                        <p className={styles.sysRole}>{sys.role}</p>
                        <p className={styles.sysBody}>{sys.body}</p>

                        {sys.indicators.length > 0 && (
                          <dl className={styles.indicators}>
                            {sys.indicators.map((ind) => (
                              <div key={ind.label} className={styles.indicator}>
                                <dt className={`mono ${styles.indValue}`}>{ind.value}</dt>
                                <dd className={styles.indLabel}>{ind.label}</dd>
                              </div>
                            ))}
                          </dl>
                        )}
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </section>
          </>
        ),
      }}
    </WorldFrame>
  )
}
