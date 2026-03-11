import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Achievements from '@/components/sections/Achievements'
import Contact from '@/components/sections/Contact'
import Divider from '@/components/Divider'

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Experience />
      <Divider />
      <Achievements />
      <Divider />
      <Contact />
    </main>
  )
}
