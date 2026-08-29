import styles from './Sculpture.module.css'
import domains from '@/data/domains'

/**
 * The fallback.
 *
 * Not a blank space and not a screenshot — the same six forms, drawn flat, in
 * the same arrangement the scene rests in. This is what a phone gets, and what
 * anyone who has asked for reduced motion gets. It should look deliberate,
 * because it is.
 */
export default function SculptureStill() {
  return (
    <div className={styles.still} aria-hidden="true">
      <svg viewBox="0 0 420 320" className={styles.stillSvg}>
        <defs>
          <linearGradient id="sk-face" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0%" stopColor="#a5a29c" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#4a4845" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Wires first, so the forms sit on top */}
        <g className={styles.stillWires}>
          <path d="M120 96 L262 74 M262 74 L318 150 M318 150 L236 232 M236 232 L128 216 M128 216 L86 148 M86 148 L120 96 M120 96 L236 232 M262 74 L128 216" />
        </g>

        {/* I · Data — a plate */}
        <g className={styles.stillForm} style={{ '--c': domains[0].accent }}>
          <path d="M84 96 L156 84 L182 100 L110 113 Z" />
          <path d="M84 96 L110 113 L110 121 L84 104 Z" className={styles.stillEdge} />
        </g>

        {/* II · Product — a module */}
        <g className={styles.stillForm} style={{ '--c': domains[1].accent }}>
          <path d="M240 56 L286 48 L286 84 L240 92 Z" />
          <path d="M240 56 L226 66 L226 102 L240 92 Z" className={styles.stillEdge} />
        </g>

        {/* III · Operations — a loop */}
        <g className={styles.stillForm} style={{ '--c': domains[2].accent }}>
          <ellipse cx="318" cy="150" rx="26" ry="17" className={styles.stillRing} />
          <ellipse cx="318" cy="150" rx="12" ry="7" className={styles.stillRingInner} />
        </g>

        {/* IV · Social — a node */}
        <g className={styles.stillForm} style={{ '--c': domains[3].accent }}>
          <path d="M236 210 L258 222 L250 246 L224 248 L214 226 Z" />
        </g>

        {/* V · Content — a column */}
        <g className={styles.stillForm} style={{ '--c': domains[4].accent }}>
          <path d="M120 200 L136 196 L136 244 L120 248 Z" />
          <path d="M120 200 L108 206 L108 254 L120 248 Z" className={styles.stillEdge} />
        </g>

        {/* VI · Research — strata */}
        <g className={styles.stillForm} style={{ '--c': domains[5].accent }}>
          <path d="M62 140 L120 132 L138 142 L80 151 Z" />
          <path d="M62 152 L120 144 L138 154 L80 163 Z" opacity="0.62" />
        </g>

        {/* Dust */}
        <g className={styles.stillDust}>
          {DUST.map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} />
          ))}
        </g>
      </svg>
    </div>
  )
}

// Fixed, so the still never differs between renders.
const DUST = [
  [48, 62, 1.1], [352, 92, 1.3], [96, 268, 1], [300, 268, 1.2], [386, 196, 1],
  [40, 190, 1.2], [196, 34, 1], [176, 288, 1.1], [346, 44, 0.9], [70, 232, 1],
  [268, 132, 0.9], [148, 158, 1], [372, 250, 1.1], [24, 118, 0.9], [206, 122, 0.8],
]
