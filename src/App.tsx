import Navbar from './components/NavBar';
import Hero from './components/HeroSection';
import Designs from './components/Designs';
import Footer from './components/Footer';
import Porfolio from './components/Portfolio';
import { SlideCards } from './components/Experience/SlideCards';

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>

    <SlideCards/>

    <Porfolio/>
    <Designs/>

    <Footer/>
    </>
  )
}

export default App
