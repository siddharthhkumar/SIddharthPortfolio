import puppeteer from 'puppeteer-core'
import { CHROME, BASE } from './tools.mjs'
const b=await puppeteer.launch({executablePath:CHROME,headless:'new',args:['--hide-scrollbars']})
const p=await b.newPage()
await p.setViewport({width:1440,height:900})
await p.goto(BASE,{waitUntil:'networkidle0'})
await p.evaluate(()=>document.fonts.ready)
await new Promise(r=>setTimeout(r,500))

// Anchors must still land with content-visibility on.
for (const [key,id] of [['w','work'],['r','resume'],['c','contact']]) {
  await p.keyboard.press(key)
  await new Promise(r=>setTimeout(r,3500))
  const top = await p.evaluate(i=>Math.round(document.getElementById(i).getBoundingClientRect().top), id)
  console.log(`${key} -> #${id}: top=${top} ${Math.abs(top)<240?'lands':'MISSED'}`)
}
await p.evaluate(()=>window.scrollTo(0,0)); await new Promise(r=>setTimeout(r,900))

// The world leans.
const before = await p.evaluate(()=>getComputedStyle(document.querySelector('[class*=doodles]')).transform)
await p.mouse.move(1300, 200); await new Promise(r=>setTimeout(r,900))
const after = await p.evaluate(()=>getComputedStyle(document.querySelector('[class*=doodles]')).transform)
console.log('pointer lean:', before !== after ? 'yes' : 'NO', '|', after)

const m = await p.evaluate(()=>({
  nodes: document.querySelectorAll('[class*=World] *').length,
  marks: document.querySelectorAll('[class*=mark]').length,
  total: Math.round(performance.getEntriesByType('resource').reduce((a,r)=>a+(r.encodedBodySize||0),0)/1024),
  js: Math.round(performance.getEntriesByType('resource').filter(r=>r.name.endsWith('.js')).reduce((a,r)=>a+(r.encodedBodySize||0),0)/1024),
  reqs: performance.getEntriesByType('resource').length,
}))
console.log(`world nodes: ${m.nodes} | doodles: ${m.marks} | page: ${m.reqs} requests, ${m.total} KB, ${m.js} KB JS`)
await b.close()
