export default function DoDont() {
  return (
    <section className="sec bg-paper" id="dolist">
      <div className="sh r">
        <span className="sh-cap">— 작업 안내 —</span>
        <h2 className="sh-t">
          이런 작업 <span className="it">받아요.</span>
        </h2>
        <p className="sh-l">
          가능한 작업과 어려운 작업을 미리 알려드려요.
          <br />
          의뢰 전에 한 번 확인해 주세요.
        </p>
      </div>
      <div className="dl-grid">
        <div className="dl-card r">
          <div className="ht">
            <span className="ht-h">
              이런 작업 <span className="it">받아요</span>
            </span>
            <span className="ht-l">DO</span>
          </div>
          <ul>
            <li>
              <span className="ic ok">✓</span>
              <span>
                <span className="ti kr">유튜브 게임 / 일상 / 저챗 영상 편집</span>
                <span className="sub">롱폼 위주</span>
              </span>
            </li>
            <li>
              <span className="ic ok">✓</span>
              <span>
                <span className="ti kr">자막 · BGM · 효과음 · 색보정</span>
                <span className="sub">기본 옵션에 모두 포함</span>
              </span>
            </li>
            <li>
              <span className="ic ok">✓</span>
              <span>
                <span className="ti kr">쇼츠 · 클립 영상 편집</span>
                <span className="sub">9:16 세로 영상</span>
              </span>
            </li>
            <li>
              <span className="ic ok">✓</span>
              <span>
                <span className="ti kr">강의 / 토크 / 인터뷰 영상</span>
                <span className="sub">전달 위주의 영상</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="dl-card no r">
          <div className="ht">
            <span className="ht-h">
              이런 작업은 <span className="it">어려워요</span>
            </span>
            <span className="ht-l">DON'T</span>
          </div>
          <ul>
            <li>
              <span className="ic x">×</span>
              <span>
                <span className="ti kr">3D 그래픽 · VFX · 모션 그래픽</span>
                <span className="sub">전문 영역 외</span>
              </span>
            </li>
            <li>
              <span className="ic x">×</span>
              <span>
                <span className="ti kr">19금 · 폭력적 콘텐츠</span>
                <span className="sub">정책상 거절</span>
              </span>
            </li>
            <li>
              <span className="ic x">×</span>
              <span>
                <span className="ti kr">정치 · 종교 · 사회 이슈 영상</span>
                <span className="sub">중립성 유지</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
