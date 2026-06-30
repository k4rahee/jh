import { useToast } from '../context/ToastContext'
import { copyText } from '../utils/clipboard'

const NAV: [string, string, string][] = [
  ['#hero', '홈', '(01)'],
  ['#work', '포트폴리오', '(02)'],
  ['#price', '가격표', '(03)'],
  ['#dolist', '작업 안내', '(04)'],
  ['#proc', '작업 순서', '(05)'],
  ['#cau', '주의 사항', '(06)'],
  ['#contact', '의뢰 신청', '(07)'],
]

export default function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const toast = useToast()

  const copy = (value: string, msg?: string) =>
    copyText(value)
      .then(() => toast(msg || 'Discord ID가 복사됐어요'))
      .catch(() => toast('복사 실패. 직접 선택해 주세요'))

  return (
    <div className={'mo' + (open ? ' o' : '')}>
      <div className="mo-t">
        <span className="brand">
          정현<sup>®</sup>
        </span>
        <button className="mc" type="button" onClick={onClose}>
          닫기
          <span className="x">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </span>
        </button>
      </div>
      <div className="mo-b">
        <nav className="mo-nav">
          {NAV.map(([href, label, n]) => (
            <a className="mo-l" href={href} key={href} onClick={onClose}>
              <span>{label}</span>
              <span className="n">{n}</span>
            </a>
          ))}
        </nav>
        <aside className="mo-card">
          <div className="pic">
            <img
              src="https://i.ytimg.com/vi/l_37xGsQQtc/maxresdefault.jpg"
              alt=""
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = 'https://i.ytimg.com/vi/l_37xGsQQtc/hqdefault.jpg'
              }}
            />
          </div>
          <div className="meta">
            <div>
              <div className="name">의뢰 문의</div>
              <div className="role">Video Editor — Seoul, KR</div>
            </div>
            <div className="row">
              <span>Discord</span>
              <button className="mo-act" type="button" onClick={() => copy('hyeeeeo_ni')}>
                ID 복사
              </button>
            </div>
            <div className="row">
              <span>Email</span>
              <button
                className="mo-act"
                type="button"
                onClick={() => copy('flvm0530@naver.com', '메일 주소가 복사됐어요')}
              >
                주소 복사
              </button>
            </div>
            <div className="row">
              <span>X</span>
              <a className="mo-act" href="https://x.com/c_si0n" target="_blank" rel="noopener">
                문의 이동
              </a>
            </div>
          </div>
          <a href="#contact" className="mo-cta" onClick={onClose}>
            <span>의뢰 양식 보기</span>
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </span>
          </a>
        </aside>
      </div>
      <div className="mo-bot">
        <span>© 2026 정현® · 영상 편집 커미션</span>
        <div className="so">
          <button className="copy-contact" type="button" onClick={() => copy('hyeeeeo_ni')}>
            Discord ID 복사
          </button>
          <span className="dot">·</span>
          <button
            className="copy-contact"
            type="button"
            onClick={() => copy('flvm0530@naver.com', '메일 주소가 복사됐어요')}
          >
            Email 복사
          </button>
        </div>
      </div>
    </div>
  )
}
