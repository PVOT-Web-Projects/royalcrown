'use client';
import { use, useState } from "react";
import "./circularSlider.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Draggable from "gsap/src/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { motion } from "framer-motion";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";



gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin, MotionPathPlugin, MorphSVGPlugin);

const slides = [
  { image: "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/LivingroomNeww.png", text: "Cozy Living Room" },
  { image: "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/BathroomNeww.png", text: "Luxury Bathroom" },
  { image: "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/LivingroomNeww.png", text: "Cozy Living Room" },
  { image: "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/OutdoorNeww.png", text: "Outdoor Space" },
];

const slides2 = [
  { image: "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/OutdoorNeww.png", text: "Outdoor Space" },
  { image: "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/KitchenNeww.png", text: "Modern Kitchen" },
  { image: "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/LivingroomNeww.png", text: "Cozy Living Room" },
  { image: "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/BathroomNeww.png", text: "Luxury Bathroom" },
  { image: "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/BedroomSpaceNeww.png", text: "Comfortable Bedroom" },
  { image: "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/OutdoorNeww.png", text: "Outdoor Lounge" },
  { image: "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/LivingroomNeww.png", text: "Spacious Living Area" },
  { image: "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/BathroomNeww.png", text: "Elegant Bath" },
];

const videoUrls = {
  "Outdoor Space": "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/Outdoor.mp4",
  "Modern Kitchen": "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/Kitchen.mp4",
  "Cozy Living Room": "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/Living-Space.mp4",
  "Luxury Bathroom": "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/Bathroom.mp4",
  "Comfortable Bedroom": "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/Bedroom.mp4",
  "Outdoor Lounge": "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/Outdoor.mp4",
  "Spacious Living Area": "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/Living-Space.mp4",
  "Elegant Bath": "https://admin.royalcrownlaminates.com/wp-content/uploads/2025/04/Bathroom.mp4",
};



