// components/CircularCarouselSlider.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import 'gsap/InertiaPlugin';
import "./circularSlider.scss"
const CircularCarouselSlider = () => {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(Draggable);

    // Initialize Draggable on the carousel slider
    Draggable.create(".circular-carousel-slider", {
      type: "rotation",
      inertia: true,
      minimumMovement: 0,
      snap: function (endValue) {
        const step = 10;
        return Math.round(endValue / step) * step;
      }
    });
  }, []);

  return (
    <div className="circular-carousel-slider">
      {[...Array(36)].map((_, i) => (
        <div className="slide-item" key={i}>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default CircularCarouselSlider;
