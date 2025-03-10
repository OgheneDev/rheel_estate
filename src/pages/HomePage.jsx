import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/homepage/HeroSection'
import Living from '../components/homepage/Living'
import AboutSection from '../components/homepage/AboutSection'
import MissonAndVisionSection from '../components/homepage/MissonAndVisionSection'
import ServicesSection from '../components/homepage/ServicesSection'
import { SearchProvider } from '../context/SearchContext';

const HomePage = () => {
    return (
        <SearchProvider>
            <div className=''>
                <div className="bg-[url('/src/assets/images/hero-bg.jpg')] md:py-5 bg-cover bg-center h-screen md:h-[140vh] bg-blend-overlay bg-black/40">
                    <Navbar />
                    <HeroSection />
                </div>
                <Living />
                <AboutSection />
                <MissonAndVisionSection />
                <ServicesSection />
            </div>
        </SearchProvider>
    )
}

export default HomePage