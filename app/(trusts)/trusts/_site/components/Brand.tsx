import logo from '../assets/sections/logo-aram.webp'

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href="#home" aria-label="ARAM ERP for Trusts — back to top">
      <img src={logo.src} alt="" width="54" height="30"/>
      <span className="brand-word">ARAM <b>ERP</b></span>
      <span className="brand-tag">Trusts</span>
    </a>
  )
}
