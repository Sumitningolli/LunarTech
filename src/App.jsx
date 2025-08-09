
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Insights from './components/Insights';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {


  return (
    <div className="bg-[url('/bg1.jpeg')] bg-cover bg-center bg-fixed min-h-screen">
      <Navbar/>
      <Hero/>
      <Insights/>
      <Stats/>
      <Pricing/>
      <Testimonials/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
