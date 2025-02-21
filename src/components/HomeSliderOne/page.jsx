// import { useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import "./HomeSliderOne.scss";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }
// const ScrollAnimation = () => {
//   useEffect(() => {
//     gsap.utils.toArray(".ScrollTextSection").forEach((section) => {
//       const circularPath = section.querySelector("#circularPath");
//       const curvPath = section.querySelector("#curvPath");
//       const textCircular = section.querySelector("#textCircular");
//       const textCurv = section.querySelector("#textCurv");
//       const [card1, card2, card3, card4, card5] = [
//         ".card1",
//         ".card2",
//         ".card3",
//         ".card4",
//         ".card5"
//       ].map((cls) => section.querySelector(cls));

//       ScrollTrigger.create({
//         trigger: section,
//         start: "top center",
//         end: "top+=250 center",
//         scrub: true,
//         onUpdate: (self) => {
//           const progress = self.progress;
//           gsap.set(textCircular, { opacity: 1 - progress });
//           gsap.set(textCurv, { opacity: progress });
//         },
//       });

//       // Card Rotation Animation
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top center",
//         end: "top+=250 center",
//         scrub: true,
//         onUpdate: (self) => {
//           const progress = self.progress;
//           gsap.set(card2, {
//             transform: `rotate(${-30 * progress}deg) scale(0.8)`,
//             transformOrigin: "left bottom",
//           });
//           gsap.set(card4, {
//             transform: `rotate(${30 * progress}deg) scale(0.8)`,
//             transformOrigin: "right bottom",
//           });
//         },
//       });

//       const cardAnimation = gsap.timeline({
//         scrollTrigger: {
//           trigger: section,
//           start: "top+=300 center",
//           end: "top+=550 center",
//           scrub: true,
//           pin: true,
//         },
//       });

//       cardAnimation
//         .to(card1, { duration: 1, rotation: -12, x: -444, y: 44, scale: 0.9 }, 0)
//         .to(card2, { duration: 1, rotation: -6, x: -204, y: 6, scale: 0.9 }, 0)
//         .to(card3, { duration: 1, scale: 0.9 }, 0)
//         .to(card4, { duration: 1, rotation: 6, x: 204, y: 6, scale: 0.9 }, 0)
//         .to(card5, { duration: 1, rotation: 12, x: 444, y: 44, scale: 0.9 }, 0)
//         .to(
//           section,
//           { duration: 1, backgroundColor: "white", ease: "none" },
//           0
//         )
//         .to(
//           textCurv,
//           { duration: 1, fill: "black", ease: "none" },
//           0
//         );
//     });

//     return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   }, []);

//   return (
//     <div>
//       <div className="ScrollTextSection">
//         <svg width="1500" height="600" viewBox="0 0 900 400">
//           <path
//             d="M 150,350 A 300,300 0 0,1 750,350"
//             stroke="black"
//             id="circularPath"
//             fill="transparent"
//             strokeWidth="2"
//             opacity="0"
//           />
//           <text fontSize="60" fill="white" id="textCircular">
//             <textPath href="#circularPath" startOffset="50%" textAnchor="middle">
//               WHERE ELEGANCE MEETS DESIRE
//             </textPath>
//           </text>

//           <path
//             d="M 25 300 Q 225 200, 450 300 Q 675 400, 875 300"
//             stroke="black"
//             id="curvPath"
//             fill="transparent"
//             strokeWidth="2"
//             opacity="0"
//           />
//           <text fontSize="56" fill="white" id="textCurv" style={{ opacity: 0 }}>
//             <textPath href="#curvPath" startOffset="50%" textAnchor="middle">
//               WHERE ELEGANCE MEETS DESIRE
//             </textPath>
//           </text>
//         </svg>

//         <div className="card-container">
//           <div className="card card1"></div>
//           <div className="card card2"></div>
//           <div className="card card3"></div>
//           <div className="card card4"></div>
//           <div className="card card5"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollAnimation;

