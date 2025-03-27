import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./circularSlider.scss";

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

const CircularCarouselSlider = () => {
  const sliderRef = useRef(null);
  const rotationRef = useRef(0);
  const lastScrollY = useRef(window.scrollY);
  const [scrollRange, setScrollRange] = useState({ start: 0, end: 0 });

  useEffect(() => {
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
            duration: 0.6,
            ease: "power2.out",
          });
        }
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRange]); // Depend on scrollRange to update on resize

  return (
    <div className="circular-slider-container">
      <div className="circular-carousel-slider" ref={sliderRef}>
        {[...Array(36)].map((_, i) => (
          <div className="slide-item" key={i}>
            <div className="card">
              <img src={slides[i % slides.length].image} alt={`Slide ${i + 1}`} />
              <p className="slide-text">{slides[i % slides.length].text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularCarouselSlider;
