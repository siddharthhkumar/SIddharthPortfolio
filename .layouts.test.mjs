import { restLayout, domainLayouts, LAYOUT_NAMES, FORM_COUNT } from './components/visuals/sculptureLayouts.js'

const rest = restLayout()
const layouts = domainLayouts()
const dist = (a, b) =>
  Math.hypot(a.p.x - b.p.x, a.p.y - b.p.y, a.p.z - b.p.z) +
  Math.hypot(a.r.x - b.r.x, a.r.y - b.r.y, a.r.z - b.r.z) +
  Math.abs(a.s - b.s)
const sep = (A, B) => A.reduce((t, f, i) => t + dist(f, B[i]), 0) / A.length

let fail = 0
const ok = (c, m) => { console.log('  ' + (c ? 'PASS' : 'FAIL') + '  ' + m); if (!c) fail++ }

console.log('  -- shape --')
ok(layouts.length === 6, 'six compositions, one per discipline')
ok(layouts.every(l => l.length === FORM_COUNT), 'each places all ' + FORM_COUNT + ' forms')
ok(rest.length === FORM_COUNT, 'resting arrangement places all forms')

console.log('')
console.log('  -- each composition departs from rest --')
layouts.forEach((l, i) => {
  const d = sep(l, rest)
  ok(d > 1.0, LAYOUT_NAMES[i].padEnd(8) + ' mean displacement ' + d.toFixed(2))
})

console.log('')
console.log('  -- and from each other --')
let min = Infinity, minPair = ''
for (let i = 0; i < layouts.length; i++)
  for (let j = i + 1; j < layouts.length; j++) {
    const d = sep(layouts[i], layouts[j])
    if (d < min) { min = d; minPair = LAYOUT_NAMES[i] + ' vs ' + LAYOUT_NAMES[j] }
  }
ok(min > 0.8, 'closest pair (' + minPair + ') still separated by ' + min.toFixed(2))

console.log('')
console.log('  -- character checks --')
const g = layouts[0]
ok(g.every(f => f.r.x === 0 && f.r.y === 0 && f.r.z === 0), 'grid: every form is axis-aligned')
ok(new Set(g.map(f => f.p.y.toFixed(2))).size === 2, 'grid: forms sit on discrete rows')
const c = layouts[2]
ok(c.every((f, i) => i === 0 || f.p.x > c[i - 1].p.x), 'chain: strictly left-to-right')
const st = layouts[5]
ok(st.every((f, i) => i === 0 || f.p.y < st[i - 1].p.y), 'strata: strictly stacked downward')
ok(st.every(f => f.p.x === 0 && f.p.z === 0), 'strata: no lateral spread')
const n = layouts[3]
ok(n.some(f => f.p.z !== 0) && n.some(f => f.p.x !== 0), 'network: occupies all three axes')
const col = layouts[4]
ok(col.every(f => Math.abs(f.r.z - Math.PI / 2) < 1e-9), 'column: every form turned on its side')

console.log('')
console.log('  -- determinism --')
ok(JSON.stringify(restLayout()) === JSON.stringify(restLayout()), 'rest is reproducible')
ok(JSON.stringify(domainLayouts()) === JSON.stringify(domainLayouts()), 'compositions are reproducible')

console.log('')
console.log(fail === 0 ? '  all checks passed' : '  ' + fail + ' FAILED')
process.exit(fail ? 1 : 0)
