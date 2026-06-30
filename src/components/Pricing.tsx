export default function Pricing() {
  return (
    <section className="sec dark-sec" id="price">
      <div className="sh r">
        <span className="sh-cap">— 가격 안내 —</span>
        <h2 className="sh-t">
          편집 비용은 <span className="it">이렇게</span> 받아요.
        </h2>
        <p className="sh-l">
          롱폼은 분당 단가, 쇼츠는 개당 단가로 협의해드려요.
          <br />
          정확한 견적은 의뢰 주시면 안내드립니다.
        </p>
      </div>
      <div className="pr-grid pr-grid-2">
        <div className="pr-card pop r">
          <span className="pr-tag">롱폼</span>
          <p className="pr-desc kr">
            저챗 · 버튜버 · 게임 등 롱폼 영상을 편집해드려요.
            <br />
            자막 · BGM · 효과음 · 색보정 모두 포함합니다.
          </p>
          <ul className="pr-tiers">
            <li>
              <span className="lab kr">
                편집점 있음 <span className="o">O</span>
              </span>
              <span className="val">
                <span className="pre">분당</span>
                <b>12,000원</b>
              </span>
            </li>
            <li>
              <span className="lab kr">
                편집점 없음 <span className="x">X</span>
              </span>
              <span className="val">
                <span className="pre">분당</span>
                <b>15,000원</b>
              </span>
            </li>
            <li>
              <span className="lab kr">건당</span>
              <span className="val">
                <b>200,000원</b>
              </span>
            </li>
          </ul>
        </div>
        <div className="pr-card r">
          <span className="pr-tag">쇼츠</span>
          <p className="pr-desc kr">
            9:16 세로 비율의 쇼츠 영상을 편집해드려요.
            <br />
            자막 · 효과음 · 트렌드 BGM 포함, 빠른 마감 가능.
          </p>
          <ul className="pr-tiers">
            <li>
              <span className="lab kr">건당</span>
              <span className="val">
                <b>20,000원</b>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="pr-addons r">
        <div className="pr-addons-h kr">+ 추가 옵션</div>
        <ul className="pr-addons-list">
          <li>
            <span className="nm kr">추가 수정</span>
            <span className="dt kr">1회당</span>
            <span className="amt">+5,000원</span>
          </li>
          <li>
            <span className="nm kr">빠른 마감</span>
            <span className="dt kr">기본 단축 시</span>
            <span className="amt">+30,000원</span>
          </li>
          <li>
            <span className="nm kr">기재 불가</span>
            <span className="dt kr">포트폴리오 사용 불가</span>
            <span className="amt">+30,000원</span>
          </li>
          <li>
            <span className="nm kr">영상 3시간 이상</span>
            <span className="dt kr">30분당</span>
            <span className="amt">+5,000원</span>
          </li>
          <li>
            <span className="nm kr">합방 4명 이상</span>
            <span className="dt kr">인당</span>
            <span className="amt">+5,000원</span>
          </li>
        </ul>
      </div>
      <div className="pr-foot r">
        <span className="kr">결제는 계좌이체로 진행됩니다 · 견적 확정 후 입금 계좌를 안내드립니다</span>
        <span className="kr">정확한 견적은 의뢰 시 협의 · 작업 기간 4일 · 1회 수정 무료</span>
      </div>
    </section>
  )
}
