import styles from './Projects.module.css'

export default function Projects() {
  const projects = [
    {
      num: '01',
      type: 'RESEARCH',
      badge: '📄 Conference Paper',
      title: 'ML Stress Level Classification',
      desc: 'Authored and presented at AIS2C2 2025 International Conference. Designed an analytical framework classifying stress levels using psychological (USS-21) and lifestyle behavioral data across supervised ML models.',
      features: ['Integrated multi-source psychological + lifestyle datasets', 'Feature engineering & comparative ML model evaluation', 'Statistical hypothesis validation on survey data', 'Lead author — presented at AIS2C2 2025'],
      stack: ['Python', 'Scikit-learn', 'Pandas', 'Statistical Analysis'],
      wide: true,
    },
    {
      num: '02',
      type: 'PEOPLE ANALYTICS',
      badge: '⭐ Featured',
      title: 'HR Attrition Analysis Dashboard',
      desc: 'Root cause analysis on employee data uncovering key drivers of attrition — salary, tenure, job roles — visualized in Power BI to support data-driven workforce planning.',
      features: ['Identified "at-risk" employee segments by tenure & role', 'Interactive Power BI retention & trend dashboard', 'SQL-driven data extraction and transformation'],
      stack: ['Python', 'SQL', 'Power BI', 'People Analytics'],
      wide: true,
    },
  ]

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.tag}>What I've Built</div>
      <h2 className={styles.stitle}>
        Selected <em>Projects</em>
      </h2>
      <div className={styles.pjGrid}>
        {projects.map((project, index) => (
          <div key={index} className={`${styles.pjCard} ${project.wide ? styles.wide : ''}`}>
            <div className={styles.pjTop}>
              <div className={styles.pjNum}>{project.num} / {project.type}</div>
              <span className={styles.pjBadge}>{project.badge}</span>
            </div>
            <div className={styles.pjTitle}>{project.title}</div>
            <p className={styles.pjDesc}>{project.desc}</p>
            <div className={styles.pjFeats}>
              {project.features.map((feature, i) => (
                <div key={i} className={styles.pjFeat}>
                  {feature}
                </div>
              ))}
            </div>
            <div className={styles.pjStack}>
              {project.stack.map((tag, i) => (
                <span key={i} className={styles.sTag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className={styles.pjLinks}>
              <a href="https://github.com/siddharthhkumar" target="_blank" rel="noopener noreferrer" className={styles.plinkP}>
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
