const REVEAL_ITEMS = ['빠르고 정확하게', '트렌드에 맞게', '의도를 살려서', '꼼꼼하게', '함께 만들어요']
const REVEAL_FULL = Array.from({ length: 6 }, () => REVEAL_ITEMS).flat()

const TOOLS: [string, string, string][] = [
  ['Pr', 'Premiere Pro', '메인 편집기'],
  ['Ae', 'After Effects', '자막 · 효과'],
]
const TOOLS_FULL = Array.from({ length: 6 }, () => TOOLS).flat()

export function RevealMarquee() {
  return (
    <div className="rm" aria-hidden="true">
      <div className="rm-t">
        {REVEAL_FULL.map((item, i) => (
          <span className="i" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function ToolMarquee() {
  return (
    <div className="tm" aria-hidden="true">
      <div className="tm-t">
        {TOOLS_FULL.map(([lg, name, role], i) => (
          <div className="tm-c" key={i}>
            <span className="lg">{lg}</span>
            <div className="me">
              <b>{name}</b>
              <span>{role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
