import lavender from '../assets/products/lavender.jpg'

const features = [
  {
    title: 'Calms & Soothes the Skin',
    icon: <path d="M12 21c-4-2-7-6-7-11a7 7 0 0 1 14 0c0 5-3 9-7 11z" />,
  },
  {
    title: 'Long Lasting Freshness',
    icon: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></>,
  },
  {
    title: 'Gently Cleanses Without Drying',
    icon: <path d="M7 3c1 2-1 3-1 5a4 4 0 0 0 8 0c0-1-.5-2-1-3M8 21h8M9 17h6l1 4H8z" />,
  },
  {
    title: 'Refreshing Lavender Scent',
    icon: <path d="M12 3c-2 3-5 4-5 8a5 5 0 0 0 10 0c0-4-3-5-5-8z" />,
  },
]

function FeaturedProduct() {
  return (
    <section className="py-14 md:py-16 bg-cream-dim/60">
      <div className="container-brand flex flex-col md:flex-row items-start gap-10 md:gap-14">
        <div
          className="order-2 md:order-1 w-full aspect-square md:w-[440px] md:h-[440px] shrink-0 rounded-2xl overflow-hidden"
          style={{ backgroundColor: '#d9c8e6' }}
        >
          <img
            src={lavender}
            alt="Priestly Ash Lavender Body Wash"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="order-1 md:order-2 md:pt-1 flex-1">
          <p className="eyebrow text-clay mb-3">Featured Product</p>
          <h2 className="text-2xl md:text-[1.75rem] text-ink mb-4 max-w-md leading-snug">
            Priestly Ash Lavender Body Wash
          </h2>
          <p className="text-sm text-ink-soft leading-relaxed mb-8 max-w-md">
            A calming and refreshing body wash infused with lavender extract to
            cleanse gently, soothe the skin and leave you feeling relaxed all day
            long.
          </p>

          <div className="flex flex-wrap gap-x-7 gap-y-6 mb-9">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-center text-center w-20">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-clay/30 text-clay mb-2.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    {f.icon}
                  </svg>
                </span>
                <span className="text-[11px] font-medium text-ink-soft leading-snug">{f.title}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <span className="text-2xl font-semibold text-ink">&#8358;6,000</span>
            <a href="#" className="btn-primary !normal-case">
              Buy Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#" className="text-xs font-semibold tracking-wide uppercase text-ink hover:text-clay-dark transition-colors duration-300 inline-flex items-center gap-1">
              View Details
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProduct
