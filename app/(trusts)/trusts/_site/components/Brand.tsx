import mark from '../assets/brand/aram-mark.png'

/** Shared ARAM wordmark (same as Temples and Mathas): lotus mark, ARAM ERP, and the product tagline. */
export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href="#home" aria-label="ARAM ERP for Trusts — back to top">
      <span className="brand-mark" style={{ maskImage: `url(${mark.src})`, WebkitMaskImage: `url(${mark.src})` }} aria-hidden="true"/>
      <span className="brand-word">
        ARAM ERP
        <span className="brand-tag">For Trusts</span>
      </span>
    </a>
  )
}
