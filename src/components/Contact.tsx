import { useRef, useState } from 'react'
import { useToast } from '../context/ToastContext'
import { copyText } from '../utils/clipboard'

const TEMPLATE = `1. 본인 채널 이름(채널 링크):
2. 영상 타입 (롱폼/쇼츠) 등등:
3. 영상 주제:
4. 방송 캐릭터성:
5. 개인용 소스 링크 (없으면 '없음' 표시):
6. 영상 파일 링크: `

const GUIDE: [string, string, string | null][] = [
  ['01', '본인 채널 이름 (혹은 방송 링크)', null],
  ['02', '영상 타입', '롱폼 / 쇼츠 등등'],
  ['03', '영상 주제', null],
  ['04', '방송 캐릭터', null],
  ['05', '개인용 소스 링크', '없으시면 「없음」으로 표시'],
  ['06', '영상 파일 링크', null],
]

export default function Contact() {
  const toast = useToast()
  const [done, setDone] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  const copy = (value: string, msg?: string) =>
    copyText(value)
      .then(() => toast(msg || 'Discord ID가 복사됐어요'))
      .catch(() => toast('복사 실패. 직접 선택해 주세요'))

  const copyTemplate = () => {
    copyText(TEMPLATE)
      .then(() => {
        toast('의뢰 양식이 클립보드에 복사됐어요')
        setDone(true)
        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => setDone(false), 2200)
      })
      .catch(() => toast('복사 실패. 직접 선택해 주세요'))
  }

  return (
    <section className="sec bg-paper" id="contact">
      <div className="sh r">
        <span className="sh-cap">— 의뢰 신청 —</span>
        <h2 className="sh-t">
          이렇게 <span className="it">의뢰해 주세요.</span>
        </h2>
        <p className="sh-l">의뢰 양식을 복사해 작성한 뒤, 아래 버튼 중 편한 방식으로 보내주세요.</p>
      </div>

      <div className="ig-wrap r">
        <div className="ig-h">
          <span className="ig-cap">의뢰 양식 6가지</span>
          <button className={'cp-btn' + (done ? ' done' : '')} type="button" onClick={copyTemplate}>
            <svg
              className="ic-cp"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <svg
              className="ic-done"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="lbl kr">{done ? '복사됨' : '복사하기'}</span>
          </button>
        </div>
        <ol className="ig-list">
          {GUIDE.map(([n, title, sub]) => (
            <li key={n}>
              <span className="ig-n">{n}</span>
              <div>
                <b className="kr">{title}</b>
                {sub && <span className="kr">{sub}</span>}
              </div>
            </li>
          ))}
        </ol>
        <div className="contact-methods" aria-label="정현 연락 버튼">
          <button
            className="contact-btn primary copy-contact"
            type="button"
            onClick={() => copy('hyeeeeo_ni')}
          >
            <span className="cm-ico" aria-hidden="true">
              💬
            </span>
            <span className="cm-k">Discord</span>
            <strong>ID 복사하기</strong>
          </button>
          <button
            className="contact-btn copy-contact"
            type="button"
            onClick={() => copy('flvm0530@naver.com', '메일 주소가 복사됐어요')}
          >
            <span className="cm-ico" aria-hidden="true">
              ✉️
            </span>
            <span className="cm-k">Email</span>
            <strong>메일 주소 복사하기</strong>
          </button>
          <a className="contact-btn" href="https://x.com/c_si0n" target="_blank" rel="noopener">
            <span className="cm-ico" aria-hidden="true">
              𝕏
            </span>
            <span className="cm-k">X</span>
            <strong>X로 문의하기</strong>
          </a>
        </div>
      </div>
    </section>
  )
}
