import styles from './Proof.module.css'
import { featuredProjects } from '@/data/projects'
import research from '@/data/research'
import Reveal from '@/components/motion/Reveal'

/**
 * Proof, not a portfolio grid. Two products and one paper, each reduced to the
 * single thing worth knowing — with the link that lets anyone check it.
 */
export default function Proof() {
  return (
    <section id="work" className={`bay ${styles.proof}`}>
      <div className={styles.head}>
        <Reveal variant="rise">
          <p className="tag">
            <span className={styles.index}>03</span> Proof
          </p>
        </Reveal>
        <Reveal variant="draw" className={styles.rule} />
      </div>

      <div className={styles.items}>
        {featuredProjects.map((project, i) => (
          <Reveal as="none" key={project.id} variant="lift" delay={i * 110}>
            <article className={styles.item}>
              <header className={styles.itemHead}>
                <span className={`mono ${styles.kind}`}>
                  {project.kind} &middot; {project.period}
                </span>
                <h3 className={`display ${styles.title}`}>{project.name}</h3>
                <p className={styles.subtitle}>{project.subtitle}</p>
              </header>

              <p className={styles.problem}>{project.problem}</p>

              <p className={styles.role}>
                <span className={`tag ${styles.roleLabel}`}>My role</span>
                {project.role.title}
              </p>

              <div className={styles.foot}>
                <ul className={styles.stack}>
                  {project.stack.slice(0, 4).map((tech) => (
                    <li key={tech} className={`mono ${styles.tech}`}>
                      {tech}
                    </li>
                  ))}
                  {project.stack.length > 4 && (
                    <li className={`mono ${styles.tech}`}>+{project.stack.length - 4}</li>
                  )}
                </ul>

                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`link ${styles.link}`}
                    data-cursor="open"
                  >
                    {link.label}
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </a>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* The paper sits with the work, not in a separate silo. */}
      <Reveal variant="rise" className={styles.paper}>
        <div className={styles.paperMain}>
          <span className={`tag ${styles.paperLabel}`}>{research.role} &middot; Peer reviewed</span>
          <h3 className={styles.paperTitle}>{research.title}</h3>
          <p className={styles.paperMeta}>
            {research.venues.map((v) => v.label).join('  ·  ')}
          </p>
        </div>
        <a
          href={research.paper}
          target="_blank"
          rel="noopener noreferrer"
          className={`link link-quiet ${styles.link}`}
          data-cursor="paper"
        >
          Read the paper
        </a>
      </Reveal>
    </section>
  )
}
