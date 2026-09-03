import Image from 'next/image'
import recognition from '@/data/recognition'
import styles from './Recognition.module.css'

/**
 * The two documents, and the photograph of the day they came from.
 *
 * A portfolio can say anything; a PDF you can open is a different kind of
 * claim. Both files are real and both are linked directly — the Letter of
 * Recommendation and the published paper.
 *
 * The photograph is presented as what it is: a print, taped down, with the
 * caption written under it. Nothing is retouched and nothing is cropped to
 * make it look like a press shot.
 */
export default function Recognition() {
  const { photo, documents, label, title, lede } = recognition

  return (
    <section className="band" id="recognition">
      <div className="wrap">
        <div className="marker">
          <span className="dot" />
          <p className="m-label">{label}</p>
        </div>

        <div className={styles.split}>
          <figure className={styles.print} data-reveal>
            <span className={styles.tape} data-corner="tl" aria-hidden="true" />
            <span className={styles.tape} data-corner="br" aria-hidden="true" />

            <Image
              src={photo.src}
              alt={photo.alt}
              width={1183}
              height={887}
              sizes="(max-width: 900px) 92vw, 52vw"
              loading="lazy"
              className={styles.photo}
            />
            <figcaption className={styles.caption}>{photo.caption}</figcaption>
          </figure>

          <div className={styles.side} data-reveal style={{ '--d': '90ms' }}>
            <h2 className={`d-title ${styles.title}`}>{title}</h2>
            <p className={`t-body ${styles.lede}`}>{lede}</p>

            <ul className={styles.docs}>
              {documents.map((d) => (
                <li key={d.id}>
                  <a
                    href={d.file}
                    className={styles.doc}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.docIcon} aria-hidden="true">
                      <svg viewBox="0 0 20 24" width="16" height="19" focusable="false">
                        <path
                          d="M3 1.6h9.2L17 6.4V22.4H3Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 1.6V6.6H17"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinejoin="round"
                        />
                        <path d="M6.4 12h7.2M6.4 15.4h7.2M6.4 18.8h4.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </span>

                    <span className={styles.docText}>
                      <span className={styles.docName}>{d.name}</span>
                      <span className={styles.docIssuer}>{d.issuer}</span>
                      <span className={styles.docNote}>{d.note}</span>
                    </span>

                    <span className={styles.docGo} aria-hidden="true">
                      PDF ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
