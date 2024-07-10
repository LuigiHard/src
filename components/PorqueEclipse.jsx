import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img1 from '../assets/PorqueEclipse/PorqueEclipse2.png';
import Img2 from '../assets/PorqueEclipse/PorqueEclipse3.png';
import Img3 from '../assets/PorqueEclipse/PorqueEclipse1.png';
import Img4 from '../assets/PorqueEclipse/PorqueEclipse4.png';
import Img5 from '../assets/PorqueEclipse/Img1-mobile.png';
import Img6 from '../assets/PorqueEclipse/Img2-mobile.png';
import Img7 from '../assets/PorqueEclipse/Img3-mobile.png';
import Img8 from '../assets/PorqueEclipse/Img4-mobile.png';

const PorqueEclipse = () => {
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
      <div className="mt-64 mb-10 mx-auto" id="PorqueEclipse">
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
      <div className="justify-center items-center h-full mt-64 flex" id="PorqueEclipse" style={{ userSelect: 'none' }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index + 1}`} style={{ width: '24.5vw', userSelect: 'none', objectFit: 'cover' }} />
        ))}
      </div>
    );
  }
};

export default PorqueEclipse;
