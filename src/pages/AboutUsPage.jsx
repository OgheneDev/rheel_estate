import React from 'react'
import Navbar from '../components/Navbar'
import about from '../assets/images/about.png'

const AboutUsPage = () => {
  return (
    <div>
        <div className="bg-[url('/src/assets/images/about-banner.png')] bg-cover bg-center h-[240px]">
            <Navbar />
            <article className='text-white text-center pt-20'>
               <h3 className='text-xl'>About Us</h3>
                <p>Homes/About us</p>
            </article>
        </div>

        <div className="px-5 py-5">
        <div className='flex flex-col mb-7'>
            <img src={about} alt="" />
            <p className='text-[18px]'>Rheel Estate Limited is an innovative real estate company founded with a singular mission: to bring transparency, trust, and efficiency to Nigeria’s property market. With a deep understanding of the complexities that come with buying, selling, leasing, and managing properties, we are committed to transforming how Nigerians engage with the real estate industry, both at home and abroad.</p>
        </div>
        <p className='text-[18px] mb-7'>In an environment where real estate transactions are often clouded by hidden fees, unreliable service, and opaque processes, Rheel Estate stands out as a beacon of integrity and excellence. We believe that the future of real estate lies in creating a seamless, customer-centric experience that prioritizes clarity, fairness, and quality in every interaction.</p>
        <article className='mb-7'>
            <h4 className='text-xl font-bold mb-7'>Our Story</h4>
            <p className='text-[18px] mb-7'>Founded by Odera Muoma, Rheel Estate Limited was established with the vision to address the challenges faced by both property buyers and sellers in Nigeria. The real estate landscape has long been marred by unethical practices, inflated prices, and a lack of accessible services. With these issues in mind, we sought to create a company that not only delivers exceptional service but also promotes ethical practices that restore faith in the industry</p>
            <p className='text-[18px]'>Drawing on the extensive experience of our founder, who has seen firsthand the difficulties faced by Nigerians both in the diaspora and locally, Rheel Estate was designed to be a solution for the modern age—driven by technology, guided by integrity, and focused on long-term relationships with our clients. We understand that property transactions are some of the most important decisions people will ever make, which is why we approach every deal with the utmost care and professionalism.</p>
        </article>
        <div className='flex flex-col mb-7'>
            <article >
                <h4 className='text-xl font-bold mb-7'>Our Vision</h4>
                <p className='text-[18px]'>Our vision is simple: to be the most trusted and innovative real estate company in Nigeria, recognized for our commitment to delivering high-quality properties at fair prices, ensuring full transparency, and providing unmatched customer service. We aim to make property transactions easier, more accessible, and more reliable for Nigerians at home and abroad.</p>
            </article>
            <img src={about} alt="" />
        </div>
        <p className='text-[18px] mb-7'>We are committed to building a reputation that speaks to the values we hold dear: trust, transparency, quality, and customer satisfaction. Whether you are a first-time buyer, an investor, or someone looking to lease or manage property, we are dedicated to providing you with the resources and support to make informed decisions every step of the way.</p>
        <article className='mb-7'>
            <h4 className='text-xl font-bold mb-7'>Our Mission</h4>
            <p className='text-[18px] mb-7'>At Rheel Estate Limited, our mission is to redefine real estate in Nigeria by providing a transparent, secure, and customer-focused property experience. We are committed to helping individuals and businesses buy, sell, lease, and manage properties with ease and confidence, whether they are in Nigeria or abroad.</p>
            <p className='text-[18px] mb-7'>Through integrity, innovation, and excellence, we aim to bridge the gap between property owners, buyers, and investors, ensuring seamless transactions, fair pricing, and high-quality developments. We also strive to make a positive impact in people’s lives by empowering Nigerians with financial opportunities through our affiliate program and by developing well-built, modern homes that offer true value.</p>
            <p className='text-[18px]'>At Rheel Estate, we don’t just sell properties—we build trust, create opportunities, and shape the future of real estate in Nigeria.</p>
        </article>
        <article>
            <h4 className='text-xl font-bold mb-7'>Our Core Values</h4>
            <p className='text-[18px] mb-7'>At Rheel Estate, our core values guide everything we do:</p>
            <ul className='flex flex-col gap-7 list-disc list-inside mb-7'>
                <li>Integrity – We believe in being upfront and honest with our clients, offering clear, transparent information at all times.</li>
                <li>Quality – We are committed to providing only the highest quality properties and services, rejecting poorly built or overpriced homes.</li>
                <li>Customer-Centricity – Our clients are at the heart of everything we do, and we go above and beyond to ensure they have a smooth and seamless experience.</li>
                <li>Innovation – We leverage cutting-edge technology to enhance the real estate process and make transactions faster, simpler, and more efficient.</li>
                <li>Accountability – We take full responsibility for every transaction, providing accurate, well-documented records and keeping our clients informed throughout.</li>
            </ul>
        </article>
        <div className='flex'>
            <img src={about} alt="" className='w-[50%]' />
            <img src={about} alt="" className='w-[50%]'  />
        </div>
        <article>
            <h4 className='text-xl font-bold mb-7'>What Makes Us Different</h4>
            <p className='text-[18px] mb-7'>We are not just another real estate agency. Rheel Estate is a company built on the principles of transparency and trust, where the client’s interests come first. In addition to offering traditional real estate services like buying, selling, and leasing, we also provide full transaction representation, allowing clients who are unavailable or wish to keep their identity private to have their transactions managed from start to finish. This is just one of the ways we offer value and convenience to our clients.</p>
            <p className='text-[18px] mb-7'>Additionally, we understand the evolving needs of property owners and investors, which is why we offer comprehensive property management services. From overseeing short- and long-term rentals to keeping precise financial records for complete transparency, we are your dedicated partner in maintaining and maximizing your property’s potential.</p>
            <p className='text-[18px] mb-7'>Looking to the future, Rheel Estate plans to venture into property development, where we will build and deliver well-constructed, modern homes at fair market prices. Our focus will remain on high-quality homes designed to meet the needs of Nigerians, rejecting overpriced and poorly built properties that currently flood the market.</p>      
        </article>
        <article>
            <h4 className='text-xl font-bold mb-7'>Our Commitment to the Future</h4>
            <p className='text-[18px] mb-7'>Rheel Estate is more than a business; it’s a commitment to changing the real estate landscape in Nigeria. As we continue to grow, we remain focused on improving the experience of every client we serve, and we aim to expand our footprint across Nigeria, creating a better, more accessible property market for all. We believe that our commitment to quality, ethical practices, and transparency will help build stronger communities, more satisfied homeowners, and a thriving real estate sector for the future.</p>
            <p className='text-[18px] mb-7'>With a forward-thinking approach, we are also exploring partnerships, innovative solutions, and technology that can make the real estate experience even more seamless and beneficial for all involved. Our clients’ trust is our most valuable asset, and we are dedicated to continuously earning it through exceptional service, accountability, and unwavering dedication.</p>
            <p className='text-[18px] mb-7'>At Rheel Estate, we are more than just facilitators of property transactions—we are building a legacy of quality, trust, and community that will shape Nigeria’s real estate industry for years to come.</p>
        </article>
        </div>
    </div>
  )
}

export default AboutUsPage