import type { ReactNode } from 'react'

export type IconName = 'arrow' | 'shield' | 'eye' | 'file' | 'check' | 'donation' | 'bank' | 'project' | 'report' | 'people' | 'lock' | 'menu' | 'close' | 'chevron' | 'scale' | 'receipt'

const paths: Record<IconName, ReactNode> = {
  arrow: <><path d="M4 12h15"/><path d="m13 5 7 7-7 7"/></>,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
  eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></>,
  file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  donation: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>,
  bank: <path d="m3 10 9-7 9 7M4 10h16M5 10v9m4-9v9m6-9v9m4-9v9M3 21h18"/>,
  project: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 4V2m8 2V2M3 10h18M8 15h3m2 0h3"/></>,
  report: <><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-5 5"/></>,
  people: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87m-1-12.13a4 4 0 0 1 0 7.75"/></>,
  lock: <><rect x="4" y="10" width="16" height="12" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3m-4 5v2"/></>,
  menu: <path d="M4 8h16M4 16h16"/>,
  close: <path d="M6 6l12 12M18 6 6 18"/>,
  chevron: <path d="m6 9 6 6 6-6"/>,
  scale: <><path d="M12 3v18M7 21h10M5 7h14"/><path d="m5 7-3 7a3 3 0 0 0 6 0L5 7Zm14 0-3 7a3 3 0 0 0 6 0l-3-7Z"/></>,
  receipt: <><path d="M4 2v20l4-2 4 2 4-2 4 2V2l-4 2-4-2-4 2-4-2Z"/><path d="M8 9h8m-8 4h6"/></>,
}

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}
