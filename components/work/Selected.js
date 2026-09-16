import Image from 'next/image'
import Link from 'next/link'
import Anatomy from '@/components/visual/Anatomy'
import selectedWork from '@/data/work'
import projects from '@/data/projects'
import research from '@/data/research'
import { leadership } from '@/data/leadership'
import styles from './Selected.module.css'

/**
 * Selected work.
 *
 * Five features, not twelve cards. Each one is composed rather than filled:
 * the number and the field sit in a left margin, the title runs large, and the
 * visual is whatever that piece of work actually has — a photograph where one
 * exists, the system diagram where the product is the thing worth drawing, and
 * nothing at all rather than an invented screenshot.
 *
 * The order is an edit. Product first because it is the strongest claim,
 * research second because it is the most verifiable, and the two dashboards
 * share the last slot because they are one skill shown twice.
 *
 * Nothing here restates a project. It reads projects.js, research.js and
 * leadership.js by id, so the record cannot drift from the page.
 */
const byId = Object.fromEntries(projects.map((p) => [p.id, p]))
const leadById = Object.fromEntries(leadership.map((l) => [l.id, l]))

export default function Selected() {
  return (
    <section className="band" id="work">
      <div className="wrap">
        <h2 className="sr">Selected work</h2>

        <div className="marker" aria-hidden="true">
          <span className="dot" />
          <p className="m-label">Selected work</p>
          <p className="m-label">05 pieces</p>
        </div>

        <div className={styles.list}>
          {selectedWork.map((entry, i) => (
            <Feature key={entry.id} entry={entry} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Feature({ entry, flip }) {
  const piece = resolve(entry)
  if (!piece) return null

  const Wrapper = entry.href ? Link : 'article'
  // A feature is a very large link with no button on it, so the pointer says
  // where it goes. Only the ones that actually go somewhere get a label.
  const props = entry.href
    ? {
        href: entry.href,
        className: styles.feature,
        'data-cursor': 'Read the case study',
        'aria-label': `View the ${piece.name} case study`,
      }
    : { className: styles.feature }

  // A diagram needs the full measure; a photograph is happy in half of it.
  const visual = entry.kind === 'analytics' || entry.image ? 'image' : 'diagram'

  return (
    <Wrapper
      {...props}
      data-reveal-3d
      data-flip={flip ? 'true' : 'false'}
      data-tone={entry.tone}
      data-visual={visual}
      data-linked={entry.href ? 'true' : 'false'}
    >
      <div className={styles.margin}>
        <span className={styles.n}>{entry.n}</span>
        <span className={styles.field}>{entry.field}</span>
        {piece.period && <span className={styles.period}>{piece.period}</span>}
      </div>

      <div className={styles.body}>
        <h3 className={`d-title ${styles.title}`}>{piece.name}</h3>
        {piece.subtitle && <p className={styles.subtitle}>{piece.subtitle}</p>}

        <p className={styles.hook}>{entry.hook}</p>
        <p className={`t-body ${styles.blurb}`}>{piece.blurb}</p>

        {piece.stack?.length > 0 && (
          <ul className={styles.stack}>
            {piece.stack.slice(0, 6).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )}

        {entry.href && (
          <p className={styles.go}>
            <span>Read the case study</span>
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </p>
        )}
      </div>

      <div className={styles.visual}>
        <Visual entry={entry} piece={piece} />
      </div>
    </Wrapper>
  )
}

/**
 * The visual is whatever the work actually has. Never a placeholder, never a
 * mocked-up screenshot of a product that was not photographed.
 */
function Visual({ entry, piece }) {
  if (entry.kind === 'analytics') {
    return (
      <div className={styles.pair}>
        {piece.shots.map((s) => (
          <figure key={s.src} className={styles.shot}>
            <Image
              src={s.src}
              alt={s.alt}
              width={s.w}
              height={s.h}
              sizes="(max-width: 900px) 92vw, 42vw"
              loading="lazy"
              className={styles.shotImg}
            />
            <figcaption className={styles.shotCap}>{s.caption}</figcaption>
          </figure>
        ))}
      </div>
    )
  }

  if (entry.image) {
    return (
      <figure
        className={styles.frame}
        style={{
          '--ratio': entry.imageRatio ?? '3 / 2',
          '--focus': entry.imageFocus ?? 'center',
        }}
      >
        <Image
          src={entry.image}
          alt={entry.imageAlt}
          width={entry.imageW}
          height={entry.imageH}
          sizes="(max-width: 900px) 92vw, 52vw"
          loading="lazy"
          className={styles.frameImg}
        />
      </figure>
    )
  }

  // No photograph exists, so the diagram of how the thing works stands in its
  // place — drawn from the project's own recorded stages.
  if (piece.anatomy) return <Anatomy anatomy={piece.anatomy} />

  return null
}

/** Pull the substance from whichever file actually owns it. */
function resolve(entry) {
  if (entry.kind === 'project') {
    const p = byId[entry.id]
    if (!p) return null
    return {
      name: p.name,
      subtitle: p.subtitle,
      period: p.period,
      blurb: p.problem,
      stack: p.stack,
      anatomy: p.anatomy,
    }
  }

  if (entry.kind === 'research') {
    return {
      name: 'Classifying student stress',
      subtitle: research.shortTitle,
      period: research.period,
      blurb:
        'Most stress instruments rely on self-reporting, which is exactly the part nobody checks. The study surveyed 110 students on all 21 items of the University Stress Scale and asked whether four supervised models could do better than the students’ own assessment.',
      stack: research.methods,
      anatomy: null,
    }
  }

  if (entry.kind === 'leadership') {
    const l = leadById[entry.id]
    if (!l) return null
    return {
      name: 'A university, in public',
      subtitle: l.org,
      period: l.period,
      blurb:
        'Started as a personal creative page and became the channel the campus actually read — social management, content planning, brand collaborations and event coverage, run alone. The same instinct then went into a hackathon media desk, a film society and a developer chapter.',
      stack: ['Community', 'Content strategy', 'Campaign planning', 'A/B tested messaging', 'Public relations'],
      anatomy: null,
    }
  }

  if (entry.kind === 'analytics') {
    const fifa = byId['fifa-dashboard']
    const wim = byId['wimbledon-dashboard']
    return {
      name: 'Two dashboards',
      subtitle: 'Power BI · FIFA World Cup 2022 and Wimbledon Finals',
      period: '2025',
      blurb:
        'Sport is a good place to practise this, because everyone already knows what happened — so the only thing being judged is whether the report makes it visible. Finishing measured against expected goals in one; serve efficiency and match momentum, player against player, in the other.',
      stack: ['Power BI', 'Data modelling', 'DAX', 'KPI selection', 'Report design'],
      anatomy: null,
      shots: [
        {
          src: fifa.image,
          w: 1283,
          h: 724,
          alt: 'A Power BI report of FIFA World Cup 2022 showing total goals against total expected goals, finishing difference, and a per-player performance table.',
          caption: 'FIFA World Cup 2022 — goals against expected goals',
        },
        {
          src: wim.image,
          w: 1155,
          h: 646,
          alt: 'A Power BI report comparing two Wimbledon finalists on aces, first-serve percentage, net points and games won.',
          caption: 'Wimbledon Finals — serve efficiency, side by side',
        },
      ],
    }
  }

  return null
}
