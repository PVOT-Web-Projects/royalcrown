import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./circularSlider.scss";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  { image: "https://vanras.humbeestudio.xyz/images/OutdoorNeww.png", text: "Outdoor Space" },
  { image: "https://vanras.humbeestudio.xyz/images/KitchenNeww.png", text: "Modern Kitchen" },
  { image: "https://vanras.humbeestudio.xyz/images/LivingroomNeww.png", text: "Cozy Living Room" },
  { image: "https://vanras.humbeestudio.xyz/images/BathroomNeww.png", text: "Luxury Bathroom" },
  { image: "https://vanras.humbeestudio.xyz/images/BedroomSpaceNeww.png", text: "Comfortable Bedroom" },
  { image: "https://vanras.humbeestudio.xyz/images/OutdoorNeww.png", text: "Outdoor Lounge" },
  { image: "https://vanras.humbeestudio.xyz/images/LivingroomNeww.png", text: "Spacious Living Area" },
  { image: "https://vanras.humbeestudio.xyz/images/BathroomNeww.png", text: "Elegant Bath" },
];

// Mapping text to video URLs
const videoUrls = {
  "Outdoor Space": "https://vanras.humbeestudio.xyz/videos/Outdoor.mp4",
  "Modern Kitchen": "https://vanras.humbeestudio.xyz/videos/Kitchen.mp4",
  "Cozy Living Room": "https://vanras.humbeestudio.xyz/videos/Living%20Space.mp4",
  "Luxury Bathroom": "https://vanras.humbeestudio.xyz/videos/Bathroom.mp4",
  "Comfortable Bedroom": "https://vanras.humbeestudio.xyz/videos/Bedroom.mp4",
  "Outdoor Lounge": "https://vanras.humbeestudio.xyz/videos/Outdoor.mp4",
  "Spacious Living Area": "https://vanras.humbeestudio.xyz/videos/Living%20Space.mp4",
  "Elegant Bath": "https://vanras.humbeestudio.xyz/videos/Bathroom.mp4",
};
const CircularCarouselSlider = () => {
  const sliderRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const rotationRef = useRef(0);
  const lastScrollY = useRef(0);  // Initialize with 0 to avoid the ReferenceError
  const [scrollRange, setScrollRange] = useState({ start: 0, end: 0 });
  
const videoUrls = {
  "Outdoor Space": "https://vanras.humbeestudio.xyz/videos/Outdoor.mp4",
  "Modern Kitchen": "https://vanras.humbeestudio.xyz/videos/Kitchen.mp4",
  "Cozy Living Room": "https://vanras.humbeestudio.xyz/videos/Living%20Space.mp4",
  "Luxury Bathroom": "https://vanras.humbeestudio.xyz/videos/Bathroom.mp4",
  "Comfortable Bedroom": "https://vanras.humbeestudio.xyz/videos/Bedroom.mp4",
  "Outdoor Lounge": "https://vanras.humbeestudio.xyz/videos/Outdoor.mp4",
  "Spacious Living Area": "https://vanras.humbeestudio.xyz/videos/Living%20Space.mp4",
  "Elegant Bath": "https://vanras.humbeestudio.xyz/videos/Bathroom.mp4",
};

  const handleCardClick = (text) => {
    // Get the corresponding video URL based on the slide's text
    const url = videoUrls[text];
    if (url) {
      setVideoUrl(url);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setVideoUrl(null);
    document.body.style.overflow = 'auto';
  };
  useEffect(() => {
    if (typeof window !== "undefined") {  // Check if we are in the browser
      // Set scroll range dynamically based on viewport height
      setScrollRange({
        start: window.innerHeight * 2.5, // 180vh
        end: window.innerHeight * 3.3, // 240vh
      });

      const handleScroll = () => {
        const scrollY = window.scrollY;
        const delta = scrollY - lastScrollY.current;

        if (scrollY >= scrollRange.start && scrollY <= scrollRange.end) {
          if (sliderRef.current) {
            rotationRef.current += delta * 0.05; // Adjust sensitivity
            gsap.to(sliderRef.current, {
              rotation: rotationRef.current,
              duration: 1.2,
              ease: "power4.out",
            });
          }
        }

        lastScrollY.current = scrollY;
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollRange]); 

  return (
    <div className="circular-slider-container">
      <div className="circular-carousel-slider" ref={sliderRef}>
        {/* {[...Array(36)].map((_, i) => (
          <div className="slide-item" key={i}  onClick={() => handleCardClick(slideText)}>
            <div className="card">
              <img src={slides[i % slides.length].image} alt={`Slide ${i + 1}`} />
              <p className="slide-text">{slides[i % slides.length].text}</p>
            </div>
          </div>
        ))} */} 
          {[...Array(36)].map((_, i) => {
          const slideText = slides[i % slides.length].text;
          return (
            <div className="slide-item" key={i}
             onClick={() => handleCardClick(slideText)}
             >
              <div className="card">
                <img src={slides[i % slides.length].image} alt={`Slide ${i + 1}`} />
                <p className="slide-text">{slideText}</p>
              </div>
            </div>
          );
        })}
      </div>
      {videoUrl && (
        <div className="video-modal">
          <div className="video-content">
            <div className="VideoOneContainer">
              <div className="VideoInnerContainer">
                {videoUrl && (
                  <button
                  onClick={closeModal}
                    className="closeButton"
                    // onClick={() => setVideoUrl(null)}
                  >
                    ✖
                  </button>
                )}
                <video
                  src={videoUrl}
                  controls={false} 
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

export default CircularCarouselSlider;
