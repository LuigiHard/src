import React from 'react';
import { motion } from 'framer-motion';
import { FaBehanceSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import heroImg from '../assets/Hero/hero.png';
import bgImg from '../assets/Hero/bg-hero.png';
import MuitoPrazer from '../assets/Hero/HeroLetering7.png';
import NosSomos from '../assets/Hero/HeroLetering0.png';
import Uma from '../assets/Hero/HeroLetering4.png';
import Agencia from '../assets/Hero/HeroLetering6.png';
import De from '../assets/Hero/HeroLetering3.png';
import Media from '../assets/Hero/HeroLetering2.png';
import Marketing from '../assets/Hero/HeroLetering1.png';
import E from '../assets/Hero/HeroLetering5.png';

const Hero = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 701px) and (max-width: 1223px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

  if (isMobile) {
    return (
      <div id='home' className='py-48 relative' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', zIndex: 1 }}>
        <div className='align-element grid items-center gap-8'>
          <article className='relative' style={{ overflow: 'visible', zIndex: 1 }}>
            <motion.img
              className='text-2xl font-bold tracking-wider text-white font-anton mb-4 text-shadow-md'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              src={MuitoPrazer}
            />
            <motion.div
              className='absolute left-2 top-16 h-5 w-48 flex items-center justify-center rounded-lg p-4 transform -rotate-3 font-anton'
              initial={{ scale: 0, rotate: -3 }}
              animate={{ scale: 1, rotate: -3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src={NosSomos} className='img-fluid text-lg text-gray-200 capitalize tracking- font-anton text-shadow-md' />
            </motion.div>
            <div className='flex'>
              <motion.img
                className='h-24 -mr-4 -mt-6 z-10'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                src={Uma}
              />
              <div>
                <div className='flex-col overflow-visible'>
                  <motion.img
                    className='-mt-12 ml-2 z-10'
                    style={{ lineHeight: '1.3' }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    src={Agencia}
                  />
                </div>
                <div className='flex'>
                  <div className='flex-col items-start'>
                    <div className='flex gap-4'>
                      <motion.img
                        className='ml-3 -mt-2 h-12 z-10'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        src={De}
                      />
                      <motion.img
                        className='-ml-4 -mt-2 z-10 h-16'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        src={Media}
                      />
                    </div>
                    <motion.img
                      className='ml-2 -mt-1 z-10 h-14'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7, delay: 1 }}
                      src={Marketing}
                    />
                  </div>
                  <motion.img
                    className='absolute right-0 -mt-1 z-0 h-28'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 1 }}
                    src={E}
                  />
                </div>
              </div>
            </div>
            <div className='flex gap-x-4 mt-4'>
              <motion.a
                href='https://www.instagram.com/eclipse__marketing/'
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <FaInstagramSquare className='h-12 w-12 text-white hover:text-orange-500 duration-300' />
              </motion.a>
              <motion.a
                href='https://wa.me/5511973530263'
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <FaWhatsappSquare className='h-12 w-12 text-white hover:text-orange-500 duration-300' />
              </motion.a>
              <motion.a
                href='https://www.behance.net/GMdesigncriativo'
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <FaBehanceSquare className='h-12 w-12 text-white hover:text-orange-500 duration-300' />
              </motion.a>
            </div>
          </article>
          <article className='hidden md:block'>
            <motion.img
              src={heroImg}
              className='h-28 z-10'
              initial={{ scale: 0 }}
              animate={{ scale: 2 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            />
          </article>
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div id='home' className='py-48 relative' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', zIndex: 1, overflowX: 'hidden' }}>
        <div className='align-element grid items-center gap-8'>
          <article className='relative' style={{ overflow: 'visible', zIndex: 1 }}>
            <motion.img
              className='text-4xl font-bold tracking-wider text-white font-anton mb-4 text-shadow-md'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              src={MuitoPrazer}
            />
            <motion.div
              className='absolute left-4 top-24 h-40 w-96 flex items-center justify-center rounded-lg p-4 transform -rotate-3 font-anton'
              initial={{ scale: 0, rotate: -3 }}
              animate={{ scale: 1, rotate: -3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src={NosSomos} className='img-fluid text-xl text-gray-200 capitalize tracking- font-anton text-shadow-md' />
            </motion.div>
            <div className='flex'>
              <motion.img
                className='h-40 -mr-4 -mt-6 z-10'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                src={Uma}
              />
              <div>
                <div className='flex-col overflow-visible'>
                  <motion.img
                    className='-mt-24 z-10'
                    style={{ lineHeight: '1.3' }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    src={Agencia}
                  />
                </div>
                <div className='flex'>
                  <div className='flex-col items-start'>
                    <div className='flex gap-8'>
                      <motion.img
                        className='ml-1 -mt-4 h-24 z-10'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        src={De}
                      />
                      <motion.img
                        className='-ml-9 -mt-4 z-10 h-48'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        src={Media}
                      />
                    </div>
                    <motion.img
                      className='-ml-0 -mt-2 z-10 h-36'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7, delay: 1 }}
                      src={Marketing}
                    />
                  </div>
                  <motion.img
                    className='absolute -right-2 -mt-2 z-0 h-74'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 1 }}
                    src={E}
                  />
                </div>
              </div>
            </div>
            <div className='flex gap-x-4 mt-4'>
              <motion.a
                href='https://www.instagram.com/eclipse__marketing/'
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <FaInstagramSquare className='h-12 w-12 text-white hover:text-orange-500 duration-300' />
              </motion.a>
              <motion.a
                href='https://wa.me/5511973530263'
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <FaWhatsappSquare className='h-12 w-12 text-white hover:text-orange-500 duration-300' />
              </motion.a>
              <motion.a
                href='https://www.behance.net/GMdesigncriativo'
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <FaBehanceSquare className='h-12 w-12 text-white hover:text-orange-500 duration-300' />
              </motion.a>
            </div>
          </article>
          <article className='hidden md:block'>
            <motion.img
              src={heroImg}
              className='h-auto w-screen z-10'
              initial={{ scale: 0 }}
              animate={{ scale: 2 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            />
          </article>
        </div>
      </div>
    );
  }

  return (
    <div id='home' className='py-48 relative' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', zIndex: 1 }}>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article className='relative' style={{ overflow: 'visible', zIndex: 1 }}>
          <motion.img
            className='text-8xl font-bold tracking-wider text-white font-anton mb-4 text-shadow-md'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            src={MuitoPrazer}
          />
          <motion.div
            className='absolute left-16 top-32 h-10 w-72 flex items-center justify-center rounded-lg p-4 transform -rotate-3 font-anton'
            initial={{ scale: 0, rotate: -3 }}
            animate={{ scale: 1, rotate: -3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={NosSomos} className='img-fluid text-2xl text-gray-200 capitalize tracking- font-anton text-shadow-md' />
          </motion.div>
          <div className='flex'>
            <motion.img
              className='h-40 -mr-4 -mt-6 z-10'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              src={Uma}
            />
            <div>
              <div className='flex-col overflow-visible'>
                <motion.img
                  className='-mt-16 z-10'
                  style={{ lineHeight: '1.3' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  src={Agencia}
                />
              </div>
              <div className='flex'>
                <div className='flex-col items-start'>
                  <div className='flex gap-16'>
                    <motion.img
                      className='-ml-20 -mt-4 h-32 z-10'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      src={De}
                    />
                    <motion.img
                      className='-ml-20 -mt-4 z-10 h-40'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.8 }}
                      src={Media}
                    />
                  </div>
                  <motion.img
                    className='-ml-20 -mt-4 z-10 h-40'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 1 }}
                    src={Marketing}
                  />
                </div>
                <motion.img
                  className='absolute -right-8 -mt-4 z-0 h-72'
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7, delay: 1 }}
                  src={E}
                />
              </div>
            </div>
          </div>
          <div className='flex gap-x-4 mt-4'>
            <motion.a
              href='https://www.instagram.com/eclipse__marketing/'
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <FaInstagramSquare className='h-8 w-8 text-white hover:text-orange-500 duration-300' />
            </motion.a>
            <motion.a
              href='https://wa.me/5511973530263'
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <FaWhatsappSquare className='h-8 w-8 text-white hover:text-orange-500 duration-300' />
            </motion.a>
            <motion.a
              href='https://www.behance.net/GMdesigncriativo'
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <FaBehanceSquare className='h-8 w-8 text-white hover:text-orange-500 duration-300' />
            </motion.a>
          </div>
        </article>
        <article className='hidden md:block'>
          <motion.img
            src={heroImg}
            className='h-100 lg:h-116 z-10'
            initial={{ scale: 0 }}
            animate={{ scale: 2 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          />
        </article>
      </div>
    </div>
  );
};

export default Hero;
