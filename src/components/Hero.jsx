import heroBg from '../assets/hero-bg.jpg'

const badges = [
  { title: 'Proudly Nigerian', copy: 'Made with love in Nigeria' },
  { title: 'Natural & Safe', copy: 'Gentle on skin' },
  { title: 'Trusted Quality', copy: 'Loved by thousands' },
]

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-[560px] sm:min-h-[640px] md:min-h-[760px] flex items-center pt-24 pb-14 bg-cover bg-[position:78%_58%] md:bg-[position:center_62%]"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, rgba(12,8,5,0.92) 0%, rgba(12,8,5,0.8) 30%, rgba(12,8,5,0.4) 52%, rgba(12,8,5,0.08) 70%, transparent 85%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

      <div className="container-brand relative w-full">
        <div className="max-w-xl">
          <p className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-gold-light mb-6">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-gold shrink-0">
              <path d="M12 2C9 8 4 9 4 15a8 8 0 0 0 16 0c0-6-5-7-8-13z" />
            </svg>
            Nature Inspired. Skin Approved.
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.3rem] mb-6">
            <span className="block text-cream">Pure Ingredients.</span>
            <span className="block text-gold">Powerful Results.</span>
          </h1>

          <p className="text-base md:text-lg text-cream/70 max-w-md mb-9 leading-relaxed">
            Premium natural skincare made in Nigeria to nourish, protect and bring
            out the best in your skin every day.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a href="#collections" className="btn-primary">
              Shop Collection
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#about" className="btn-secondary-light">
              Discover Benefits
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {badges.map((badge) => (
              <div key={badge.title} className="flex items-center gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gold shrink-0">
                  <path d="M12 3l7 3v6c0 5-3.4 8.4-7 9-3.6-.6-7-4-7-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span>
                  <span className="block text-xs font-semibold tracking-wide text-cream">{badge.title}</span>
                  <span className="block text-[11px] text-cream/55">{badge.copy}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute right-[9%] top-[30%] h-28 w-28 flex-col items-center justify-center rounded-full border border-gold/50 bg-espresso/70 text-center shadow-soft backdrop-blur-sm">
        <span className="text-[9px] tracking-[0.15em] text-gold-light">WITH</span>
        <span className="font-display text-sm text-cream leading-tight px-2">Shea Butter</span>
        <span className="text-[7px] tracking-[0.1em] text-cream/50 mt-1 px-2 leading-tight">
          RICH MOISTURE · INTENSE CARE
        </span>
      </div>
    </section>
  )
}

export default Hero
