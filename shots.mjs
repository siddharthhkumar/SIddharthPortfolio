import puppeteer from 'puppeteer-core'
import { CHROME, OUT, BASE } from './tools.mjs'
const V = { d1440:[1440,900], d1920:[1920,1080], t1024:[1024,768], t768:[768,1024], m430:[430,932], m390:[390,844] }
const b=await puppeteer.launch({executablePath:CHROME,headless:'new',args:['--hide-scrollbars']})
const only = (process.env.V||'d1440,d1920,t1024,t768,m430,m390').split(',')
const themes = (process.env.T||'light,dark').split(',')
for (const t of themes) for (const k of only) {
  const [w,h]=V[k]
  const p=await b.newPage()
  await p.setViewport({width:w,height:h,deviceScaleFactor:1})
  await p.goto(BASE,{waitUntil:'networkidle0'})
  await p.evaluate(th=>document.documentElement.setAttribute('data-theme',th), t)
  await p.evaluate(()=>document.fonts.ready)
  await new Promise(r=>setTimeout(r,600))
  await p.screenshot({path:`${OUT}/w-${t}-${k}.png`})
  const m=await p.evaluate(()=>({sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth}))
  if(m.sw>m.cw+1) console.log(`OVERFLOW ${t} ${k}: ${m.sw}>${m.cw}`)
  await p.close()
}
console.log('shots done')
await b.close()
