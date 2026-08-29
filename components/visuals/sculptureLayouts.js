/**
 * The six compositions, as data.
 *
 * Kept free of Three.js on purpose: these are authored arrangements, not
 * rendering code, and holding them here means they can be reasoned about and
 * tested without a GPU. Positions are plain {x,y,z}; the scene turns them into
 * vectors.
 *
 * Order matches data/domains.js — Data, Product, Operations, Social, Content,
 * Research.
 */

const FORMS = 6

// Deterministic, so the resting arrangement is authored rather than random.
function makeRandom(seed) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}

/** Resting state: a loose suspension, nothing aligned. */
export function restLayout(seed = 20260907) {
  const rand = makeRandom(seed)
  return Array.from({ length: FORMS }, (_, i) => {
    const a = (i / FORMS) * Math.PI * 2
    return {
      p: {
        x: Math.cos(a) * 2.9,
        y: Math.sin(a) * 1.7 + (rand() - 0.5) * 0.4,
        z: Math.sin(a * 1.7) * 1.3,
      },
      r: { x: rand() * 0.9, y: rand() * 1.4, z: rand() * 0.5 },
      s: 1,
    }
  })
}

/** I · DATA — everything squares up onto a measured grid. */
const grid = () =>
  Array.from({ length: FORMS }, (_, i) => ({
    p: { x: -2.6 + (i % 3) * 2.6, y: 1.2 - Math.floor(i / 3) * 2.4, z: 0 },
    r: { x: 0, y: 0, z: 0 },
    s: 0.82,
  }))

/** II · PRODUCT — modules stacked like an exploded assembly. */
const stack = () =>
  Array.from({ length: FORMS }, (_, i) => ({
    p: { x: -0.9 + i * 0.36, y: 2.1 - i * 0.86, z: i * 0.2 },
    r: { x: 0.34, y: 0.42, z: 0 },
    s: 0.78,
  }))

/** III · OPERATIONS — a chain, read left to right. */
const chain = () =>
  Array.from({ length: FORMS }, (_, i) => ({
    p: { x: -4.2 + i * 1.68, y: Math.sin(i * 1.1) * 0.5, z: 0 },
    r: { x: 0, y: Math.PI / 2, z: 0 },
    s: 0.7,
  }))

/** IV · SOCIAL — a network, spread evenly on a sphere. */
const network = (seed = 771) => {
  const rand = makeRandom(seed)
  return Array.from({ length: FORMS }, (_, i) => {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / FORMS)
    const theta = Math.PI * (1 + Math.sqrt(5)) * i
    const r = 3.1
    return {
      p: {
        x: Math.sin(phi) * Math.cos(theta) * r,
        y: Math.cos(phi) * r * 0.62,
        z: Math.sin(phi) * Math.sin(theta) * r,
      },
      r: { x: rand() * 0.6, y: rand() * 0.6, z: 0 },
      s: 0.66,
    }
  })
}

/** V · CONTENT — a column, set like lines of type. */
const column = () =>
  Array.from({ length: FORMS }, (_, i) => ({
    p: { x: -1.6 + (i % 2) * 3.2, y: 2.0 - Math.floor(i / 2) * 2.0, z: 0 },
    r: { x: 0, y: 0, z: Math.PI / 2 },
    s: 0.74,
  }))

/** VI · RESEARCH — strata, laid down in order. */
const strata = () =>
  Array.from({ length: FORMS }, (_, i) => ({
    p: { x: 0, y: 1.9 - i * 0.78, z: 0 },
    r: { x: 0, y: i * 0.09, z: 0 },
    s: 0.9,
  }))

/** Indexed to match data/domains.js. */
export function domainLayouts() {
  return [grid(), stack(), chain(), network(), column(), strata()]
}

export const LAYOUT_NAMES = ['grid', 'stack', 'chain', 'network', 'column', 'strata']
export const FORM_COUNT = FORMS
