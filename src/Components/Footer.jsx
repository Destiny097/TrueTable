import React from 'react';
import logo from '../assets/TrueTable_logo.svg';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; 

const primaryBlue = '#0118D8';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mb=10 py-10 bg-white border-t border-gray-200 sm:py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Main Content Area */}
        <div className="flex flex-col items-start justify-between gap-8 pb-6 border-b border-gray-200 lg:flex-row lg:gap-16">
          
          {/* Logo and Brand */}
          <div className="flex flex-col items-start w-full mb-6 lg:w-1/4 lg:mb-0">
            <img src={logo} alt="TrueTable Logo" className="h-12 mb-1 lg:h-24" /> 
            <h2 className="text-lg font-bold text-gray-800 font-sora">TrueTable</h2>
            <p className="max-w-xs mt-2 text-xs text-gray-500 font-sora">
              Restaurant management made simple. Focus on food, we handle the rest.
            </p>
          </div>

          {/* Links */}
          <div className="grid w-full grid-cols-2 gap-y-8 gap-x-6 sm:grid-cols-4 sm:gap-x-10 lg:gap-x-12 lg:w-3/4"> 
            
            {/* Product Column */}
            <div className="flex flex-col items-start gap-y-2">
              <h3 className="mb-1 text-base font-bold text-gray-900 font-sora">Product</h3>
              <a href="#" className="text-sm text-gray-600 transition duration-200 hover:text-blue-600 font-sora">Integrations</a>
              <a href="#" className="text-sm text-gray-600 transition duration-200 hover:text-blue-600 font-sora">Agents</a>
              <a href="#" className="text-sm text-gray-600 transition duration-200 hover:text-blue-600 font-sora">FAQ's</a>
            </div>

            {/* Company Column */}
            <div className="flex flex-col items-start gap-y-2">
              <h3 className="mb-1 text-base font-bold text-gray-900">Company</h3>
              <a href="#" className="text-sm text-gray-600 transition duration-200 hover:text-blue-600 font-sora">Careers</a>
              <a href="#" className="text-sm text-gray-600 transition duration-200 hover:text-blue-600 font-sora">Pricing</a>
              <a href="#" className="text-sm text-gray-600 transition duration-200 hover:text-blue-600 font-sora">Example</a>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col items-start gap-y-2">
              <h3 className="mb-1 text-base font-bold text-gray-900">Legal</h3>
              <a href="#" className="text-sm text-gray-600 transition duration-200 hover:text-blue-600 font-sora">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 transition duration-200 hover:text-blue-600 font-sora">Terms of Service</a> 
              <a href="#" className="text-sm text-gray-600 transition duration-200 hover:text-blue-600 font-sora">Contact</a>
            </div>

            {/* Connect Column */}
            <div className="flex flex-col items-start gap-y-2">
              <h3 className="mb-1 text-base font-bold text-gray-900 font-sora">Connect</h3>
              <div className="flex flex-wrap gap-3 pt-1">
                <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" 
                   className="text-lg text-gray-500 transition duration-300 hover:text-pink-600" 
                   aria-label="Instagram">
                  <FaInstagram /> 
                </a>

                <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" 
                   style={{ color: primaryBlue }}
                   className="text-lg transition duration-300 hover:opacity-80"
                   aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>

                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" 
                   className="text-lg text-gray-500 transition duration-300 hover:text-blue-400" 
                   aria-label="Twitter">
                  <FaTwitter />
                </a>
              </div>
            </div>
            
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 text-center sm:text-left">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} TrueTable. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
