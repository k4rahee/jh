import { Fragment } from 'react'

const STEPS: [string, string][] = [
  ['01', '문의'],
  ['02', '입금'],
  ['03', '영상 미팅'],
  ['04', '컷 편집'],
  ['05', '자막 · 효과'],
  ['06', '2차 편집 전달'],
]

export default function Process() {
  return (
    <section className="sec dark-sec" id="proc">
      <div className="sh r">
        <span className="sh-cap">— 작업 순서 —</span>
        <h2 className="sh-t">
          신청부터 <span className="it">납품까지.</span>
        </h2>
        <p className="sh-l">
          시작일로부터 평균 4일이면 작업이 끝나요.
          <br />
          의뢰 후 진행 흐름을 한눈에 정리해드릴게요.
        </p>
        <div className="sh-tags">
          <span className="sh-tag">작업 기간 4일</span>
          <span className="sh-tag">1회 수정 무료</span>
        </div>
      </div>
      <div className="pf-wrap r">
        <div className="pf">
          {STEPS.map(([n, nm], i) => (
            <Fragment key={n}>
              <div className="pf-step">
                <span className="n">{n}</span>
                <span className="nm kr">{nm}</span>
              </div>
              {i < STEPS.length - 1 && <span className="pf-arr">→</span>}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="pf-notice r">
        <span className="it-c">
          <span className="dot"></span>
          <span className="kr">
            <b>1회 수정</b>은 무료로 진행됩니다
          </span>
        </span>
        <span className="it-c w">
          <span className="dot"></span>
          <span className="kr">
            2차 수정부터 <b>추가 금액</b>이 발생합니다
          </span>
        </span>
      </div>
    </section>
  )
}
