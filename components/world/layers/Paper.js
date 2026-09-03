import s from '../World.module.css'

/**
 * ASSETS 06 / 13 — day-paper-elements and night-paper-elements
 *
 * Two blank scraps, stacked at the right edge as though something had been
 * put down there. The studio note that used to sit here is now in the footer
 * — see components/world/StudioNote.js for why.
 *
 * Desktop only. On a phone they would be one more thing between a reader and
 * the work.
 */
export default function Paper() {
  return (
    <div className={`${s.layer} ${s.paper}`}>
      <span className={`${s.scrap} ${s.scrapA}`} />
      <span className={`${s.scrap} ${s.scrapB}`} />
    </div>
  )
}
