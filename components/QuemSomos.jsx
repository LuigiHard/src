import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img1 from '../assets/QuemSomos/img1a.png';
import Img2 from '../assets/QuemSomos/img2a.png';
import Img3 from '../assets/QuemSomos/img3a.png';
import Img4 from '../assets/QuemSomos/img4a.png';
import Img5 from '../assets/QuemSomos/img5a.png';
import Img6 from '../assets/QuemSomos/img6a.png';
import Img7 from '../assets/QuemSomos/img7a.png';
import Img8 from '../assets/QuemSomos/img8a.png';

const QuemSomos = () => {
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

  const images = [Img3, Img1, Img2, Img4];

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

  if (windowWidth < 768) {
    return (
      <div className="mt-10 mx-auto" id="quemsomos">
        <style jsx>{`
          .slick-slide img {
            width: 100%;
            height: 100vw;
            object-fit: cover;
          }

          .slick-dots li button:before {
            color: white;
          }

          .slick-prev:before,
          .slick-next:before {
            color: white;
          }
          .slick-slide {
            outline: none;
          }
        `}</style>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} style={{ userSelect: 'none' }}>
              <img style={{ userSelect: 'none' }} src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  } else {
    return (
      <div style={{ userSelect: 'none' }} className="justify-center items-center h-full mt-0 flex" id="quemsomos">
        {images.slice(0, 4).map((img, index) => (
          <img key={index} src={img} alt={`Image ${index + 1}`} style={{ width: '24.5vw', userSelect: 'none', objectFit: 'cover' }} />
        ))}
      </div>
    );
  }
};

export default QuemSomos;
