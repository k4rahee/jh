const CAREER: [string, string, string | null][] = [
  ['왕클 세종님', '메인 채널 및 서브 채널 편집자', '前'],
  ['세잠님', '메인 편집자', null],
  ['하나츠님', '외주 편집자', null],
  ['팔칠님', '편집자', null],
]

export default function Career() {
  return (
    <section className="sec bg-paper" id="career">
      <div className="sh left r">
        <span className="sh-cap">— 경력 —</span>
        <h2 className="sh-t">
          편집 <span className="it">경력.</span>
        </h2>
      </div>
      <div className="career-wrap r">
        <ul className="career-list">
          {CAREER.map(([name, role, tag], i) => (
            <li className="career-row" key={name}>
              <span className="nm">{String(i + 1).padStart(2, '0')}</span>
              <span className="who kr">{name}</span>
              <span className="role kr">{role}</span>
              {tag && <span className="tg">{tag}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
