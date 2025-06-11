import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./HomeSliderOne.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, FreeMode } from "swiper/modules";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";
// if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
// }

const ScrollAnimation = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true);
  const swiperRef = useRef(null);
  // const scrollRef = useRef(null); // Create a ref for the scroll container
  // const images = [
  //   "https://vanras.humbeestudio.xyz/images/living_room.png",
  //   "https://vanras.humbeestudio.xyz/images/kitchen_Des.png", // Image 2 URL
  //   "https://vanras.humbeestudio.xyz/images/kitchen1.png",
  //   "https://vanras.humbeestudio.xyz/images/outdoor1.png",
  //   "https://vanras.humbeestudio.xyz/images/modern_washroom.png", // Image 4 URL
  // ];
  const images = [
    "https://vanras.humbeestudio.xyz/images/OutdoorNeww.png",
    "https://vanras.humbeestudio.xyz/images/KitchenNeww.png", // Image 2 URL
    "https://vanras.humbeestudio.xyz/images/LivingroomNeww.png",
    "https://vanras.humbeestudio.xyz/images/BathroomNeww.png",
    "https://vanras.humbeestudio.xyz/images/BedroomSpaceNeww.png",
  ];
  // const videoUrls = [
  //   "https://vanras.humbeestudio.xyz/videos/Kitchen.mp4",
  //   "https://vanras.humbeestudio.xyz/videos/Bedroom.mp4",
  //   "https://vanras.humbeestudio.xyz/videos/Living%20Space.mp4",
  //   "https://vanras.humbeestudio.xyz/videos/Bathroom.mp4",
  //   "https://vanras.humbeestudio.xyz/videos/Outdoor.mp4",
  // ];
  const videoUrls = [
    "https://vanras.humbeestudio.xyz/videos/Outdoor.mp4",
    "https://vanras.humbeestudio.xyz/videos/Kitchen.mp4",
    "https://vanras.humbeestudio.xyz/videos/Living%20Space.mp4",
    "https://vanras.humbeestudio.xyz/videos/Bathroom.mp4",
    "https://vanras.humbeestudio.xyz/videos/Bedroom.mp4",
  ];

  const handleCardClick = (url) => setVideoUrl(url);
  const closeModal = () => setVideoUrl(null);
  // useEffect(() => {
  //   // Check if the scroll container is available
  //   if (scrollRef.current) {
  //     const locoScroll = new LocomotiveScroll({
  //       el: scrollRef.current,
  //       smooth: true,
  //       lerp: 0.6, // Optional: Adjust the easing for smoothness
  //     });

  //     // Update ScrollTrigger to sync with Locomotive Scroll
  //     ScrollTrigger.scrollerProxy(scrollRef.current, {
  //       scrollTop(value) {
  //         if (arguments.length) {
  //           locoScroll.scrollTo(value, 0, 0);
  //         }
  //         return locoScroll.scroll.instance.scroll.y;
  //       },
  //       getBoundingClientRect() {
  //         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  //       },
  //     });

  //     // Refresh ScrollTrigger and Locomotive Scroll
  //     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  //     // Cleanup function to destroy Locomotive Scroll
  //     return () => {
  //       locoScroll.destroy();
  //       ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
  //     };
  //   }
  // }, []); // This will run only once after the initial render
  useEffect(() => {
    const calculatePosition = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Define responsive positions and scale based on screen width
      let x1 = -750,
        y1 = 193,
        scale1 = 0.9;
      let x2 = -350,
        y2 = 123,
        scale2 = 0.9;
      let x3 = -21,
        y3 = 101,
        scale3 = 0.9;
      let x4 = 680,
        y4 = 196,
        scale4 = 0.9;
      let x5 = 350,
        y5 = 124,
        scale5 = 0.9;

      // Adjust values based on screen width
      if (screenWidth <= 600) {
        // Small screens
        x1 = -350;
        y1 = 100;
        scale1 = 0.8;
        x2 = -200;
        y2 = 80;
        scale2 = 0.8;
        x3 = 0;
        y3 = 60;
        scale3 = 0.8;
        x4 = 200;
        y4 = 80;
        scale4 = 0.8;
        x5 = 350;
        y5 = 100;
        scale5 = 0.8;
      } else if (screenWidth <= 1300) {
        // Medium screens
        x1 = -475;
        y1 = 193;
        scale1 = 0.85;
        x2 = -225;
        y2 = 123;
        scale2 = 0.85;
        x3 = -10;
        y3 = 101;
        scale3 = 0.85;
        x4 = 415;
        y4 = 196;
        scale4 = 0.85;
        x5 = 240;
        y5 = 124;
        scale5 = 0.85;
      } else if (screenWidth <= 1500) {
        // Large screens
        x1 = -525;
        y1 = 193;
        scale1 = 0.9;
        x2 = -243;
        y2 = 123;
        scale2 = 0.9;
        x3 = -10;
        y3 = 101;
        scale3 = 0.9;
        x4 = 475;
        y4 = 196;
        scale4 = 0.9;
        x5 = 260;
        y5 = 124;
        scale5 = 0.9;
      }
      // else if (screenWidth <= 1480) { // Large screens
      //   // x1 = -550; y1 = 193; scale1 = 0.9;
      //   // x2 = -250; y2 = 123; scale2 = 0.9;
      //   // x3 = -21; y3 = 101; scale3 = 0.9;
      //   // x4 = 219; y4 = 120; scale4 = 0.9;
      //   // x5 = 550; y5 = 124; scale5 = 0.9;
      //   x1 = -600; y1 = 150; scale1 = 0.85;
      //   x2 = -250; y2 = 110; scale2 = 0.85;
      //   x3 = 0; y3 = 90; scale3 = 0.85;
      //   x4 = 270; y4 = 120; scale4 = 0.85;
      //   x5 = 270; y5 = 150; scale5 = 0.85;
      // }
      return {
        x1,
        y1,
        scale1,
        x2,
        y2,
        scale2,
        x3,
        y3,
        scale3,
        x4,
        y4,
        scale4,
        x5,
        y5,
        scale5,
      };
    };

    // Initial position calculation
    const {
      x1,
      y1,
      scale1,
      x2,
      y2,
      scale2,
      x3,
      y3,
      scale3,
      x4,
      y4,
      scale4,
      x5,
      y5,
      scale5,
    } = calculatePosition();

    gsap.utils.toArray(".ScrollTextSection").forEach((section) => {
      const textCircular = section.querySelector("#textCircular");
      const textCurv = section.querySelector("#textCurv");

      // Set up the scroll trigger for fading out the textCurv when it reaches the center
      ScrollTrigger.create({
        trigger: section,
        start: "top 3900vh", // Trigger when the top of the section reaches the center of the screen
        end: "bottom center", // End trigger when the bottom of the section reaches the center
        scrub: true, // Smooth scroll animation

        onUpdate: (self) => {
          const progress = self.progress;
          // Fade out the textCurv as it moves towards the center (progress increases)
          gsap.set(textCurv, { opacity: 0 - progress });
        },
      });

      const [card1, card2, card3, card4, card5] = [
        ".card1",
        ".card2",
        ".card3",
        ".card4",
        ".card5",
      ].map((cls) => section.querySelector(cls));

      // ScrollTrigger.create({
      //   trigger: section,
      //   start: "top center",
      //   end: "top+=450 end",
      //   scrub: true,
      //   markers: true,
      //   onUpdate: (self) => {
      //     const progress = self.progress;
      //     gsap.set(textCircular, { opacity: 1 - progress });
      //     gsap.set(textCurv, { opacity: progress });
      //   },
      // });
      // ScrollTrigger for textCircular
          // ScrollTrigger for border-radius animation
    ScrollTrigger.create({
      trigger: section, 
      start: "top center",
      end: "bottom center",
      scrub: true, // Smooth scroll animation
      onUpdate: (self) => {
        const progress = self.progress;
        // Adjust the border-radius based on scroll progress
        const borderRadiusValue = 20 - (20 * progress); // Transition from 20px to 0px

        gsap.set(card1, { borderRadius: `${borderRadiusValue}px` });
        gsap.set(card2, { borderRadius: `${borderRadiusValue}px` });
        gsap.set(card3, { borderRadius: `${borderRadiusValue}px` });
        gsap.set(card4, { borderRadius: `${borderRadiusValue}px` });
        gsap.set(card5, { borderRadius: `${borderRadiusValue}px` });
      }
    });
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "top+=200 center", // Ends before textCurv starts appearing
        // end: "end end",
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          const progress = self.progress;
          // gsap.set(textCircular, { opacity: 1 - progress }); // Fade out textCircular
          gsap.set(textCircular, { opacity: 1 - progress * 3 }); // Fades out quicker
        },
        onLeave: () => {
          gsap.set(textCircular, { opacity: 0 }); // Ensure textCircular is fully hidden when scroll leaves
        },
        onEnter: () => {
          gsap.set(textCircular, { opacity: 1 }); // Ensure textCircular is fully visible when entering the scroll area
        },
      });

      // ScrollTrigger for textCurv
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        // start: "top+=300 center", // Starts only after textCircular has fully disappeared
        end: "top+=350 end",
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          const progress = self.progress;
          // gsap.set(textCurv, { opacity: progress }); // Fade in textCurv
          gsap.set(textCurv, { opacity: progress * 1.5 }); // Fades in smoothly
        },
        onLeave: () => {
          gsap.set(textCurv, { opacity: 1 }); // Ensure textCurv is fully visible when scroll leaves
        },
        onEnter: () => {
          gsap.set(textCurv, { opacity: 0 }); // Ensure textCurv is fully hidden when entering the scroll area
        },
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "top+=250 center",
        scrub: true,
        
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(card2, {
            transform: `rotate(${-30 * progress}deg) scale(0.8)`,
            transformOrigin: "left bottom",
          });
          gsap.set(card4, {
            transform: `rotate(${30 * progress}deg) scale(0.8)`,
            transformOrigin: "right bottom",
          });
        },
      });

      const cardAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top+=300 center",
          end: "top+=400 center",
          // 450
          scrub: true,
        //   pin: true,
        //  pinSpacing: "margin",
        // markers: true,
        },
      });
      //     cardAnimation
      //     .to(card1, { rotation: -12, x: -750, y: 193, scale: 0.9 }, 0)
      //     .to(card2, { rotation: -6, x: -350, y: 123, scale: 0.9 }, 0)
      //     .to(card3, { scale: 0.9, x: -21, y: 101 }, 0)
      //     .to(card4, { rotation: 12, x: 680, y: 196, scale: 0.9 }, 0)
      //     .to(card5, { rotation: 6, x: 350, y: 124, scale: 0.9 }, 0);
      // });
      cardAnimation
        .to(card1, { rotation: -12, borderRadius: 0, x: x1, y: y1, scale: scale1 }, 0)
        .to(card2, { rotation: -6,borderRadius: 0,  x: x2, y: y2, scale: scale2 }, 0)
        .to(card3, { scale: scale3, borderRadius: 0,  x: x3, y: y3 }, 0)
        .to(card4, { rotation: 12, borderRadius: 0, x: x4, y: y4, scale: scale4 }, 0)
        .to(card5, { rotation: 6, borderRadius: 0, x: x5, y: y5, scale: scale5 }, 0);
    });

    //   cardAnimation
    //     .to(card1, { rotation: -12, x: -850, y: 193, scale: 0.9 }, 0)
    //     .to(card2, { rotation: -6, x: -400, y: 123, scale: 0.9 }, 0)
    //     .to(card3, { scale: 0.9, x: -21, y: 101 }, 0)
    //     .to(card4, { rotation: 12, x: 750, y: 196, scale: 0.9 }, 0)
    //     .to(card5, { rotation: 6, x: 406, y: 124, scale: 0.9 }, 0);
    // });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  const handleExploreClick = () => {
    setVideoUrl(null);
    setIsCarouselVisible(true); // Close video modal
  };

  const handleImageClick = (event, index) => {
    const url = images[index]; // Use your image data for the video URL
    setSelectedImage(url); // Set selected video URL
    setIsCarouselVisible(false); // Toggle carousel visibility
  };

  const onSlideChange = () => {
    console.log("Slide changed");
  };

  const onSlideTransitionEnd = () => {
    console.log("Slide transition ended");
  };

  useEffect(() => {
    if (videoUrl) {
      // Disable scroll when video is playing
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll when video is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure scroll is re-enabled
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [videoUrl]);

  return (
    <div>
      <div className="ScrollTextSection">
        {/* Animated Circular Path Text */}
        <svg width="1500" height="450" viewBox="0 0 900 400" className="svgCircular">
          <path
            d="M 150,450 A 300,300 0 0,1 750,450"
            id="circularPath"
            fill="transparent"
          />
          <text fontSize="54" fill="white" id="textCircular">
            <textPath
              href="#circularPath"
              startOffset="50%"
              textAnchor="middle"
            >
              WHERE ELEGANCE MEETS DESIRE
            </textPath>
          </text>
        </svg>

        <svg width="1500" height="450" viewBox="0 0 900 400" className="svgCurve">
        
          {/* Animated Curved Path Text */}
          <path
            d="M 25 350 Q 225 250, 450 350 Q 675 450, 875 350"
            id="curvPath"
            fill="transparent"
          />
          <text fontSize="56" fill="white" id="textCurv">
            <textPath href="#curvPath" startOffset="50%" textAnchor="middle">
              WHERE ELEGANCE MEETS DESIRE
            </textPath>
          </text>
        </svg>

        {/* Card Container with Images */}
        <div className="card-container">
          {[
            "Test",
            "Beautiful Kitchen",
            "Living Room",
            "Modern Washroom",
            "Cozy Bedroom",
          ].map((title, index) => (
            <div
              key={index}
              className={`cardAll card${index + 1}`}
              onClick={() => handleCardClick(videoUrls[index])} // Use correct video URL for each card
            >
              <div className="image-container">
                <img
                  src={images[index]} // Use the correct image URL here
                  className="zoom-effect"
                  alt={`${title} Image`} // Proper alt text for accessibility
                />
                <div className="hover-text">{`${title} Design`}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal with Animation */}
      {videoUrl && (
        <div className="video-modal">
          <div className="video-content">
            {/* Close Button */}
            {!isCardVisible && !isCarouselVisible && (
              <div className="explore-button-container">
                <div
                  onClick={handleExploreClick} // Logic to close video modal
                  className="explore-button"
                >
                  <span className="button-content-explore">Close</span>
                </div>
              </div>
            )}

            <div className="VideoOneContainer">
              <div className="VideoInnerContainer">
                {/* Close Button */}
                {videoUrl && (
                  <button
                    className="closeButton"
                    onClick={() => setVideoUrl(null)}
                  >
                    ✖
                  </button>
                )}

                {/* Video with autoplay and no loop */}
                <video
                  src={videoUrl}
                  controls={false} // Disable controls (pause, fullscreen, etc.)
                  autoPlay
                  playsInline
                  className="videoOneVid"
                  // onEnded={() => setVideoUrl(null)} // Set videoUrl to null after video ends to stop it from playing
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
      {/* {isCarouselVisible && (
        <div className={`carouselOne ${isCarouselVisible ? "" : "hidden"}`}>
          <Swiper
            modules={[Navigation, Pagination, Mousewheel, FreeMode]}
            spaceBetween={20}
            slidesPerView="auto"
            grabCursor={true} // Enables grabbing cursor for drag functionality
            loop={true}
            freeMode={true} // Enables free dragging (like a continuous slider)
            mousewheel={true} // Enables dragging with mouse wheel
            centeredSlides={true}
            navigation={true} // Arrows for navigation
            pagination={{ clickable: true }} // Pagination dots
          >
            {images.map((imageUrl, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <motion.div
                  className="single"
                  onClick={() => setSelectedImage(index)}
                >
                  <motion.div className="image-container">
                    <motion.img src={imageUrl} alt={`Image ${index + 1}`} />
                    <div className="hover-text">
                      <span className="hovertextInner">{`Image ${
                        index + 1
                      }`}</span>
                    </div>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )} */}
    </div>
  );
};

export default ScrollAnimation;
