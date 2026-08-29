import DataWorld from '@/components/worlds/DataWorld'
import ProductWorld from '@/components/worlds/ProductWorld'
import OperationsWorld from '@/components/worlds/OperationsWorld'
import SocialWorld from '@/components/worlds/SocialWorld'
import ContentWorld from '@/components/worlds/ContentWorld'
import ResearchWorld from '@/components/worlds/ResearchWorld'

/**
 * Six worlds, six compositions. The dispatcher exists so each discipline can
 * be built on its own terms rather than parameterised out of one layout —
 * which is exactly what made the previous version feel templated.
 */
const WORLDS = {
  data: DataWorld,
  product: ProductWorld,
  operations: OperationsWorld,
  social: SocialWorld,
  content: ContentWorld,
  research: ResearchWorld,
}

export default function DomainWorld({ domain }) {
  const World = WORLDS[domain.id]
  if (!World) return null
  return <World domain={domain} />
}
