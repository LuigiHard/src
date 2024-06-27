import React, { useEffect, useState } from 'react';
import '../index.css';

const Layout = ({ children }) => {
  const [bgImage, setBgImage] = useState("url('Dobra1.webp')");
  const [prevBgImage, setPrevBgImage] = useState("");
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < window.innerHeight * 2.25) {
        setBgImage("url('Dobra1.webp')");
      } else if (scrollPosition < window.innerHeight * 5) {
        setBgImage("url('Dobra2.webp')");
      } else {
        setBgImage("url('Dobra3.webp')");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (bgImage !== prevBgImage) {
      setFade(true);
      setPrevBgImage(bgImage);
      const timer = setTimeout(() => setFade(false), 1000); // Tempo da transição
      return () => clearTimeout(timer);
    }
  }, [bgImage, prevBgImage]);

  return (
    <div>
      <div className={`background-overlay ${fade ? 'fade' : ''}`} style={{ backgroundImage: prevBgImage }}></div>
      <div className="background-overlay" style={{ backgroundImage: bgImage }}></div>
      {children}
    </div>
  );
};

export default Layout;
