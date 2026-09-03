import puppeteer from 'puppeteer-core'
import { AxePuppeteer } from '@axe-core/puppeteer'
import { CHROME, BASE } from './tools.mjs'
const b=await puppeteer.launch({executablePath:CHROME,headless:'new'})
const p=await b.newPage()
await p.setViewport({width:1440,height:900})
await p.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}])
await p.goto(BASE,{waitUntil:'networkidle0'})
const r=await new AxePuppeteer(p).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','best-practice']).analyze()
for(const v of r.violations) for(const n of v.nodes)
  console.log(n.target.join(' '), '::', (n.failureSummary||'').replace(/\s+/g,' ').slice(0,200))
await b.close()
