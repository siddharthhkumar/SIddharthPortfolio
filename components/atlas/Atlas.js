'use client'

import { useCallback, useRef, useState } from 'react'
import styles from './Atlas.module.css'
import domains from '@/data/domains'
import Reveal from '@/components/motion/Reveal'
import { useDomainFocus } from './DomainFocus'
import { useTransition } from '@/components/transition/TransitionProvider'
import DomainMotif from './DomainMotif'

/**
 * The atlas.
 *
 * Six portals, set as an index rather than a card grid. Considering one shifts
 * the whole page — accent, atmosphere, the type register of that row, the
 * motif in the plate, and the matching node in the hero armature. Entering one
 * hands off to the transition engine, which grows that world's atmosphere from
 * the exact point that was clicked.
 */
export default function Atlas() {
  const [active, setActive] = useState(-1)
  const { setFocus } = useDomainFocus()
  const { enterWorld } = useTransition()
  const listRef = useRef(null)

  const consider = useCallback(
    (index) => {
      setActive(index)
      setFocus(index)
    },
    [setFocus]
  )

  const release = useCallback(() => {
    setActive(-1)
    setFocus(-1)
  }, [setFocus])

  const open = useCallback(
    (event, domain) => {
      event.preventDefault()
      const rect = event.currentTarget.getBoundingClientRect()
      // Grow the destination from where the visitor actually pressed.
      const x = event.clientX || rect.left + rect.width / 2
      const y = event.clientY || rect.top + rect.height / 2
      enterWorld(domain, {
        x: (x / window.innerWidth) * 100,
        y: (y / window.innerHeight) * 100,
      })
    },
    [enterWorld]
  )

  const current = active >= 0 ? domains[active] : null

  return (
    <section
      id="practice"
      className={styles.atlas}
      style={
        current
          ? { '--accent': current.accent, '--accent-rgb': current.accentRgb }
          : undefined
      }
    >
      {/* Atmosphere. One layer per world, cross-faded — not a repaint. */}
      <div className={styles.sky} aria-hidden="true">
        {domains.map((d, i) => (
          <span
            key={d.id}
            className={`${styles.skyLayer} ${i === active ? styles.skyOn : ''}`}
            style={{ '--d-accent': d.accent, '--d-ground': d.ground }}
          />
        ))}
      </div>

      <div className={styles.head}>
        <Reveal variant="rise">
          <p className="tag">
            <span className={styles.headIndex}>02</span> The practice
          </p>
        </Reveal>
        <Reveal variant="draw" className={styles.headRule} />
        <Reveal variant="rise" delay={110}>
          <p className={`display ${styles.headKicker}`}>
            Six disciplines. <em>One way of working.</em>
          </p>
        </Reveal>
      </div>

      <div className={styles.body}>
        <ol className={styles.list} ref={listRef} onMouseLeave={release}>
          {domains.map((domain, i) => (
            <Reveal as="none" key={domain.id} variant="rise" delay={i * 70}>
              <li
                className={`${styles.row} ${active === i ? styles.rowOn : ''} ${
                  active > -1 && active !== i ? styles.rowOff : ''
                }`}
                style={{ '--d-accent': domain.accent }}
              >
                <a
                  href={domain.route}
                  className={`${styles.portal} ${styles[domain.register]}`}
                  onMouseEnter={() => consider(i)}
                  onFocus={() => consider(i)}
                  onBlur={release}
                  onClick={(e) => open(e, domain)}
                  data-cursor="enter"
                  aria-describedby={`atlas-note-${domain.id}`}
                >
                  <span className={`mono ${styles.numeral}`}>{domain.numeral}</span>

                  <span className={styles.label}>{domain.label}</span>

                  <span className={styles.meta} id={`atlas-note-${domain.id}`}>
                    <span className={styles.line}>{domain.line}</span>
                    <span className={styles.covers}>
                      {domain.covers.slice(0, 3).map((c) => (
                        <span key={c} className={`mono ${styles.cover}`}>
                          {c}
                        </span>
                      ))}
                    </span>
                  </span>

                  {/* A figure only where a real one exists. The rows are
                      deliberately unequal — three carry numbers, three carry a
                      line of evidence, because that is the honest shape of the
                      work. */}
                  <span className={styles.evidence}>
                    {domain.evidence.length > 0
                      ? domain.evidence.map((e) => (
                          <span key={e.label} className={styles.stat}>
                            <span className={`figure ${styles.statValue}`}>{e.value}</span>
                            <span className={styles.statLabel}>{e.label}</span>
                          </span>
                        ))
                      : domain.proof && (
                          <span className={`mono ${styles.proof}`}>{domain.proof}</span>
                        )}
                  </span>

                  <span className={styles.arrow} aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13L13 3M13 3H5.5M13 3v7.5" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ol>

        {/* The plate: what that discipline looks like, drawn. */}
        <Reveal variant="rise" delay={200} className={styles.plate}>
          <DomainMotif domain={current} />
        </Reveal>
      </div>
    </section>
  )
}
