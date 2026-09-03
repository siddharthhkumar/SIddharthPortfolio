import current from '@/data/current'
import world from '@/data/world'
import s from './World.module.css'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function printed(iso) {
  const d = new Date(`${iso}T00:00:00Z`)
  return `${String(d.getUTCDate()).padStart(2, '0')} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`
}

/**
 * The studio note.
 *
 * It began life pinned into the fixed environment, and it had to come out:
 * at 1440 the margins are about fifty pixels and every place it could sit
 * had type in it. A note behind a sentence is not a detail, it is a defect.
 *
 * So it is taped into the footer instead, which is where a note at the end
 * of a long day belongs anyway. It is still made of the world's vocabulary —
 * paper, tape, mono at eleven pixels — and its date and version come from
 * data/current.js, so it goes out of date on its own.
 */
export default function StudioNote() {
  return (
    <div className={s.note}>
      <span className={s.tape} />
      <p className={s.noteLabel}>
        {world.note.label} · v{current.version}
      </p>
      <p className={s.noteLine}>
        Last edited <time dateTime={current.updated}>{printed(current.updated)}</time>
      </p>
      <p className={s.noteLine}>{world.note.state}</p>
      <p className={s.noteFoot}>{world.note.next}</p>
    </div>
  )
}
