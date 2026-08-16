import agelessGlow from '../assets/products/ageless-glow-open.jpg'
import blackSoap from '../assets/products/black-soap.jpg'
import lavender from '../assets/products/lavender.jpg'
import citronella from '../assets/products/citronella.jpg'

const collections = [
  {
    name: 'Ageless Glow',
    subtitle: 'Shea Butter Cream',
    image: agelessGlow,
    position: 'center 48%',
    zoom: true,
    vignette: 'rgba(50,26,10,0.55)',
  },
  {
    name: 'Priestly Ash',
    subtitle: 'African Black Soap',
    image: blackSoap,
    position: 'center 42%',
    zoom: true,
    vignette: 'rgba(8,8,8,0.55)',
  },
  {
    name: 'Priestly Ash',
    subtitle: 'Lavender',
    image: lavender,
    position: 'center 25%',
  },
  {
    name: 'Priestly Ash',
    subtitle: 'Citronella',
    image: citronella,
    position: 'center 25%',
  },
]

function FeaturedProducts() {
  return (
    <section id="collections" className="py-20 md:py-28 bg-cream">
      <div className="container-brand">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl text-ink mb-2">Our Collections</h2>
          <p className="font-script text-lg text-clay">Collection</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((item) => (
            <a
              key={`${item.name}-${item.subtitle}`}
              href="#collections"
              className="group relative block overflow-hidden rounded-2xl aspect-[3/4] shadow-card transition-transform duration-500 hover:-translate-y-1.5"
            >
              <img
                src={item.image}
                alt={`${item.name} ${item.subtitle}`}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.zoom ? 'scale-125' : ''}`}
                style={{ objectPosition: item.position }}
              />
              {item.vignette && (
                <div
                  className="absolute inset-0"
                  style={{ background: `radial-gradient(ellipse at center, transparent 30%, ${item.vignette} 100%)` }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <h3 className="font-display text-xl text-cream leading-tight">{item.name}</h3>
                <p className="text-xs text-cream/70 mt-1 mb-4">{item.subtitle}</p>
                <span className="inline-flex w-fit items-center rounded-full bg-cream/95 px-5 py-2 text-[11px] font-semibold tracking-wide uppercase text-ink">
                  Explore
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
