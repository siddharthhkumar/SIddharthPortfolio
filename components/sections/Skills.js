import styles from './Skills.module.css'

export default function Skills() {
  const skillsData = [
    {
      icon: '📊',
      title: 'Data & Business Analysis',
      skills: ['SQL', 'Microsoft Excel', 'Power BI', 'Tableau', 'KPI Tracking', 'Pivot Tables', 'VLOOKUP / XLOOKUP', 'Funnel Analysis', 'Forecasting'],
    },
    {
      icon: '🐍',
      title: 'Programming & Research',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Feature Engineering', 'EDA', 'Statistical Analysis', 'ML Model Evaluation'],
    },
    {
      icon: '🎯',
      title: 'Business Strategy',
      skills: ['Requirements Gathering', 'Stakeholder Mgmt', 'Root Cause Analysis', 'Process Mapping', 'Agile / Scrum', 'Revenue Tracking', 'Market Analysis'],
    },
    {
      icon: '🛠️',
      title: 'Tools & Platforms',
      skills: ['GitHub', 'Google Sheets', 'Google Cloud', 'VS Code', 'Next.js', 'FastAPI', 'Vercel', 'Notion'],
    },
  ]

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.tag}>Technical Arsenal</div>
      <h2 className={styles.stitle}>
        Skills & <em>Tools</em>
      </h2>
      <div className={styles.skGrid}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skCard}>
            <div className={styles.skHead}>
              <div className={styles.skIco}>{skill.icon}</div>
              <h3>{skill.title}</h3>
            </div>
            <div className={styles.skTags}>
              {skill.skills.map((tag, i) => (
                <span key={i} className={styles.skTag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