function CircularCarouselSlider() {

  const circularSliderRef = useRef(null);
  const sliderRef = useRef(null);
  const slide = useRef([]);
  const [videoUrl, setVideoUrl] = useState(null);
  const sliderRef2 = useRef(null);
  const slide2 = useRef([]);
  const positionSvg = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);


  const handleCardClick = (text) => {
    const url = videoUrls[text];
    if (url) {
      setVideoUrl(url);
      document.body.style.overflow = "hidden";
    }
  };


  const closeModal = () => {
    setVideoUrl(null);
    document.body.style.overflow = "auto";
  };


  const snap = gsap.utils.snap(30);
  const currentAngle = useRef(0);


  const rotateSlider = (direction) => {
    currentAngle.current += 30 * direction;
    const snappedAngle = snap(currentAngle.current);

    gsap.to(sliderRef2.current, {
      rotation: snappedAngle,
      duration: 0.5,
      onUpdate: () => {
        Draggable.get(sliderRef2.current)?.update();
      },
      onComplete: () => {
        const index = ((-snappedAngle % 360) + 360) % 360 / 30;
        setActiveIndex(index);
      }
    });
  };


  const nextSlide = () => rotateSlider(-1);
  const prevSlide = () => rotateSlider(1);


  const updateAngleAndIndex = (angle) => {
    const snapped = snap(angle);
    currentAngle.current = snapped;

    const index = ((-snapped % 360) + 360) % 360 / 30;
    setActiveIndex(index);
  };

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPhone/.test(ua)) {
      console.log("iPhone detected");
      positionSvg.current.style.top = 'calc((100% - 51vh) * 3.4)';
      sliderRef2.current.style.transformOrigin = '50% 165%';
    }
  }, []);




  useEffect(() => {
    const boxes = slide.current;
    const boxes2 = slide2.current;
    const totalSlides = boxes.length;

    const setupScrollar = () => {
      const existing = Draggable.get(sliderRef2.current);
      if (existing) existing.kill();

      Draggable.create(sliderRef2.current, {
        type: "rotation",
        inertia: true,
        snap: gsap.utils.snap(30),
        dragClickables: true,
        dragResistance: -2,
        allowEventDefault: true,

        onPress: function (e) {
          const touch = e.touches?.[0] || e;
          this._startTime = Date.now();
          this._startX = touch.clientX;
          this._startY = touch.clientY;
        },

        onRelease: function (e) {
          const touch = e.changedTouches?.[0] || e;
          const elapsed = Date.now() - this._startTime;
          const deltaX = Math.abs(touch.clientX - this._startX);
          const deltaY = Math.abs(touch.clientY - this._startY);
          const isClick = elapsed < 200 && deltaX < 10 && deltaY < 10;

          if (isClick) {
            const slideItem = touch.target.closest(".slide-item-2");
            if (slideItem) {
              const textEl = slideItem.querySelector(".slide-text-2");
              const text = textEl?.textContent?.trim();
              if (text && videoUrls[text]) {
                setVideoUrl(videoUrls[text]);
                document.body.style.overflow = "hidden";
              }
            }
          }
        },

        onDragEnd: function () {
          updateAngleAndIndex(this.rotation);
        },

        onThrowUpdate: function () {
          updateAngleAndIndex(this.rotation);
        }
      });
    };




    gsap.set(boxes2, {
      opacity: 1,
      motionPath: {
        path: "#myPath2",
        align: "#myPath2",
        alignOrigin: [0.5, 0.5],
        start: -0.25,
        end: (i) => i / totalSlides - 0.25,
        autoRotate: true
      },
    });


    const ctx = gsap.context(() => {
      const start = document.querySelectorAll('#scrollTextCircular');
      const end = document.querySelectorAll('#scrollTextCurv');

      gsap.fromTo("#scrollTextCircular", {
        attr: { startOffset: "40%" },
      }, {
        attr: { startOffset: "50%" },
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: circularSliderRef.current,
          start: 'top 50%',
          end: '20% 50%',
          scrub: true,
        }
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: circularSliderRef.current,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: true,
        },
        onComplete: () => {
          setupScrollar();
        },
      })


      tl.to(start, {
        opacity: 0,
      }, 'first')

      tl.from(end, {
        opacity: 0,
      }, 'first+=0.4')

      tl.to(boxes[1], {
        scale: 0.7,
        xPercent: -70,
        rotate: -15,
      }, 'first+=0.4');
      tl.to(boxes[2], {
        scale: 0.7,
        xPercent: 70,
        rotate: 15,
      }, 'first+=0.4');
      tl.to(end, {
        opacity: 0,
        duration: 0.01,
      }, 'third')
      tl.to('.circular-carousel-slider', {
        opacity: 0,
        duration: 0.8,
      }, 'third')
      tl.to('.slider-half-1', {
        xPercent: -100,
        duration: 0.8,
      }, 'third')
      tl.to('.slider-half-2', {
        xPercent: 100,
        duration: 0.8,
      }, 'third')
      tl.to(['.circular-carousel-slider-2', '.circular-carousel-slider-2 .rotate-2', '.navigation button'], {
        zIndex: 9999999,
        duration: 0.02,
      }, 'forth')
    }, circularSliderRef);

    return () => ctx.revert();
  }, []);



  return (
    <>
      <div className="circular-slider-container" ref={circularSliderRef}>

        <div className="text-animation">
          <svg className='text-svg' viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M 150,350 A 300,300 0 0,1 750,350" stroke="black" id="circularPath" fill="transparent" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" opacity={0} />
            <text fontSize={60} fill="white" id="textCircular" fontFamily="made_mirage_regular">
              <textPath id="scrollTextCircular" href="#circularPath" startOffset="50%" textAnchor="middle">
                WHERE ELEGANCE MEETS DESIRE
              </textPath>
            </text>

            <path d="M 25 390 Q 225 290, 450 390 Q 675 490, 875 390" stroke="black" id="curvPath" fill="transparent" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" opacity={0} />
            <text fontSize={50} fill="white" id="textCurv" fontFamily="made_mirage_regular">
              <textPath id="scrollTextCurv" href="#curvPath" startOffset="50%" textAnchor="middle">
                WHERE ELEGANCE MEETS DESIRE
              </textPath>
            </text>
          </svg>

        </div>
        <div className="slider-background">
          <div className="slider-half-1"></div>
          <div className="slider-half-2"></div>
        </div>
        <div className="circular-carousel-slider" >

          <div className="rotate" ref={sliderRef}>
            {[...Array(12)].map((_, i) => {
              const slideText = slides[i % slides.length].text;
              return (
                <div className="slide-item" key={i} onClick={() => handleCardClick(slideText)} ref={el => (slide.current[i] = el)}>
                  <div className="card">
                    <img src={slides[i % slides.length].image} alt={`Slide ${i + 1}`} />
                    <p className="slide-text">{slideText}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        <div className="circular-carousel-slider-2" >
          <svg viewBox="0 0 400 400" ref={positionSvg} >
            <path
              strokeWidth="2"
              stroke="transparent"
              id="myPath2"
              fill="none"
              d="M396,200 C396,308.24781 308.24781,396 200,396 91.75219,396 4,308.24781 4,200 4,91.75219 91.75219,4 200,4 308.24781,4 396,91.75219 396,200 z"
            ></path>
          </svg>

          <div className="rotate-2" ref={sliderRef2}>
            {[...Array(12)].map((_, i) => {
              const slideText = slides2[i % slides2.length].text;
              const isActive = i === activeIndex;
              return (
                <div
                  className="slide-item-2"
                  key={i}
                  ref={el => (slide2.current[i] = el)}
                >
                  <div className="card-2">
                    <img src={slides2[i % slides2.length].image} alt={`Slide ${i + 1}`} />
                    <p className={`slide-text-2 ${isActive ? 'activeText' : ''}`}>{slideText}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="navigation">
            <button id="prev" onClick={prevSlide}>
              &#8592;
            </button>
            <button id="next" onClick={nextSlide}>
              &#8594;
            </button>
          </div>

        </div>





      </div>
      {videoUrl && (
        <div className="video-modal">
          <div className="video-content">
            <div className="VideoOneContainer">
              <div className="VideoInnerContainer">
                <button onClick={closeModal} className="closeButton">
                  ✖
                </button>
                <video
                  src={videoUrl}
                  controls={false}
                  autoPlay
                  playsInline
                  className="videoOneVid"
                />
                <div className="VideoInnerContainerText">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <p>WHERE ELEGANCE</p>
                    <p>MEETS DESIRE</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CircularCarouselSlider;
