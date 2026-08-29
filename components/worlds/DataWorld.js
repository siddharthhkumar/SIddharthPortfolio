'use client'

import { useState } from 'react'
import Image from 'next/image'
import WorldFrame from './WorldFrame'
import styles from './DataWorld.module.css'
import { dataWorld } from '@/data/worlds'
import Reveal from '@/components/motion/Reveal'

/**
 * I · DATA — the worksheet.
 *
 * Composition: a ruled analytical surface. Everything sits on a visible
 * measure, labels are mono, and the argument runs left to right through five
 * stages. Selecting a stage reveals what was analysed, what it showed and what
 * it let someone decide. No fabricated dashboard anywhere — the two Power BI
 * images are the real ones.
 */
export default function DataWorld({ domain }) {
  return (
    <WorldFrame domain={domain} lede={domain.line}>
      {{
        title: (
          <Reveal variant="mask">
            <h1 className={styles.title}>Data</h1>
          </Reveal>
        ),
        body: (
          <>
            {/* Ruled ground, drawn once behind the whole world. */}
            <div className={styles.plane} aria-hidden="true" />

            <section className={`bay ${styles.capBay}`}>
              <Reveal variant="rise">
                <h2 className={`tag ${styles.sectionLabel}`}>Instruments</h2>
              </Reveal>
              <ul className={styles.caps}>
                {dataWorld.capabilities.map((cap, i) => (
                  <Reveal as="none" key={cap.name} variant="rise" delay={i * 55}>
                    <li className={styles.cap}>
                      <span className={`mono ${styles.capIndex}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className={`mono ${styles.capName}`}>{cap.name}</span>
                      <span className={styles.capNote}>{cap.note}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </section>

            <section className={`bay ${styles.workBay}`}>
              <Reveal variant="rise">
                <h2 className={`tag ${styles.sectionLabel}`}>The work, stage by stage</h2>
              </Reveal>
              <div className={styles.analyses}>
                {dataWorld.analyses.map((a, i) => (
                  <Analysis key={a.id} analysis={a} delay={i * 80} />
                ))}
              </div>
            </section>
          </>
        ),
      }}
    </WorldFrame>
  )
}

const STAGES = dataWorld.stages

function Analysis({ analysis, delay }) {
  const [stage, setStage] = useState(0)
  const key = STAGES[stage]

  return (
    <Reveal variant="rise" delay={delay} className={styles.analysis}>
      <header className={styles.aHead}>
        <h3 className={styles.aSubject}>{analysis.subject}</h3>
        <span className={`mono ${styles.aContext}`}>{analysis.context}</span>
      </header>

      {/* The pipeline. Reading it is the interaction. */}
      <ol className={styles.pipe}>
        {STAGES.map((s, i) => (
          <li key={s} className={styles.pipeItem}>
            <button
              type="button"
              className={`${styles.node} ${i === stage ? styles.nodeOn : ''} ${
                i < stage ? styles.nodeDone : ''
              }`}
              onMouseEnter={() => setStage(i)}
              onFocus={() => setStage(i)}
              onClick={() => setStage(i)}
              aria-current={i === stage ? 'step' : undefined}
            >
              <span className={styles.tick} aria-hidden="true" />
              <span className={`mono ${styles.nodeLabel}`}>{s}</span>
            </button>
            {i < STAGES.length - 1 && <span className={styles.wire} aria-hidden="true" />}
          </li>
        ))}
      </ol>

      <div className={styles.readout}>
        <span className={`mono ${styles.readoutKey}`}>{key}</span>
        <p className={styles.readoutText} role="status">
          {analysis.steps[key]}
        </p>
      </div>

      {analysis.image && (
        <div className={styles.shot}>
          <Image
            src={analysis.image}
            alt={`${analysis.subject} — Power BI dashboard`}
            width={900}
            height={506}
            sizes="(max-width: 900px) 100vw, 44vw"
            className={styles.shotImg}
          />
          <span className={`mono ${styles.shotCap}`}>Built in Power BI</span>
        </div>
      )}
    </Reveal>
  )
}
