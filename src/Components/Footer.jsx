import React from 'react';
import logo from '../assets/TrueTable_logo.svg';

// Import the specific icons from the Font Awesome (fa) collection in react-icons
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; 

export default function Footer() {
  return (
    <footer className='max-w-full h-[30vh] flex items-center justify-center bg-white border-t border-gray-200'>
      
      <div className='w-[85%] mx-auto h-[80%] flex items-start justify-between'>
        
        {/* Logo and Brand Name Section */}
        <div className='flex flex-col items-center justify-start'>
          <img src={logo} alt="TrueTable Logo" className='w-[150px] p-0 m-0' />
          <h2 className='font-bold text-[20px] text-gray-800 mt-2 text-center'>TrueTable</h2>
        </div>

        {/* Links Section (Product, Company, Legal, Connect) */}
        <div className='flex-1 flex items-start justify-between pl-20'> 
          
          {/* Product Column */}
          <div className='flex flex-col items-start justify-start gap-y-3'>
            <h3 className='font-bold text-[18px] mb-2'>Product</h3>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-200">Integrations</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-200">Agents</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-200">FAQ's</a>
          </div>

          {/* Company Column */}
          <div className='flex flex-col items-start justify-start gap-y-3'>
            <h3 className='font-bold text-[18px] mb-2'>Company</h3>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-200">Career</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-200">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-200">Example</a>
          </div>

          {/* Legal Column */}
          <div className='flex flex-col items-start justify-start gap-y-3'>
            <h3 className='font-bold text-[18px] mb-2'>Legal</h3>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-200">Terms of Service</a> 
            <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-200">Contact</a>
          </div>
          
          {/* Social Media (Connect) Column with Icons */}
          <div className='flex flex-col items-start justify-start gap-y-3'>
            <h3 className='font-bold text-[18px] mb-2'>Connect</h3>
            
            {/* Icons container */}
            <div className='flex space-x-4 pt-1'>
                
                {/* Instagram Link */}
                <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-500 hover:text-pink-600 transition duration-300 text-2xl" 
                   aria-label="Instagram">
                  <FaInstagram /> 
                </a>

                {/* LinkedIn Link */}
                <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-500 hover:text-blue-700 transition duration-300 text-2xl" 
                   aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>

                {/* Twitter Link */}
                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-500 hover:text-blue-400 transition duration-300 text-2xl" 
                   aria-label="Twitter">
                  <FaTwitter />
                </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}