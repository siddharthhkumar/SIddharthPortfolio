import Sun from './layers/Sun'
import Moon from './layers/Moon'
import Clouds from './layers/Clouds'
import Birds from './layers/Birds'
import Stars from './layers/Stars'
import Landscape from './layers/Landscape'
import Ocean from './layers/Ocean'
import Doodles from './layers/Doodles'
import Paper from './layers/Paper'
import Pointer from './Pointer'
import s from './World.module.css'

/**
 * The environment, composed.
 *
 * Every layer is its own file in ./layers, so any one of them can be moved,
 * restyled or replaced — with a .webp, if it ever comes to that — without
 * touching the others. This file only decides the order they stack in and
 * how far each one travels.
 *
 * ── ORDER ──────────────────────────────────────────────────────────
 *   day    sky → clouds → landscape → ocean → sun  → doodles → paper
 *   night  sky → stars  → moon      → landscape → ocean → doodles → paper
 *
 * The ocean sits in front of the ridges, so the horizon reads back to front:
 * distant hills, then water, then the ground the page is set on.
 *
 * The sky is the wash on this element. Everything above it is a layer.
 *
 * ── WHY BOTH ARE IN THE DOM ────────────────────────────────────────
 * Day and night both render, and CSS hides one. That is what lets the theme
 * change in a single frame — which is what the circular wipe in
 * components/motion/themeSwitch.js is snapshotting. Swapping the markup
 * instead would need JavaScript and would tear during the transition.
 *
 * Everything except <Pointer/> is a server component. That one writes two
 * numbers to the document root on pointer move and renders nothing — see the
 * note in Pointer.js.
 */
export default function World() {
  return (
    <div className={s.world} aria-hidden="true">
      <Pointer />
      <div className={s.sky} />

      <div className={s.dayOnly}>
        <Clouds />
        <Birds />
      </div>

      <div className={s.nightOnly}>
        <Stars />
      </div>

      <Landscape />
      <Ocean />

      <div className={s.dayOnly}>
        <Sun />
      </div>
      <div className={s.nightOnly}>
        <Moon />
      </div>

      <Doodles />
      <Paper />
    </div>
  )
}
