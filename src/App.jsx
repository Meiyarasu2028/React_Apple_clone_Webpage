import './App.css'
import Navbar from './components/Navbar/Navbar'
import OfferText from './components/OfferText'
import Header from './components/Header'
import Hero from './components/Hero'
import Subhero from './components/Subhero'
import AppleSlider from './components/AppleSlider'
import Cards from './components/Cards/Cards'
import CardItems from './components/Cards/CardItems'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <>
      <Navbar />
      <OfferText />
      <Header />
      <Hero />
      <Subhero />
      <Cards>
        <CardItems />
      </Cards>
      <AppleSlider />
      <About/>
      <Footer/>

    </>
  )
}

export default App
