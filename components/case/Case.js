import Link from 'next/link'
import styles from './Case.module.css'

/**
 * The furniture every case study shares.
 *
 * Small pieces rather than one big template, so the research page — which has
 * a genuinely different shape from a product page — can use the same
 * publication design without being forced into a product's sequence.
 */

export function Back() {
  return (
    <Link href="/#work" className={styles.back}>
      <span className={styles.backArrow} aria-hidden="true">
        ←
      </span>
      All work
    </Link>
  )
}

export function Masthead({ kicker, title, standfirst }) {
  return (
    <header className={styles.masthead}>
      <div className={styles.kicker}>
        {kicker.map((k, i) => (
          <span key={k} className={`${styles.kickerItem} ${i === 0 ? styles.kickerAccent : ''}`}>
            {k}
          </span>
        ))}
      </div>

      <h1 className={`d-hero ${styles.title}`}>{title}</h1>
      <p className={styles.standfirst}>{standfirst}</p>
    </header>
  )
}

export function Rail({ items }) {
  return (
    <div className={styles.rail}>
      {items.map((it) => (
        <div key={it.key} className={styles.railCell}>
          <span className={styles.railKey}>{it.key}</span>
          <span className={styles.railVal}>{it.value}</span>
        </div>
      ))}
    </div>
  )
}

export function Section({ label, title, children }) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <p className={styles.sectionLabel}>{label}</p>
        <div className={styles.sectionBody}>
          {title && <h2 className={`d-head ${styles.h}`}>{title}</h2>}
          {children}
        </div>
      </div>
    </section>
  )
}

export function P({ children }) {
  return <p className={styles.p}>{children}</p>
}

export function Pull({ children }) {
  return <p className={styles.pull}>{children}</p>
}

export function List({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}

export function Steps({ items }) {
  return (
    <ol className={styles.steps}>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ol>
  )
}

export function Caveat({ children }) {
  return <p className={styles.caveat}>{children}</p>
}

export function Tags({ items }) {
  return (
    <ul className={styles.tags}>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}

/**
 * The three questions that make the rest credible. Copy comes from
 * data/reflections.js, which is flagged in that file as authored rather than
 * recorded.
 */
export function Reflection({ reflection }) {
  if (!reflection) return null

  const cells = [
    { key: 'What was difficult', value: reflection.hard },
    { key: 'What I learned', value: reflection.learned },
    { key: 'What I would change', value: reflection.change },
  ]

  return (
    <div className={styles.reflect}>
      {cells.map((c) => (
        <div key={c.key} className={styles.reflectCell}>
          <span className={styles.reflectKey}>{c.key}</span>
          <span className={styles.reflectVal}>{c.value}</span>
        </div>
      ))}
    </div>
  )
}

export function Links({ items }) {
  if (!items?.length) return null

  return (
    <div className={styles.links}>
      {items.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className={`${styles.link} ${l.primary ? '' : styles.linkGhost}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {l.label}
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  )
}

export function Next({ href, title }) {
  return (
    <Link href={href} className={styles.next} data-cursor="Next case study">
      <span className={styles.nextLabel}>Next</span>
      <span className={styles.nextTitle}>{title} →</span>
    </Link>
  )
}

export const page = styles.page