import { useState, useEffect,useRef  } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./HomeSliderOne.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollAnimation = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true); // Adjust visibility
  const [isContainerTextVisible, setIsContainerTextVisible] = useState(true);
  const swiperRef = useRef(null);


  const images = [
    "https://interiormaataassets.humbeestudio.xyz/interior-outdoor.png",
    "https://interiormaataassets.humbeestudio.xyz/livingroomthumb.png", // Image 2 URL 
    "https://interiormaataassets.humbeestudio.xyz/KitchenImgThumb.png",
    "https://interiormaataassets.humbeestudio.xyz/livingroomthumb.png",
    "https://interiormaataassets.humbeestudio.xyz/interior-outdoor.png", // Image 4 URL
    
  ];
  const videoUrls = [
    "https://vanras.humbeestudio.xyz/videos/Kitchen.mp4",
    "https://vanras.humbeestudio.xyz/videos/Bedroom.mp4",
    "https://vanras.humbeestudio.xyz/videos/Living%20Space.mp4",
    "https://vanras.humbeestudio.xyz/videos/Bathroom.mp4",
    "https://vanras.humbeestudio.xyz/videos/Outdoor.mp4",
  ];



  const handleCardClick = (url) => setVideoUrl(url);
  const closeModal = () => setVideoUrl(null);

  useEffect(() => {
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
          gsap.set(textCurv, { opacity: 1 - progress });
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
        end: "top+=250 center",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(textCircular, { opacity: 1 - progress });
          gsap.set(textCurv, { opacity: progress });
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
          end: "top+=550 center",
          scrub: true,
          pin: true,
        },
      });

      cardAnimation
        .to(card1, { rotation: -12, x: -850, y: 193, scale: 0.9 }, 0)
        .to(card2, { rotation: -6, x: -400, y: 123, scale: 0.9 }, 0)
        .to(card3, { scale: 0.9, x: -21, y: 101 }, 0)
        .to(card4, { rotation: 12, x: 750, y: 196, scale: 0.9 }, 0)
        .to(card5, { rotation: 6, x: 406, y: 124, scale: 0.9 }, 0);
    });

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
  

  return (
    <div>
      <div className="ScrollTextSection">
        {/* Animated Circular Path Text */}
        <svg width="1500" height="600" viewBox="0 0 900 400">
          <path
            d="M 150,450 A 300,300 0 0,1 750,450"
            id="circularPath"
            fill="transparent"
          />
          <text fontSize="60" fill="white" id="textCircular">
            <textPath
              href="#circularPath"
              startOffset="50%"
              textAnchor="middle"
            >
              WHERE ELEGANCE MEETS DESIRE
            </textPath>
          </text>
  
          {/* Animated Curved Path Text */}
          <path
            d="M 25 350 Q 225 250, 450 350 Q 675 450, 875 350"
            id="curvPath"
            fill="transparent"
          />
          <text fontSize="56" fill="white" id="textCurv" style={{ opacity: 0 }}>
            <textPath href="#curvPath" startOffset="50%" textAnchor="middle">
              WHERE ELEGANCE MEETS DESIRE
            </textPath>
          </text>
        </svg>
  
        {/* Card Container with Images */}
        <div className="card-container">
          {["Livingroom", "Minimalist Bedroom", " Beautiful Kitchen", "Cozy Bedroom", "Modern Washroom"].map((title, index) => (
            <div
              key={index}
              className={`card card${index + 1}`}
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
                {/* Video with autoplay and no loop */}
                <video
                  src={videoUrl}
                  controls={false} // Disable controls (pause, fullscreen, etc.)
                  autoPlay
                  playsInline
                  className="videoOneVid"
                  onEnded={() => setVideoUrl(null)} // Set videoUrl to null after video ends to stop it from playing
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
  
      {/* Carousel for Image Selection */}
      {isCarouselVisible && (
        <div className={`carouselOne ${isCarouselVisible ? "" : "hidden"}`}>
          <Swiper spaceBetween={20} centeredSlides={true} loop={true}>
            {images.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="single"
                  onClick={() => setSelectedImage(index)}
                >
                  <motion.div className="image-container">
                    <motion.img src={imageUrl} alt={`Random Image ${index + 1}`} />
                    <div className="hover-text">
                      <span className="hovertextInner">{imageTexts[index]}</span>
                    </div>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
  
  
};

export default ScrollAnimation;
