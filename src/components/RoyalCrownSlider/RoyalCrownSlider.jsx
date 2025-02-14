"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "./RoyalCrownSlider.scss";
import {
  EffectFade,
  FreeMode,
  Thumbs,
  Autoplay,
  Navigation,
} from "swiper/modules";
import testimonial1 from "@/images/Wide_Range.jpg";
import testimonial2 from "@/images/Unparalleled_Services.jpg";
import testimonial3 from "@/images/Product_Compatibility_Image.jpg";
import testimonial4 from "@/images/Environment.jpg";
import testimonial5 from "@/images/Order_and_delivery.jpg";

import { motion } from "framer-motion";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="royal_crown_slider">
      <div className="RoyalCrownText">
        {/* <motion.div
          className="RoyalCrownTextInner"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          WHY
        </motion.div> */}
        {/* <p className="RoyalCrownTextInner">WHY</p> */}
        <motion.div
          className="RoyalCrownTextInnerFirst"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Reasons to count on us
           */}
           why royal crown
        </motion.div>
        {/* <p className="RoyalCrownTextInnerFirst">ROYAL CROWN</p> */}
      </div>
      {/* <ShadowHeading text={"WHY ROYAL CROWN"}/> */}
      <div className="MainContainer" style={{ marginTop: "50px" }}>
        <div className="abc left">
          {/* <div className="LogoImg">
            <Image src={LogoImg} alt="none" />
          </div> */}
          {/* <ShadowHeading text={"Why Royal Crown"} /> */}
          <div className="Carousel_Slider_container">
            <Swiper
              className="mySwiper"
              modules={[FreeMode, Thumbs, Autoplay, Navigation]}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
              }}
              loop={true}
              // navigation={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              speed={1500}
              thumbs={{ swiper: thumbsSwiper }}
            >
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial1}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial2}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial3}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial4}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="third_section_content">
                  <Image
                    src={testimonial5}
                    alt="carousel_image"
                    className="third_section_image"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            {/* <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> */}
          </div>
        </div>

        <div className="abc right">
          {/* <div className="Rc_Text_Main">
            <p className="Rc_Text_MainInner">Royal Crown Laminates</p>
          </div> */}
          <div className="Carousel_Slider_container2">
            <Swiper
              modules={[Thumbs, Autoplay, EffectFade]}
              onSwiper={setThumbsSwiper}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              // navigation={true}
              slidesPerView={1}
              speed={1500}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              // pagination={{
              //   dynamicBullets: true,
              // }}
              allowTouchMove={false}
              className="mySwiper2"
            >
              <SwiperSlide>
                <div className="Carousel_text_maincontent">
                  <p className="Text_InnerText">Unparalleled Services</p>
                  <p className="carousel_text_Content">
                    We provide high-density laminates with unmatched
                    reliability, combining advanced R&D, a fully equipped
                    laboratory, and a skilled workforce to ensure you always
                    receive the best in quality and performance.
                    {/* We are known for providing high density laminates with
                    unparalleled services in terms of quality and reliability.
                    We are known for providing high density laminates with
                    unparalleled services in terms of quality and reliability. */}
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Carousel_text_maincontent">
                  <p className="Text_InnerText">Wide Range</p>
                  <p className="carousel_text_Content">
                    With 2000+ SKUs and 100+ textures, our extensive portfolio
                    offers exceptional value. Whatever your style or budget, we
                    have a laminate solution that delivers premium aesthetics
                    without breaking the bank.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Carousel_text_maincontent">
                  <p className="Text_InnerText">Product Compatibility</p>
                  <p className="carousel_text_Content">
                    Our laminates are designed to fit seamlessly onto almost any
                    wooden surface and come in multiple sheet sizes (1220x2440
                    mm, 1220x2800 mm, 1320x2440 mm, 1320x2800 mm), guaranteeing
                    a perfect match for every project.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Carousel_text_maincontent">
                  <p className="Text_InnerText">Quick Order & Delivery</p>
                  <p className="carousel_text_Content">
                    Thanks to our pan-India network of showrooms and
                    distributors, placing an order is effortless. We dispatch
                    within 48 hours of receiving your order, reflecting our
                    commitment to reliability and punctuality. Our expert team
                    is always on hand to guide you toward the perfect laminate
                    solution for your project.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Carousel_text_maincontent">
                  <p className="Text_InnerText">Environment</p>
                  <p className="carousel_text_Content">
                    We’ve invested in eco-friendly manufacturing processes that
                    prioritize responsible sourcing, minimal waste, and a
                    reduced carbon footprint. Our certifications—such as FSC and
                    Greenguard—underscore our dedication to sustainability and
                    help ensure a healthier future for our planet.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="tenExp" style={{ marginBottom: "50px" }}>
            <div className="tenExpBorder">
              <p className="tenExpBorderText">45</p>
            </div>
            <div>
              <p className="tenExpBorderTextInner">years of experience</p>
            </div>
            {/* <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
