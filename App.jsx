import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuemSomos from './components/QuemSomos';
import About from './components/About';
import Objetivos from './components/Objetivos';
import PorqueEclipse from './components/PorqueEclipse';
import About2 from './components/About2';
import Servicos from './components/NossosServicos';
import Projects from './components/Projects';
import Form from './components/Form';
import Footer from './components/Footer';
import Layout from './utils/Layout';

// Import images
import heroImg from './assets/Hero/hero.png';
import img1a from './assets/QuemSomos/img1a.png';
import img2a from './assets/QuemSomos/img2a.png';
import img3a from './assets/QuemSomos/img3a.png';
import img4a from './assets/QuemSomos/img4a.png';
import img1 from './assets/NossosServicos/Img1.png';
import img2 from './assets/NossosServicos/Img2.png';
import img3 from './assets/NossosServicos/Img3.png';
import img4 from './assets/NossosServicos/Img4.png';
import img5 from './assets/NossosServicos/Img5.png';
import img6 from './assets/NossosServicos/Img6.png';
import img7 from './assets/NossosServicos/Img7.png';
import img8 from './assets/NossosServicos/Img8.png';
import img9 from './assets/NossosServicos/Img9.png';
import img10 from './assets/NossosServicos/Img10.png';
import img11 from './assets/NossosServicos/Img11.png';
import porqueEclipse1 from './assets/PorqueEclipse/PorqueEclipse1.png';
import porqueEclipse2 from './assets/PorqueEclipse/PorqueEclipse2.png';
import porqueEclipse3 from './assets/PorqueEclipse/PorqueEclipse3.png';
import porqueEclipse4 from './assets/PorqueEclipse/PorqueEclipse4.png';
import bgImg from './assets/Hero/bg-hero.png';
import MuitoPrazer from './assets/Hero/HeroLetering7.png';
import NosSomos from './assets/Hero/HeroLetering0.png';
import Uma from './assets/Hero/HeroLetering4.png';
import Agencia from './assets/Hero/HeroLetering6.png';
import De from './assets/Hero/HeroLetering3.png';
import Media from './assets/Hero/HeroLetering2.png';
import Marketing from './assets/Hero/HeroLetering1.png';
import E from './assets/Hero/HeroLetering5.png';
import Dobra1 from './assets/Dobra1.webp';
import Dobra2 from './assets/Dobra2.webp';
import Dobra3 from './assets/Dobra3.webp';

// Import mobile images
import Dobra1Mobile from './assets/Dobra_1_Mobile.webp';
import Dobra2Mobile from './assets/Dobra_2_Mobile.webp';
import Dobra3Mobile from './assets/Dobra_3_Mobile.webp';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const images = [
      heroImg,
      img1a,
      img2a,
      img3a,
      img4a,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      porqueEclipse1,
      porqueEclipse2,
      porqueEclipse3,
      porqueEclipse4,
      bgImg,
      MuitoPrazer,
      NosSomos,
      Uma,
      Agencia,
      De,
      Media,
      Marketing,
      E,
      Dobra1,
      Dobra2,
      Dobra3,
      Dobra1Mobile,
      Dobra2Mobile,
      Dobra3Mobile,
    ];

    let loadedCount = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === images.length) {
          setIsLoaded(true);
        }
      };
    });
  }, []);

  return (
    <>
      {!isLoaded && <Preloader />}
      {isLoaded && (
        <Layout isLoaded={isLoaded} images={[Dobra1, Dobra2, Dobra3]} mobileImages={[Dobra1Mobile, Dobra2Mobile, Dobra3Mobile]}>
          <Navbar />
          <Hero />
          <QuemSomos />
          <About />
          <Objetivos />
          <PorqueEclipse />
          <About2 />
          <Servicos />
          <Projects />
          <Form />
          <Footer />
        </Layout>
      )}
    </>
  );
};

export default App;
