import React, { useState } from 'react'
import '../index.css'
import logo from '../assets/TruLogo.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='bg-white/20 backdrop-blur-2xl h-[80px] mx-8 mt-2 px-5 rounded-2xl flex items-center justify-between'>
      <div className='flex items-center justify-start gap-7'>
        <div>
          <img src={logo} alt='Logo' className='h-[90px]' />
        </div>

        {/* Nav links - hidden on small screens, flex on md+ */}
        <nav className='hidden md:block'>
          <ul className='flex items-center justify-evenly gap-4'>
            <li><a href='#' className='text-[18px] font-semibold hover:text-green-800 duration-200 hover:underline decoration-2'>Home</a></li>
            <li><a href='#' className='text-[18px] font-semibold hover:text-green-800 duration-200 hover:underline decoration-2'>Features</a></li>
            <li><a href='#' className='text-[18px] font-semibold hover:text-green-800 duration-200 hover:underline decoration-2'>Pricing</a></li>
            <li><a href='#' className='text-[18px] font-semibold hover:text-green-800 duration-200 hover:underline decoration-2'>Resources</a></li>
          </ul>
        </nav>
      </div>

      <div className='flex items-center'>
        <span className='px-3 py-1 rounded hover:bg-white/30 duration-200 cursor-pointer mr-2 hidden md:inline'>Login</span>
        <button className='px-5 py-1 rounded bg-blue-600 hover:bg-white/70 cursor-pointer duration-200 hidden md:inline'>Free Demo</button>
        
        {/* Hamburger menu - visible on small screens */}
        <button
          className='md:hidden ml-2 p-2 rounded hover:bg-white/30'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg className='w-7 h-7 text-green-800' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className='absolute top-[90px] left-0 w-full bg-white/90 backdrop-blur-2xl shadow-lg rounded-b-2xl z-50 md:hidden'>
          <ul className='flex flex-col items-center gap-4 py-6'>
            <li><a href='#' className='text-[18px] font-semibold hover:text-green-800 duration-200 hover:underline decoration-2'>Home</a></li>
            <li><a href='#' className='text-[18px] font-semibold hover:text-green-800 duration-200 hover:underline decoration-2'>Features</a></li>
            <li><a href='#' className='text-[18px] font-semibold hover:text-green-800 duration-200 hover:underline decoration-2'>Pricing</a></li>
            <li><a href='#' className='text-[18px] font-semibold hover:text-green-800 duration-200 hover:underline decoration-2'>Resources</a></li>
            <li><span className='px-3 py-1 rounded hover:bg-white/30 duration-200 cursor-pointer'>Login</span></li>
            <li><button className='px-5 py-1 rounded bg-blue-600 hover:bg-white/70 cursor-pointer duration-200'>Free Demo</button></li>
          </ul>
        </div>
      )}
    </div>
  )
}