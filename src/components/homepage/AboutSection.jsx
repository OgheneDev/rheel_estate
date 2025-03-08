import React from 'react'
import { Link } from 'react-router-dom'
import about from '../../assets/images/about.png'

const AboutSection = () => {
    
  return (
    <section className='py-15 px-5 md:px-[78px]'>
        <h2 className='text-2xl text-center'>About Us</h2>
        <div className="flex flex-col md:flex-row md:gap-10 md:items-start leading-8.5">
        <img src={about} alt="About Us" className='md:w-full' />
        <article className='md:mt-8  md:w-full'>
            <p className='text-[16px] mb-5'>Rheel Estate Limited is an innovative real estate company founded with a singular mission: to bring transparency, trust, and efficiency to Nigeria’s property market. With a deep understanding of the complexities that come with buying, selling, leasing, and managing properties, we are committed to transforming how Nigerians engage with the real estate industry, both at home and abroad.</p>
            <Link to='/about'>
            <button className='rounded-lg py-2 px-4 border cursor-pointer'>Read More</button>
            </Link>
        </article>
        </div>
    </section>
  )
}

export default AboutSection