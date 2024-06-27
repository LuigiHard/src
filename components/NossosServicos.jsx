import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Don't forget to import Swiper styles
import 'swiper/swiper-bundle.css';

// Import your images
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

function Servicos() {
  return (
    <div style={{ width: '100%', margin: '16em auto' }} className="justify-center items-center" id="nossosservicos">
      <Swiper
        // Adjust the space between slides
        spaceBetween={0}
        // Set the initial number of slides per view
        slidesPerView={2}
        // Define breakpoints
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        // Add modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // Enable navigation
        navigation
        // Enable pagination
        pagination={{ clickable: true }}
        // Enable scrollbar
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

export default Servicos;
