'use client'

import { useState } from 'react'
import { thinking } from '@/data/thinking'
import profile from '@/data/profile'
import skills from '@/data/skills'
import styles from './AskMeAbout.module.css'

/**
 * Ask Me About — interactive discovery.
 *
 * Pull real insights from the data: the thinking behind each discipline,
 * the skills, the profile narrative. One click reveals what actually drives
 * the work, not a summary but the reasoning.
 */
export default function AskMeAbout() {
  const [active, setActive] = useState(0)

  // Topics derived from actual data
  const topics = [
    {
      label: 'How I Think',
      discipline: 'The one question asked four ways',
      content: thinking.title,
      detail: thinking.lede,
      tone: 'data',
      emoji: '🧠',
    },
    {
      label: 'Data & Analysis',
      discipline: 'SQL · Excel · Power BI · Dashboards',
      content: 'Interpreting records before anything else',
      detail:
        profile.about.bullets[0] || 'SQL, Excel, Power BI — data cleaning, KPI tracking, dashboards.',
      tone: 'data',
      emoji: '📊',
    },
    {
      label: 'Product Building',
      discipline: 'Problem discovery to shipped',
      content: 'From idea to prototype to release',
      detail:
        profile.about.bullets[1] || 'Prototyping, interface design, guiding teams to launch.',
      tone: 'product',
      emoji: '🚀',
    },
    {
      label: 'Growth & Content',
      discipline: 'Audience building · Campaigns · SEO',
      content: 'Tested messaging over assumptions',
      detail:
        profile.about.bullets[2] || 'Content strategy, social growth, campaigns, digital storytelling.',
      tone: 'growth',
      emoji: '📈',
    },
    {
      label: 'Research & AI',
      discipline: 'Published papers · Applied ML',
      content: 'Where instruments and reality come apart',
      detail:
        profile.about.bullets[3] || 'AI tools, research, practical problem-solving over trends.',
      tone: 'research',
      emoji: '🔬',
    },
  ]

  const activeTopic = topics[active]

  return (
    <section className="band" id="ask-me">
      <div className="wrap">
        <div className="marker">
          <span className="dot" />
          <p className="m-label">Discovery</p>
        </div>

        <h2 className={`d-title ${styles.title}`} data-reveal>
          Ask me about.
        </h2>

        <div className={styles.container}>
          {/* Topic cards */}
          <div className={styles.topics}>
            {topics.map((topic, i) => (
              <button
                key={topic.label}
                className={`${styles.topic} ${active === i ? styles.activeTopic : ''}`}
                onClick={() => setActive(i)}
                data-tone={topic.tone}
                data-reveal
                style={{ '--d': `${i * 40}ms` }}
              >
                <span className={styles.emoji}>{topic.emoji}</span>
                <div className={styles.topicText}>
                  <span className={styles.topicLabel}>{topic.label}</span>
                  <span className={styles.topicDiscipline}>{topic.discipline}</span>
                </div>
                <span className={styles.chevron} aria-hidden="true">
                  →
                </span>
              </button>
            ))}
          </div>

          {/* Active topic detail */}
          <div className={styles.detail} data-reveal key={activeTopic.label}>
            <div className={styles.detailHead}>
              <h3 className={styles.detailTitle}>{activeTopic.content}</h3>
              <p className={styles.detailSubtitle}>{activeTopic.discipline}</p>
            </div>

            <p className={styles.detailBody}>{activeTopic.detail}</p>

            <div className={styles.detailMeta}>
              <p className="m-label" style={{ color: `var(--c-${activeTopic.tone})` }}>
                {activeTopic.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
