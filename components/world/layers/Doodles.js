import s from '../World.module.css'

/**
 * ASSETS 05 / 12 — Ambient Marks
 *
 * Five refined geometric marks at low opacity — background texture
 * that rewards a second look without competing with the type.
 *
 * Every shape is drawn from the same vocabulary as the rest of the
 * page: hairlines, right angles, precise intervals. Nothing cute,
 * nothing loud.
 */
export default function Doodles() {
  return (
    <div className={`${s.layer} ${s.doodles}`}>

      {/* 01 — Crosshair tick (Top Left) */}
      <svg className={`${s.mark} ${s.mCross}`} viewBox="0 0 24 24" aria-hidden="true">
        <g className={`${s.animeLine} ${s.animeFloat}`} stroke="var(--ink-line)" strokeWidth="0.9" fill="none" strokeLinecap="round">
          <line x1="12" y1="2"  x2="12" y2="8"  />
          <line x1="12" y1="16" x2="12" y2="22" />
          <line x1="2"  y1="12" x2="8"  y2="12" />
          <line x1="16" y1="12" x2="22" y2="12" />
          <circle cx="12" cy="12" r="2" strokeWidth="0.8" />
        </g>
      </svg>

      {/* 02 — Bracket pair (Right margin) */}
      <svg className={`${s.mark} ${s.mBracket}`} viewBox="0 0 32 24" aria-hidden="true">
        <g className={`${s.animeLine} ${s.animeFloatSlow}`} stroke="var(--accent)" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7">
          <polyline points="8,4 4,4 4,20 8,20" />
          <polyline points="24,4 28,4 28,20 24,20" />
        </g>
      </svg>

      {/* 03 — Scan-line box (Bottom Left) */}
      <svg className={`${s.mark} ${s.mScan}`} viewBox="0 0 40 28" aria-hidden="true">
        <g className={`${s.animeLine} ${s.animePulseSlow}`} stroke="var(--ink-line)" fill="none" strokeLinecap="round">
          <rect x="2" y="2" width="36" height="24" rx="2" strokeWidth="0.8" />
          <line x1="2"  y1="8"  x2="38" y2="8"  strokeWidth="0.5" opacity="0.6" />
          <line x1="2"  y1="14" x2="38" y2="14" strokeWidth="0.5" opacity="0.4" />
          <line x1="2"  y1="20" x2="38" y2="20" strokeWidth="0.5" opacity="0.25" />
          <line x1="8"  y1="2"  x2="8"  y2="26" strokeWidth="0.5" opacity="0.3" />
        </g>
      </svg>

      {/* 04 — Diagonal rule pair (Top Right) */}
      <svg className={`${s.mark} ${s.mRule}`} viewBox="0 0 24 24" aria-hidden="true">
        <g className={`${s.animeLine} ${s.animeFloat}`} stroke="var(--accent)" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.55">
          <line x1="4"  y1="20" x2="20" y2="4"  />
          <line x1="10" y1="22" x2="22" y2="10" />
        </g>
      </svg>

      {/* 05 — Dot cluster (Centre Right) */}
      <svg className={`${s.mark} ${s.mDots}`} viewBox="0 0 20 20" aria-hidden="true">
        <g className={`${s.animeLine} ${s.animePulse}`} fill="var(--ink-line)">
          <circle cx="4"  cy="4"  r="1.4" />
          <circle cx="10" cy="4"  r="1.4" opacity="0.7" />
          <circle cx="16" cy="4"  r="1.4" opacity="0.45" />
          <circle cx="4"  cy="10" r="1.4" opacity="0.7" />
          <circle cx="10" cy="10" r="1.4" />
          <circle cx="16" cy="10" r="1.4" opacity="0.7" />
          <circle cx="4"  cy="16" r="1.4" opacity="0.45" />
          <circle cx="10" cy="16" r="1.4" opacity="0.7" />
          <circle cx="16" cy="16" r="1.4" />
        </g>
      </svg>

    </div>
  )
}

