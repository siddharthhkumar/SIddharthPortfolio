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
            The number on the
          </Reveal>
          <Reveal as="span" variant="focus" delay={290} className={styles.line}>
            dashboard is never
          </Reveal>
          <Reveal as="span" variant="focus" delay={400} className={styles.line}>
            the <em className={styles.accentWord}>whole story</em>.
          </Reveal>
        </h1>

        <Reveal variant="rise" delay={620} className={styles.support}>
          <p className={styles.supportText}>
            I&rsquo;m <strong className={styles.name}>{profile.name}</strong>. I work across
            analysis, product and growth &mdash; finding the question worth answering, then
            building the thing that answers it.
          </p>
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
