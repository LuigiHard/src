import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Img1 from '../assets/QuemSomos/img1a.png';
import Img2 from '../assets/QuemSomos/img2a.png';
import Img3 from '../assets/QuemSomos/img3a.png';
import Img4 from '../assets/QuemSomos/img4a.png';
import Img5 from '../assets/QuemSomos/img5a.png';
import Img6 from '../assets/QuemSomos/img6a.png';
import Img7 from '../assets/QuemSomos/img7a.png';
import Img8 from '../assets/QuemSomos/img8a.png';

function QuemSomos() {
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
      <div style={{ width: '100%', margin: '0 auto' }} className="justify-center items-center mt-10" id="quemsomos">
        <Swiper
          spaceBetween={-0.65}
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
      <div style={{ display: 'flex',  }} className="justify-center items-center h-full mt-0" id="quemsomos">
        <img src={Img3} alt="" style={{width: '24.5vw', userSelect: 'none' }}/>
        <img src={Img1} alt="" style={{width: '24.5vw', userSelect: 'none' }}/>
        <img src={Img2} alt="" style={{width: '24.5vw', userSelect: 'none' }}/>
        <img src={Img4} alt="" style={{width: '24.5vw', userSelect: 'none' }}/>
      </div>
    );
  }
}

export default QuemSomos;
