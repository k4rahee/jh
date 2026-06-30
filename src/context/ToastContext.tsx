import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type ToastFn = (m: string) => void

const ToastContext = createContext<ToastFn>(() => {})

export function useToast(): ToastFn {
  return useContext(ToastContext)
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [msg, setMsg] = useState('Copied to clipboard')
  const [shown, setShown] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  const toast = useCallback<ToastFn>((m) => {
    setMsg(m)
    setShown(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setShown(false), 2000)
  }, [])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className={'ts' + (shown ? ' s' : '')}>{msg}</div>
    </ToastContext.Provider>
  )
}
