import React from "react";
import { Autoplay } from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import banner1 from "../../../assets/bgn-slider-01.jpg";
import banner2 from "../../../assets/bgn-slider-02.jpg";
import banner3 from "../../../assets/bgn-slider-03.jpg";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Slider = () => {
  return (
    <div>
      <div>
        <Swiper
          autoplay={{ delay: 3000 }}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={banner1} alt="banner" />
            {/* <div class="absolute top-0  right-0 bottom-0 left-0 bg-gradient-to-l from-transparent to-gray-700"></div> */}
            <div className="absolute top-[50%] bottom-[50%] left-[20%] mb-2 flex justify-center">
              <h2 className="text-[70px] font-medium text-center font-raleway">
                Your Beautiful <br /> <span>Smile</span>
              </h2>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src={banner2} alt="banner" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} alt="banner" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
