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
    { name: 'About', path: '/about' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'Media', path: '/media' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className='p-5 bg-transparent relative'>
        <button onClick={toggleMenu}>
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
                <nav className='flex-1 overflow-y-auto'>
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