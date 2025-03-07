import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/homepage/HeroSection'
import Living from './components/homepage/Living'
import AboutSection from './components/homepage/AboutSection'
import MissonAndVisionSection from './components/homepage/MissonAndVisionSection'
import ServicesSection from './components/homepage/ServicesSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <div className="bg-[url('/src/assets/images/hero-bg.png')] bg-cover bg-center h-screen">
        <Navbar />
        <HeroSection />
      </div>
      <Living />
      <AboutSection />
      <MissonAndVisionSection />
      <ServicesSection />
      <Footer />
    </div>
  )
}

export default App
