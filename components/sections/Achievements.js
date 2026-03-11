import styles from './Achievements.module.css'

export default function Achievements() {
  const achievements = [
    {
      icon: 'Conf',
      title: 'AIS2C2 International Conference 2025',
      desc: 'Authored and presented ML-based stress classification research at an international academic conference representing GBU as lead author.',
      stat: '📜 Lead Author · Published',
    },
    {
      icon: 'Prog',
      title: 'McKinsey Forward Program',
      desc: 'Completed McKinsey\'s competitive program — structured problem-solving, analytical thinking, and professional business communication.',
      stat: '✦ 2025 Graduate',
    },
    {
      icon: 'DA',
      title: 'Deloitte Data Analytics Simulation',
      desc: 'Client reporting and Tableau dashboarding experience through Deloitte\'s official job simulation — applied real consulting workflows.',
      stat: '✅ Completed 2025',
    },
    {
      icon: 'Cloud',
      title: 'Google Cloud Study Jam Leader',
      desc: 'Led student cohort through Google Cloud learning pathways, earning team certifications in cloud fundamentals and Generative AI.',
      stat: '🎖️ Group Leader',
    },
    {
      icon: 'Media',
      title: 'Community Instagram Growth',
      desc: 'Grew a community page to 2,500+ followers with 1M+ organic reach through structured content strategy and consistent engagement.',
      stat: '👥 2,500+ · 1M+ Reach',
    },
    {
      icon: 'AI',
      title: 'Generative AI Jam',
      desc: 'Completed Google\'s intensive Generative AI workshop series, gaining hands-on experience with modern AI tooling and applications.',
      stat: '🏅 Completed',
    },
  ]

  return (
    <section id="achievements" className={styles.achSection}>
      <div className={styles.tag}>Recognition & Impact</div>
      <h2 className={styles.stitle}>
        Achievements &amp; <em>Awards</em>
      </h2>
      <div className={styles.achGrid}>
        {achievements.map((achievement, index) => (
          <div key={index} className={styles.achCard}>
            <div className={styles.achIco}>{achievement.icon}</div>
            <h3>{achievement.title}</h3>
            <p>{achievement.desc}</p>
            <div className={styles.achStat}>{achievement.stat}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
