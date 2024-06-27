import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import SectionTitle from './SectionTitle';
import Image1 from "../assets/Portfolio/image1.webp";
import Image2 from "../assets/Portfolio/image2.webp";
import Image3 from "../assets/Portfolio/image3.webp";
import Image4 from "../assets/Portfolio/image4.webp";
import Image5 from "../assets/Portfolio/image5.webp";
import Image6 from "../assets/Portfolio/image6.webp";
import Image7 from "../assets/Portfolio/image7.webp";
import Image8 from "../assets/Portfolio/image8.webp";
import Image9 from "../assets/Portfolio/image9.webp";
import Image10 from "../assets/Portfolio/image10.webp";
import Image11 from "../assets/Portfolio/image11.webp";
import Image12 from "../assets/Portfolio/image12.webp";
import Image13 from "../assets/Portfolio/image13.webp";
import Image14 from "../assets/Portfolio/image14.webp";
import Image15 from "../assets/Portfolio/image15.webp";
import Image16 from "../assets/Portfolio/image16.webp";
import Image17 from "../assets/Portfolio/image17.webp";
import Image18 from "../assets/Portfolio/image18.webp";
import Image19 from "../assets/Portfolio/image19.webp";
import Image20 from "../assets/Portfolio/image20.webp";
import Image21 from "../assets/Portfolio/image21.webp";
import Image22 from "../assets/Portfolio/image22.webp";
import Image23 from "../assets/Portfolio/image23.webp";
import Image24 from "../assets/Portfolio/image24.webp";
import Image25 from "../assets/Portfolio/image25.webp";
import Image26 from "../assets/Portfolio/image26.webp";
import Image27 from "../assets/Portfolio/image27.webp";
import Image28 from "../assets/Portfolio/image28.webp";
import Image29 from "../assets/Portfolio/image29.webp";
import Image30 from "../assets/Portfolio/image30.webp";
import Image31 from "../assets/Portfolio/image31.webp";
import Image32 from "../assets/Portfolio/image32.webp";
import Image33 from "../assets/Portfolio/image33.webp";
import Image34 from "../assets/Portfolio/image34.webp";
import Image35 from "../assets/Portfolio/image35.webp";
import Image36 from "../assets/Portfolio/image36.webp";
import Image37 from "../assets/Portfolio/image37.webp";
import Image38 from "../assets/Portfolio/image38.webp";
import Image39 from "../assets/Portfolio/image39.webp";
import Image40 from "../assets/Portfolio/image40.webp";
import Image41 from "../assets/Portfolio/image41.webp";
import Image42 from "../assets/Portfolio/image42.webp";
import Image43 from "../assets/Portfolio/image43.webp";
import Image44 from "../assets/Portfolio/image44.webp";
import Image45 from "../assets/Portfolio/image45.webp";
import Image46 from "../assets/Portfolio/image46.webp";
import Image47 from "../assets/Portfolio/image47.webp";
import Image48 from "../assets/Portfolio/image48.webp";
import Image49 from "../assets/Portfolio/image49.webp";
import Image50 from "../assets/Portfolio/image50.webp";
import Image51 from "../assets/Portfolio/image51.webp";
import Image52 from "../assets/Portfolio/image52.webp";
import Image53 from "../assets/Portfolio/image53.webp";
import Image54 from "../assets/Portfolio/image54.webp";

const images = [
  Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20, Image21, Image22, Image23, Image24, Image25, Image26, Image27, Image28, Image29, Image30, Image31, Image32, Image33, Image34, Image35, Image36, Image37, Image38, Image39, Image40, Image41, Image42, Image43, Image44, Image45, Image46, Image47, Image48, Image49, Image50, Image51, Image52, Image53, Image54
];

const Projects = () => {
  return (
    <section className='py-20 mx-12' id='portfolio'>
      <style>
        {`
          .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 600px; /* Set a fixed height */
            width: 100%; /* Full width */
            background-color: #f8f8f80; /* Optional: a light background to visualize the container */
          }
          .swiper-slide img {
            max-height: 100%;
            max-width: 100%;
            object-fit: contain;
          }
          .swiper-pagination-bullet {
            background: linear-gradient(to right, #ff7f46, #ff2368);
            box-shadow: 0px 0px 5px 2px rgba(128, 128, 128, 1);
          }
          .swiper-pagination-bullet-active {
            background: linear-gradient(to right, #ff7f46, #ff2368);
          }
          @media (max-width: 768px) {
            .swiper-slide img {
              width: 75vw !important;
            }
          }
        `}
      </style>
      <SectionTitle text='Portfólio' />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className='py-8 w-100'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="image-container">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
