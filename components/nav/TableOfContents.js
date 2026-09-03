import styles from './TableOfContents.module.css'

export default function TableOfContents() {
  return (
    <nav className={styles.toc} aria-label="Table of Contents">
      <div className={styles.tocInner}>
        <span className={styles.tocLabel}>Jump to:</span>
        <ul className={styles.tocList}>
          <li><a href="#ledger">Overview</a></li>
          <li><a href="#selected">Work</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    </nav>
  )
}
