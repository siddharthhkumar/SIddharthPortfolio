import s from '../World.module.css'

/**
 * ASSET 04 — day-clouds
 *
 * Two, drawn the way a printer would: flat shapes with a lighter shape
 * offset inside them, no gradients, no fluff. They sit high and to the sides,
 * outside the region the headline occupies.
 */
export default function Clouds() {
  return (
    <div className={`${s.layer} ${s.clouds}`}>
      <svg viewBox="0 0 100 40" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
        {/* Both sit in the upper right, well clear of the headline. */}
        <g className={s.cloud}>
          <path d="M50,9 q2.4,-3.1 5.5,-1.6 q1.8,-2.8 5,-1.7 q3.1,-1.3 4.3,1.5 q2.8,0.2 2.5,2.3 q-0.3,1.7 -3.1,1.7 l-11.6,0 q-3.1,0 -2.6,-2.2 z" />
          <path d="M54.4,8.1 q1.6,-1.9 3.7,-0.9 q1.2,-1.7 3.3,-1.1" className={s.cloudLine} fill="none" />
        </g>
        <g className={s.cloud}>
          <path d="M88,5 q1.8,-2.3 4.1,-1.2 q1.4,-2 3.7,-1.2 q2.3,-1 3.2,1.1 q2,0.1 1.9,1.6 q-0.3,1.3 -2.3,1.3 l-8.6,0 q-2.3,0 -1.9,-1.6 z" />
        </g>
      </svg>
    </div>
  )
}
