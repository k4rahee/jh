const HERO_NAV: [string, string, string][] = [
  ['#price', '01', '맞춤형 편집'],
  ['#work', '02', '버츄얼 전문'],
  ['#price', '03', '빠른 마감'],
  ['#contact', '04', '의뢰 신청'],
]

const HM_ITEMS = ['SCROLL TO REVEAL', '스크롤해서 작품 보기', '— PORTFOLIO —', '— 영상 편집 ——']
// Original: 10 repetitions, then the whole block doubled for a seamless loop.
const HM_SINGLE = Array.from({ length: 10 }, () => HM_ITEMS).flat()
const HM_FULL = [...HM_SINGLE, ...HM_SINGLE]

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-ir" aria-hidden="true">
        <span className="ir-l ir-l1"></span>
        <span className="ir-l ir-l2"></span>
        <span className="ir-l ir-l3"></span>
        <span className="ir-l ir-l4"></span>
        <span className="ir-l ir-l5"></span>
      </div>
      <nav className="hero-nav">
        {HERO_NAV.map(([href, n, t], i) => (
          <a className="nv-it" href={href} key={i}>
            <span className="nv-n">{n}</span>
            <span className="nv-t kr">{t}</span>
          </a>
        ))}
      </nav>
      <div className="hero-bot">
        <div className="hero-l">
          <span className="we">
            정현<sup>®</sup>
          </span>
          <h1 className="hero-h">
            <span className="ln">
              <span className="w kr">싼 가격에 뽑아내는,</span>
            </span>
            <span className="ln">
              <span className="w kr">고퀄리티 영상.</span>
            </span>
          </h1>
        </div>
        <div className="hero-c">
          <div className="hr-marq">
            <div className="hm-t">
              {HM_FULL.map((item, i) => (
                <span className="mx-[22px]" key={i}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-r">
          <a
            href="https://x.com/c_si0n"
            className="hr-card"
            target="_blank"
            rel="noopener"
            aria-label="X에서 정현에게 문의하기"
          >
            <div className="hr-av">
              <span className="hr-init">정</span>
            </div>
            <div className="hr-info">
              <b>Contact 정현</b>
              <span>Video editor · commission open</span>
            </div>
            <span className="hr-dot" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </section>
  )
}
