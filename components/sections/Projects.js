import styles from "./Projects.module.css"

const projects = [
  { num: "01", type: "Research", badge: "Conference Paper", title: "ML-Based Stress Level Classification", desc: "Research study presented at AIS2C2 2025 exploring student stress prediction using psychological and lifestyle indicators with supervised machine learning models.", features: ["Combined psychological USS-21 and lifestyle survey datasets", "Compared Logistic Regression, SVM, Random Forest and XGBoost", "Performed feature engineering and statistical validation", "Lead author and conference presenter"], stack: ["Python", "Scikit-learn", "Pandas", "XGBoost"], paper: "/docs/260.pdf", image: "" },
  { num: "02", type: "Sports Analytics", badge: "Dashboard", title: "Wimbledon Finals Analytics Dashboard", desc: "Interactive Power BI dashboard analysing player performance metrics including aces, first-serve percentage, match score, net points and total games won.", features: ["Player comparison analytics for match statistics", "Serve efficiency and performance visualisation", "Interactive dashboard design"], stack: ["Power BI", "Data Visualization", "Sports Analytics"], image: "/images/wimbledon-dashboard.png" },
  { num: "03", type: "Sports Analytics", badge: "Dashboard", title: "FIFA World Cup 2022 Analytics Dashboard", desc: "Interactive Power BI dashboard analysing FIFA World Cup 2022 match data including goals, possession, player performance and team statistics.", features: ["Match and team performance visualisation", "Player stats and goal analysis", "Tournament-wide data insights"], stack: ["Power BI", "Data Visualization", "Sports Analytics"], image: "/images/fifawc2022.png" }
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.tag}>What I Have Built</div>
      <h2 className={styles.stitle}>Selected <em>Projects</em></h2>

      <div className={styles.featuredWrap}>
        <div className={styles.featuredBadgeRow}>
          <span className={styles.featuredLabel}>★ Featured Project</span>
          <span className={styles.featuredNum}>04 / AI System</span>
        </div>
        <div className={styles.featuredInner}>
          <div className={styles.featuredLeft}>
            <span className={styles.featuredBadge}>Machine Learning</span>
            <h3 className={styles.featuredTitle}>AI Financial Intelligence System</h3>
            <p className={styles.featuredDesc}>A full-stack financial analytics platform that applies machine learning to decode market behaviour, predict stock trends, and surface actionable intelligence — built from the ground up with a Python backend and integrated analytics interface.</p>
            <div className={styles.featuredStats}>
              <div className={styles.fStat}><span className={styles.fStatNum}>3+</span><span className={styles.fStatLabel}>ML Models</span></div>
              <div className={styles.fStat}><span className={styles.fStatNum}>REST</span><span className={styles.fStatLabel}>FastAPI Backend</span></div>
              <div className={styles.fStat}><span className={styles.fStatNum}>Live</span><span className={styles.fStatLabel}>Data Pipeline</span></div>
            </div>
            <div className={styles.featuredFeats}>
              <div className={styles.fFeat}>Stock price prediction using time-series ML models</div>
              <div className={styles.fFeat}>Real-time market data ingestion and processing</div>
              <div className={styles.fFeat}>FastAPI REST backend with modular ML pipeline</div>
              <div className={styles.fFeat}>Interactive analytics dashboard with visualisations</div>
            </div>
            <div className={styles.featuredStack}>
              {["Python", "FastAPI", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"].map(function(t, i) {
                return <span key={i} className={styles.fTag}>{t}</span>
              })}
            </div>
            <div className={styles.featuredLinks}>
              <a href="https://github.com/siddharthhkumar/AI-Financial-Intelligence-System" target="_blank" rel="noopener noreferrer" className={styles.featuredLinkMain}>View on GitHub</a>
            </div>
          </div>
          <div className={styles.featuredRight}>
            <div className={styles.featuredMockup}>
              <div className={styles.mockupBar}><span></span><span></span><span></span></div>
              <div className={styles.mockupBody}>
                <div className={styles.mockupChart}>
                  <div className={styles.chartLine}></div>
                  <div className={styles.chartBars}>
                    <div className={styles.bar} style={{height:"40%"}}></div>
                    <div className={styles.bar} style={{height:"65%"}}></div>
                    <div className={styles.bar} style={{height:"45%"}}></div>
                    <div className={styles.bar} style={{height:"80%"}}></div>
                    <div className={styles.bar} style={{height:"55%"}}></div>
                    <div className={styles.bar} style={{height:"90%"}}></div>
                    <div className={styles.bar} style={{height:"70%"}}></div>
                    <div className={styles.bar} style={{height:"95%"}}></div>
                  </div>
                </div>
                <div className={styles.mockupTags}>
                  <span className={styles.mockupTag} style={{color:"#4ade80"}}>▲ AAPL +2.4%</span>
                  <span className={styles.mockupTag} style={{color:"#f87171"}}>▼ TSLA -1.1%</span>
                  <span className={styles.mockupTag} style={{color:"#4ade80"}}>▲ NVDA +5.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.pjGrid}>
        {projects.map(function(project, index) {
          return (
            <div key={index} className={styles.pjCard}>
              <div className={styles.pjTop}>
                <div className={styles.pjNum}>{project.num} / {project.type}</div>
                <span className={styles.pjBadge}>{project.badge}</span>
              </div>
              <div className={styles.pjImageWrap}>
                {project.image ? <img src={project.image} alt={project.title} className={styles.pjImage} /> : <div className={styles.pjNoImage}></div>}
              </div>
              <div className={styles.pjTitle}>{project.title}</div>
              <p className={styles.pjDesc}>{project.desc}</p>
              <div className={styles.pjFeats}>
                {project.features.map(function(f, i) { return <div key={i} className={styles.pjFeat}>{f}</div> })}
              </div>
              <div className={styles.pjStack}>
                {project.stack.map(function(t, i) { return <span key={i} className={styles.sTag}>{t}</span> })}
              </div>
              <div className={styles.pjLinks}>
                {project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.plinkP}>GitHub</a> : null}
                {project.paper ? <a href={project.paper} target="_blank" rel="noopener noreferrer" className={styles.plinkS}>View Paper</a> : null}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
