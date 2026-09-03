import world from '@/data/world'
import s from '../World.module.css'

/**
 * ASSET 04b — day birds
 *
 * Three strokes. Not a flock — a glance. They drift away from the sun on
 * long, uneven cycles so they never travel in formation.
 */
export default function Birds() {
  return (
    <div className={`${s.layer} ${s.birds}`}>
      {world.birds.map((b, i) => (
        <svg
          key={i}
          viewBox="0 0 24 12"
          className={s.bird}
          style={{ '--x': `${b.x}%`, '--y': `${b.y}%`, '--s': b.s, '--delay': `${b.delay}s` }}
          aria-hidden="true"
        >
          <path d="M1 7 Q6 1.5 11.6 6.4 Q17 1.5 23 6.6" fill="none" />
        </svg>
      ))}
    </div>
  )
}
