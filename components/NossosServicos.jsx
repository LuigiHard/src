import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// Import desktop images
import Img1 from '../assets/NossosServicos/Img1.png';
import Img2 from '../assets/NossosServicos/Img2.png';
import Img3 from '../assets/NossosServicos/Img3.png';
import Img4 from '../assets/NossosServicos/Img4.png';
import Img5 from '../assets/NossosServicos/Img5.png';
import Img6 from '../assets/NossosServicos/Img6.png';
import Img7 from '../assets/NossosServicos/Img7.png';
import Img8 from '../assets/NossosServicos/Img8.png';
import Img9 from '../assets/NossosServicos/Img9.png';
import Img10 from '../assets/NossosServicos/Img10.png';
import Img11 from '../assets/NossosServicos/Img11.png';

// Import mobile images
import Img1Mobile from '../assets/NossosServicos/Img1-Mobile.png';
import Img2Mobile from '../assets/NossosServicos/Img2-Mobile.png';
import Img3Mobile from '../assets/NossosServicos/Img3-Mobile.png';
import Img4Mobile from '../assets/NossosServicos/Img4-Mobile.png';
import Img5Mobile from '../assets/NossosServicos/Img5-Mobile.png';
import Img6Mobile from '../assets/NossosServicos/Img6-Mobile.png';
import Img7Mobile from '../assets/NossosServicos/Img7-Mobile.png';
import Img8Mobile from '../assets/NossosServicos/Img8-Mobile.png';
import Img9Mobile from '../assets/NossosServicos/Img9-Mobile.png';
import Img10Mobile from '../assets/NossosServicos/Img10-Mobile.png';
import Img11Mobile from '../assets/NossosServicos/Img0-Mobile.png';

function Servicos() {
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
      <div style={{ width: '100%', margin: '0 auto' }} className="justify-center items-center mt-10" id="nossosservicos">
        <Swiper
          spaceBetween={-0.625}
          slidesPerView={2}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide><img src={Img11Mobile} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Img3Mobile} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Img4Mobile} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Img5Mobile} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Img6Mobile} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Img7Mobile} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Img8Mobile} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Img9Mobile} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Img10Mobile} alt="" /></SwiperSlide>
          
          <SwiperSlide><img src={Img1Mobile} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Img2Mobile} alt="" /></SwiperSlide>

        </Swiper>
      </div>
    );
  } else {
    return (
      <div style={{ width: '100%', margin: '16em auto' }} className="justify-center items-center" id="nossosservicos">
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide style={{ userSelect: 'none' }}><img src={Img1} alt="" /></SwiperSlide>
          <SwiperSlide style={{ userSelect: 'none' }}><img src={Img2} alt="" /></SwiperSlide>
          <SwiperSlide style={{ userSelect: 'none' }}><img src={Img3} alt="" /></SwiperSlide>
          <SwiperSlide style={{ userSelect: 'none' }}><img src={Img4} alt="" /></SwiperSlide>
          <SwiperSlide style={{ userSelect: 'none' }}><img src={Img5} alt="" /></SwiperSlide>
          <SwiperSlide style={{ userSelect: 'none' }}><img src={Img6} alt="" /></SwiperSlide>
          <SwiperSlide style={{ userSelect: 'none' }}><img src={Img7} alt="" /></SwiperSlide>
          <SwiperSlide style={{ userSelect: 'none' }}><img src={Img8} alt="" /></SwiperSlide>
          <SwiperSlide style={{ userSelect: 'none' }}><img src={Img9} alt="" /></SwiperSlide>
          <SwiperSlide style={{ userSelect: 'none' }}><img src={Img10} alt="" /></SwiperSlide>
          <SwiperSlide style={{ userSelect: 'none' }}><img src={Img11} alt="" /></SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default Servicos;
