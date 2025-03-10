import React from 'react'
import { Link } from 'react-router-dom'
import mission from '../../assets/images/mission.png'
import vision from '../../assets/images/vision.png'

const MissonAndVisionSection = () => {
    const data = [
        {
            image: mission,
            title: 'Our Mission',
            description: 'To provide affordable housing for all Nigerians, regardless of their income level, while maintaining the highest standards of quality and integrity.'
        },
        {
            image: vision,
            title: 'Our Vision',
            description: 'To be the most trusted real estate company in Nigeria, known for our commitment to excellence and our dedication to our clients.'
        }
    ]

  return (
    <section className='px-5 py-10 md:px-[78px]'>
        <h2 className='text-2xl text-center mb-8'>Our Mission and Vision</h2>

        <div className="flex flex-col gap-10 md:flex-row">
            {data.map((item, index) => (
                <div key={index} className='bg-white shadow-xl p-3'>
                    <img src={vision} alt="" className='mb-5 w-full md:h-[270px]' />
                    <h3 className='text-2xl font-bold text-[#242527] mb-5'>{item.title}</h3>
                    <p className='text-[18px] md:text-[16px] text-[#C4C4C4] mb-5'>{item.description}</p>
                    <Link to='/about'>
                    <button className='rounded-lg px-4 py-2 border cursor-pointer'>Learn More</button>
                    </Link>
                </div>
            ))}
        </div>
    </section>
  )
}

export default MissonAndVisionSection