'use client'

import { useState } from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo}>
        SK.
      </a>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`} id="navLinks">
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
        </li>
        <li>
          <a href="#achievements" onClick={closeMenu}>
            Achievements
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.navHire} onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
      <div className={`${styles.ham} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}
