import React from 'react'
import about from '../../assets/images/about.png'

const AboutSection = () => {
    
  return (
    <section className='py-15 px-5'>
        <h2 className='text-2xl text-center'>About Us</h2>
        <img src={about} alt="About Us" className='w-full' />
        <article>
            <p className='text-[16px] mb-5'>Rheel Estate Limited is an innovative real estate company founded with a singular mission: to bring transparency, trust, and efficiency to Nigeria’s property market. With a deep understanding of the complexities that come with buying, selling, leasing, and managing properties, we are committed to transforming how Nigerians engage with the real estate industry, both at home and abroad.</p>
            <button className='rounded-lg py-2 px-4 border'>Read More</button>
        </article>
    </section>
  )
}

export default AboutSection