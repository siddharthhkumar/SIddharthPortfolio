import Image from 'next/image'
import gallery from '@/data/gallery'
import styles from './ContactSheet.module.css'

/**
 * The contact sheet.
 *
 * A photographic contact sheet is how you decide what is worth printing, so
 * it is the right shape for this: frames at the size you judge them, numbered,
 * with the caption only appearing when you look closely at one.
 *
 * The sprocket rails are drawn with a repeating gradient rather than an image,
 * and the frame numbers are generated — nothing here is a graphic asset.
 *
 * Captions say what is in the frame. No audience figures, no outcomes; those
 * claims live in leadership.js and are made there once.
 */
export default function ContactSheet() {
  return (
    <figure className={styles.sheet}>
      <span className={styles.rail} aria-hidden="true" />

      <div className={styles.strip}>
        {gallery.map((g, i) => (
          <div key={g.src} className={styles.frame} data-wide={g.weight === 2 ? 'true' : 'false'}>
            <span className={styles.n} aria-hidden="true">
              {String(i + 1).padStart(2, '0')}A
            </span>

            <Image
              src={g.src}
              alt={g.alt}
              width={900}
              height={600}
              sizes="(max-width: 700px) 46vw, (max-width: 1100px) 30vw, 22vw"
              className={styles.img}
              loading="lazy"
            />

            <div className={styles.cap}>
              <span className={styles.capTitle}>{g.caption}</span>
              <span className={styles.capOrg}>{g.org}</span>
            </div>
          </div>
        ))}
      </div>

      <span className={styles.rail} aria-hidden="true" />

      <figcaption className={styles.foot}>
        Frames from four years of a photography club, a film society and a hackathon media desk.
      </figcaption>
    </figure>
  )
}
