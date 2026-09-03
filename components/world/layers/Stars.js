import world from '@/data/world'
import s from '../World.module.css'

/**
 * ASSET 11 — night-stars
 *
 * Placed rather than scattered: dense where the sky is open, absent over the
 * region the headline occupies. Two invented constellations join some of them
 * up, because a field of loose points is noise — a shape is a sky.
 *
 * A third of them do not breathe at all, and the ones that do take six to
 * nine seconds. Nothing here should ever be seen to twinkle.
 */
export default function Stars() {
  return (
    <svg
      className={`${s.layer} ${s.stars}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g className={s.constellation}>
        {world.constellations.map((c) => (
          <polyline key={c.label} points={c.points} fill="none" vectorEffect="non-scaling-stroke" />
        ))}
      </g>

      {world.stars.map((st, i) => (
        <circle
          key={i}
          cx={st.x}
          cy={st.y}
          r={st.r * 0.34}
          className={st.t ? s.starBreath : s.star}
          style={st.t ? { '--t': `${st.t}s`, '--delay': `${-i * 0.7}s` } : undefined}
        />
      ))}
    </svg>
  )
}
