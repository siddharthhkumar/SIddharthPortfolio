'use client'

import Image from 'next/image'
import WorldFrame from './WorldFrame'
import styles from './SocialWorld.module.css'
import { socialWorld } from '@/data/worlds'
import Reveal from '@/components/motion/Reveal'
import { useParallax } from '@/components/motion/useMotion'

/**
 * IV · SOCIAL — the feed.
 *
 * Composition: editorial and image-led. An asymmetric wall of real campus
 * photographs, oversized figures set as the argument, and the GDSC work
 * presented as what it was — an experiment with a hypothesis and a result.
 * Nothing here is stock and nothing is staged.
 */
export default function SocialWorld({ domain }) {
  const { feature, experiment, frames, pr, spine } = socialWorld

  return (
    <WorldFrame domain={domain} lede={domain.line}>
      {{
        title: (
          <Reveal variant="mask">
            <h1 className={styles.title}>
              Social<span className={styles.amp}>&</span>Growth
            </h1>
          </Reveal>
        ),
        body: (
          <>
            {/* ── The spine, set as a run of type ── */}
            <section className={`bay ${styles.spineBay}`}>
              <p className={styles.spine}>
                {spine.map((s, i) => (
                  <span key={s} className={styles.spineWord}>
                    {i > 0 && <span className={styles.spineArrow} aria-hidden="true">→</span>}
                    <Reveal as="span" variant="rise" delay={i * 90} style={{ display: 'inline-block' }}>
                      {s}
                    </Reveal>
                  </span>
                ))}
              </p>
            </section>

            {/* ── The community: the major case ── */}
            <section className={`bay ${styles.featureBay}`}>
              <div className={styles.featureGrid}>
                <div className={styles.featureMain}>
                  <Reveal variant="rise">
                    <span className={`mono ${styles.kicker}`}>
                      {feature.role} &middot; {feature.note}
                    </span>
                  </Reveal>

                  <Reveal variant="mask" delay={80}>
                    <h2 className={styles.featureName}>{feature.name}</h2>
                  </Reveal>

                  <Reveal variant="rise" delay={160}>
                    <p className={styles.featureLede}>{feature.lede}</p>
                  </Reveal>

                  <Reveal variant="rise" delay={240} className={styles.doing}>
                    {feature.doing.map((d) => (
                      <p key={d} className={styles.doingLine}>
                        {d}
                      </p>
                    ))}
                  </Reveal>

                  <Reveal variant="rise" delay={320}>
                    <a
                      href={feature.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`link ${styles.handle}`}
                      data-cursor="open"
                    >
                      {feature.handle}
                    </a>
                  </Reveal>
                </div>

                {/* Figures set as the headline, because they are the argument. */}
                <div className={styles.figures}>
                  {feature.figures.map((f, i) => (
                    <Reveal as="none" key={f.label} variant="lift" delay={i * 130}>
                      <div className={styles.figure}>
                        <span className={styles.figValue}>{f.value}</span>
                        <span className={styles.figLabel}>{f.label}</span>
                      </div>
                    </Reveal>
                  ))}
                  <Reveal variant="rise" delay={300}>
                    <span className={`mono ${styles.figPeriod}`}>{feature.period}</span>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* ── The wall ── */}
            <section className={styles.wallBay}>
              <div className={styles.wall}>
                {frames.map((frame, i) => (
                  <Frame key={frame.src} frame={frame} index={i} />
                ))}
              </div>
            </section>

            {/* ── The experiment ── */}
            <section className={`bay ${styles.expBay}`}>
              <div className={styles.expGrid}>
                <Reveal variant="slide" className={styles.expMain}>
                  <span className={`mono ${styles.kicker}`}>
                    {experiment.role} &middot; {experiment.period}
                  </span>
                  <h2 className={styles.expName}>{experiment.name}</h2>

                  <dl className={styles.method}>
                    <dt className={`tag ${styles.methodKey}`}>Hypothesis</dt>
                    <dd className={styles.methodVal}>{experiment.hypothesis}</dd>
                    <dt className={`tag ${styles.methodKey}`}>Method</dt>
                    <dd className={styles.methodVal}>{experiment.method}</dd>
                    <dt className={`tag ${styles.methodKey}`}>Also</dt>
                    <dd className={styles.methodVal}>{experiment.also}</dd>
                  </dl>
                </Reveal>

                <Reveal variant="rise" delay={140} className={styles.expResult}>
                  <span className={`tag ${styles.methodKey}`}>Result</span>
                  {experiment.figures.map((f) => (
                    <div key={f.label} className={styles.resultRow}>
                      <span className={styles.resultValue}>{f.value}</span>
                      <span className={styles.resultLabel}>{f.label}</span>
                    </div>
                  ))}
                </Reveal>
              </div>
            </section>

            {/* ── PR, stated plainly ── */}
            <section className={`bay ${styles.prBay}`}>
              <Reveal variant="rise" className={styles.pr}>
                <span className={`mono ${styles.kicker}`}>
                  {pr.role} &middot; {pr.name}
                </span>
                <ul className={styles.prFigures}>
                  {pr.figures.map((f) => (
                    <li key={f.label} className={styles.prFigure}>
                      <span className={styles.prValue}>{f.value}</span>
                      <span className={styles.prLabel}>{f.label}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </section>
          </>
        ),
      }}
    </WorldFrame>
  )
}

function Frame({ frame, index }) {
  const ref = useParallax(index % 2 === 0 ? 28 : -22)
  return (
    <Reveal as="none" variant="lift" delay={index * 70}>
      <figure className={styles.frame} ref={ref} data-cursor="view">
        <Image
          src={frame.src}
          alt={frame.alt}
          width={640}
          height={800}
          sizes="(max-width: 900px) 46vw, 22vw"
          className={styles.frameImg}
        />
        <figcaption className={`mono ${styles.frameCap}`}>{frame.caption}</figcaption>
      </figure>
    </Reveal>
  )
}
