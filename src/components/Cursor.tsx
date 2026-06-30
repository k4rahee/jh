import { useEffect, useRef } from 'react'

const HOVER_SEL = 'a, button, [role=button], .wk-cat, .th, .mo-l, .pr-card, .faq-q'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = innerWidth / 2
    let my = innerHeight / 2
    let dx = mx
    let dy = my
    let rx = mx
    let ry = my
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }
    addEventListener('mousemove', onMove, { passive: true })

    const tick = () => {
      dx += (mx - dx) * 0.5
      dy += (my - dy) * 0.5
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      if (dot.current)
        dot.current.style.transform = `translate(${dx}px,${dy}px) translate(-50%,-50%)`
      if (ring.current)
        ring.current.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    // Event delegation so dynamically rendered elements (portfolio grid) work too.
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null
      if (t?.closest(HOVER_SEL)) ring.current?.classList.add('h')
    }
    const onOut = (e: MouseEvent) => {
      const t = e.target as Element | null
      if (t?.closest(HOVER_SEL)) ring.current?.classList.remove('h')
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <div className="cr" ref={ring}></div>
      <div className="cd" ref={dot}></div>
    </>
  )
}
