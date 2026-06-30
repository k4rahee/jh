export default function Caution() {
  return (
    <section className="sec bg-paper" id="cau">
      <div className="sh r">
        <span className="sh-cap">— 주의 사항 —</span>
        <h2 className="sh-t">
          신청 전, <span className="it">꼭 확인해 주세요.</span>
        </h2>
        <p className="sh-l">
          작업 진행에 영향을 줄 수 있어 미리 짚어드리는 사항들이에요.
          <br />
          의뢰 전에 한 번 꼭 읽어주세요.
        </p>
      </div>
      <div className="cau-card">
        <ul className="cau-list">
          <li className="r">
            <span className="nm">01</span>
            <div>
              <div className="ti kr">사회적 이슈가 되는 영상은 받지 않습니다.</div>
              <div className="sub kr">정치·종교·논란 주제는 정중히 거절될 수 있습니다.</div>
            </div>
            <span className="tg no">거절</span>
          </li>
          <li className="r">
            <span className="nm">02</span>
            <div>
              <div className="ti kr">편집점이 정확히 기재된 영상만 작업합니다.</div>
              <div className="sub kr">대본 · 시간 표시 · 자막 위치 등을 함께 전달해 주세요.</div>
            </div>
            <span className="tg">필수</span>
          </li>
          <li className="r w">
            <span className="nm">03</span>
            <div>
              <div className="ti kr">영상 설명란에 「편집자 : 정현」 표기는 필수입니다.</div>
              <div className="sub kr">기재가 어려우시면 추가 금액이 발생합니다.</div>
            </div>
            <span className="tg no">+ 추가 금액</span>
          </li>
          <li className="r">
            <span className="nm">04</span>
            <div>
              <div className="ti kr">환불은 작업 진행 중에만 가능합니다.</div>
              <div className="sub kr">납품 완료 이후의 환불은 불가합니다.</div>
            </div>
            <span className="tg">환불</span>
          </li>
        </ul>

        <div className="rf-box r">
          <div className="rf-h">
            <span className="rf-cap">— 작가 환불 정책 —</span>
            <h3 className="rf-t">
              작업 진행 단계에 따라
              <br />
              환불 비율이 달라요.
            </h3>
          </div>
          <div className="rf-grid">
            <div className="rf-item ok">
              <span className="rf-stage kr">작업 시작 전</span>
              <span className="rf-rate">
                100<span>%</span>
              </span>
              <span className="rf-note kr">전액 환불 가능</span>
            </div>
            <div className="rf-arr">→</div>
            <div className="rf-item mid">
              <span className="rf-stage kr">작업 시작 후</span>
              <span className="rf-rate">
                40<span>%</span>
              </span>
              <span className="rf-note kr">진행 분량 공제 후 부분 환불</span>
            </div>
            <div className="rf-arr">→</div>
            <div className="rf-item no">
              <span className="rf-stage kr">작업 끝난 후</span>
              <span className="rf-rate">
                <span className="x">×</span>
              </span>
              <span className="rf-note kr">환불 불가</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
