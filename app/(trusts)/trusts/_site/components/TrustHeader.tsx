import { useEffect, useState } from 'react'
import { navItems } from '../content'
import { Brand } from './Brand'
import { Icon } from './Icon'

export function TrustHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const next = window.scrollY > 24
      setScrolled((previous) => previous === next ? previous : next)
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className={`site-header${scrolled || menuOpen ? ' is-scrolled' : ''}${menuOpen ? ' menu-is-open' : ''}`}>
      <div className="header-inner">
        <Brand/>
        <nav id="main-navigation" className="main-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="button nav-cta-mobile" href="#contact" onClick={() => setMenuOpen(false)}>Request a Demo <Icon name="arrow" size={16}/></a>
        </nav>
        <a className="button button-small header-cta" href="#contact">Request a Demo</a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? 'close' : 'menu'} size={22}/>
        </button>
      </div>
    </header>
  )
}
