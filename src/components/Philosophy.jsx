const pillars = [
  {
    title: 'Natural Ingredients',
    copy: 'Made with carefully selected plant-based ingredients.',
    icon: (
      <>
        <path d="M12 21V10" />
        <path d="M12 10c0-4 3-6 7-6 0 4-3 6-7 6z" />
        <path d="M12 14c0-3-2.5-5-6-5 0 3 2.5 5 6 5z" />
      </>
    ),
  },
  {
    title: 'Visible Results',
    copy: 'Formulated to nourish, refresh and enhance your natural glow.',
    icon: (
      <>
        <path d="M12 3l1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1L6.5 8.5l4.1-1.4z" />
        <path d="M18.5 14l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
      </>
    ),
  },
  {
    title: 'Gentle & Safe',
    copy: 'Suitable for all skin types. Perfect for daily use.',
    icon: <path d="M12 3c-2.5 3.5-6 7.4-6 11a6 6 0 0 0 12 0c0-3.6-3.5-7.5-6-11z" />,
  },
  {
    title: 'Proudly Nigerian',
    copy: 'Locally crafted with passion, care, and attention to detail.',
    icon: (
      <path d="M12 4c1.4 1.4 2.8.6 4 0 .8 1.6 1.8 2 3.4 1.6-.4 1.6 0 2.6 1.6 3.4-1.4 1.2-1.4 2.6 0 4-1.6.8-2 1.8-1.6 3.4-1.6-.4-2.6 0-3.4 1.6-1.2-1.4-2.6-1.4-4 0-.8-1.6-1.8-2-3.4-1.6.4-1.6 0-2.6-1.6-3.4 1.4-1.2 1.4-2.6 0-4 1.6-.8 2-1.8 1.6-3.4 1.6.4 2.6 0 3.4-1.6z" />
    ),
  },
  {
    title: 'Premium Quality',
    copy: 'High quality standards in every product.',
    icon: (
      <>
        <path d="M12 3l7 3.2v5.3c0 4.6-3 7.9-7 9.2-4-1.3-7-4.6-7-9.2V6.2z" />
        <path d="M9.2 12l1.9 1.9 3.7-3.8" />
      </>
    ),
  },
  {
    title: 'Complete Care',
    copy: 'Solutions for healthy, radiant and beautiful skin.',
    icon: (
      <>
        <path d="M12 21c-3-2-5-4.5-5-7.5A5 5 0 0 1 12 8a5 5 0 0 1 5 5.5c0 3-2 5.5-5 7.5z" />
        <path d="M12 8a5 5 0 0 1 5-5 5 5 0 0 1-5 5z" />
        <path d="M12 8a5 5 0 0 0-5-5 5 5 0 0 0 5 5z" />
      </>
    ),
  },
]

function Philosophy() {
  return (
    <section id="about" className="py-20 md:py-24 bg-cream">
      <div className="container-brand">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl tracking-wide text-ink mb-3">Why Choose AnthanOra?</h2>
          <div className="flex items-center justify-center gap-2" aria-hidden="true">
            <span className="h-px w-10 bg-gold/60" />
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
              <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z" />
            </svg>
            <span className="h-px w-10 bg-gold/60" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x divide-ink/10 gap-y-10">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col items-center text-center px-4">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-clay mb-4">
                {pillar.icon}
              </svg>
              <h3 className="text-[13px] font-bold tracking-wide uppercase text-ink mb-2 leading-snug">{pillar.title}</h3>
              <p className="text-xs text-ink-soft leading-relaxed max-w-[10rem]">{pillar.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Philosophy
