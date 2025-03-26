import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import "./circularSlider.scss";

const images = [
  "https://vanras.humbeestudio.xyz/images/OutdoorNeww.png",
  "https://vanras.humbeestudio.xyz/images/KitchenNeww.png",
  "https://vanras.humbeestudio.xyz/images/LivingroomNeww.png",
  "https://vanras.humbeestudio.xyz/images/BathroomNeww.png",
  "https://vanras.humbeestudio.xyz/images/BedroomSpaceNeww.png",
  "https://vanras.humbeestudio.xyz/images/OutdoorNeww.png",
  "https://vanras.humbeestudio.xyz/images/LivingroomNeww.png",
  "https://vanras.humbeestudio.xyz/images/BathroomNeww.png",
];

const CircularCarouselSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(Draggable);

    if (sliderRef.current) {
      Draggable.create(sliderRef.current, {
        type: "rotation",
        inertia: true,
        snap: (endValue) => Math.round(endValue / 10) * 10, // Snap every 10 degrees
      });
    }
  }, []);

  return (
    <div className="circular-slider-container">
      <div className="circular-carousel-slider" ref={sliderRef}>
        {[...Array(36)].map((_, i) => (
          <div className="slide-item" key={i}>
            <div className="card">
              {/* Adding offset to avoid duplicate first & last image */}
              <img src={images[(i + 2) % images.length]} alt={`Slide ${i + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularCarouselSlider;
