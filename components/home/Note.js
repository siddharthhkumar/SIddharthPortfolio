'use client'

import Image from 'next/image'
import styles from './Note.module.css'
import profile from '@/data/profile'
import Reveal from '@/components/motion/Reveal'
import { useParallax } from '@/components/motion/useMotion'

/**
 * The short human introduction. One paragraph in his own register, a portrait,
 * and the facts that place him. Deliberately the quietest block on the page.
 */
export default function Note() {
  const portraitRef = useParallax(30)
  const { about, education } = profile

  return (
    <section id="about" className={`bay ${styles.note}`}>
      <div className={styles.grid}>
        <Reveal variant="lift" className={styles.plate}>
          <figure className={styles.figure} ref={portraitRef}>
            <Image
              src={about.image}
              alt={about.imageAlt}
              width={560}
              height={700}
              sizes="(max-width: 900px) 60vw, 26vw"
              className={styles.portrait}
            />
          </figure>
        </Reveal>

        <div className={styles.body}>
          <Reveal variant="rise">
            <p className="tag">
              <span className={styles.index}>04</span> The short version
            </p>
          </Reveal>

          <Reveal variant="rise" delay={90}>
            <p className={`display ${styles.lede}`}>{about.intro}</p>
          </Reveal>

          <Reveal variant="rise" delay={180}>
            <p className={`prose ${styles.para}`}>{about.body}</p>
          </Reveal>

          <Reveal variant="rise" delay={260} className={styles.facts}>
            <span className={`mono ${styles.fact}`}>
              {education.degree} &middot; {education.institution}
            </span>
            <span className={`mono ${styles.fact}`}>{education.period}</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
