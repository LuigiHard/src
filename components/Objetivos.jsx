import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Img3 from '../assets/Objetivos/NossosObjetivos1.png';
import Img1 from '../assets/Objetivos/NossosObjetivos2.png';
import Img2 from '../assets/Objetivos/NossosObjetivos3.png';
import Img4 from '../assets/Objetivos/NossosObjetivos4.png';
import Img5 from '../assets/Objetivos/Img1-Mobile.png';
import Img6 from '../assets/Objetivos/Img2-Mobile.png';
import Img7 from '../assets/Objetivos/Img3-Mobile.png';
import Img8 from '../assets/Objetivos/Img4-Mobile.png';

function Objetivos() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const isMobile = windowWidth < 768; // Example breakpoint

  if (isMobile) {
    return (
      <div style={{ width: '100%', margin: '0 auto' }} className="justify-center items-center mt-10" id="objetivos">
        <Swiper
          spaceBetween={-0.625}
          slidesPerView={2}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide><img src={Img5} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Img6} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Img7} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Img8} alt="" /></SwiperSlide>
        </Swiper>
      </div>
    );
  } else {
    return (
      <div style={{ display: 'flex',  }} className="justify-center items-center h-full " id="objetivos">
        <img src={Img3} alt="" style={{width: '24.5vw', userSelect: 'none' }}/>
        <img src={Img1} alt="" style={{width: '24.5vw', userSelect: 'none' }}/>
        <img src={Img2} alt="" style={{width: '24.5vw', userSelect: 'none' }}/>
        <img src={Img4} alt="" style={{width: '24.5vw', userSelect: 'none' }}/>
      </div>
    );
  }
}

export default Objetivos;
