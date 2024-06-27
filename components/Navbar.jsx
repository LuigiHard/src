import React, { useState, useEffect } from 'react';
import { links } from '../data';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50`}
      style={{
        backgroundColor: scrolling ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0)',
        transition: 'background-color 0.5s ease-in-out'
      }}
    >
      <div className='align-element py-4 flex items-center justify-between lg:py-8'>
        <img alt='Logo Eclipse Media Marketing' src={Logo} className='img-fluid w-48' />
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
        <div className={`lg:flex gap-x-12 ${menuOpen ? 'flex flex-col items-center absolute top-20 left-0 w-full bg-black py-4' : 'hidden'}`}>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide hover:text-orange-500 duration-300 text-white py-2 lg:py-0'
                onClick={() => setMenuOpen(false)}
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
