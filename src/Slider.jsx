import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

function Slider() {
  return (
        <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="https://themewagon.github.io/bigspring/images/service-slide-1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://themewagon.github.io/bigspring/images/service-slide-2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://themewagon.github.io/bigspring/images/service-slide-3.png" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;