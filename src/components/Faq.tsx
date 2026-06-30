import { Fragment, useRef, useState } from 'react'

type Faq = { n: string; q: string; a: string[] }

const FAQS: Faq[] = [
  {
    n: '01',
    q: '작업 기간은 얼마나 걸리나요?',
    a: [
      '기본 작업 기간은 시작일로부터 평균 4일 정도 소요됩니다.',
      '일정이 급하실 경우 빠른 마감(+30,000원)을 선택하시면 단축이 가능해요.',
    ],
  },
  {
    n: '02',
    q: '수정은 몇 번까지 가능한가요?',
    a: [
      '1차 수정은 무료로 진행됩니다.',
      '2차 수정부터 수정 1회당 5,000원의 추가 금액이 발생합니다.',
      '처음 의뢰서와 완전히 다른 방향(컨셉 자체 변경)은 별도 견적으로 안내드려요.',
    ],
  },
  {
    n: '03',
    q: '결제는 어떻게 진행되나요?',
    a: [
      '결제는 계좌이체로 진행됩니다.',
      '의뢰 내용을 확인한 뒤 견적과 입금 계좌를 안내드리고, 입금 확인 후 작업을 시작합니다.',
    ],
  },
  {
    n: '04',
    q: '레퍼런스 영상은 꼭 줘야 하나요?',
    a: [
      '필수는 아니지만, 1-2개 보내주시면 톤을 더 빠르고 정확하게 잡을 수 있어요.',
      '없으시다면 채널 톤이나 분위기 키워드로 협의 가능합니다.',
    ],
  },
  {
    n: '05',
    q: '상업용으로 사용할 수 있나요?',
    a: [
      '네, 모든 의뢰 영상은 상업용 사용이 가능합니다.',
      '다만 사용된 BGM · 효과음의 라이선스는 의뢰자 측에서 별도 확인이 필요해요.',
    ],
  },
]

function FaqRow({ n, q, a }: Faq) {
  const [open, setOpen] = useState(false)
  const ans = useRef<HTMLDivElement>(null)

  return (
    <div className={'faq-row' + (open ? ' o' : '')}>
      <button className="faq-q" type="button" onClick={() => setOpen((o) => !o)}>
        <span className="nm">{n}</span>
        <span className="qt kr">{q}</span>
        <span className="ic">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className="faq-a"
        ref={ans}
        style={{ maxHeight: open && ans.current ? ans.current.scrollHeight : 0 }}
      >
        <div className="faq-a-i kr">
          {a.map((line, i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  return (
    <section className="sec dark-sec" id="faq">
      <div className="sh r">
        <span className="sh-cap">— 자주 묻는 질문 —</span>
        <h2 className="sh-t">
          자주 묻는 <span className="it">질문이에요.</span>
        </h2>
        <p className="sh-l">
          기존 의뢰자 분들이 자주 물어보신 내용을 모았어요.
          <br />
          더 궁금한 게 있으시면 정현 연락처로 문의해 주세요.
        </p>
      </div>
      <div className="faq-list">
        {FAQS.map((f) => (
          <FaqRow key={f.n} {...f} />
        ))}
      </div>
    </section>
  )
}
