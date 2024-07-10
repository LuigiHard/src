import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import '../index.css';

const Layout = ({ children, isLoaded, images, mobileImages }) => {
  const [bgImage, setBgImage] = useState(images[0]);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (!isLoaded) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log('Scroll position:', scrollPosition);

      if (scrollPosition < window.innerHeight * 2.25) {
        setBgImage(isMobile ? mobileImages[0] : images[0]);
        console.log('Changed to image 0');
      } else if (scrollPosition < window.innerHeight * 5) {
        setBgImage(isMobile ? mobileImages[1] : images[1]);
        console.log('Changed to image 1');
      } else {
        setBgImage(isMobile ? mobileImages[2] : images[2]);
        console.log('Changed to image 2');
      }
    };

    window.addEventListener('scroll', handleScroll);
    console.log('Event listener added');

    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('Event listener removed');
    };
  }, [isLoaded, images, mobileImages, isMobile]);

  return (
    <div>
      <style>
        {`
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: 100% !important;
            
          }

          /* Apply styles when the device is in vertical orientation */
          @media (max-width: 768px) and (orientation: portrait) {
            body {
              overflow: auto; /* Enable scrolling in vertical orientation */
            }
          }

          /* Apply styles when the device is in horizontal orientation */
       

          .background-overlay {
            position: fixed;
            width: 100vw;
            height: 100vh;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover !important; /* Ensures the background covers the screen */
            z-index: -1;
            transition: background-image 1s ease-in-out;
          }
        `}
      </style>
      <div
        className="background-overlay"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {children}
    </div>
  );
};

export default Layout;
