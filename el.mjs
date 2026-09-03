import puppeteer from 'puppeteer-core'
import { CHROME, OUT, BASE } from './tools.mjs'
const [,,path,sel,name,theme='light',w='1440',h='900']=process.argv
const b=await puppeteer.launch({executablePath:CHROME,headless:'new',args:['--hide-scrollbars']})
const p=await b.newPage()
await p.setViewport({width:+w,height:+h,deviceScaleFactor:1})
await p.emulateMediaFeatures([{name:'prefers-color-scheme',value:theme},{name:'prefers-reduced-motion',value:'reduce'}])
await p.goto(`${BASE}/${String(path).replace(/^[\/]+/,'')}`,{waitUntil:'networkidle0'})
await p.evaluate(()=>document.fonts.ready)
if(process.env.OPEN) await p.evaluate(s=>{const d=document.querySelector(s); if(d) d.open=true}, process.env.OPEN)
const el=await p.$(sel); if(!el){console.log('missing',sel);process.exit(1)}
await el.scrollIntoView(); await new Promise(r=>setTimeout(r,400))
await el.screenshot({path:`${OUT}/${name}.png`}); console.log('ok',name)
await b.close()
