'use client'

import styles from './Hero.module.css'
import profile from '@/data/profile'
import Reveal from '@/components/motion/Reveal'
import { useParallax } from '@/components/motion/useMotion'

const DISCIPLINES = ['Business', 'Data', 'Product', 'Operations', 'Digital']

export default function Hero() {
  const driftRef = useParallax(-46)

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.inner} ref={driftRef}>
        <Reveal variant="rise" delay={60}>
          <p className={`tag ${styles.eyebrow}`}>
            {DISCIPLINES.map((d, i) => (
              <span key={d}>
                {i > 0 && <span className={styles.times}>×</span>}
                {d}
              </span>
            ))}
          </p>
        </Reveal>

        <h1 className={`display ${styles.statement}`}>
          <Reveal as="span" variant="focus" delay={180} className={styles.line}>
            Most of my work starts
          </Reveal>
          <Reveal as="span" variant="focus" delay={300} className={styles.line}>
            where an <em className={styles.accentWord}>assumption</em>
          </Reveal>
          <Reveal as="span" variant="focus" delay={420} className={styles.line}>
            stops holding.
          </Reveal>
        </h1>

        {/* The work itself, listed. No adjectives, no summary sentence — the
            specifics do more than a positioning line would. */}
        <Reveal variant="rise" delay={640} className={styles.support}>
          <ul className={styles.ledger}>
            {profile.ledger.map((item) => (
              <li key={item} className={styles.ledgerItem}>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal variant="rise" delay={800} as="footer" className={styles.foot}>
        <span className={`tag ${styles.cue}`}>Six disciplines &mdash; choose one</span>
        <span className={styles.rule} aria-hidden="true" />
        <span className={`mono ${styles.place}`}>{profile.contact.location}</span>
      </Reveal>
    </section>
  )
}
