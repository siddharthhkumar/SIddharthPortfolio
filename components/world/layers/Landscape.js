import world from '@/data/world'
import s from '../World.module.css'

/**
 * ASSETS 02 / 09 — day-landscape and night-landscape
 *
 * One set of ridges, two palettes. It is the same desk after dark, not a
 * different place, so the shape does not change — only what it is made of and
 * the two windows that are still lit at night.
 *
 * The furthest ridge is palest. It sits at the very bottom of the viewport,
 * which is the one band of the screen no text is ever set in.
 */
export default function Landscape() {
  return (
    <svg
      className={`${s.layer} ${s.landscape}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {world.ridges.map((d, i) => (
        <path key={i} d={d} className={s.ridge} style={{ '--i': i }} />
      ))}

      {/* Still on. Night only. */}
      {world.lights.map((l, i) => (
        <circle key={i} cx={l.x} cy={l.y} r="0.26" className={s.windowLight} style={{ '--i': i }} />
      ))}
    </svg>
  )
}
