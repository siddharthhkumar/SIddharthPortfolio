'use client'

import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = function(e) {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.tag}>Let us Talk</div>
      <h2 className={styles.stitle}>Get In <em>Touch</em></h2>
      <div className={styles.ctGrid}>

        <div>
          <div className={styles.ctLede}>Open to BA / Data Analyst roles, research collaborations and freelance analytics work.</div>
          <p className={styles.ctSub}>
            I am actively seeking <strong>Business Analyst</strong> and <strong>Data Analyst</strong> opportunities, internships, entry-level roles, or project-based work. If you have data that needs turning into insight, let us connect.
          </p>
          <div className={styles.ctLinks}>
            <a href="mailto:siddharthk1500@gmail.com" className={styles.clink}>
              <div className={styles.ciIco}>Mail</div>
              <div className={styles.ciInfo}>
                <span className={styles.ciLabel}>Email</span>
                <span className={styles.ciVal}>siddharthk1500@gmail.com</span>
              </div>
            </a>
            <a href="tel:+916202969798" className={styles.clink}>
              <div className={styles.ciIco}>Call</div>
              <div className={styles.ciInfo}>
                <span className={styles.ciLabel}>Phone</span>
                <span className={styles.ciVal}>+91 6202969798</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/siddharth-kumar-0938ab245/" target="_blank" rel="noopener noreferrer" className={styles.clink}>
              <div className={styles.ciIco}>In</div>
              <div className={styles.ciInfo}>
                <span className={styles.ciLabel}>LinkedIn</span>
                <span className={styles.ciVal}>linkedin.com/in/siddharth-kumar-0938ab245</span>
              </div>
            </a>
            <a href="https://github.com/siddharthhkumar" target="_blank" rel="noopener noreferrer" className={styles.clink}>
              <div className={styles.ciIco}>GH</div>
              <div className={styles.ciInfo}>
                <span className={styles.ciLabel}>GitHub</span>
                <span className={styles.ciVal}>github.com/siddharthhkumar</span>
              </div>
            </a>
            <a href="https://www.instagram.com/siddharthh__k/" target="_blank" rel="noopener noreferrer" className={styles.clink}>
              <div className={styles.ciIco}>IG</div>
              <div className={styles.ciInfo}>
                <span className={styles.ciLabel}>Instagram</span>
                <span className={styles.ciVal}>@siddharthh__k</span>
              </div>
            </a>
            <div className={styles.clink} style={{ cursor: 'default' }}>
              <div className={styles.ciIco}>Loc</div>
              <div className={styles.ciInfo}>
                <span className={styles.ciLabel}>Location</span>
                <span className={styles.ciVal}>Noida / Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form className={styles.ctForm} onSubmit={handleSubmit}>
            <div className={styles.fg}>
              <label className={styles.flabel}>Your Name</label>
              <input type="text" className={styles.finput} placeholder="Your name" value={formData.name} onChange={function(e) { setFormData({...formData, name: e.target.value}) }} required />
            </div>
            <div className={styles.fg}>
              <label className={styles.flabel}>Email</label>
              <input type="email" className={styles.finput} placeholder="your@email.com" value={formData.email} onChange={function(e) { setFormData({...formData, email: e.target.value}) }} required />
            </div>
            <div className={styles.fg}>
              <label className={styles.flabel}>Subject</label>
              <input type="text" className={styles.finput} placeholder="BA Internship / Collaboration / Project..." value={formData.subject} onChange={function(e) { setFormData({...formData, subject: e.target.value}) }} required />
            </div>
            <div className={styles.fg}>
              <label className={styles.flabel}>Message</label>
              <textarea className={styles.ftextarea} placeholder="Tell me about the opportunity..." value={formData.message} onChange={function(e) { setFormData({...formData, message: e.target.value}) }} required></textarea>
            </div>
            <button type="submit" className={styles.fsend}>Send Message</button>
          </form>
        </div>

      </div>
    </section>
  )
}
