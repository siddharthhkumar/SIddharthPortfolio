import { notFound } from 'next/navigation'
import domains, { domainById } from '@/data/domains'
import DomainWorld from '@/components/atlas/DomainWorld'

export function generateStaticParams() {
  return domains.map((d) => ({ domain: d.id }))
}

export async function generateMetadata({ params }) {
  const { domain: id } = await params
  const domain = domainById[id]
  if (!domain) return {}
  return {
    title: `${domain.label} — Practice`,
    description: domain.line,
    openGraph: {
      title: `Siddharth Kumar — ${domain.label}`,
      description: domain.line,
    },
  }
}

export default async function DomainPage({ params }) {
  const { domain: id } = await params
  const domain = domainById[id]
  if (!domain) notFound()
  return <DomainWorld domain={domain} />
}
