import React from 'react'
import logo from '../assets/images/logo.png'
import { Youtube, Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='py-10'>
        <div className='flex justify-between items-center mb-3'>
          <div className='h-[1px] w-[150px] bg-black'></div>
          <img src={logo} alt="" />
          <div className='h-[1px] w-[150px] bg-black'></div>
        </div>
        <ul className='flex flex-col gap-5 items-center font-bold mb-10'>
            <li>ACCREDITATIONS</li>
            <li>CAC No. : 7197447</li>
            <li>SCUML: 151831336</li>
        </ul>

        <div className='mb-10 grid grid-cols-2 gap-7 px-7'>
            <div>
                <h4 className='font-bold mb-5 uppercase'>Media</h4>
                <ul className='semibold flex flex-col gap-2'>
                    <li>Press Release</li>
                    <li>Blogs</li>
                    <li>Events</li>
                    <li>Adverts</li>
                </ul>
            </div>
            <div>
                <h4 className='font-bold mb-5 uppercase'>Contact Us</h4>
                <ul className='semibold flex flex-col gap-2'>
                    <li>Careers</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div>
                <h4 className='font-bold mb-5 uppercase'>About Us</h4>
                <ul className='semibold flex flex-col gap-2'>
                <li>Mission</li>
                <li>Vision</li>
                <li>The Team</li>
                <li>Corporate Profile</li>
                <li>Strategic Framework</li>
                </ul>
            </div>
        </div>

        <div className='bg-black h-[1px] w-full mb-5'></div>
        <div className='px-5 flex items-center justify-between'>
        <div className='flex items-center gap-5'>
            <Youtube size={21} />
            <Twitter size={21} />
            <Facebook size={21} />
            <Instagram size={21} />
        </div>
        <span className='uppercase font-bold'>Privacy Policy</span>
        </div>
        <p className='px-5 font-bold text-[12px] mt-5'>2025. RHEEL ESTATE LIMITED, ALL RIGHTS RESERVED</p>
    </footer>
  )
}

export default Footer