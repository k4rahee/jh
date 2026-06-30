import { useToast } from '../context/ToastContext'
import { copyText } from '../utils/clipboard'

export default function Footer() {
  const toast = useToast()

  const copy = (value: string, msg?: string) =>
    copyText(value)
      .then(() => toast(msg || 'Discord ID가 복사됐어요'))
      .catch(() => toast('복사 실패. 직접 선택해 주세요'))

  return (
    <footer className="ft">
      <div className="ft-i">
        <div className="ft-br">
          <div className="b">
            정현
            <sup className="text-[14px] text-mute-2 align-super">®</sup>
          </div>
          <p className="kr">저챗 · 버튜버 · 게임 영상 편집 커미션. 1인 작업 / Seoul, KR.</p>
        </div>
        <div className="ft-c">
          <h4>바로가기</h4>
          <ul>
            <li>
              <a href="#hero">홈</a>
            </li>
            <li>
              <a href="#work">포트폴리오</a>
            </li>
            <li>
              <a href="#price">가격표</a>
            </li>
            <li>
              <a href="#proc">작업 순서</a>
            </li>
            <li>
              <a href="#contact">의뢰 신청</a>
            </li>
          </ul>
        </div>
        <div className="ft-c">
          <h4>의뢰 / 연락</h4>
          <ul>
            <li>
              <button className="ft-link copy-contact" type="button" onClick={() => copy('hyeeeeo_ni')}>
                Discord ID 복사
              </button>
            </li>
            <li>
              <button
                className="ft-link copy-contact"
                type="button"
                onClick={() => copy('flvm0530@naver.com', '메일 주소가 복사됐어요')}
              >
                메일 주소 복사
              </button>
            </li>
            <li>
              <a href="https://x.com/c_si0n" target="_blank" rel="noopener">
                X로 문의하기
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="ft-bot">
        <span>© 2026 정현® · 영상 편집 커미션</span>
        <div className="ft-meta">
          <span>1인 작업 의뢰용 · Seoul, KR</span>
          <a className="churro-credit" href="https://k4rahee.github.io/Im/#" target="_blank" rel="noopener">
            Built by Churro<sup>®</sup>
          </a>
        </div>
      </div>
    </footer>
  )
}
