import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/homepage/HeroSection'
import Living from './components/homepage/Living'

const App = () => {
  return (
    <div className=''>
      <div className="bg-[url('/src/assets/images/hero-bg.png')] bg-cover bg-center h-screen">
        <Navbar />
        <HeroSection />
      </div>
      <Living />
    </div>
  )
}

export default App
