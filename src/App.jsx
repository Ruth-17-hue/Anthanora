import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import FeaturedProducts from './components/FeaturedProducts'
import FeaturedProduct from './components/FeaturedProduct'
import Ingredients from './components/Ingredients'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <FeaturedProducts />
        <FeaturedProduct />
        <Ingredients />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

export default App
