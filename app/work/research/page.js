import Image from 'next/image'
import ResultChart from '@/components/visual/ResultChart'
import research from '@/data/research'
import researchResults from '@/data/researchResults'
import reflections from '@/data/reflections'
import {
  Back,
  Masthead,
  Rail,
  Section,
  P,
  Pull,
  List,
  Tags,
  Reflection,
  Links,
  Next,
  page,
} from '@/components/case/Case'
import styles from './research.module.css'

/**
 * The research case study.
 *
 * Written for a recruiter who is not going to read the paper, without
 * softening what the paper actually found. Two rules held throughout:
 *
 *   The two configurations are shown together. 0.739 is the higher accuracy
 *   but belongs to the worse-balanced model; the combined model carries the
 *   stronger MCC and is the paper's own best result. Quoting either alone
 *   would be true and misleading, so neither is quoted alone.
 *
 *   The sample size is stated where the results are, not in a footnote.
 */
export const metadata = {
  title: 'Classifying student stress — machine learning research',
  description:
    'A peer-reviewed study asking whether machine learning can classify student stress better than self-assessment. 110 participants, all 21 items of the University Stress Scale, four supervised models across three feature configurations. Presented at AIS2C2 2025, published in JICS, May 2026.',
  alternates: { canonical: '/work/research' },
}

export default function ResearchCase() {
  const reflection = reflections.research

  return (
    <main id="main" className={page} data-tone="research">
      <div className="wrap">
        <Back />

        <Masthead
          kicker={['03 · Peer-reviewed research', research.period, research.role]}
          title="Classifying student stress"
          standfirst="Thirty-two of a hundred and ten students disagreed with what the stress scale said about them. That turned out to be the finding."
        />

        <Rail
          items={[
            { key: 'My role', value: `${research.role} · first of three authors` },
            { key: 'Presented', value: 'AIS2C2 2025 — international conference' },
            { key: 'Published', value: 'JICS Vol. 1, Issue 2, pp. 08–13 · May 2026' },
            { key: 'Supervisor', value: 'Maneet Singh (corresponding author)' },
          ]}
        />

        {/* The full title, once, at the size a paper title deserves. */}
        <div className={styles.plate}>
          <p className={styles.plateLabel}>The paper</p>
          <p className={styles.plateTitle}>{research.title}</p>
          <p className={styles.plateAuthors}>
            {research.authors.map((a, i) => (
              // The separator sits outside the styled span, or the rule under
              // the lead author's name runs under the comma after it too.
              <span key={a.name}>
                <span className={a.self ? styles.self : undefined}>{a.name}</span>
                {a.corresponding ? '*' : ''}
                {i < research.authors.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
          <p className={styles.plateAff}>
            {research.department}, {research.affiliation}
          </p>
        </div>

        <Section label="Why" title="The question">
          <P>
            Stress affects students well past how they feel — it shows up in academic performance
            and in whether the ordinary business of a week gets done. Measuring it is the hard
            part, because almost every instrument relies on a student reporting on themselves,
            which is the one input nobody independently checks.
          </P>
          <Pull>
            So: can a model predict a stress level from a short survey better than the student
            can?
          </Pull>
          <List items={research.investigated} />
        </Section>

        <Section label="How" title="The study">
          <P>
            110 participants completed an online survey between 1 and 10 November 2025, covering
            demographics, lifestyle and all 21 items of the University Stress Scale. Responses
            were encoded, standardised and imputed, then built into three feature configurations —
            psychological only, non-psychological only, and both together — so the contribution of
            each kind of feature could be seen rather than assumed.
          </P>
          <P>
            Four supervised models were compared across those configurations with Scikit-Learn:
            support vector machine, random forest, logistic regression and XGBoost. Results are
            reported on accuracy, Matthews correlation and weighted F1.
          </P>
        </Section>

        <Section label="Results" title="Two numbers that disagree">
          <P>
            This is the part worth being careful about. The USS-only configuration reaches the
            higher accuracy at 0.739 — and it is also the worse-balanced model. The combined
            configuration scores lower on accuracy and substantially higher on Matthews
            correlation, which does not reward a model for guessing the most common class. The
            combined model is the paper&rsquo;s own best result.
          </P>

          <ResultChart rows={researchResults} />

          <P>
            Quoting 0.739 on its own would be true and misleading, which is why both are here.
            With 110 responses across four models and three configurations, everything above
            should be read as a direction rather than a measurement.
          </P>
        </Section>

        <Section label="Finding" title="What it actually showed">
          <P>{research.finding}</P>
          <Pull>
            The instrument was the subject all along — 32 of 110 students disagreed with what the
            scale reported about them.
          </Pull>
        </Section>

        <Section label="My part" title={research.role}>
          <List items={research.contribution} />
        </Section>

        <Section label="Methods">
          <Tags items={research.methods} />
        </Section>

        <Section label="Abstract">
          <P>{research.abstract}</P>
        </Section>

        <Section label="Honestly" title="The three questions that matter">
          <Reflection reflection={reflection} />
        </Section>

        <Section label="Read it">
          <figure className={styles.photo}>
            <Image
              src="/images/conference.jpeg"
              alt="Siddharth Kumar presenting the paper at the AIS2C2 2025 conference."
              width={914}
              height={1600}
              sizes="(max-width: 900px) 92vw, 62vw"
              loading="lazy"
              loading="lazy"
              className={styles.photoImg}
            />
            <figcaption className={styles.photoCap}>
              Presenting at AIS2C2 2025 · published by {research.publisher}
            </figcaption>
          </figure>

          <Links items={[{ label: 'Read the paper (PDF)', href: research.paper, primary: true }]} />
        </Section>

        <Next href="/work/gnosis-ai" title="Gnosis AI" />
      </div>
    </main>
  )
}
