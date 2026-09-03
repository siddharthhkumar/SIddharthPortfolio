import s from '../World.module.css'

/**
 * ASSET 14 — the ocean
 *
 * In front of the ridges, so the landscape reads back to front: distant
 * hills, then water, then the foreground the page is set on.
 *
 * ── How the loop is seamless ────────────────────────────────────────
 * Each wave is one period of a curve drawn twice, end to end, across a
 * viewBox twice as wide as the frame. Translating it by exactly one period
 * and starting over puts it back where it began, so there is no jump — the
 * usual mistake is animating a single copy, which snaps.
 *
 * The three bands travel at different speeds and in opposite directions,
 * which is what stops it reading as one sheet of paper sliding sideways.
 *
 * At night the moon lays a column of light on the water directly below it.
 */
const WAVE_DEEP = 'M0,15 C15,8 35,8 50,15 C65,22 85,22 100,15 C115,8 135,8 150,15 C165,22 185,22 200,15 L200,30 L0,30 Z'
const WAVE_MID = 'M0,12 C20,18 30,18 50,12 C70,6 80,6 100,12 C120,18 130,18 150,12 C170,6 180,6 200,12 L200,30 L0,30 Z'
const WAVE_FOAM = 'M0,10 C12.5,4 25,4 37.5,10 C50,16 62.5,16 75,10 C87.5,4 100,4 112.5,10 C125,16 137.5,16 150,10 C162.5,4 175,4 187.5,10 C193.75,13 196.9,14.5 200,15 L200,30 L0,30 Z'

export default function Ocean() {
  return (
    <div className={`${s.layer} ${s.ocean}`}>
      <svg viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="ocean-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="20%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="ocean-glitter" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect x="0" y="8" width="100" height="22" className={s.water} fill="url(#ocean-body)" />

        <rect
          x="66"
          y="8"
          width="24"
          height="22"
          className={s.glitter}
          fill="url(#ocean-glitter)"
        />

        <g className={s.waveSet}>
          {/* Deep water */}
          <path className={`${s.waveFill} ${s.waveDeep}`} d={WAVE_DEEP} />
          {/* Mid water */}
          <path className={`${s.waveFill} ${s.waveMid}`} d={WAVE_MID} />
          {/* Foam / Shoreline */}
          <path className={`${s.waveFill} ${s.waveFoam}`} d={WAVE_FOAM} />
        </g>
      </svg>
    </div>
  )
}
