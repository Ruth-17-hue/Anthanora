import { useState } from 'react'
import logo from '../assets/logo.jpg'

const quickLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Collections', href: '#collections' },
  { label: 'Our Ingredients', href: '#ingredients' },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const customerCare = [
  { label: 'FAQ', href: '#' },
  { label: 'Shipping & Delivery', href: '#' },
  { label: 'Returns & Refunds', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
]

const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: <path d="M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V11H8v3h2.5v6h3v-6H16l.5-3h-3V9.8c0-.5.2-.8.5-.8z" fill="currentColor" stroke="none" />,
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <path d="M15 3v10.5a3 3 0 1 1-2.4-2.94M15 3c.4 2 1.9 3.5 4 3.8" />
    ),
  },
]

function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <footer id="contact" className="relative overflow-hidden text-cream" style={{ backgroundColor: '#5a412c' }}>
      <div className="container-brand relative py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.95fr_1fr_1.1fr] lg:gap-8">
          <div>
            <p className="flex items-center gap-1.5 text-sm font-bold tracking-wide uppercase text-cream mb-3">
              Stay Glowing, Naturally
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                <path d="M12 2C9 8 4 9 4 15a8 8 0 0 0 16 0c0-6-5-7-8-13z" />
              </svg>
            </p>
            <p className="text-sm text-cream/65 leading-relaxed mb-5 max-w-xs">
              Subscribe for exclusive offers, skincare tips and new product
              updates.
            </p>

            {submitted ? (
              <p className="text-gold text-sm font-medium">You&apos;re on the list.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2 max-w-xs">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="min-w-0 flex-1 rounded-full bg-cream/10 px-4 py-2.5 text-xs text-cream placeholder:text-cream/45 border border-cream/20 focus:outline-none focus:border-gold transition-colors duration-300"
                />
                <button type="submit" className="btn-primary !py-2.5 !px-5 !text-[11px] shrink-0">
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-wide uppercase text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-cream/65 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-wide uppercase text-cream mb-4">Customer Care</h4>
            <ul className="space-y-2.5">
              {customerCare.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-cream/65 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-wide uppercase text-cream mb-4">Get In Touch</h4>
            <ul className="space-y-3 mb-5">
              <li className="flex items-start gap-2.5 text-sm text-cream/65">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="mt-0.5 shrink-0 text-gold">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +234 801 234 5678
              </li>
              <li className="flex items-start gap-2.5 text-sm text-cream/65">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="mt-0.5 shrink-0 text-gold">
                  <path d="M4 4h16v16H4z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                hello@anthanora.com
              </li>
              <li className="flex items-start gap-2.5 text-sm text-cream/65">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="mt-0.5 shrink-0 text-gold">
                  <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Lagos, Nigeria
              </li>
            </ul>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/25 text-cream/80 hover:text-gold hover:border-gold/50 transition-colors duration-300"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="AnthanOra" className="h-11 w-11 rounded-full object-cover" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg tracking-wide text-cream">
                  Anthan<span className="text-gold">Ora</span>
                </span>
                <span className="text-[9px] tracking-[0.3em] text-cream/50 mt-0.5">NATURALLY YOU</span>
              </span>
            </div>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[14rem]">
              Premium natural skincare made with love, inspired by nature,
              perfected for you.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/55">
          <p>&copy; {new Date().getFullYear()} AnthanOra. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
              <path d="M12 2C9 8 4 9 4 15a8 8 0 0 0 16 0c0-6-5-7-8-13z" />
            </svg>
            Made in Nigeria
          </p>
          <p className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gold">
              <path d="M3 16V6h11v10M14 10h4l3 3v3h-7z" />
              <circle cx="7.5" cy="17.5" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="17.5" cy="17.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            We deliver across Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
