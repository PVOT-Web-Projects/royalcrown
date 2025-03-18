import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./HomeSliderMobile.scss";
import { Navigation, Autoplay } from "swiper/modules";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const multiplier = {
  translate: 0.3,
  rotate: 0.02,
};
const ScrollAnimationMobile = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false); // State to track if the delay has occurred
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRef = useRef(null);
  const pageRef = useRef(null);
  // Use a ref to track whether the page is mounted for the first time
  const swiperRef = useRef(null); // Use useRef to reference Swiper
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Track the clicked image
  // const [isCarouselVisible, setIsCarouselVisible] = useState(true); // Controls carousel visibility
  const [isCarouselVisible, setIsCarouselVisible] = useState(false); // Initially hide the carousel
  const [isCardVisible, setIsCardVisible] = useState(true); // Initially show the card
  const [isContainerTextVisible, setIsContainerTextVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false); // Track if video should be visible

  const videoRefs = useRef([]);

  const images = [
    "https://vanras.humbeestudio.xyz/images/outdoor1.png",
    "https://vanras.humbeestudio.xyz/images/kitchen1.png", // Image 2 URL
    "https://vanras.humbeestudio.xyz/images/living_room.png",
    "https://vanras.humbeestudio.xyz/images/modern_washroom.png",
    "https://vanras.humbeestudio.xyz/images/kitchen_Des.png",
  ];
  const handleCardClick = (url) => setVideoUrl(url);
  const closeModal = () => setVideoUrl(null);
  const videoUrls = [
    // "./videos/OutdoorOne.mp4",
    // "./videos/Kitchen.mp4",
    // "./videos/LivingSpace.mp4",
    // "./videos/Bathroom.mp4",
    // "./videos/Bedroom.mp4",
    // "https://vanras.humbeestudio.xyz/videos/Kitchen.mp4",
    // "https://vanras.humbeestudio.xyz/videos/Living%20Space.mp4",
    // "https://vanras.humbeestudio.xyz/videos/Bathroom.mp4",
    // "https://vanras.humbeestudio.xyz/videos/Bedroom.mp4",
    "https://vanras.humbeestudio.xyz/videos/OutdoorOne.mp4",
    "https://vanras.humbeestudio.xyz/videos/Kitchen.mp4",
    "https://vanras.humbeestudio.xyz/videos/Living%20Space.mp4",
    "https://vanras.humbeestudio.xyz/videos/Bathroom.mp4",
    "https://vanras.humbeestudio.xyz/videos/Bedroom.mp4",
  ];

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useLayoutEffect(() => {
    if (selectedImage !== null && pageRef.current) {
      const tl = gsap.timeline();
      gsap.set(pageRef.current, {
        opacity: 0,
        scale: 0.8,
        borderRadius: "50%",
        overflow: "hidden",
        transformOrigin: "center",
      });

      tl.to(pageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
      }).to(
        pageRef.current,
        {
          borderRadius: "0%",
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.9"
      );
    }
  }, [selectedImage]); // Trigger animation when selectedImage changes

  const calculateWheel = () => {
    const slides = document.querySelectorAll(".single");
    slides.forEach((slide) => {
      const rect = slide.getBoundingClientRect();
      const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
      let ty =
        Math.abs(r) * multiplier.translate - rect.width * multiplier.translate;

      if (ty < 0) {
        ty = 0;
      }

      const transformOrigin = r < 0 ? "left top" : "right top";
      slide.style.transform = `translate(0, ${ty}px) rotate(${
        -r * multiplier.rotate
      }deg)`;
      slide.style.transformOrigin = transformOrigin;
    });
  };

  const raf = () => {
    if (!isTransitioning) {
      requestAnimationFrame(raf);
      calculateWheel();
    }
  };

  useEffect(() => {
    raf();
  }, [isTransitioning]);
  const svgRef = useRef(null);

  const onSlideChange = () => {
    setIsTransitioning(true);
  };

  const onSlideTransitionEnd = () => {
    setIsTransitioning(false);
  };
  const handleImageClick = (event, index) => {
    setSelectedImage(index); // Update the state with the selected image index
    setIsCarouselVisible(false); // Hide the carousel
    setIsContainerTextVisible(false); // Hide the containerText
    if (pageRef.current) {
      const tl = gsap.timeline();
      gsap.set(pageRef.current, {
        opacity: 0,
        scale: 0.8,
        borderRadius: "50%",
        overflow: "hidden",
        transformOrigin: "center",
      });

      tl.to(pageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power4.out",
      }).to(
        pageRef.current,
        {
          borderRadius: "0%",
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.9"
      );
    }
    // Center the image inside the inner Swiper (like the outer one)
    if (swiperRef.current) {
      // Get the Swiper instance
      const swiperInstance = swiperRef.current.swiper;
      // Ensure the slide is centered
      swiperInstance.slideTo(index, 0, false); // Go to the clicked image
      // Optionally scroll to the image (if required)
      const selectedImage = event.target; // Get the clicked image
      const elementRect = selectedImage.getBoundingClientRect();
      // Calculate scroll position to center the selected image
      const offset = (window.innerHeight - elementRect.height) / 2;
      const scrollToY = window.scrollY + elementRect.top - offset;
      // Ensure the scroll position stays within bounds
      window.scrollTo({
        top: scrollToY,
        behavior: "smooth",
      });
    }
    if (videoRefs.current[index]) {
      setVideoVisible(true); // Set video to be visible
      videoRefs.current[index].play(); // Start playing the video immediately
    }
  };

  const imageTexts = [
    "Outdoor Space Design",
    "Beautiful Kitchen Design",
    "Living Room Design",
    "Modern Washroom Design",
    "Cozy Bedroom Design",
  ];
  // const renderPage = () => {
  //   if (selectedImage === null) return null;

  //   return (
  //     <div ref={pageRef}>
  //       <div className="VideoOneContainer">
  //         <div className="VideoInnerContainer">
  //           <video
  //             ref={(el) => (videoRefs.current[selectedImage] = el)}
  //             src={videoUrls[selectedImage]}
  //             type="video/mp4"
  //             preload="auto" // Preload the video
  //             muted // Mute the video to avoid sound playback on load
  //             autoPlay
  //             playsInline
  //             className="videoOneVid"
  //           />
  //           <div className="VideoInnerContainerText">
  //             <motion.div
  //               initial={{ opacity: 0, x: 50 }}
  //               animate={{ opacity: 1, x: 0 }}
  //               transition={{ duration: 1, delay: 0.5 }}
  //             >
  //               <p>WHERE ELEGANCE</p>
  //               <p>MEETS DESIRE</p>
  //             </motion.div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  const imageRef = useRef(null);
  const handleExploreClick = () => {
    setVideoUrl(null);
    setSelectedImage(null); // Reset selected image
    setIsCarouselVisible(true); // Show the carousel
    setIsCardVisible(false); // Hide the card
    setIsContainerTextVisible(true); // Show the containerText
    setVideoVisible(false); // Hide video when closing the exploration
    if (imageRef && imageRef.current) {
      const element = imageRef.current;
      const elementRect = element.getBoundingClientRect();
      const offset = (window.innerHeight - elementRect.height) / 1.2;
      const scrollToY = window.scrollY + elementRect.top - offset;

      window.scrollTo({
        top: scrollToY,
        behavior: "smooth",
      });
    }
    console.log("Explore clicked or triggered by scroll!");
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  const handleScroll = () => {
    const imageElement = imageRef.current;
    if (imageElement) {
      const rect = imageElement.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isInViewport && !hasTriggered) {
        // Trigger your delayed action when the image is in view
        setIsVisible(true);

        // Set a delay before triggering handleExploreClick
        setHasTriggered(true); // Prevent triggering multiple times
        setTimeout(() => {
          handleExploreClick(); // Trigger the action after 2-3 seconds
        }, 200); // Delay of 2 seconds (2000 ms)
      } else if (!isInViewport) {
        setHasTriggered(false); // Reset the trigger when the image is not in view
      }
    }
  };

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
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true, // Smooth scroll animation
        onUpdate: (self) => {
          const progress = self.progress;
          const borderRadiusValue = 20 - 20 * progress; // Transition from 20px to 0px

          gsap.set(card1, { borderRadius: `${borderRadiusValue}px` });
          gsap.set(card2, { borderRadius: `${borderRadiusValue}px` });
          gsap.set(card3, { borderRadius: `${borderRadiusValue}px` });
          gsap.set(card4, { borderRadius: `${borderRadiusValue}px` });
          gsap.set(card5, { borderRadius: `${borderRadiusValue}px` });
        },
      });
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "end end",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(textCircular, { opacity: 1 - progress }); // Fade out textCircular
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
        end: "top+=350 end",
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(textCurv, { opacity: progress }); // Fade in textCurv
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
          scrub: true,
        },
      });
      cardAnimation
        .to(
          card1,
          { rotation: -12, borderRadius: 0, x: x1, y: y1, scale: scale1 },
          0
        )
        .to(
          card2,
          { rotation: -6, borderRadius: 0, x: x2, y: y2, scale: scale2 },
          0
        )
        .to(card3, { scale: scale3, borderRadius: 0, x: x3, y: y3 }, 0)
        .to(
          card4,
          { rotation: 12, borderRadius: 0, x: x4, y: y4, scale: scale4 },
          0
        )
        .to(
          card5,
          { rotation: 6, borderRadius: 0, x: x5, y: y5, scale: scale5 },
          0
        );
    });
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasTriggered]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 600); // Change path after scrolling 100px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      },
      {
        root: null, // Observe in the viewport
        threshold: 1, // Trigger when 60% of the section is visible
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="containerText">
      {!videoVisible && (
        <div className="ScrollTextSection">
          {/* <svg
          width="1500"
          height="450"
          viewBox="0 0 900 400"
          className="svgCircular"
        >
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
        </svg> */}
          <p className="NormalSvgCurve">where elegance meets desire</p>

          <svg
            width="1500"
            height="450"
            viewBox="0 0 900 400"
            className="svgCurveOne"
          >
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
        </div>
      )}
      {isCardVisible && (
        <div
          className={`card-containerOne ${isCardVisible ? "visible" : ""}`}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          <motion.div className="cardOOne">
            <div className="imgBx">
              <img
                src="https://vanras.humbeestudio.xyz/images/kitchen1.png"
                alt="Person"
                ref={imageRef}
              />
            </div>
          </motion.div>
        </div>
      )}
      {isCarouselVisible && (
        <div className={`carouselOne ${isCarouselVisible ? "" : "hidden"}`}>
          <Swiper
            ref={swiperRef}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            onSlideChange={onSlideChange}
            onSlideTransitionEnd={onSlideTransitionEnd}
            speed={1500}
            simulateTouch={true}
            draggable={true} // Enable mouse dragging
            touchMoveStopPropagation={true}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto-slide every 5s
            breakpoints={{
              575: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
          >
            {images.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="single"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => handleCardClick(videoUrls[index])}
                  // onClick={(event) => handleImageClick(event, index)} // Pass event and index
                >
                  <motion.div
                    className="image-container"
                    initial={{ scale: 0.5, rotateY: 90 }}
                    animate={{ scale: 1, rotateY: 0 }}
                    exit={{ scale: 0.5, rotateY: -90, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <motion.img
                      initial={{ scale: 0.5 }} // Start smaller
                      animate={{ scale: 1 }} // Animate to full size
                      transition={{ duration: 0.2, ease: "easeInOut" }} // Quick smooth scaling transition
                      src={imageUrl}
                      alt={`Random Image ${index + 1}`}
                      className="image"
                    />
                    <div className="hover-text">
                      <span>{imageTexts[index]}</span>{" "}
                    </div>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-prev">&#8592;</div>
          <div className="custom-next">&#8594;</div>
        </div>
      )}
      {/* {selectedImage !== null && !isCarouselVisible && renderPage()} */}
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
    </div>
  );
};

export default ScrollAnimationMobile;
