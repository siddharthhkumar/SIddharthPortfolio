import styles from './Close.module.css'
import profile from '@/data/profile'
import { resumes } from '@/data/resumes'
import Reveal from '@/components/motion/Reveal'

const { contact, social } = profile

const CHANNELS = [
  { key: 'Email', value: contact.email, href: `mailto:${contact.email}`, cursor: 'email' },
  { key: 'LinkedIn', value: social.linkedinLabel, href: social.linkedin, external: true },
  { key: 'GitHub', value: social.githubLabel, href: social.github, external: true },
]

/**
 * The close. One question, the ways to answer it, and the six résumés — because
 * the last thing a recruiter needs is the document, and making them hunt for it
 * would undo everything above.
 */
export default function Close() {
  return (
    <section id="contact" className={`bay ${styles.close}`}>
      <Reveal variant="rise">
        <p className="tag">
          <span className={styles.index}>05</span> Contact
        </p>
      </Reveal>

      <h2 className={`display ${styles.ask}`}>
        <Reveal as="span" variant="focus" delay={120} className={styles.askLine}>
          Have a problem
        </Reveal>
        <Reveal as="span" variant="focus" delay={230} className={styles.askLine}>
          worth <em className={styles.accent}>solving</em>?
        </Reveal>
      </h2>

      <div className={styles.grid}>
        <ul className={styles.channels}>
          {CHANNELS.map((channel, i) => (
            <Reveal as="none" key={channel.key} variant="rise" delay={340 + i * 70}>
              <li className={styles.channel}>
                <a
                  href={channel.href}
                  className={styles.channelLink}
                  data-cursor={channel.cursor || (channel.external ? 'open' : undefined)}
                  {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className={`tag ${styles.channelKey}`}>{channel.key}</span>
                  <span className={styles.channelValue}>{channel.value}</span>
                  <span className={styles.channelArrow} aria-hidden="true">
                    <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal variant="rise" delay={420} className={styles.papers} id="resumes">
          <p className={`tag ${styles.papersLabel}`}>Résumés &mdash; one per lens</p>
          <ul className={styles.papersList}>
            {resumes.map((resume) => (
              <li key={resume.id}>
                <a
                  href={resume.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.paper}
                  data-cursor="resume"
                >
                  <span className={styles.paperRole}>{resume.role}</span>
                  <span className={`mono ${styles.paperExt}`}>PDF</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal variant="rise" delay={560} className={styles.foot}>
        <span className={`mono ${styles.place}`}>{contact.location}</span>
        <span className={`mono ${styles.avail}`}>{contact.availability}</span>
      </Reveal>
    </section>
  )
}
