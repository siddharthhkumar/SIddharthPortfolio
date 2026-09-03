import world from '@/data/world'
import s from '../World.module.css'

/**
 * ASSET 03 — day-sun
 *
 * An editorial sun, not an astronomical one: a disc, a screen-print ring that
 * does not quite register with it, and a halo. The misregistration is the
 * whole character — it is how a two-colour print actually comes out, and it
 * is the difference between a drawn sun and a circle.
 */
export default function Sun() {
  const { x, y, r } = world.celestial

  return (
    <div className={`${s.object} ${s.sun}`} style={{ '--x': `${x}%`, '--y': `${y}%`, '--r': r }}>
      <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <circle cx="50" cy="50" r="46" className={s.sunHalo} />
        {/* The ring, printed a hair off. */}
        <circle cx="52.4" cy="47.6" r="30" className={s.sunRing} />
        <circle cx="50" cy="50" r="30" className={s.sunDisc} />
      </svg>
    </div>
  )
}
