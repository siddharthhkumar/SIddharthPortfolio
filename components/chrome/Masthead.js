import Reveal from '@/components/motion/Reveal'
import styles from './Masthead.module.css'

/**
 * Every section opens the same way — index, title, hairline — so the page
 * reads as one publication. What sits *below* the masthead is what changes.
 */
export default function Masthead({ index, title, kicker, children, align = 'row' }) {
  return (
    <div className={`${styles.head} ${align === 'stack' ? styles.stack : ''}`}>
      <Reveal variant="rise" className={styles.top}>
        <span className={`tag ${styles.index}`}>{index}</span>
        <h2 className={`tag ${styles.title}`}>{title}</h2>
      </Reveal>

      <Reveal variant="draw" className={styles.rule} />

      {(kicker || children) && (
        <Reveal variant="rise" delay={120} className={styles.body}>
          {kicker && <p className={`display ${styles.kicker}`}>{kicker}</p>}
          {children}
        </Reveal>
      )}
    </div>
  )
}
