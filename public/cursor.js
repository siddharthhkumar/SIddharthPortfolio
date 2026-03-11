const cur = document.getElementById('cur')
const ring = document.getElementById('cur-ring')

let mx = 0,
  my = 0,
  rx = 0,
  ry = 0

document.addEventListener('mousemove', (e) => {
  mx = e.clientX
  my = e.clientY
  if (cur) {
    cur.style.left = mx - 4 + 'px'
    cur.style.top = my - 4 + 'px'
  }
})

function animate() {
  rx += (mx - rx) * 0.1
  ry += (my - ry) * 0.1
  if (ring) {
    ring.style.left = rx - 16 + 'px'
    ring.style.top = ry - 16 + 'px'
  }
  requestAnimationFrame(animate)
}

animate()

document.querySelectorAll('a,button,.sk-tag,.pj-card,.exp-card,.ach-card,.ic').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    if (ring) {
      ring.style.width = '46px'
      ring.style.height = '46px'
      ring.style.borderColor = 'rgba(129,140,248,.7)'
    }
  })
  el.addEventListener('mouseleave', () => {
    if (ring) {
      ring.style.width = '32px'
      ring.style.height = '32px'
      ring.style.borderColor = 'rgba(129,140,248,.45)'
    }
  })
})
