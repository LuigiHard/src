import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Img3 from '../assets/PorqueEclipse/PorqueEclipse1.png';
import Img1 from '../assets/PorqueEclipse/PorqueEclipse2.png';
import Img2 from '../assets/PorqueEclipse/PorqueEclipse3.png';
import Img4 from '../assets/PorqueEclipse/PorqueEclipse4.png';
import Img5 from '../assets/PorqueEclipse/Img1-mobile.png';
import Img6 from '../assets/PorqueEclipse/Img2-mobile.png';
import Img7 from '../assets/PorqueEclipse/Img3-mobile.png';
import Img8 from '../assets/PorqueEclipse/Img4-mobile.png';

function PorqueEclipse() {
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
      <div style={{ width: '100vw' }} className="justify-center items-center mt-64 mb-10 mx-auto" id="PorqueEclipse">
        <Swiper
          spaceBetween={-0.5}
          slidesPerView={2}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide ><img style={{ width: '50vw'}} src={Img5} alt="" /></SwiperSlide>
          <SwiperSlide ><img style={{ width: '50vw'}} src={Img6} alt="" /></SwiperSlide>
          <SwiperSlide ><img style={{ width: '50vw'}} src={Img7} alt="" /></SwiperSlide>
          <SwiperSlide ><img style={{ width: '50vw'}} src={Img8} alt="" /></SwiperSlide>
        </Swiper>
      </div>
    );
  } else {
    return (
      <div style={{ display: 'flex',  }} className="justify-center items-center h-full mt-64 " id="PorqueEclipse">
        <img src={Img3} alt="" style={{width: '24.5vw', userSelect: 'none' }}/>
        <img src={Img1} alt="" style={{width: '24.5vw', userSelect: 'none' }}/>
        <img src={Img2} alt="" style={{width: '24.5vw', userSelect: 'none' }}/>
        <img src={Img4} alt="" style={{width: '24.5vw', userSelect: 'none' }}/>
      </div>
    );
  }
}

export default PorqueEclipse;
