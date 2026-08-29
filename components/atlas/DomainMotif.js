'use client'

import styles from './DomainMotif.module.css'

/**
 * The plate beside the index.
 *
 * Each discipline gets a drawing of how it actually looks when you do it — a
 * coordinate plane, an exploded assembly, a process line, a set of frames, a
 * page, a figure plate. Six different visual languages, one drawing style, so
 * they read as plates from the same book. SVG only; nothing here animates on
 * a loop.
 */
export default function DomainMotif({ domain }) {
  const motif = domain?.motif

  return (
    <figure
      className={styles.plate}
      style={domain ? { '--d-accent': domain.accent } : undefined}
      aria-hidden="true"
    >
      <div className={styles.frame}>
        <svg viewBox="0 0 200 150" className={styles.svg} key={motif || 'idle'}>
          {motif === 'grid' && <Grid />}
          {motif === 'assembly' && <Assembly />}
          {motif === 'line' && <Line />}
          {motif === 'frames' && <Frames />}
          {motif === 'page' && <Page />}
          {motif === 'plate' && <Plate />}
          {!motif && <Idle />}
        </svg>
      </div>

      <figcaption className={styles.caption}>
        {domain ? (
          <>
            <span className={`mono ${styles.capIndex}`}>{domain.numeral}</span>
            <span className={styles.capLabel}>{domain.label}</span>
            <span className={`mono ${styles.capCovers}`}>{domain.covers.length} areas</span>
          </>
        ) : (
          <span className={`mono ${styles.capIdle}`}>Consider a discipline</span>
        )}
      </figcaption>
    </figure>
  )
}

/* ── I · DATA — a coordinate plane, honestly plotted ────── */
function Grid() {
  const pts = [
    [30, 108], [48, 96], [66, 100], [84, 78], [102, 84], [120, 58], [138, 64], [156, 40],
  ]
  return (
    <g className={styles.draw}>
      {[30, 60, 90, 120].map((y) => (
        <line key={y} x1="24" y1={y} x2="176" y2={y} className={styles.hair} />
      ))}
      <line x1="24" y1="20" x2="24" y2="126" className={styles.axis} />
      <line x1="24" y1="126" x2="176" y2="126" className={styles.axis} />
      <polyline
        points={pts.map((p) => p.join(',')).join(' ')}
        className={styles.trend}
        style={{ '--len': 220 }}
      />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.4" className={styles.mark} style={{ '--i': i }} />
      ))}
    </g>
  )
}

/* ── II · PRODUCT — an exploded assembly ────────────────── */
function Assembly() {
  const layers = [0, 1, 2, 3]
  return (
    <g className={styles.draw}>
      {layers.map((l) => (
        <g key={l} style={{ '--i': l }} className={styles.layer}>
          <path
            d={`M60 ${44 + l * 24} L140 ${30 + l * 24} L160 ${42 + l * 24} L80 ${56 + l * 24} Z`}
            className={l === 1 ? styles.layerLive : styles.layerFace}
          />
        </g>
      ))}
      <line x1="150" y1="54" x2="176" y2="40" className={styles.callout} />
      <circle cx="176" cy="40" r="2" className={styles.mark} />
    </g>
  )
}

/* ── III · OPERATIONS — a process line ──────────────────── */
function Line() {
  const nodes = [34, 72, 110, 148]
  return (
    <g className={styles.draw}>
      <line x1="24" y1="75" x2="176" y2="75" className={styles.rail} style={{ '--len': 152 }} />
      {nodes.map((x, i) => (
        <g key={x} style={{ '--i': i }} className={styles.node}>
          <rect x={x - 9} y="66" width="18" height="18" className={i === 2 ? styles.boxLive : styles.box} />
          <line x1={x} y1="90" x2={x} y2="102" className={styles.hair} />
        </g>
      ))}
      <line x1="24" y1="112" x2="120" y2="112" className={styles.progress} style={{ '--len': 96 }} />
    </g>
  )
}

/* ── IV · SOCIAL — overlapping frames ───────────────────── */
function Frames() {
  const frames = [
    { x: 28, y: 34, w: 58, h: 74 },
    { x: 74, y: 24, w: 58, h: 74 },
    { x: 120, y: 44, w: 52, h: 66 },
  ]
  return (
    <g className={styles.draw}>
      {frames.map((f, i) => (
        <g key={i} style={{ '--i': i }} className={styles.frameCard}>
          <rect {...f} className={i === 1 ? styles.cardLive : styles.card} />
          <line x1={f.x + 8} y1={f.y + f.h - 18} x2={f.x + f.w - 14} y2={f.y + f.h - 18} className={styles.hair} />
          <line x1={f.x + 8} y1={f.y + f.h - 11} x2={f.x + f.w - 26} y2={f.y + f.h - 11} className={styles.hair} />
        </g>
      ))}
    </g>
  )
}

/* ── V · CONTENT — a page, with a measure ───────────────── */
function Page() {
  const lines = [86, 72, 80, 58, 84, 66, 78, 50]
  return (
    <g className={styles.draw}>
      <rect x="42" y="22" width="116" height="106" className={styles.sheet} />
      <line x1="54" y1="40" x2="126" y2="40" className={styles.headline} style={{ '--len': 72 }} />
      {lines.map((w, i) => (
        <line
          key={i}
          x1="54"
          y1={54 + i * 9}
          x2={54 + w}
          y2={54 + i * 9}
          className={i === 3 ? styles.lineLive : styles.hair}
          style={{ '--i': i }}
        />
      ))}
    </g>
  )
}

/* ── VI · RESEARCH — a figure plate ─────────────────────── */
function Plate() {
  const bars = [22, 40, 62, 78, 58, 34, 18]
  return (
    <g className={styles.draw}>
      <rect x="30" y="20" width="140" height="94" className={styles.sheet} />
      <line x1="42" y1="100" x2="158" y2="100" className={styles.axis} />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={46 + i * 16}
          y={100 - h}
          width="9"
          height={h}
          className={i === 3 ? styles.barLive : styles.bar}
          style={{ '--i': i }}
        />
      ))}
      <line x1="30" y1="124" x2="96" y2="124" className={styles.hair} />
    </g>
  )
}

/* ── Idle — the frame, waiting ──────────────────────────── */
function Idle() {
  return (
    <g className={styles.draw}>
      <line x1="24" y1="75" x2="176" y2="75" className={styles.hair} />
      <line x1="100" y1="24" x2="100" y2="126" className={styles.hair} />
      <circle cx="100" cy="75" r="26" className={styles.idleRing} />
    </g>
  )
}
