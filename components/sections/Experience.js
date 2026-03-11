import styles from './Experience.module.css'

export default function Experience() {
  const experiences = [
    {
      role: 'Business Analyst Intern',
      period: 'Mar 2026',
      company: 'Top Talent Bridge LLP',
      color: 'og',
      items: [
        'End-to-end recruitment lifecycle data analysis — lead gen through final placement',
        'Monitor KPIs: conversion rates, TAT, sourcing effectiveness & placement ratios',
        'Build Excel & Google Sheets performance dashboards with advanced formulas, Pivot Tables & XLOOKUP',
        'Recruitment funnel analysis — identifying bottlenecks and recommending optimizations',
        'Revenue tracking, forecasting models, and competitor/market analysis',
      ],
    },
    {
      role: 'Research Analyst — AIS2C2 2025',
      period: 'Aug – Dec 2025',
      company: 'Gautam Buddha University',
      color: 'ob',
      items: [
        'Designed ML-based stress classification analytical framework',
        'Integrated USS-21 psychological + lifestyle data for predictive modeling',
        'Feature engineering, model evaluation & comparative ML analysis',
        'Lead author — paper presented at AIS2C2 International Conference 2025',
      ],
    },
  ]

  return (
    <section id="experience" className={styles.expSection}>
      <div className={styles.tag}>Where I've Worked</div>
      <h2 className={styles.stitle}>
        Work <em>Experience</em>
      </h2>
      <div className={styles.expGrid}>
        {experiences.slice(0, 2).map((exp, index) => (
          <div key={index} className={styles.expCard}>
            <div className={styles.expHead}>
              <div className={styles.expRole}>{exp.role}</div>
              <span className={styles.expPer}>{exp.period}</span>
            </div>
            <div className={`${styles.expOrg} ${styles[exp.color]}`}>{exp.company}</div>
            <ul className={styles.expUl}>
              {exp.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
