import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { FaFaceAngry } from 'react-icons/fa6'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const NavItems = ({ mobile = false }) => (
    <>
      <a href="#hero" className={`hover:text-gray-400 ${mobile ? 'block py-2 text-white' : ''}`}>Home</a>
      <a href="#about" className={`hover:text-gray-400 ${mobile ? 'block py-2 text-white' : ''}`}>About</a>
      <a href="#skills" className={`hover:text-gray-400 ${mobile ? 'block py-2 text-white' : ''}`}>Technologies</a>
      <a href="#projects" className={`hover:text-gray-400 ${mobile ? 'block py-2 text-white' : ''}`}>Projects</a>
      <a href="#contact" className={`hover:text-gray-400 ${mobile ? 'block py-2 text-white' : ''}`}>Contacts</a>

    </>
  )

  return (
    <nav className="relative flex items-center justify-between mb-20 py-6 px-4 sm:px-6 lg:px-8 z-50">
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt="logo" width="100" height="60" className='mx-2'/>
      </div>
      
      {/* Desktop menu */}
      <div className='hidden md:flex items-center justify-center gap-8 text-md font-light'>
        <NavItems />
      </div>
      
      {/* Icons container */}
      <div className='flex items-center space-x-4'>
        <FaFaceAngry className='text-white' size={24} />
        {/* Hamburger icon - visible only on mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none md:hidden"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Custom mobile menu */}
      <div 
        className={`
          fixed top-0 right-0 bottom-0 
          w-64 bg-slate-950 shadow-lg 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden overflow-hidden
        `}
      >
        <div className="relative h-full w-full">
          {/* Background gradient effects */}
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          
          {/* Menu content */}
          <div className="relative z-10 p-4 h-full">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
            >
              <X size={24} />
            </button>
            <div className="mt-8">
              <NavItems mobile />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;