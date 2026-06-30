import { useEffect } from 'react'

// Observes every `.r` element once after mount and adds `.in` when it enters
// the viewport — same behaviour as the original IntersectionObserver.
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.r')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}
