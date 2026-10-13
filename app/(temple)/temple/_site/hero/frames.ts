/** Resolved URLs for one source set (desktop or mobile). */
export type FrameSet = {
  /** One entry per anchor frame; null where the still hasn't been supplied yet. */
  anchors: (string | null)[]
  /** One list per transition (01→02 … 10→11), naturally sorted; empty until supplied. */
  transitions: string[][]
  /** Optional unsegmented scroll sequence (one image per frame, in filename order). */
  sequence?: string[]
}

/** Must match the number of files in public/temple/hero/{desktop,mobile}. */
const FRAME_COUNT = 136

const sequenceFor = (set: 'desktop' | 'mobile') =>
  Array.from({ length: FRAME_COUNT }, (_, i) => `/temple/hero/${set}/${String(i + 1).padStart(4, '0')}.webp`)

export const desktopFrames: FrameSet = { anchors: [], transitions: [], sequence: sequenceFor('desktop') }
export const mobileFrames: FrameSet = { anchors: [], transitions: [], sequence: sequenceFor('mobile') }

/** First image the visitor will see — preloaded with high priority and used as the poster. */
export const posterFor = (set: FrameSet) => set.sequence?.[0] ?? set.anchors[0] ?? set.transitions[0]?.[0] ?? null
export const hasAnyFrames = (set: FrameSet) => Boolean(set.sequence?.length) || set.anchors.some(Boolean) || set.transitions.some((list) => list.length > 0)
