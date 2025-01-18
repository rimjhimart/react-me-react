import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

const SwiperComponent = () => {
  useEffect(() => {
    new Swiper('.mySwiper', {
      slidesPerView: 'auto',
      slidesOffsetBefore: 50,
      spaceBetween: 0,
    });
  }, []);

  return (
    <div className="swiper mySwiper">
      <div className="swiper-wrapper">
        {/* Your swiper slides here */}
      </div>
    </div>
  );
};

export default SwiperComponent;
