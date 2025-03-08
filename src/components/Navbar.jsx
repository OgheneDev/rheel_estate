import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navItems = [
    { name: 'ABOUT', path: '/about' },
    { name: 'PROPERTIES', path: '/properties' },
    { name: 'SERVICES', path: '/services' },
    { name: 'MEDIA', path: '/media' },
    { name: 'CAREERS', path: '/careers' },
    { name: 'CONTACT US', path: '/contact' }
  ];
  
  // Split nav items for desktop layout
  const leftNavItems = navItems.slice(0, 3);
  const rightNavItems = navItems.slice(3);
  
  return (
    <header className='p-5 bg-transparent relative'>
        <button onClick={toggleMenu} className='md:hidden'>
            <Menu size='32' className='text-white' />
        </button>
        
        {/* Sliding Menu */}
        <div className={`fixed top-0 left-0 h-full w-[280px] bg-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50 shadow-2xl`}>
            <div className='h-full flex flex-col'>
                {/* Header */}
                <div className='p-6 flex justify-between items-center border-b'>
                    <NavLink to='/'>
                      <img src={logo} alt="Rheel Estate" className='h-12' />
                    </NavLink>
                    <button onClick={toggleMenu} className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
                        <X size='24' />
                    </button>
                </div>
                
                {/* Navigation */}
                <nav className=' overflow-y-auto'>
                    <ul className='py-4'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.path}
                                    onClick={toggleMenu}
                                    className={({ isActive }) =>
                                        `flex items-center px-6 py-4 text-gray-700 border-b border-gray-100 transition-colors ${
                                            isActive
                                             ? 'text-[#DB2626] bg-gray-50'
                                             : 'hover:bg-gray-50 hover:text-[#DB2626]'
                                        }`
                                    }
                                >
                                    <span className='text-[15px] font-medium'>{item.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
        
        {/* Desktop Navigation - Centered Layout */}
        <nav className='hidden md:flex justify-between items-center px-12'>
            {/* Left nav items */}
            <ul className='flex gap-12  justify-end'>
                {leftNavItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => 
                                `text-[#C4C4C4] text-sm font-bold transition-colors ${
                                    isActive ? 'text-[white]' : 'hover:text-[white]'
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            
            {/* Logo in center */}
            <div className='mx-8'>
                <NavLink to='/'>
                    <img src={logo} alt="Rheel Estate" className='h-12' />
                </NavLink>
            </div>
            
            {/* Right nav items */}
            <ul className='flex gap-12 '>
                {rightNavItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => 
                                `text-[#C4C4C4] text-sm  font-bold transition-colors ${
                                    isActive ? 'text-[white]' : 'hover:text-[white]'
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
        
        {/* Overlay */}
        {isMenuOpen && (
            <div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
                onClick={toggleMenu}
            />
        )}
    </header>
  )
}

export default Navbar