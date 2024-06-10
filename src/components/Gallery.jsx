import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ImageGallery = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false
  };

  const images = [
    "src/assets/imgs/imgGallery/grupo Projeto Integrador.jpg",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
    "https://via.placeholder.com/800x400?text=Image+4",
    "https://via.placeholder.com/800x400?text=Image+5"
  ];

  const handlePlay = () => {
    sliderRef.current.slickPlay();
  };

  const handlePause = () => {
    sliderRef.current.slickPause();
  };

  return (
    <div className='bg-blue-900'>
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button onClick={handlePlay} style={{ marginRight: '10px' }}>
          <FaPlay /> 
        </button>
        <button onClick={handlePause}>
          <FaPause /> 
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <button onClick={() => sliderRef.current.slickPrev()} style={{ marginRight: '10px' }}>
          <FaArrowLeft /> 
        </button>
        <button onClick={() => sliderRef.current.slickNext()}>
           <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
