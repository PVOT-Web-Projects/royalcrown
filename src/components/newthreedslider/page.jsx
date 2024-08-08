// SwiperComponent.jsx
"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import Img1 from "@/images/SliderImg1.png";
import Img2 from "@/images/SliderImg2.png";
import Img3 from "@/images/SliderImg3.png";
import SvgBtn from "@/images/svgLogos/sliderBtn.svg";
import SvgBtnNext from "@/images/svgLogos/sliderBtnPrev.svg";

import {
  FreeMode,
  Thumbs,
  Autoplay,
  Navigation,
  EffectFade,
  EffectCoverflow,
} from "swiper/modules";
import styles from "./newthreedslider.module.css";
import SliderBtn from "@/components/buttons/sliderbtn/page";

const SwiperComponent = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.MainSwiperthreedContainer}>
      <div className={styles.ThreeText}>
        <p className={styles.ThreeTextInner}>The Pinnacle of Luxury Laminates</p>
        <p className={styles.ThreeTextInnerFirst}>
          Discover the epitome of sophistication with our premium range of
          luxury laminates. Designed for those with discerning taste, our
          laminates offer a perfect blend of elegance and durability,
          transforming ordinary spaces into extraordinary masterpieces.
        </p>
      </div>
      <div className={styles.swiperContainerOne}>
        <Swiper
          modules={[Navigation, EffectCoverflow, Thumbs]}
          slidesPerView={3}
          loop={true}
          effect="coverflow"
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 800,
            modifier: 1,
            slideShadows: false,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          speed={1500}
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
        >
          <SwiperSlide>
            <div className={styles.SliderThreeContent}>
              <div className={styles.SliderThreeContentTEXT}>
                <p className={styles.SliderThreeContentTEXTInner}>Decorative</p>
              </div>
              <Image
                src={Img1}
                alt="carousel_image"
                className={styles.SliderThreeImages}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.SliderThreeContent}>
              <div className={styles.SliderThreeContentTEXT}>
                <p className={styles.SliderThreeContentTEXTInner}>Xylem</p>
              </div>
              <Image
                src={Img2}
                alt="carousel_image"
                className={styles.SliderThreeImages}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.SliderThreeContent}>
              <div className={styles.SliderThreeContentTEXT}>
                <p className={styles.SliderThreeContentTEXTInner}>Compact</p>
              </div>
              <Image
                src={Img3}
                alt="carousel_image"
                className={styles.SliderThreeImages}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.SliderThreeContent}>
              <div className={styles.SliderThreeContentTEXT}>
                <p className={styles.SliderThreeContentTEXTInner}>Decorative</p>
              </div>
              <Image
                src={Img1}
                alt="carousel_image"
                className={styles.SliderThreeImages}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.SliderThreeContent}>
              <div className={styles.SliderThreeContentTEXT}>
                <p className={styles.SliderThreeContentTEXTInner}>Xylem</p>
              </div>
              <Image
                src={Img2}
                alt="carousel_image"
                className={styles.SliderThreeImages}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.SliderThreeContent}>
              <div className={styles.SliderThreeContentTEXT}>
                <p className={styles.SliderThreeContentTEXTInner}>Compact</p>
              </div>
              <Image
                src={Img3}
                alt="carousel_image"
                className={styles.SliderThreeImages}
              />
            </div>
          </SwiperSlide>
          <div className={styles.swiperButtonNext}>
            <Image src={SvgBtnNext} alt="btn" className={styles.SvgBtnSlider} />
          </div>
          <div className={styles.swiperButtonPrev}>
            <Image src={SvgBtn} alt="btn" className={styles.SvgBtnSlider} />
          </div>
        </Swiper>
        <div className={styles.SecondThumbsSwiper}>
          <Swiper
            modules={[Thumbs, Autoplay, EffectFade]}
            onSwiper={setThumbsSwiper}
            slidesPerView={1}
            speed={1500}
            allowTouchMove={false}
            fadeEffect={{ crossFade: true }}
            className={styles.mySwiper2}
          >
            <SwiperSlide>
              <div className={styles.CarouselTextMaincontent}>
                <p className={styles.TextInnerText}>
                  It's a modern minimalist aesthetic look, our luxury laminates
                  cater to every desire, ensuring your interiors exude a refined
                  charm that captivates and endures.
                </p>
                <p className={styles.CarouselTextContent}>
                  Elevate your space with the ultimate expression of luxury and
                  grace.
                </p>
                <div className={styles.SliderBtnOuter}>
                   <SliderBtn url={"/"} btn_text={"GO TO DECORATIVE"}/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.CarouselTextMaincontent}>
                <p className={styles.TextInnerText}>
                  It's a modern minimalist aesthetic look, our luxury laminates
                  cater to every desire, ensuring your interiors exude a refined
                  charm that captivates and endures.
                </p>
                <p className={styles.CarouselTextContent}>
                  Elevate your space with the ultimate expression of luxury and
                  grace.
                </p>
                <div className={styles.SliderBtnOuter}>
                   <SliderBtn url={"/"} btn_text={"GO TO XYLEM"}/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.CarouselTextMaincontent}>
                <p className={styles.TextInnerText}>
                  It's a modern minimalist aesthetic look, our luxury laminates
                  cater to every desire, ensuring your interiors exude a refined
                  charm that captivates and endures.
                </p>
                <p className={styles.CarouselTextContent}>
                  Elevate your space with the ultimate expression of luxury and
                  grace.
                </p>
                <div className={styles.SliderBtnOuter}>
                   <SliderBtn url={"/"} btn_text={"GO TO COMPACT"}/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.CarouselTextMaincontent}>
                <p className={styles.TextInnerText}>
                  It's a modern minimalist aesthetic look, our luxury laminates
                  cater to every desire, ensuring your interiors exude a refined
                  charm that captivates and endures.
                </p>
                <p className={styles.CarouselTextContent}>
                  Elevate your space with the ultimate expression of luxury and
                  grace.
                </p>
                <div className={styles.SliderBtnOuter}>
                   <SliderBtn url={"/"} btn_text={"GO TO DECORATIVE"}/>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;
