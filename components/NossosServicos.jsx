import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

const Servicos = () => {
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

  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: windowWidth < 768 ? 1 : 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-10 mx-auto" id="nossosservicos">
      <style jsx>{`
        .slick-slide img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
        .slick-slide {
            outline: none;
          }
        .slick-dots li button:before {
          color: white;
        }

        .slick-prev:before,
        .slick-next:before {
          color: white;
        }

        @media (min-width: 768px) {
          .slick-slide {
            width: 24.5%;
          }
        }
      `}</style>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} style={{ userSelect: 'none' }}>
            <img src={img} style={{ userSelect: 'none' }} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Servicos;
