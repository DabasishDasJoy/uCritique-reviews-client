import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";
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
    <div className=" z-0">
      <Swiper
        autoplay={{ delay: 3000 }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <img
            src={banner1}
            alt="banner"
            className="md:w-full md:h-[700px] w-auto h-auto"
          />
          {/* <div class="absolute top-0  right-0 bottom-0 left-0 bg-gradient-to-l from-transparent to-gray-700"></div> */}
          <div className="absolute top-[40%]  left-[15%] mb-2 flex flex-col">
            <Typography
              as="h1"
              variant="h1"
              className="text-[70px] font-medium text-center font-raleway"
            >
              Your Beautiful <br />{" "}
              <span className="text-primary font-bold text-[75px] mt-1">
                Smile
              </span>
            </Typography>
            <div className="flex gap-5 justify-center items-center">
              <Button size="md" className="bg-primary rounded-sm w-36">
                <NavLink to={"/login"}>Login</NavLink>
              </Button>
              <Button size="md" className="bg-secondary rounded-sm w-36">
                <NavLink to={"/login"}>View Services</NavLink>
              </Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={banner2}
            alt="banner"
            className="md:w-full md:h-[700px] w-auto h-auto"
          />
          {/* <div class="absolute top-0  right-0 bottom-0 left-0 bg-gradient-to-l from-transparent to-gray-700"></div> */}
          <div className="absolute top-[40%]  right-[15%] mb-2 flex flex-col">
            <Typography
              as="h1"
              variant="h1"
              className="text-[70px] font-medium text-center font-raleway"
            >
              Your Beautiful <br />{" "}
              <span className="text-primary font-bold text-[75px] mt-1">
                Smile
              </span>
            </Typography>
            <div className="flex gap-5 justify-center items-center">
              <Button size="md" className="bg-primary rounded-sm w-36">
                <NavLink to={"/login"}>Login</NavLink>
              </Button>
              <Button size="md" className="bg-secondary rounded-sm w-36">
                <NavLink to={"/login"}>View Services</NavLink>
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner3}
            alt="banner"
            className="md:w-full md:h-[700px] w-auto h-auto"
          />
          {/* <div class="absolute top-0  right-0 bottom-0 left-0 bg-gradient-to-l from-transparent to-gray-700"></div> */}
          <div className="absolute top-[40%]  right-[15%] mb-2 flex flex-col">
            <Typography
              as="h1"
              variant="h1"
              className="text-[70px] font-medium text-center font-raleway"
            >
              Your Beautiful <br />{" "}
              <span className="text-primary font-bold text-[75px] mt-1">
                Smile
              </span>
            </Typography>
            <div className="flex gap-5 justify-center items-center">
              <Button size="md" className="bg-primary rounded-sm w-36">
                <NavLink to={"/login"}>Login</NavLink>
              </Button>
              <Button size="md" className="bg-secondary rounded-sm w-36">
                <NavLink to={"/login"}>View Services</NavLink>
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
