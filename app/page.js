import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import Atlas from '@/components/atlas/Atlas'
import Proof from '@/components/home/Proof'
import Note from '@/components/home/Note'
import Close from '@/components/home/Close'
import { DomainFocusProvider } from '@/components/atlas/DomainFocus'

// Never blocks first paint, and never ships to a device that will not run it.
const Sculpture = dynamic(() => import('@/components/visuals/Sculpture'))

/**
 * The hub.
 *
 * Not a stack of resume sections — a statement, six ways in, the proof, the
 * short version, and a close. Hero and Atlas share a focus context so that
 * considering a discipline lights its node in the hero object.
 */
export default function Home() {
  return (
    <main id="main">
      <DomainFocusProvider>
        {/* Held across the hero and the atlas, so choosing a discipline
            visibly re-forms the object rather than doing it off-screen. */}
        <Sculpture />
        <Hero />
        <Atlas />
      </DomainFocusProvider>
      <Proof />
      <Note />
      <Close />
    </main>
  )
}
