import React from 'react';
import Logo from '../assets/logo.png';
import { FaBehanceSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = window.innerHeight / 2 - section.clientHeight / 2;
      window.scrollTo({
        top: sectionTop - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="text-white mb-10 h-80 items-center align-middle p-4" style={{ backgroundColor: '#00000088', margin: 'auto' }}>
      <div className="max-w-6xl m-auto flex flex-wrap justify-between items-center " style={{ marginTop: '1-5%' }}>
        {/* Logo Section */}
        <div className="mb-6 lg:mb-0">
          <a href="#" className="flex items-center">
            <img src={Logo} alt="Logo" className="-ml-8 mr-8 h-20"  />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="mb-6 lg:mb-0 flex flex-col mt-10">
            <a href="#quemsomos" className="mr-6 mb-5 hover:text-gray-400" onClick={(e) => { e.preventDefault(); scrollToSection('quemsomos'); }}>Quem Somos</a> 
            <a href="#objetivos" className="mr-6 mb-5 hover:text-gray-400" onClick={(e) => { e.preventDefault(); scrollToSection('objetivos'); }}>Objetivos</a>
            <a href="#nossosservicos" className="mr-6 mb-5 hover:text-gray-400" onClick={(e) => { e.preventDefault(); scrollToSection('nossosservicos'); }}>Serviços</a>
            <a href="#portfolio" className="mr-6 mb-5 hover:text-gray-400" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Portfolio</a>
            <a href="#landingpages" className="mr-6 mb-5 hover:text-gray-400" onClick={(e) => { e.preventDefault(); scrollToSection('landingpages'); }}>LandingPages</a>
            <a href="#contato" className="mr-6 mb-5 hover:text-gray-400" onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }}>Contato</a>
        </nav>

        {/* Social Media Links */}
        <div className="flex flex-row items-center space-x-6">
          <a href='https://www.behance.net/GMdesigncriativo' rel="noopener noreferrer" target="_blank" className="hover:text-gray-400">
            <FaBehanceSquare size={48}/>
          </a>
          <a href='https://www.instagram.com/eclipse__marketing/' rel="noopener noreferrer" target="_blank" className="hover:text-gray-400">
            <FaInstagram size={48}/>
          </a>
          <a href='https://wa.me/5511973530263' rel="noopener noreferrer" target="_blank" className='hover:text-gray-400'> 
            <FaWhatsapp size={48}/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
