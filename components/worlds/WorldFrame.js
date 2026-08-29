import Link from 'next/link'
import styles from './WorldFrame.module.css'
import domains from '@/data/domains'
import Reveal from '@/components/motion/Reveal'
import GroundSync from './GroundSync'

/**
 * What stays the same when everything else changes.
 *
 * Every world gets the same breadcrumb, the same masthead geometry and the
 * same way out. The six compositions inside are free to differ completely —
 * this frame is the part that says one person made all of them.
 */
export default function WorldFrame({ domain, lede, children, light = false }) {
  const index = domains.findIndex((d) => d.id === domain.id)
  const next = domains[(index + 1) % domains.length]

  return (
    <main
      id="main"
      className={`${styles.world} ${light ? styles.light : ''}`}
      /* A light world defines its own ground and a darker accent in CSS.
         Passing the dark-world values inline here would win on specificity and
         silently undo the inversion — and drop the gold to 1.9:1 on paper. */
      style={
        light
          ? undefined
          : {
              '--accent': domain.accent,
              '--accent-rgb': domain.accentRgb,
              '--ink': domain.ground,
            }
      }
      data-world={domain.id}
    >
      <GroundSync ground={light ? 'light' : 'dark'} />
      <header className={`bay ${styles.head}`}>
        <Reveal variant="rise">
          <p className={`tag ${styles.trail}`}>
            <Link href="/#practice" className={styles.back}>
              Practice
            </Link>
            <span className={styles.slash}>/</span>
            <span className={styles.numeral}>{domain.numeral}</span>
          </p>
        </Reveal>

        {/* The title is set by each world — the frame only positions it. */}
        <div className={styles.title}>{children.title}</div>

        {/* The masthead was a single column inside a much wider measure, which
            left roughly half the page empty on every world. The right rail
            carries what the discipline actually covers, so the width is used
            rather than padded. */}
        <div className={styles.headGrid}>
          {lede && (
            <Reveal variant="rise" delay={180}>
              <p className={styles.lede}>{lede}</p>
            </Reveal>
          )}

          <Reveal variant="rise" delay={260} as="ul" className={styles.rail}>
            {domain.covers.map((c) => (
              <li key={c} className={styles.railItem}>
                <span className={styles.railLabel}>{c}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </header>

      {children.body}

      <footer className={`bay ${styles.next}`}>
        <Reveal variant="rise" className={styles.nextInner}>
          <span className={`tag ${styles.nextLabel}`}>Next discipline</span>
          <Link href={next.route} className={styles.nextLink} data-cursor="enter">
            <span className={`mono ${styles.nextNumeral}`}>{next.numeral}</span>
            <span className={`display ${styles.nextName}`}>{next.label}</span>
          </Link>
          <Link href="/#practice" className={`link link-quiet ${styles.nextAll}`}>
            All six
          </Link>
        </Reveal>
      </footer>
    </main>
  )
}
