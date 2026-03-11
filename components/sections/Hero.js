'use client'

import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.mesh}>
        <div className={styles.dots}></div>
        <div className={`${styles.meshOrb} ${styles.m1}`}></div>
        <div className={`${styles.meshOrb} ${styles.m2}`}></div>
        <div className={`${styles.meshOrb} ${styles.m3}`}></div>
      </div>

      <div className={styles.heroBody}>
        <div className={styles.heroPill}>
          <div className={styles.pulse}></div> Measuring what's invisible. Building what helps. Leading at human scale.
        </div>
        <h1 className={styles.heroName}>
          <span className={styles.l1}>Siddharth</span>
          <span className={styles.l2}>Kumar</span>
        </h1>
        <div className={styles.heroChips}>
          <span className={`${styles.chip} ${styles.c1}`}>Business Analyst</span>
          <span className={`${styles.chip} ${styles.c2}`}>Published Researcher</span>
          <span className={`${styles.chip} ${styles.c3}`}>Community Builder</span>
        </div>
        <p className={styles.heroSub}>
          I measure what people miss. I research what matters. I build communities where real help happens. That's my work.
        </p>
        <div className={styles.heroBtns}>
          <a href="https://www.linkedin.com/in/siddharth-kumar-0938ab245/" target="_blank" className={styles.bp}>
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            Connect on LinkedIn
          </a>
          <a href="#projects" className={styles.bs}>
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            View My Work
          </a>
          <a href="#contact" className={styles.bg}>
            Get in Touch
          </a>
        </div>
        <div className={styles.heroSoc}>
          <a href="https://www.linkedin.com/in/siddharth-kumar-0938ab245/" target="_blank" className={styles.soc} title="LinkedIn">
            <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="https://github.com/siddharthhkumar" target="_blank" className={styles.soc} title="GitHub">
            <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
          </a>
          <a href="https://www.instagram.com/siddharthh__k/" target="_blank" className={styles.soc} title="Instagram">
            <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.heroPanel}>
        <div className={styles.heroCover}>
          <img src="/images/podium.jpeg" alt="Siddharth Kumar speaking at an event" />
          <div className={styles.heroCoverBadge}>
            <span>Business Analyst</span> · Research Analyst
          </div>
        </div>
      </div>

      <div className={styles.scrollInd}>
        <div className={styles.sb}></div>
        <span>SCROLL</span>
      </div>
    </section>
  )
}
