"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Img1 from "@/images/SliderImg1.png";
import Img2 from "@/images/SliderImg2.png";
import Img3 from "@/images/SliderImg3.png";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./threedslider.scss";
import {
  FreeMode,
  Thumbs,
  Autoplay,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
// import ShadowHeading from "../shadowHeading/ShadowHeading";
// import LogoImg from "../../images/crown_light_logo.png";

export default function App() {

  return (
    <div className="royal_crown_slider">
      <div className="ThreeText">
        <p className="ThreeTextInner">The Pinnacle of Luxury Laminates</p>
      </div>
      {/* <ShadowHeading text={"WHY ROYAL CROWN"}/> */}
      <div className="MainContainer" style={{ marginTop: "50px" }}>
        <div className="">
          {/* <div className="LogoImg">
            <Image src={LogoImg} alt="none" />
          </div> */}
          {/* <ShadowHeading text={"Why Royal Crown"} /> */}
          <div className="Carousel_Slider_container">
            <Swiper
              className="mySwiper"
              modules={[FreeMode, Thumbs, Autoplay, Navigation ,EffectCoverflow]}
              slidesPerView={3}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 800,
                modifier: 1,
                slideShadows: true,
              }}
              spaceBetween={300}
            //   centeredSlides={true}
              // autoplay={{
              //   delay: 2500,
              // }}
              // loop={true}
              // navigation={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              speed={1500}
            >
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={Img1}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={Img2}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={Img3}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={Img1}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={Img2}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
            </Swiper>

            {/* <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
