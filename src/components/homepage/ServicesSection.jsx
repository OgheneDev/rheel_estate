import React from 'react'
import sales from '../../assets/images/sales.svg'
import lease from '../../assets/images/lease.svg'
import invest from '../../assets/images/invest.svg'
import manage from '../../assets/images/manage.svg'

const ServicesSection = () => {
    const data = [
        {
            icon: sales,
            title: 'Sales',
            description: 'We assist buyers and sellers in navigating the real estate market with confidence. Our platform offers:',
            services: [
                ' ⁠A wide selection of verified properties in Abuja.'
            ]
        },
        {
            icon: lease,
            title: 'Lease',
            description: 'We help landlords and tenants find the right match for their rental needs:',
            services: [
                ' ⁠Discount property listings for landlords.',
                'Tenant screening to ensure reliability and security.',
                '⁠Short-term and long-term rental options, including furnished and unfurnished properties.'
            ]
        },
        {
            icon: invest,
            title: 'Investment Services',
            description: 'Our investment services help clients grow wealth through strategic real estate opportunities:',
            services: [
                '⁠Guaranteed Sale Service (Coming Soon)',
                'Real estate advisory for investors looking to maximize returns',
            ]
        },
        {
            icon: manage,
            title: 'Facilities Management',
            description: 'We offer end-to-end property management services to ensure properties remain in top condition and generate consistent returns:',
            services: [
                ' ⁠Regular maintenance and repairs to preserve property value.',
                '⁠Tenant management to handle inquiries, rent collection, and dispute resolution.',
            ]
        }
    ]
  return (
    <div className='px-5 py-10'>
        <h2 className='text-2xl text-[#004040] text-center font-bold mb-5'>Our Services</h2>
        <p className='text-[#889099] text-[18px] mb-8'>At Rheel Estate Limited, we provide comprehensive real estate solutions designed to simplify property transactions, maximize investment opportunities, and ensure seamless property management. Whether you’re looking to buy, sell, lease, or invest, our expert team ensures a transparent, secure, and rewarding experience.</p>
        <div className="flex flex-col gap-10">
            {data.map((service, index) => (
                <div key={index} className='flex flex-col gap-5'>
                    <img src={service.icon} alt={service.title} className='w-[80px] h-[80px]' />
                    <div>
                        <h3 className='text-2xl font-bold text-[#004040] mb-5'>{service.title}</h3>
                        <p className='text-[#889099]'>{service.description}</p>
                        <ul className='list-disc list-inside text-[#889099]'>
                            {service.services.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ServicesSection