import puppeteer from 'puppeteer-core'
import { AxePuppeteer } from '@axe-core/puppeteer'
import { CHROME, OUT, BASE } from './tools.mjs'

const PAGES = ['', 'work/gnosis-ai', 'work/documind-ai', 'work/research']
const VIEWS = [
  ['desktop', 1440, 900, 1], ['wide', 1920, 1080, 1], ['laptop', 1366, 768, 1],
  ['tabletL', 1024, 768, 1], ['tablet', 768, 1024, 1],
  ['phone', 390, 844, 2], ['phoneL', 430, 932, 2],
]

const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--force-color-profile=srgb', '--hide-scrollbars'] })
let bad = 0

for (const theme of ['light', 'dark']) {
  for (const u of PAGES) {
    const p = await b.newPage()
    const errs = []
    p.on('pageerror', (e) => errs.push(e.message))
    p.on('console', (m) => m.type() === 'error' && errs.push(m.text()))
    await p.setViewport({ width: 1440, height: 900 })
    await p.emulateMediaFeatures([
      { name: 'prefers-color-scheme', value: theme },
      { name: 'prefers-reduced-motion', value: 'reduce' },
    ])
    await p.goto(`${BASE}/${u}`, { waitUntil: 'networkidle0' })
    const r = await new AxePuppeteer(p).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','best-practice']).analyze()
    if (r.violations.length) { bad++; console.log(`AXE [${theme}] /${u}`, r.violations.map(v => `${v.id}(${v.nodes.length})`).join(' ')) }
    if (errs.length) { bad++; console.log(`JS  [${theme}] /${u}`, errs) }

    // Overflow at every breakpoint.
    for (const [name, w, h, dsf] of VIEWS) {
      await p.setViewport({ width: w, height: h, deviceScaleFactor: dsf })
      await new Promise((r) => setTimeout(r, 250))
      const m = await p.evaluate(() => {
        const d = document.documentElement
        const off = []
        document.querySelectorAll('*').forEach((el) => {
          const r = el.getBoundingClientRect()
          if (r.width > 0 && r.right > d.clientWidth + 1) off.push(`${el.tagName}.${String(el.className).slice(0, 40)}`)
        })
        return { sw: d.scrollWidth, cw: d.clientWidth, off: off.slice(0, 4) }
      })
      if (m.sw > m.cw + 1) { bad++; console.log(`OVERFLOW [${theme}] /${u} @${name}: ${m.sw}>${m.cw}`, m.off) }
    }
    await p.close()
  }
}
console.log(bad === 0 ? '\nALL CLEAR — no axe violations, no console errors, no horizontal overflow' : `\n${bad} problem(s)`)
await b.close()
