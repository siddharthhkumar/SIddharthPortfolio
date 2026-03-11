import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.tag}>Who I Am</div>
      <h2 className={styles.stitle}>
        About <em>Me</em>
      </h2>
      <div className={styles.aboutGrid}>
        <div className={styles.reveal}>
          <p className={styles.aboutLead}>"I'm grateful to work where data meets people. Where curiosity drives understanding, and understanding drives change."</p>
          <p className={styles.ap}>
            I'm <strong>Siddharth Kumar</strong>—a <strong>Business Analyst</strong> learning how to ask better questions. I've discovered that most organizations don't realize what they're missing because they've never measured it. People face real challenges without language to describe them. And the most meaningful things happen when you combine honest data, genuine research, and real human connection. I've been fortunate to work across all three—and I'm still learning what each truly means.
          </p>
          <p className={styles.ap}>
            <strong>As a Business Analyst:</strong> At <strong>Top Talent Bridge LLP</strong> and <strong>Gaint Logistics</strong>, I learned how to listen to data. I built dashboards and pipelines—nothing fancy, just tools that help people see what they couldn't see before. Recruitment patterns, operational gaps, the hidden costs of ignored problems. I use SQL, Python, Power BI because I'm genuinely curious about them, and because they help answer the one question that matters: <em>What are we blind to?</em> I'm grateful for these experiences. They taught me that data is just translation—turning silence into language.
          </p>
          <p className={styles.ap}>
            <strong>As a Researcher:</strong> I noticed students around me were struggling—stressed, overwhelmed, and ashamed of it. Nobody was measuring it. So I researched it properly: built an ML model, tested it rigorously, presented it at <strong>AIS2C2 International Conference 2025</strong>. And honestly, I'm still humbled that it was accepted. The research won't fix anything by itself. But if it helps even one person understand what they're experiencing, I'm grateful for it. That's what research should be—making visible what deserves to be seen, and doing it with integrity.
          </p>
          <p className={styles.ap}>
            <strong>As a Community Builder:</strong> I've learned that numbers don't create change—people do. I founded <strong>Mirage</strong>, worked to grow <strong>GDG & MLSA</strong>, helped build <strong>ICompus</strong>. But what I'm truly grateful for is the 500+ people who showed up, connected, helped each other. They built the communities. I just created space. The real work was students mentoring students, people finding belonging, communities that actually cared. That's humbling. It reminded me that impact isn't something you create—it's something you're privileged to witness when you bring the right people together.
          </p>

          <div className={styles.aboutGallery}>
            <div className={styles.agItem}>
              <img src="/images/NetSIm Student Coordinator.jpeg" alt="NetSIM network simulation" />
              <span>NetSIM Student Coordinator</span>
            </div>
            <div className={styles.agItem}>
              <img src="/images/Brain Storming Session.jpeg" alt="Brainstorming session" />
              <span>Mirage Founder &amp; General Secretary</span>
            </div>
            <div className={styles.agItem}>
              <img src="/images/MLSA SESSION.jpeg" alt="MLSA community session" />
              <span>MLSA Lead &amp; Strategist</span>
            </div>
            <div className={styles.agItem}>
              <img src="/images/Data Science Certificate.jpeg" alt="Data Science expertise" />
              <span>Data Science Proficiency</span>
            </div>
            <div className={styles.agItem}>
              <img src="/images/GDG Cloud and GenAi Session.jpeg" alt="GDG Cloud and GenAI session" />
              <span>GDG Management Lead</span>
            </div>
            <div className={styles.agItem}>
              <img src="/images/mirage.jpeg" alt="Mirage audio-visual society" />
              <span>Community Leadership</span>
            </div>
          </div>

          <div className={styles.lorSnip}>
          <p className={styles.lorQ}>"Siddharth has demonstrated outstanding technical expertise, strategic vision, and exceptional leadership capability. His impact on our community initiatives has been transformative, and his discipline, creativity, and technical proficiency position him for excellence in any professional endeavor."</p>
            <div className={styles.lorA}>— Dr. Shakti Sahi · Chairperson, Cultural Council · Gautam Buddha University · Official Recommendation · Aug 2025</div>
          </div>
        </div>

        <div className={styles.aboutRight}>
          <div className={styles.aboutProfile}>
            <div className={styles.apAvatar}>
              <img src="/images/podium.jpeg" alt="Siddharth Kumar speaking at an event" />
            </div>
            <div className={styles.apInfo}>
              <div className={styles.apRole}>Analyst | Researcher | Community Builder</div>
              <h3>Siddharth Kumar</h3>
              <div className={styles.apMeta}>
                Based in <strong>Noida / Lucknow</strong> · <strong>B.Tech IT</strong> · Expert in <strong>Business Intelligence &amp; Data Strategy</strong>
              </div>
            </div>
          </div>

          <div className={styles.eduBox}>
            <div className={styles.eduIco}>
              <img src="/images/gbu-logo.jpg" alt="GBU Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div className={styles.eduInfo}>
              <h4>Gautam Buddha University</h4>
              <p>B.Tech in Information Technology</p>
              <p style={{ fontSize: '0.76rem', color: 'var(--sub)' }}>Greater Noida · Sept 2022 – July 2026</p>
            </div>
          </div>

          <div className={styles.ic}>
            <div className={styles.icTop}>
              <h4>Business Analyst</h4>
            </div>
            <p>Delivered strategic insights at Top Talent Bridge LLP and Gaint Logistics. Design KPI dashboards, conduct recruitment & attrition funnel analysis, and drive data-backed decisions using SQL, Power BI, and Python.</p>
          </div>

          <div className={styles.ic}>
            <div className={styles.icTop}>
              <h4>Published Researcher</h4>
            </div>
            <p>Lead author of ML-based stress classification research presented at AIS2C2 International Conference 2025. Publication pending in peer-reviewed venue. Expertise in research design, statistical validation, and cross-disciplinary analysis.</p>
          </div>

          <div className={styles.ic}>
            <div className={styles.icTop}>
              <h4>Community Builder</h4>
            </div>
            <p>Founder & General Secretary of Mirage society. Management Lead of GDG & MLSA at scale. Scaled ICompus to 2500+ followers with 1M+ reach. Recognized by Gautam Buddha University Cultural Council for strategic impact and community transformation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
