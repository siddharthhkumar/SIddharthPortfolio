/**
 * The sculpture.
 *
 * Six forms — one per discipline — suspended in a lit composition and wired
 * by thin structures. Closer to an installation than a scene: matte materials,
 * three restrained lights, no emissive glow, no particles, and no continuous
 * spin. Nothing moves unless the reader does.
 *
 * Selecting a discipline re-forms the whole composition toward that field's
 * geometry — grid, stack, chain, network, strata, column — over about two
 * seconds. That transition is the point of the object.
 *
 * Roughly a dozen draw calls, low-poly throughout. Dynamically imported so
 * Three.js never reaches a device that will not run it.
 */
import { restLayout, domainLayouts } from './sculptureLayouts'

export async function createSculpture(canvas, options = {}) {
  const THREE = await import('three')

  const { accents = [], onReady, onHover, quality = 'high' } = options
  const LOW = quality === 'low'

  // ── Stage ────────────────────────────────────────────────
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
  camera.position.set(0, 0, 16)

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: !LOW,
    powerPreference: 'low-power',
  })
  renderer.setClearColor(0x000000, 0)
  // Filmic response and correct colour handling — the difference between
  // "lit" and "physically believable".
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.15
  if ('outputColorSpace' in renderer) renderer.outputColorSpace = THREE.SRGBColorSpace
  else renderer.outputEncoding = THREE.sRGBEncoding

  const root = new THREE.Group()
  scene.add(root)

  // ── Light: a key, a soft fill, a cold rim ────────────────
  const key = new THREE.DirectionalLight(0xfff4e6, 2.4)
  key.position.set(5, 7, 6)
  scene.add(key)

  const fill = new THREE.HemisphereLight(0x9fb4c8, 0x0a0a0c, 0.55)
  scene.add(fill)

  const rim = new THREE.DirectionalLight(0xbcd4ff, 1.1)
  rim.position.set(-7, -2, -5)
  scene.add(rim)

  scene.add(new THREE.AmbientLight(0xffffff, 0.12))

  // ── Deterministic noise, so the composition is authored ──
  let seed = 20260907
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296
    return seed / 4294967296
  }

  const seg = LOW ? 1 : 2

  // Each discipline gets a form that hints at how it works.
  const geometries = [
    new THREE.BoxGeometry(2.5, 0.16, 2.5, seg, 1, seg), // Data — a plate
    new THREE.BoxGeometry(1.15, 1.15, 1.15, seg, seg, seg), // Product — a module
    new THREE.TorusGeometry(0.82, 0.17, LOW ? 6 : 10, LOW ? 16 : 32), // Operations — a loop
    new THREE.IcosahedronGeometry(0.82, LOW ? 0 : 1), // Social — a node
    new THREE.BoxGeometry(1.9, 0.1, 1.35, seg, 1, seg), // Research — a sheet
    new THREE.BoxGeometry(0.22, 2.1, 1.5, 1, seg, seg), // Content — a column
  ]

  const material = (hex) =>
    new THREE.MeshStandardMaterial({
      color: new THREE.Color(hex),
      roughness: 0.62,
      metalness: 0.22,
      flatShading: false,
    })

  const NEUTRAL = '#8d8b87'
  const forms = geometries.map((geo, i) => {
    const mesh = new THREE.Mesh(geo, material(NEUTRAL))
    mesh.userData.index = i
    root.add(mesh)
    return mesh
  })

  // ── Compositions ─────────────────────────────────────────
  // Authored in sculptureLayouts.js, which holds no Three.js so the
  // arrangements can be reasoned about and tested without a GPU.
  const toVec = (entry) => ({
    p: new THREE.Vector3(entry.p.x, entry.p.y, entry.p.z),
    r: new THREE.Vector3(entry.r.x, entry.r.y, entry.r.z),
    s: entry.s,
  })

  const REST = restLayout().map(toVec)
  const LAYOUTS = domainLayouts().map((set) => set.map(toVec))

  // ── Wires ────────────────────────────────────────────────
  const wirePairs = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [0, 3], [1, 4]]
  const wireGeo = new THREE.BufferGeometry()
  wireGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(wirePairs.length * 6), 3))
  const wireMat = new THREE.LineBasicMaterial({
    color: 0xf0ede8,
    transparent: true,
    opacity: 0.16,
    depthWrite: false,
  })
  root.add(new THREE.LineSegments(wireGeo, wireMat))

  // ── State ────────────────────────────────────────────────
  const accentColors = accents.map((h) => new THREE.Color(h))
  const neutral = new THREE.Color(NEUTRAL)
  const tmpColor = new THREE.Color()

  let target = -1 // selected discipline
  let hovered = -1 // form under the cursor
  const blend = forms.map(() => ({ t: 0 })) // 0 = rest, 1 = layout
  const current = forms.map((f, i) => ({
    p: REST[i].p.clone(),
    r: REST[i].r.clone(),
    s: REST[i].s,
    lit: 0,
  }))

  let pointerX = 0
  let pointerY = 0
  let easedX = 0
  let easedY = 0
  let scrollT = 0
  let easedScroll = 0
  let frame = 0
  let running = false
  let last = performance.now()
  let width = 1
  let height = 1

  const raycaster = new THREE.Raycaster()
  const ndc = new THREE.Vector2(-2, -2)
  const projected = new THREE.Vector3()

  const resize = () => {
    measureSpan()
    const rect = canvas.getBoundingClientRect()
    width = Math.max(1, rect.width)
    height = Math.max(1, rect.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, LOW ? 1 : 1.6))
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.position.z = width < 900 ? 21 : width < 1250 ? 18 : 16
    camera.updateProjectionMatrix()
  }

  const onPointerMove = (e) => {
    pointerX = (e.clientX / window.innerWidth) * 2 - 1
    pointerY = (e.clientY / window.innerHeight) * 2 - 1
    const rect = canvas.getBoundingClientRect()
    ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
  }

  // The object lives across the hero and the atlas. Its travel is measured
  // from where the atlas actually ends rather than from a guessed multiple of
  // the viewport, so it is still on screen when a discipline is chosen.
  let span = window.innerHeight * 2

  const measureSpan = () => {
    const atlas = document.getElementById('practice')
    span = atlas
      ? atlas.offsetTop + atlas.offsetHeight - window.innerHeight * 0.35
      : window.innerHeight * 2
    span = Math.max(window.innerHeight, span)
  }

  const onScroll = () => {
    scrollT = Math.min(1, window.scrollY / span)
  }

  const lerp = (a, b, t) => a + (b - a) * t

  const render = (now) => {
    frame = requestAnimationFrame(render)
    const dt = Math.min(0.05, (now - last) / 1000)
    last = now
    const time = now / 1000

    // Inertia everywhere. Nothing tracks the cursor directly.
    easedX += (pointerX - easedX) * Math.min(1, dt * 1.6)
    easedY += (pointerY - easedY) * Math.min(1, dt * 1.6)
    easedScroll += (scrollT - easedScroll) * Math.min(1, dt * 2.2)

    // Orientation comes from the reader, not from a clock. The only
    // autonomous movement is an extremely slow drift.
    root.rotation.y = easedX * 0.5 + easedScroll * 0.55 + Math.sin(time * 0.045) * 0.04
    root.rotation.x = -easedY * 0.34 + easedScroll * 0.3 + Math.cos(time * 0.038) * 0.03
    root.position.y = -easedScroll * 2.2
    root.position.z = -easedScroll * 5.5

    // Re-form toward the selected discipline.
    const layout = target >= 0 ? LAYOUTS[target] : null
    for (let i = 0; i < forms.length; i++) {
      const want = layout ? 1 : 0
      blend[i].t += (want - blend[i].t) * Math.min(1, dt * (layout ? 1.5 : 1.1))
      const k = blend[i].t
      const dest = layout ? layout[i] : REST[i]

      current[i].p.lerp(dest.p, Math.min(1, dt * 2.1))
      current[i].r.lerp(dest.r, Math.min(1, dt * 1.9))
      current[i].s = lerp(current[i].s, dest.s, Math.min(1, dt * 2.1))

      const m = forms[i]
      // A slow breath, so the composition is never quite frozen.
      const drift = Math.sin(time * 0.32 + i * 1.7) * 0.055 * (1 - k)
      m.position.set(current[i].p.x, current[i].p.y + drift, current[i].p.z)
      m.rotation.set(current[i].r.x, current[i].r.y, current[i].r.z)

      const isFocus = i === target || i === hovered
      current[i].lit += ((isFocus ? 1 : 0) - current[i].lit) * Math.min(1, dt * 6)
      const swell = 1 + current[i].lit * 0.13
      m.scale.setScalar(current[i].s * swell)

      // Colour: only the considered form takes the accent, and only partly.
      const accent = accentColors[i] || neutral
      tmpColor.copy(neutral).lerp(accent, current[i].lit * 0.85)
      m.material.color.copy(tmpColor)
      m.material.roughness = 0.62 - current[i].lit * 0.16
    }

    // Wires follow the forms.
    const wp = wireGeo.attributes.position.array
    wirePairs.forEach(([a, b], i) => {
      wp[i * 6] = forms[a].position.x
      wp[i * 6 + 1] = forms[a].position.y
      wp[i * 6 + 2] = forms[a].position.z
      wp[i * 6 + 3] = forms[b].position.x
      wp[i * 6 + 4] = forms[b].position.y
      wp[i * 6 + 5] = forms[b].position.z
    })
    wireGeo.attributes.position.needsUpdate = true


    // Full presence for the first two thirds of the travel, then it goes.
    const fade = easedScroll < 0.62 ? 1 : Math.max(0, 1 - (easedScroll - 0.62) / 0.34)
    wireMat.opacity = 0.16 * fade

    // Hover test, cheap: six meshes, once a frame.
    if (onHover && ndc.x > -1.5) {
      raycaster.setFromCamera(ndc, camera)
      const hit = raycaster.intersectObjects(forms, false)[0]
      const next = hit ? hit.object.userData.index : -1
      if (next !== hovered) {
        hovered = next
        if (next >= 0) {
          projected.copy(forms[next].position)
          root.localToWorld(projected)
          projected.project(camera)
          onHover({
            index: next,
            x: ((projected.x + 1) / 2) * width,
            y: ((-projected.y + 1) / 2) * height,
          })
        } else {
          onHover({ index: -1 })
        }
      }
    }

    renderer.render(scene, camera)
  }

  const start = () => {
    if (running) return
    running = true
    last = performance.now()
    frame = requestAnimationFrame(render)
  }

  const stop = () => {
    if (!running) return
    running = false
    cancelAnimationFrame(frame)
    frame = 0
  }

  const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0 })
  io.observe(canvas)
  const onVisibility = () => (document.hidden ? stop() : start())

  measureSpan()
  resize()
  onScroll()
  window.addEventListener('resize', resize, { passive: true })
  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('visibilitychange', onVisibility)

  renderer.render(scene, camera)
  onReady?.()

  return {
    setTarget(index) {
      target = typeof index === 'number' ? index : -1
    },
    destroy() {
      stop()
      io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('visibilitychange', onVisibility)
      geometries.forEach((g) => g.dispose())
      forms.forEach((f) => f.material.dispose())
      wireGeo.dispose()
      wireMat.dispose()
      renderer.dispose()
      renderer.forceContextLoss?.()
    },
  }
}
