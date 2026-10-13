import type { ReactNode } from 'react'

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span className="eyebrow-rule" aria-hidden="true"/>{children}</span>
}
