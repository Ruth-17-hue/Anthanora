import bgImage from '../assets/testimonials-bg.jpg'
import customer1 from '../assets/products/customer-1.jpg'
import customer2 from '../assets/products/customer-2.jpg'
import customer3 from '../assets/products/customer-3.jpg'

const testimonials = [
  {
    quote: 'The Ageless Glow cream is a game changer. My skin feels so soft, hydrated and healthy.',
    name: 'Amaka O.',
    avatar: customer1,
  },
  {
    quote: 'Priestly Ash black soap cleared my back acne and made my skin smoother than ever.',
    name: 'Tobi A.',
    avatar: customer2,
  },
  {
    quote: 'The lavender body wash is so refreshing. The scent is heavenly and relaxing.',
    name: 'Blessing E.',
    avatar: customer3,
  },
]

function Stars() {
  return (
    <div className="flex gap-1 text-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-10 md:py-12"
      style={{
        backgroundColor: '#241a12',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(12,8,5,0.75) 0%, rgba(12,8,5,0.55) 55%, rgba(12,8,5,0.15) 78%, transparent 92%)' }}
      />

      <div className="container-brand relative">
        <div className="text-center max-w-xl mx-auto mb-6">
          <h2 className="text-xl md:text-2xl text-cream mb-2">Loved by Our Customers</h2>
          <div className="flex items-center justify-center gap-2" aria-hidden="true">
            <span className="h-px w-8 bg-gold/60" />
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
              <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z" />
            </svg>
            <span className="h-px w-8 bg-gold/60" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-xl border border-cream/15 bg-black/25 backdrop-blur-sm p-4">
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <Stars />
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-9 w-9 shrink-0 rounded-full object-cover border border-cream/20"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
              <blockquote className="text-cream/80 leading-snug mb-3 text-xs">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="text-xs text-cream/60">&mdash; {t.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6" aria-hidden="true">
          <span className="h-1.5 w-6 rounded-full bg-gold" />
          <span className="h-1.5 w-1.5 rounded-full bg-cream/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-cream/25" />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
