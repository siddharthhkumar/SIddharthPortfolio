import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>

      <div className={styles.tag}>Who I Am</div>
      <h2 className={styles.stitle}>About <em>Me</em></h2>

      <div className={styles.profileRow}>
        <div className={styles.profileCard}>
          <div className={styles.apAvatar}>
            <img src="/images/podium.jpeg" alt="Siddharth Kumar" />
          </div>
          <div className={styles.apInfo}>
            <div className={styles.apRole}>Analyst | Researcher | Community Builder</div>
            <h3>Siddharth Kumar</h3>
            <div className={styles.apMeta}>Based in <strong>Noida / Lucknow</strong> · <strong>B.Tech IT</strong> · Expert in <strong>Business Intelligence and Data Strategy</strong></div>
          </div>
        </div>
        <div className={styles.eduCard}>
          <div className={styles.eduIco}>
            <img src="/images/gbu-logo.jpg" alt="GBU" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div className={styles.eduInfo}>
            <h4>Gautam Buddha University</h4>
            <p>B.Tech in Information Technology</p>
            <p className={styles.eduSub}>Greater Noida · Sept 2022 – July 2026</p>
          </div>
        </div>
      </div>

      <div className={styles.roleRow}>
        <div className={styles.roleCard}>
          <div className={styles.roleTop}><h4>Business Analyst</h4></div>
          <p>Delivered strategic insights at Top Talent Bridge LLP and Gaint Logistics. KPI dashboards, recruitment and attrition funnel analysis, data-backed decisions using SQL, Power BI, and Python.</p>
        </div>
        <div className={styles.roleCard}>
          <div className={styles.roleTop}><h4>Published Researcher</h4></div>
          <p>Lead author of ML-based stress classification research at AIS2C2 International Conference 2025. Expertise in research design, statistical validation, and cross-disciplinary analysis.</p>
        </div>
        <div className={styles.roleCard}>
          <div className={styles.roleTop}><h4>Community Builder</h4></div>
          <p>Founder of Mirage society. Management Lead of GDG and MLSA. Scaled ICompus to 2500+ followers with 1M+ reach. Recognized by GBU Cultural Council for strategic impact.</p>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.bioSection}>
        <div className={styles.bioLeft}>
          <p className={styles.aboutLead}>"I am grateful to work where data meets people. Where curiosity drives understanding, and understanding drives change."</p>
          <p className={styles.ap}>I am <strong>Siddharth Kumar</strong>, a <strong>Business Analyst</strong> learning how to ask better questions. Most organizations do not realize what they are missing because they have never measured it. The most meaningful things happen when you combine honest data, genuine research, and real human connection.</p>
          <p className={styles.ap}><strong>As a Business Analyst:</strong> At <strong>Top Talent Bridge LLP</strong> and <strong>Gaint Logistics</strong>, I built dashboards and pipelines that help people see what they could not see before. I use SQL, Python, and Power BI to answer the one question that matters: <em>What are we blind to?</em></p>
          <p className={styles.ap}><strong>As a Researcher:</strong> I noticed students around me were struggling and nobody was measuring it. So I built an ML model, tested it rigorously, and presented it at <strong>AIS2C2 International Conference 2025</strong>.</p>
          <p className={styles.ap}><strong>As a Community Builder:</strong> I founded <strong>Mirage</strong>, grew <strong>GDG and MLSA</strong>, and helped build <strong>ICompus</strong>. The 500+ people who showed up built the communities. I just created the space.</p>
        </div>
        <div className={styles.bioRight}>
          <div className={styles.aboutGallery}>
            <div className={styles.agItem}><img src="/images/NetSIm Student Coordinator.jpeg" alt="NetSIM" /><span>NetSIM Coordinator</span></div>
            <div className={styles.agItem}><img src="/images/Brain Storming Session.jpeg" alt="Mirage" /><span>Mirage Founder</span></div>
            <div className={styles.agItem}><img src="/images/MLSA SESSION.jpeg" alt="MLSA" /><span>MLSA Lead</span></div>
            <div className={styles.agItem}><img src="/images/Data Science Certificate.jpeg" alt="Data Science" /><span>Data Science</span></div>
            <div className={styles.agItem}><img src="/images/GDG Cloud and GenAi Session.jpeg" alt="GDG" /><span>GDG Lead</span></div>
            <div className={styles.agItem}><img src="/images/mirage.jpeg" alt="Community" /><span>Community Leadership</span></div>
          </div>
          <div className={styles.lorSnip}>
            <p className={styles.lorQ}>"Siddharth has demonstrated outstanding technical expertise, strategic vision, and exceptional leadership capability. His impact on our community initiatives has been transformative."</p>
            <div className={styles.lorA}>Dr. Shakti Sahi · Chairperson, Cultural Council · Gautam Buddha University · Aug 2025</div>
          </div>
        </div>
      </div>

    </section>
  )
}
