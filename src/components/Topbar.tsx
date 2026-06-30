import { useEffect, useState } from 'react'

export default function Topbar({ onMenuOpen }: { onMenuOpen: () => void }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 40)
    addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={'tb' + (scrolled ? ' s' : '')}>
      <div className="tb-l">
        <a href="#" className="brand">
          정현<sup>®</sup>
        </a>
      </div>
      <div className="tb-c">
        <span className="tag">의뢰 모집중</span>
      </div>
      <div className="tb-r">
        <button className="mb" type="button" onClick={onMenuOpen}>
          메뉴
          <span className="l">
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>
  )
}
