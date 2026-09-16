import profile from '@/data/profile'
import current from '@/data/current'
import StudioNote from '@/components/world/StudioNote'
import styles from './Footer.module.css'

/**
 * The close.
 *
 * One line, set as large as the page allows, and then the four places a
 * person can actually reach him. The line is the thesis of the site said one
 * last time: every good piece of work here started as somebody wanting to
 * know something.
 *
 * This is also the contact section — a separate one above it would be the
 * same links twice. It sits in the layout, so every page ends here.
 */
const YEAR = new Date().getFullYear()

export default function Footer() {
  const { contact, social } = profile

  // Built from what exists rather than hard-coded: a channel with no URL in
  // data/profile.js simply is not here, so the grid never shows an empty cell
  // or a link that goes nowhere.
  const reachable = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { label: 'Phone', value: contact.phone, href: contact.phoneHref },
    { label: 'LinkedIn', value: social.linkedinLabel, href: social.linkedin, external: true },
    { label: 'GitHub', value: social.githubLabel, href: social.github, external: true },
    { label: 'Medium', value: social.mediumLabel, href: social.medium, external: true },
    { label: 'Instagram', value: social.instagramLabel, href: social.instagram, external: true },
    { label: 'Instagram (Personal)', value: social.instagramPersonalLabel, href: social.instagramPersonal, external: true },
  ].filter((r) => r.href && r.value)

  return (
    <footer className={styles.footer} id="contact">
      <div className="wrap">
        <p className={`d-mega ${styles.line}`}>
          Tell me what
          <br />
          you&rsquo;re trying
          <br />
          <em className={styles.em}>to find out.</em>
        </p>

        <div className={styles.body}>
          <p className={styles.availability}>{contact.availability}</p>

          <ul className={styles.links}>
            {reachable.map((r) => (
              <Reach key={r.label} {...r} />
            ))}
          </ul>
        </div>

        <div className={styles.desk}>
          <StudioNote />
        </div>

        <div className={styles.colophon}>
          <p className={styles.copy}>
            © {YEAR} {profile.name}. {contact.location}.
          </p>

          <p className={styles.built}>
            Built in Next.js. Set in the system face, with Inter and JetBrains Mono fallbacks.
            Version {current.version}
            {' — '}
            no analytics beyond a counter, no cookies, nothing tracked.
          </p>

          <p className={styles.hint}>
            Press <kbd className={styles.kbd}>?</kbd> for the keyboard shortcuts.
          </p>
        </div>
      </div>
    </footer>
  )
}

function Reach({ label, value, href, external }) {
  return (
    <li>
      <a
        href={href}
        className={styles.reach}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <span className={styles.reachLabel}>{label}</span>
        <span className={styles.reachValue}>{value}</span>
        <span className={styles.reachGo} aria-hidden="true">
          {external ? '↗' : '→'}
        </span>
      </a>
    </li>
  )
}
