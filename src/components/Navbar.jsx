import { useEffect, useState } from 'react'
import logo from '../assets/logo.jpg'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'Collections', href: '#collections' },
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-espresso/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.3)]'
          : 'bg-gradient-to-b from-espresso/70 to-transparent'
      }`}
    >
      <nav className="container-brand flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="AnthanOra" className="h-11 w-11 rounded-full object-cover" />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide text-cream">
              Anthan<span className="text-gold">Ora</span>
            </span>
            <span className="text-[9px] tracking-[0.3em] text-cream/60 mt-0.5">NATURALLY YOU</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-cream/85 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href="#collections" className="hidden sm:inline-flex btn-secondary-light !py-2.5 !px-6">
            Shop Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6h15l-1.5 9h-12z" />
              <path d="M6 6L4.5 2H2" />
              <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
              <circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden inline-flex text-cream"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-espresso/98 backdrop-blur-md border-t border-cream/10">
          <ul className="container-brand flex flex-col gap-1 py-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 text-sm text-cream/85 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
