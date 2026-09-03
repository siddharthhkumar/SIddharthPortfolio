import world from '@/data/world'
import s from '../World.module.css'

/**
 * ASSET 10 — night-moon
 *
 * The same place in the sky as the sun, because it is the same sky. Drawn as
 * a screen print: a flat disc, a halftone dot fill over it, three craters cut
 * as slightly darker discs, and a terminator that is a soft mask rather than
 * a hard crescent. Deliberately not photoreal.
 */
export default function Moon() {
  const { x, y, r } = world.celestial

  return (
    <div className={`${s.object} ${s.moon}`} style={{ '--x': `${x}%`, '--y': `${y}%`, '--r': r }}>
      <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <defs>
          <pattern id="moon-dots" width="3.4" height="3.4" patternUnits="userSpaceOnUse">
            <circle cx="0.85" cy="0.85" r="0.62" className={s.moonDot} />
          </pattern>
          <radialGradient id="moon-term" cx="34%" cy="32%" r="78%">
            <stop offset="55%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.42" />
          </radialGradient>
          <clipPath id="moon-clip">
            <circle cx="50" cy="50" r="30" />
          </clipPath>
        </defs>

        <circle cx="50" cy="50" r="46" className={s.moonHalo} />
        <circle cx="50" cy="50" r="30" className={s.moonDisc} fill="url(#moon-term)" />

        <g clipPath="url(#moon-clip)">
          <rect width="100" height="100" fill="url(#moon-dots)" />
          <circle cx="41" cy="42" r="6.2" className={s.crater} />
          <circle cx="59" cy="55" r="4.1" className={s.crater} />
          <circle cx="46" cy="62" r="2.8" className={s.crater} />
        </g>
      </svg>
    </div>
  )
}
