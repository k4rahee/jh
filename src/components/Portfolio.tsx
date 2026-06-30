import { useState } from 'react'
import type { HTMLAttributes } from 'react'
import { PORT, CL, CATS, DEFAULT_CAT, thumb, thumbF } from '../data/portfolio'
import type { CatKey } from '../data/portfolio'

export default function Portfolio() {
  const [cat, setCat] = useState<CatKey>(DEFAULT_CAT)
  const [playingId, setPlayingId] = useState<string | null>(null)

  const changeCat = (c: CatKey) => {
    setCat(c)
    setPlayingId(null)
  }

  const items = PORT[cat] || []

  return (
    <section className="sec bg-paper" id="work">
      <div className="sh left r">
        <span className="sh-cap">— 작업물 —</span>
        <h2 className="sh-t">
          최근 <span className="it">작업한 영상들.</span>
        </h2>
        <p className="sh-l">유튜브 게임 · 저챗 · 쇼츠 영상 — 카테고리별로 모아둔 작업물이에요.</p>
      </div>

      <div className="wk-cats">
        {CATS.map((c) => (
          <button
            key={c}
            className={'wk-cat' + (c === cat ? ' on' : '')}
            type="button"
            onClick={() => changeCat(c)}
          >
            {CL[c]} <span className="n">({PORT[c].length})</span>
          </button>
        ))}
      </div>

      <div className="wk-grid">
        {items.map((it) => {
          const playing = playingId === it.id
          // When idle the tile acts as a "play" button (keyboard accessible);
          // while playing it's just a container holding the iframe + close button.
          const interactiveProps: HTMLAttributes<HTMLDivElement> = playing
            ? {}
            : {
                role: 'button',
                tabIndex: 0,
                'aria-label': `${it.t} 영상 재생`,
                onKeyDown: (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setPlayingId(it.id)
                  }
                },
              }
          return (
            <div
              key={it.id}
              className={'th s' + (it.span || 6) + (it.vert ? ' v' : '') + (playing ? ' playing' : '')}
              onClick={() => {
                if (!playing) setPlayingId(it.id)
              }}
              {...interactiveProps}
            >
              <span className="rb">{CL[cat]}</span>
              <img
                loading="lazy"
                src={thumb(it.id)}
                alt={it.t}
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = thumbF(it.id)
                }}
              />
              <div className="g1"></div>
              <div className="g2"></div>
              <div className="info">
                <div className="t">{it.t}</div>
                <div className="s">{it.s}</div>
              </div>
              {playing && (
                <>
                  <iframe
                    className="th-iframe"
                    src={`https://www.youtube.com/embed/${it.id}?autoplay=1&rel=0&modestbranding=1`}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title={it.t}
                  />
                  <button
                    className="th-close"
                    type="button"
                    aria-label="닫기"
                    onClick={(e) => {
                      e.stopPropagation()
                      setPlayingId(null)
                    }}
                  >
                    ×
                  </button>
                </>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
