'use client'

import { useState } from 'react'
import WorldFrame from './WorldFrame'
import styles from './ProductWorld.module.css'
import { productWorld } from '@/data/worlds'
import projects from '@/data/projects'
import Reveal from '@/components/motion/Reveal'
import SystemChain from '@/components/visuals/SystemChain'
import DocumentFlow from '@/components/visuals/DocumentFlow'

/**
 * II · PRODUCT — the studio.
 *
 * Composition: two long-form case studies, each opened by its own product
 * anatomy. The beats are a numbered spine down the left with the argument on
 * the right — a spec sheet, not a card grid. The two diagrams are the ones
 * built for these exact products.
 */
export default function ProductWorld({ domain }) {
  return (
    <WorldFrame domain={domain} lede={domain.line}>
      {{
        title: (
          <Reveal variant="mask">
            <h1 className={styles.title}>Product</h1>
          </Reveal>
        ),
        body: (
          <>
            {/* The arc, stated once at the top and never repeated. */}
            <section className={`bay ${styles.arcBay}`}>
              <ol className={styles.arc}>
                {productWorld.arc.map((step, i) => (
                  <Reveal as="none" key={step} variant="rise" delay={i * 70}>
                    <li className={styles.arcStep}>
                      <span className={`mono ${styles.arcNum}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className={styles.arcLabel}>{step}</span>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </section>

            {productWorld.cases.map((study, i) => (
              <CaseStudy key={study.id} study={study} order={i} />
            ))}
          </>
        ),
      }}
    </WorldFrame>
  )
}

function CaseStudy({ study, order }) {
  const project = projects.find((p) => p.id === study.id)
  const [openBeat, setOpenBeat] = useState(0)

  return (
    <article className={`bay ${styles.case}`}>
      <header className={styles.caseHead}>
        <Reveal variant="rise" className={styles.caseMeta}>
          <span className={`mono ${styles.caseNum}`}>
            {String(order + 1).padStart(2, '0')} / Case study
          </span>
          <span className={`mono ${styles.caseKind}`}>{study.kind}</span>
        </Reveal>

        <Reveal variant="mask" delay={80}>
          <h2 className={`display ${styles.caseName}`}>{project.name}</h2>
        </Reveal>

        <Reveal variant="rise" delay={160} className={styles.caseStanding}>
          <span className={styles.standing}>{study.standing}</span>
          <span className={`mono ${styles.casePeriod}`}>{project.period}</span>
        </Reveal>
      </header>

      {/* The product itself, shown before it is described. */}
      <Reveal variant="lift" delay={100} className={styles.anatomy}>
        {project.anatomy?.mode === 'document' ? (
          <DocumentFlow stages={project.anatomy.stages} caption={project.anatomy.caption} />
        ) : (
          <SystemChain stages={project.anatomy.stages} caption={project.anatomy.caption} />
        )}
      </Reveal>

      {/* Beats: a spine on the left, the argument on the right. */}
      <div className={styles.beats}>
        <ol className={styles.spine}>
          {study.beats.map((beat, i) => (
            <li key={beat.key}>
              <button
                type="button"
                className={`${styles.beatTab} ${i === openBeat ? styles.beatOn : ''}`}
                onMouseEnter={() => setOpenBeat(i)}
                onFocus={() => setOpenBeat(i)}
                onClick={() => setOpenBeat(i)}
                aria-current={i === openBeat ? 'true' : undefined}
              >
                <span className={`mono ${styles.beatNum}`}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.beatLabel}>{beat.label}</span>
              </button>
            </li>
          ))}
        </ol>

        <div className={styles.beatBody}>
          <Reveal variant="rise" className={styles.beatPanel}>
            <p className={styles.beatText} role="status" key={study.beats[openBeat].key}>
              {study.beats[openBeat].body}
            </p>
          </Reveal>
        </div>
      </div>

      <footer className={styles.caseFoot}>
        <div className={styles.stackWrap}>
          <span className={`tag ${styles.stackLabel}`}>Built with</span>
          <ul className={styles.stack}>
            {project.stack.map((tech) => (
              <li key={tech} className={`mono ${styles.tech}`}>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {study.caveat && <p className={styles.caveat}>{study.caveat}</p>}

        <div className={styles.links}>
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`link ${styles.link}`}
              data-cursor="open"
            >
              {link.label}
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </a>
          ))}
        </div>
      </footer>
    </article>
  )
}
