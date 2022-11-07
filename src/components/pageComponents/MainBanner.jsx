import React from "react";
import { Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Btn from "../Gloabals/GloabalBtn/index.jsx";
import ImgOne from "../../assets/Images/banner_imgOne.png";
import ImgTwo from "../../assets/Images/banner_2.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function MainBanner() {
  const FirstSlider = () => {
    return (
      <>
        <div className="banner__text">
          <h1 className="banner__text-title">
            Raqamlar olamida ishonchli sherik!
          </h1>
          <p className="banner__text-desc">
            Professional buxgaleriya xizmatlari bilan biznesingizni keyingi
            darajaga olib chiqing
          </p>
          <Btn />
        </div>
        <div className="banner__img">
          <img src={ImgOne} alt="main image" />
        </div>
      </>
    );
  };

  const SecondSlider = () => {
    return (
      <>
        <div className="banner__text">
          <h1 className="banner__text-title">Firma balansini tikash</h1>
          <p className="banner__text-desc">
            Kompaniyangizning buxgaleriya hisobini yuritib biznesingizni keyingi
            darajaga chiqarishga yordam beramiz
          </p>
          <Btn />
        </div>
        <div className="banner__img">
          <img src={ImgTwo} alt="main image" />
        </div>
      </>
    );
  };

  return (
    <div className="main-banner">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          spaceBetween={50}
          slidesPerView={"auto"}
          effect={"fade"}
          loop
          navigation={true}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="banner">
              <SecondSlider />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner">
              <FirstSlider />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner">
              <SecondSlider />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner">
              <FirstSlider />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default MainBanner;
