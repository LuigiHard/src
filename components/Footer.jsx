import React from 'react';

import Logo from '../assets/logo.png';
import { FaBehanceSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
// Footer component
const Footer = () => {
  return (
    <footer className=" text-white mb-10 h-80 items-center align-middle" style={{ backgroundColor: '#00000088', margin: 'auto' }}>
      <div className="max-w-6xl m-auto flex flex-wrap justify-between items-center " style={{ marginTop: '1-5%' }}>
        {/* Logo Section */}
        <div className="mb-6 lg:mb-0">
          <a href="#" className="flex items-center">
            <img src={Logo} alt="Logo" className="-ml-8 mr-8 h-20"  />
           
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="mb-6 lg:mb-0 flex flex-col mt-10">
            <a href="#quemsomos" className="mr-6 mb-5 hover:text-gray-400">Quem Somos</a> 
            <a href="#objetivos" className="mr-6 mb-5 hover:text-gray-400">Objetivos</a>
            <a href="#nossosservicos" className="mr-6 mb-5 hover:text-gray-400">Serviços</a>
            <a href="#portfolio" className="mr-6 mb-5 hover:text-gray-400">Portfolio</a>
            <a href="#landingpages" className="mr-6 mb-5 hover:text-gray-400">LandingPages</a>
            <a href="#contato" className="mr-6 mb-5 hover:text-gray-400">Contato</a>
        </nav>

        {/* Social Media Links */}
        <div className="flex flex-row items-center space-x-6">
          <a href='https://www.behance.net/GMdesigncriativo' rel="noopener noreferrer" target="_blank" className="hover:text-gray-400">
          <FaBehanceSquare size={48}/>
          </a>
          <a href='https://www.instagram.com/eclipse__marketing/' rel="noopener noreferrer" target="_blank" className="hover:text-gray-400">
          <FaInstagram  size={48}/>
        </a>
        <a href='https://wa.me/5511973530263' rel="noopener noreferrer" target="_blank" className='hover:text-gray-400'> 
        <FaWhatsapp size={48}/>

        </a>
          {/* Repeat for other social media links */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
