import { useRef, useState, type PointerEvent } from 'react'
import beforeImage from '../../assets/sections/before-registers.webp'
import afterImage from '../../assets/sections/after-aram.webp'
import { Eyebrow } from '../Eyebrow'
import { Icon } from '../Icon'

const before = ['Spreadsheets', 'Paper records', 'Disconnected documents', 'Manual reconciliation', 'Scattered project information', 'Reporting effort']
const after = ['Connected finance', 'Traceable donations', 'Project visibility', 'Organized records', 'Role-based access', 'Clear reporting']

export function BeforeAfter() {
  // Share of the frame showing the "after" state, 0–100.
  const [reveal, setReveal] = useState(50)
  const stageRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const [animate, setAnimate] = useState(false)

  const fromPointer = (event: PointerEvent) => {
    const bounds = stageRef.current?.getBoundingClientRect()
    if (!bounds) return
    setReveal(Math.round(Math.min(Math.max((event.clientX - bounds.left) / bounds.width, 0), 1) * 100))
  }
  const state = reveal > 60 ? 'after' : reveal < 40 ? 'before' : 'between'

  return (
    <section className="before-after section" id="before-after" aria-labelledby="ba-heading">
      <div className="container">
        <div className="ba-heading" data-reveal>
          <Eyebrow>A clearer way of working</Eyebrow>
          <h2 id="ba-heading" className="display">Less searching. <em>More seeing.</em></h2>
          <p className="lede">Drag across the frame to compare a Trust’s administration before and after its work is brought into one place.</p>
        </div>

        <div className="ba-stage" data-reveal="mask" data-state={state}>
          <div
            className={`ba-frame${animate ? ' is-animating' : ''}`}
            ref={stageRef}
            style={{ ['--reveal' as string]: `${reveal}%` }}
            onPointerDown={(event) => { dragging.current = true; setAnimate(false); event.currentTarget.setPointerCapture(event.pointerId); fromPointer(event) }}
            onPointerMove={(event) => { if (dragging.current) fromPointer(event) }}
            onPointerUp={() => { dragging.current = false }}
            onPointerCancel={() => { dragging.current = false }}
          >
            <img className="ba-before" src={beforeImage.src} alt="Before: registers, receipt books, loose vouchers, sticky notes and bank statement files crowding a Trust office desk" width="1920" height="1200" loading="lazy" decoding="async"/>
            <div className="ba-after-clip">
              <img src={afterImage.src} alt="After: the same desk, clear except for a tablet running the ARAM ERP dashboard and one archived register" width="1920" height="1200" loading="lazy" decoding="async"/>
            </div>
            <span className="ba-tag ba-tag-before">Before</span>
            <span className="ba-tag ba-tag-after">With ARAM ERP</span>
            <div className="ba-handle" aria-hidden="true"><span><Icon name="arrow" size={14}/><Icon name="arrow" size={14}/></span></div>
            <input
              className="ba-range"
              type="range"
              min={0}
              max={100}
              value={reveal}
              onChange={(event) => { setAnimate(false); setReveal(Number(event.target.value)) }}
              aria-label="Compare before and after ARAM ERP"
              aria-valuetext={`${reveal}% showing ARAM ERP`}
            />
          </div>
          <div className="ba-toggle" role="group" aria-label="Jump to state">
            <button type="button" aria-pressed={state === 'before'} onClick={() => { setAnimate(true); setReveal(0) }}>Before</button>
            <button type="button" aria-pressed={state === 'after'} onClick={() => { setAnimate(true); setReveal(100) }}>After</button>
          </div>
        </div>

        <div className="ba-lists">
          <div className="ba-list ba-list-before" data-reveal>
            <h3>When records are scattered</h3>
            <ul>{before.map((item) => <li key={item}><i aria-hidden="true">—</i>{item}</li>)}</ul>
          </div>
          <div className="ba-list ba-list-after" data-reveal style={{ ['--d' as string]: '120ms' }}>
            <h3>With ARAM ERP</h3>
            <ul>{after.map((item) => <li key={item}><i aria-hidden="true"><Icon name="check" size={13}/></i>{item}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}
