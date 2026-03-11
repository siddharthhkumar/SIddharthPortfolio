import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Siddharth Kumar · Business & Research Analyst · Greater Noida, India</p>
      <div className={styles.fl}>
        <a href="https://www.linkedin.com/in/siddharth-kumar-0938ab245/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/siddharthhkumar" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="mailto:siddharthk1500@gmail.com">Email</a>
      </div>
    </footer>
  )
}
