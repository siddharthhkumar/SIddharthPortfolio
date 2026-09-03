import { notFound } from 'next/navigation'
import Anatomy from '@/components/visual/Anatomy'
import reflections from '@/data/reflections'
import projects from '@/data/projects'
import {
  Back,
  Masthead,
  Rail,
  Section,
  P,
  Pull,
  List,
  Steps,
  Caveat,
  Tags,
  Reflection,
  Links,
  Next,
  page,
} from '@/components/case/Case'

/**
 * A product case study.
 *
 * Both shipped products run through this one route, because they genuinely
 * have the same shape: a problem, a thing built, a specific role in building
 * it, an architecture, and three honest answers at the end.
 *
 * Everything except the reflection is read from data/projects.js, so a case
 * study cannot claim something the record does not.
 */
const ORDER = ['gnosis-ai', 'documind-ai', 'research']

const NEXT = {
  'gnosis-ai': { href: '/work/documind-ai', title: 'DocuMind AI' },
  'documind-ai': { href: '/work/research', title: 'Classifying student stress' },
}

const TONE = {
  'gnosis-ai': 'product',
  'documind-ai': 'product',
}

const STANDFIRST = {
  'gnosis-ai':
    'I prototyped it alone to work out what a non-specialist actually needs to see, then led three other people through building the rest of it.',
  'documind-ai':
    'Built because finding one paragraph in a fifty-page report is a bad way to spend an afternoon, and because a citation is the difference between an answer and a guess.',
}

export function generateStaticParams() {
  return projects.filter((p) => p.featured).map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = projects.find((x) => x.id === slug)
  if (!p) return {}

  return {
    title: `${p.name} — ${p.subtitle}`,
    description: p.problem,
    alternates: { canonical: `/work/${p.id}` },
    openGraph: {
      title: `${p.name} — ${p.subtitle}`,
      description: p.problem,
      url: `/work/${p.id}`,
    },
  }
}

export default async function CaseStudy({ params }) {
  const { slug } = await params
  const project = projects.find((p) => p.id === slug && p.featured)
  if (!project) notFound()

  const reflection = reflections[project.id]
  const next = NEXT[project.id]
  const n = String(ORDER.indexOf(project.id) + 1).padStart(2, '0')

  return (
    <main id="main" className={page} data-tone={TONE[project.id]}>
      <div className="wrap">
        <Back />

        <Masthead
          kicker={[`${n} · ${project.kind}`, project.period, project.disciplines.join(' · ')]}
          title={project.name}
          standfirst={STANDFIRST[project.id]}
        />

        <Rail
          items={[
            { key: 'What it is', value: project.subtitle },
            { key: 'My role', value: project.role.title },
            { key: 'When', value: project.period },
            { key: 'Type', value: project.kind },
          ]}
        />

        <Section label="Why" title="The problem">
          <P>{project.problem}</P>
        </Section>

        <Section label="What" title="What I built">
          <P>{project.built}</P>
          <Pull>{project.approach}</Pull>
        </Section>

        {project.anatomy && (
          <Section label="How it works">
            <Anatomy anatomy={project.anatomy} />
          </Section>
        )}

        <Section label="My part" title={project.role.title}>
          <List items={project.role.points} />
          {project.role.caveat && <Caveat>{project.role.caveat}</Caveat>}
        </Section>

        {project.architecture?.length > 0 && (
          <Section label="Architecture" title="What is actually running">
            <Steps items={project.architecture} />
          </Section>
        )}

        <Section label="Built with">
          <Tags items={project.stack} />
        </Section>

        <Section label="Result" title="Where it got to">
          <P>{project.outcome}</P>
        </Section>

        <Section label="Honestly" title="The three questions that matter">
          <Reflection reflection={reflection} />
        </Section>

        {project.links?.length > 0 && (
          <Section label="See it">
            <Links items={project.links} />
          </Section>
        )}

        {next && <Next href={next.href} title={next.title} />}
      </div>
    </main>
  )
}
