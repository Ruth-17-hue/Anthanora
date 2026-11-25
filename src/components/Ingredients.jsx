import sheaImg from '../assets/products/ing-shea.jpg'
import charcoalImg from '../assets/products/ing-charcoal.jpg'
import lavenderImg from '../assets/products/ing-lavender.jpg'
import citronellaImg from '../assets/products/ing-citronella.jpg'

const ingredients = [
  {
    name: 'Shea Butter',
    copy: 'Carries antibacterial properties that help manage skin balance with natural vitamin A and E.',
    image: sheaImg,
  },
  {
    name: 'Ash',
    copy: 'Acts as an anti-aging agent, helping to remove dead skin cells and leaves the skin smooth and glowing.',
    image: charcoalImg,
  },
  {
    name: 'Lavender Extract',
    copy: 'Calms irritation, soothes and leaves skin refreshed.',
    image: lavenderImg,
  },
  {
    name: 'Citronella',
    copy: 'Offers anti-inflammatory and anti-fungal properties that help heal the skin.',
    image: citronellaImg,
  },
]

const featherStyle = {
  maskImage: 'radial-gradient(ellipse 62% 62% at 50% 50%, black 55%, transparent 90%)',
  WebkitMaskImage: 'radial-gradient(ellipse 62% 62% at 50% 50%, black 55%, transparent 90%)',
}

function Ingredients() {
  return (
    <section id="ingredients" className="py-20 md:py-28 bg-cream">
      <div className="container-brand">
        <div className="rounded-2xl border border-ink/10 px-6 py-12 md:px-10 md:py-14">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl text-ink mb-3">The Power of Nature</h2>
            <p className="text-sm text-ink-soft">
              We believe in nature&apos;s goodness. That&apos;s why we use only the best.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x divide-ink/10 gap-y-10">
            {ingredients.map((item) => (
              <div key={item.name} className="flex flex-col items-center text-center px-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-28 object-cover mb-5"
                  style={featherStyle}
                />
                <h3 className="text-xs font-bold tracking-wide uppercase text-ink mb-2">{item.name}</h3>
                <p className="text-xs text-ink-soft leading-relaxed max-w-[11rem]">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ingredients
