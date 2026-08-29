import styles from './Footer.module.css'
import profile from '@/data/profile'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={`mono ${styles.colophon}`}>
          © {new Date().getFullYear()} {profile.name}
        </span>

        <span className={`mono ${styles.build}`}>
          Built with Next.js · Type set in Instrument Serif, DM Sans and DM Mono
        </span>

        <a href="#top" className={`link link-quiet ${styles.top}`}>
          Back to top
        </a>
      </div>
    </footer>
  )
}
