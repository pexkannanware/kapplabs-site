import { useCallback, useRef } from 'react'
import { heroChapters } from '../content'
import { Icon } from './Icon'
import { useHeroSequence } from './useHeroSequence'

// Full HD (1920×1080) frames from the hero scroll sequence; must match the files in public/trusts/hero.
const FRAME_COUNT = 126
const frames = Array.from({ length: FRAME_COUNT }, (_, i) => `/trusts/hero/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`)

const CHAPTER_STARTS = [0, 0.3, 0.6]
const SEQUENCE_SHARE = 0.86
const FOCAL_X = 0.62
// On portrait screens the crop follows the action: the notes on the left first, then the laptop on the right.
const portraitQuery = typeof window !== 'undefined' ? window.matchMedia('(max-width: 820px)') : null
const focalForFrame = (t: number) => portraitQuery?.matches ? 0.28 + 0.5 * t * t * (3 - 2 * t) : FOCAL_X
export function TrustHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chapterRef = useRef(-1)

  const onProgress = useCallback((progress: number) => {
    const section = sectionRef.current
    if (!section) return
    section.style.setProperty('--hero-progress', progress.toFixed(4))
    const chapter = progress >= CHAPTER_STARTS[2] ? 2 : progress >= CHAPTER_STARTS[1] ? 1 : 0
    if (chapter !== chapterRef.current) {
      chapterRef.current = chapter
      section.dataset.chapter = String(chapter)
    }
    // Per-chapter fill for the chapter index.
    CHAPTER_STARTS.forEach((start, index) => {
      const end = CHAPTER_STARTS[index + 1] ?? 1
      const fill = Math.min(Math.max((progress - start) / (end - start), 0), 1)
      section.style.setProperty(`--chapter-${index}`, fill.toFixed(3))
    })
  }, [])

  useHeroSequence({ frames, sectionRef, canvasRef, onProgress, focalX: focalForFrame, sequenceShare: SEQUENCE_SHARE })

  const goToChapter = (index: number) => {
    const section = sectionRef.current
    if (!section) return
    const distance = section.offsetHeight - window.innerHeight
    const top = section.getBoundingClientRect().top + window.scrollY
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: top + distance * (CHAPTER_STARTS[index] + (index ? 0.02 : 0)), behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <section className="hero" id="home" ref={sectionRef} data-chapter="0" aria-labelledby="hero-heading">
      <div className="hero-sticky">
        <div className="hero-media">
          <img className="hero-poster" src={frames[0]} alt="" width="1920" height="1080" fetchPriority="high" decoding="async"/>
          <canvas ref={canvasRef} className="hero-canvas" role="img" aria-label="Rupee notes and coins drift through a sunlit room and flow into a laptop, where they become the ARAM ERP dashboard."/>
        </div>

        <div className="hero-inner">
          <div className="hero-copy">
            <h1 id="hero-heading" className="hero-eyebrow"><span className="eyebrow-rule" aria-hidden="true"/>ARAM ERP · ERP Software for Trusts</h1>

            <div className="hero-titles">
              {heroChapters.map((chapter, index) => (
                <p className="hero-title" data-index={index} key={chapter.label}>
                  <span>{chapter.title[0]}</span>
                  <em>{chapter.title[1]}</em>
                </p>
              ))}
            </div>

            <div className="hero-texts">
              {heroChapters.map((chapter, index) => <p className="hero-text" data-index={index} key={chapter.label}>{chapter.text}</p>)}
            </div>

            <div className="hero-actions">
              <a className="button button-large" href="#contact">Request a Demo <Icon name="arrow" size={17}/></a>
              <a className="text-link" href="#how-it-works">See how it works <Icon name="arrow" size={15}/></a>
            </div>

            <ol className="hero-chapters" aria-label="Story chapters">
              {heroChapters.map((chapter, index) => (
                <li key={chapter.label} data-index={index}>
                  <button type="button" onClick={() => goToChapter(index)}>
                    <span className="chapter-num">0{index + 1}</span>
                    <span className="chapter-label">{chapter.label}</span>
                    <span className="chapter-bar" aria-hidden="true"><i style={{ transform: `scaleX(var(--chapter-${index}, 0))` }}/></span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="hero-cue" aria-hidden="true"><span/>Scroll</div>
      </div>
    </section>
  )
}
