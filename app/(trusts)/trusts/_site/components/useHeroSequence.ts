import { useEffect, type RefObject } from 'react'

type Options = {
  frames: string[]
  sectionRef: RefObject<HTMLElement | null>
  canvasRef: RefObject<HTMLCanvasElement | null>
  /** Called (outside React) with overall scroll progress 0–1. */
  onProgress: (progress: number) => void
  /** Horizontal focal point used when the frame is cropped to cover — fixed, or a function of position in the sequence (0–1). */
  focalX?: number | ((t: number) => number)
  /** Share of the scroll runway used by the frames; the rest holds the final frame. */
  sequenceShare?: number
}

const CONCURRENCY = 6
const SOURCE_WIDTH = 1920
const SOURCE_HEIGHT = 1080

/**
 * Scroll-scrubbed image sequence drawn to a canvas.
 * No React state is touched on scroll: progress is read in a passive listener,
 * eased in requestAnimationFrame, and drawn one whole frame at a time at full
 * source resolution, in both scroll directions.
 */
export function useHeroSequence({ frames, sectionRef, canvasRef, onProgress, focalX = 0.5, sequenceShare = 0.86 }: Options) {
  useEffect(() => {
    const section = sectionRef.current
    const canvas = canvasRef.current
    const maybeContext = canvas?.getContext('2d', { alpha: false })
    if (!section || !canvas || !maybeContext || !frames.length) return
    const context = maybeContext

    const total = frames.length
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const images: (HTMLImageElement | null)[] = new Array(total).fill(null)
    const ready: boolean[] = new Array(total).fill(false)
    let inFlight = 0
    let target = reducedMotion ? total - 1 : 0
    let current = target
    let lastKey = ''
    let raf = 0
    let previousTime = 0
    let visible = true
    let cssWidth = 0
    let cssHeight = 0
    // Hold the stream until the first frame and page have painted (or the visitor scrolls).
    let streaming = false

    const requestRender = () => { if (visible && !raf) raf = requestAnimationFrame(render) }

    const load = (index: number, priority = false) => {
      if (images[index]) return
      const image = new Image()
      image.decoding = 'async'
      if (priority) image.fetchPriority = 'high'
      images[index] = image
      inFlight += 1
      image.onload = () => {
        inFlight -= 1
        const finish = () => { ready[index] = true; lastKey = ''; requestRender(); pump() }
        image.decode().then(finish, finish)
      }
      image.onerror = () => { inFlight -= 1; pump() }
      image.src = frames[index]
    }

    // Progressive preload, always choosing the unloaded frame nearest the playhead.
    const pump = () => {
      if (reducedMotion || !streaming) return
      while (inFlight < CONCURRENCY) {
        const center = Math.round(target)
        let next = -1
        for (let step = 0; step < total; step += 1) {
          const ahead = center + step
          const behind = center - step
          if (ahead < total && !images[ahead]) { next = ahead; break }
          if (behind >= 0 && !images[behind]) { next = behind; break }
        }
        if (next < 0) return
        load(next)
      }
    }

    const nearestReady = (index: number) => {
      for (let step = 0; step < total; step += 1) {
        if (index - step >= 0 && ready[index - step]) return index - step
        if (index + step < total && ready[index + step]) return index + step
      }
      return -1
    }

    const drawCover = (image: HTMLImageElement, index: number) => {
      const focal = typeof focalX === 'function' ? focalX(index / Math.max(total - 1, 1)) : focalX
      const scale = Math.max(cssWidth / image.naturalWidth, cssHeight / image.naturalHeight)
      const width = image.naturalWidth * scale
      const height = image.naturalHeight * scale
      context.drawImage(image, (cssWidth - width) * focal, (cssHeight - height) / 2, width, height)
    }

    function render(time: number) {
      raf = 0
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16
      previousTime = time
      current += (target - current) * (1 - Math.exp(-elapsed / 90))
      if (Math.abs(target - current) < 0.01) current = target

      // One whole frame at a time — never a blend of two — so every frame stays at full sharpness.
      const nearest = Math.round(current)
      const index = ready[nearest] ? nearest : nearestReady(nearest)
      const key = `${index}:${canvas!.width}x${canvas!.height}`
      if (index >= 0 && cssWidth && key !== lastKey) {
        drawCover(images[index]!, index)
        lastKey = key
        canvas!.classList.add('is-ready')
      }
      if (current !== target) requestRender()
      else previousTime = 0
    }

    const readScroll = () => {
      if (reducedMotion) { onProgress(1); return }
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1)
      const progress = Math.min(Math.max(-section.getBoundingClientRect().top / distance, 0), 1)
      target = Math.min(progress / sequenceShare, 1) * (total - 1)
      if (progress > 0) streaming = true
      onProgress(progress)
      pump()
      requestRender()
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      if (!bounds.width || !bounds.height) return
      cssWidth = bounds.width
      cssHeight = bounds.height
      // Back the canvas with at least as many pixels as the visible part of a source frame,
      // so the Full HD frames are never downsampled before the browser scales them.
      const coverScale = Math.max(cssWidth / SOURCE_WIDTH, cssHeight / SOURCE_HEIGHT)
      const ratio = Math.max(Math.min(window.devicePixelRatio || 1, 2), 1 / coverScale)
      canvas.width = Math.round(cssWidth * ratio)
      canvas.height = Math.round(cssHeight * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      context.imageSmoothingEnabled = true
      context.imageSmoothingQuality = 'high'
      lastKey = ''
      requestRender()
    }

    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) readScroll()
      else if (raf) { cancelAnimationFrame(raf); raf = 0; previousTime = 0 }
    })
    visibility.observe(section)
    const sizeObserver = new ResizeObserver(resize)
    sizeObserver.observe(canvas)

    load(Math.round(target), true)
    resize()
    readScroll()
    // Let the first frame and the page settle before streaming the rest.
    const idle = window.setTimeout(() => { streaming = true; pump() }, 350)

    window.addEventListener('scroll', readScroll, { passive: true })
    return () => {
      window.clearTimeout(idle)
      window.removeEventListener('scroll', readScroll)
      visibility.disconnect()
      sizeObserver.disconnect()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [frames, sectionRef, canvasRef, onProgress, focalX, sequenceShare])
}
