import React from 'react'
import Navbar from '../components/Navbar'
import about from '../assets/images/about.png'

const AffiliatesPage = () => {
  return (
    <div>
        <div className="bg-[url('/src/assets/images/about-banner.png')] bg-cover bg-center h-[260px]">
            <Navbar />
            <article className='text-white text-center pt-20'>
               <h3 className='text-2xl md:mb-3 font-bold'>Affiliates</h3>
                <p>Homes/Affiliates</p>
            </article>
        </div>
        <div className='px-5 md:px-[75px] py-8'>
        <div className='flex'>
            <img src={about} alt="" className='w-[50%]' />
            <img src={about} alt="" className='w-[50%]'  />
        </div>
        <h2 className='text-2l font-bold mb-7'>Welcome to the Rheel Estate Affiliate Dashboard</h2>
        <div className="flex flex-col gap-7">
            <p>Unlock your earning potential with the Rheel Estate Affiliate Program! This is your personal dashboard, where you can track your referrals, monitor your earnings, and manage your progress in real-time</p>
            <p>Whether you’re a seasoned networker or just getting started, this platform gives you full visibility into your success. Here, you can:</p>
            <p>View your referral stats – Track how many clients you’ve referred and their status.</p>
            <p>Monitor your earnings – See how much commission you’ve earned and when payments are due</p>
            <p>Access your referral link/code – Easily share your unique code to start earning.</p>
            <p>Get marketing materials – Download ready-to-use flyers, images, and social media templates.</p>
            <p>Every referral brings you closer to extra income, whether to pay rent, buy a car, or support your family. The more you refer, the more you earn!</p>
            <p>Start sharing today and watch your earnings grow!</p>
        </div>
    </div>
    </div>
  )
}

export default AffiliatesPage