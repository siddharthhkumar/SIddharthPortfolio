import styles from './Anatomy.module.css'

/**
 * How a project works, drawn.
 *
 * Reads `anatomy.stages` straight off the project, so the diagram can never
 * describe something the written record does not. Each stage gets a glyph that
 * means something specific — scattered points for raw data, a fitted line for
 * analysis, a cited passage for a grounded answer — rather than a generic icon.
 *
 * No client JavaScript. The reveal observer already puts `.in` on the wrapper
 * when it scrolls into view, and every animation here hangs off that class, so
 * the sequence plays once and costs nothing.
 */
export default function Anatomy({ anatomy }) {
  if (!anatomy?.stages?.length) return null
  const { stages, caption, mode } = anatomy

  return (
    <figure className={styles.figure} data-reveal>
      <div className={styles.track} role="img" aria-label={diagramLabel(caption, stages)}>
        {stages.map((s, i) => (
          <div key={s.key} className={styles.stage} style={{ '--i': i }}>
            <div className={styles.glyphBox}>
              <Glyph name={s.key} mode={mode} />
            </div>
            <p className={styles.stageLabel}>{s.label}</p>
            <p className={styles.stageNote}>{s.note}</p>
            {i < stages.length - 1 && <span className={styles.link} aria-hidden="true" />}
          </div>
        ))}
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  )
}

/** One sentence a screen reader can actually use instead of five loose nodes. */
function diagramLabel(caption, stages) {
  return `${caption}. ${stages.map((s, i) => `Step ${i + 1}, ${s.label}: ${s.note}`).join(' ')}`
}

/* ── Glyphs ────────────────────────────────────────────────
   Each is drawn on a 48×48 grid with a 1.6 stroke, so they read as one set.
   Animated parts carry a class the stylesheet drives. */
function Glyph({ name }) {
  const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

  switch (name) {
    // ── Gnosis ──
    case 'user':
      return (
        <Svg>
          <circle cx="24" cy="18" r="6.5" {...P} />
          <path d="M11.5 38c0-6.4 5.6-10.5 12.5-10.5S36.5 31.6 36.5 38" {...P} />
        </Svg>
      )

    case 'data':
      // Raw inputs: uneven, unsorted, no shape yet.
      return (
        <Svg>
          {[
            [12, 30, 5],
            [18, 22, 13],
            [24, 34, 9],
            [30, 18, 17],
            [36, 27, 21],
          ].map(([x, y, h], i) => (
            <line key={x} x1={x} y1={38} x2={x} y2={38 - h} {...P} className={styles.bar} style={{ '--n': i }} />
          ))}
        </Svg>
      )

    case 'analysis':
      // The same points, with a trend pulled through them.
      return (
        <Svg>
          <path d="M10 34c6-2 9-9 14-11s10 3 14-6" {...P} className={styles.draw} />
          {[
            [13, 31],
            [20, 24],
            [27, 22],
            [34, 20],
            [39, 15],
          ].map(([cx, cy], i) => (
            <circle key={cx} cx={cx} cy={cy} r="2.1" fill="currentColor" stroke="none" className={styles.dot} style={{ '--n': i }} />
          ))}
        </Svg>
      )

    case 'signals':
      // Three discrete calls, not a continuous reading.
      return (
        <Svg>
          <path d="M14 30V16m0 0l-4 4m4-4l4 4" {...P} className={styles.dot} style={{ '--n': 0 }} />
          <path d="M24 18v14m0 0l-4-4m4 4l4-4" {...P} className={styles.dot} style={{ '--n': 1 }} />
          <path d="M34 24h8" {...P} className={styles.dot} style={{ '--n': 2 }} />
          <path d="M31 36h14" {...P} opacity="0.28" />
        </Svg>
      )

    case 'decision':
      return (
        <Svg>
          <rect x="9" y="11" width="30" height="26" rx="4" {...P} />
          <path d="M9 18h30" {...P} opacity="0.4" />
          <path d="M16.5 27.5l4.5 4.5 9-10" {...P} className={styles.draw} />
        </Svg>
      )

    // ── DocuMind ──
    case 'document':
      return (
        <Svg>
          <path d="M14 8h13l8 8v24a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z" {...P} />
          <path d="M27 8v8h8" {...P} />
          {[22, 27, 32].map((y, i) => (
            <line key={y} x1="17" y1={y} x2={y === 32 ? 27 : 31} y2={y} {...P} opacity="0.5" className={styles.dot} style={{ '--n': i }} />
          ))}
        </Svg>
      )

    case 'meaning':
      // The page broken into comparable pieces.
      return (
        <Svg>
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <rect
              key={n}
              x={11 + (n % 3) * 10}
              y={16 + Math.floor(n / 3) * 11}
              width="8"
              height="9"
              rx="1.6"
              {...P}
              className={styles.dot}
              style={{ '--n': n }}
            />
          ))}
        </Svg>
      )

    case 'retrieval':
      // Only the pieces that bear on the question come back.
      return (
        <Svg>
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <rect
              key={n}
              x={9 + (n % 3) * 10}
              y={14 + Math.floor(n / 3) * 11}
              width="8"
              height="9"
              rx="1.6"
              {...P}
              opacity={n === 1 || n === 5 ? 1 : 0.22}
            />
          ))}
          <circle cx="32" cy="32" r="7" {...P} className={styles.draw} />
          <path d="M37 37l5 5" {...P} />
        </Svg>
      )

    case 'question':
      return (
        <Svg>
          <path d="M10 12h28a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H22l-8 7v-7h-4a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2z" {...P} />
          <path d="M20.5 19.5a3.5 3.5 0 1 1 4.6 3.3c-.9.3-1.1 1-1.1 1.9" {...P} className={styles.draw} />
          <circle cx="24" cy="28" r="1.3" fill="currentColor" stroke="none" />
        </Svg>
      )

    case 'answer':
      return (
        <Svg>
          <path d="M14 8h20a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z" {...P} />
          {[17, 22].map((y, i) => (
            <line key={y} x1="18" y1={y} x2="30" y2={y} {...P} opacity="0.45" className={styles.dot} style={{ '--n': i }} />
          ))}
          {/* The citation: the line that points back at its source. */}
          <line x1="18" y1="28" x2="27" y2="28" {...P} className={styles.draw} />
          <path d="M18 33h6" {...P} opacity="0.75" />
          <circle cx="30.5" cy="33" r="2.4" fill="currentColor" stroke="none" className={styles.pulseDot} />
        </Svg>
      )

    default:
      return (
        <Svg>
          <circle cx="24" cy="24" r="12" {...P} />
        </Svg>
      )
  }
}

function Svg({ children }) {
  return (
    <svg viewBox="0 0 48 48" className={styles.svg} aria-hidden="true" focusable="false">
      {children}
    </svg>
  )
}
