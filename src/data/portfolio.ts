// Portfolio data, category labels and YouTube thumbnail helpers.
export type PortItem = {
  id: string
  t: string
  s: string
  span: number
  vert: boolean
}

export type CatKey = 'chat' | 'game' | 'shorts'

export const PORT: Record<CatKey, PortItem[]> = {
  chat: [
    { id: 'amQWFDIyk3M', t: '저챗 영상 편집', s: '롱폼', span: 7, vert: false },
    { id: 'nrohRuQp26g', t: '저챗 영상 편집', s: '롱폼', span: 5, vert: false },
    { id: 'BvW7aM6ws3Q', t: '저챗 영상 편집', s: '롱폼', span: 5, vert: false },
    { id: 'sz1mDuIrYlc', t: '저챗 영상 편집', s: '롱폼', span: 7, vert: false },
  ],
  game: [
    { id: 'l_37xGsQQtc', t: '게임 영상 편집', s: '롱폼', span: 7, vert: false },
    { id: 'bDt_mpdlYTM', t: '게임 영상 편집', s: '롱폼', span: 5, vert: false },
    { id: 'Yb8UN9Ryii0', t: '게임 영상 편집', s: '롱폼', span: 5, vert: false },
    { id: 'FJOoQtsVdRc', t: '게임 영상 편집', s: '롱폼', span: 7, vert: false },
  ],
  shorts: [
    { id: 'O1_SP4pcdTs', t: '쇼츠 편집', s: '9:16', span: 3, vert: true },
    { id: 'XWDnUNe_q10', t: '쇼츠 편집', s: '9:16', span: 3, vert: true },
    { id: '1YERhfPUc3Q', t: '쇼츠 편집', s: '9:16', span: 3, vert: true },
    { id: 'BdrkGmPwZDw', t: '쇼츠 편집', s: '9:16', span: 3, vert: true },
  ],
}

export const CL: Record<CatKey, string> = { chat: '저챗', game: '게임', shorts: '쇼츠' }
export const CATS: CatKey[] = ['chat', 'game', 'shorts']
export const DEFAULT_CAT: CatKey = 'chat'

export const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
export const thumbF = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
