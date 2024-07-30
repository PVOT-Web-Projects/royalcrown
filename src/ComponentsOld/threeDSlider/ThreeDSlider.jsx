"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './threeDSlider.scss'; // Import the SCSS file

const ThreeDSlider = () => {
  const ringRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const totalImages = 10;
    const rotationPerImage = 36;

    gsap.timeline()
      .set(ringRef.current, { rotationY: 180 }) // Set initial rotationY
      .set('.img', {
        rotateY: (i) => i * -rotationPerImage,
        transformOrigin: '50% 50% 500px',
        z: -500,
        backgroundImage: (i) => `url(https://picsum.photos/id/${i + 6}/700/300/)`,
        backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: 'hidden'
      })
      .from('.img', {
        duration: 1.5,
        y: 200,
        opacity: 1,
        stagger: 0.1,
        ease: 'expo'
      });

    gsap.to(ringRef.current, {
      rotationY: `+=${360 - rotationPerImage}`,
      ease: 'none',
      scrollTrigger: {
        trigger: ".sticky-container",
        start: "top top",
        end: `+=${totalImages * window.innerHeight}`, // Adjust end based on total images and viewport height
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
      onUpdate: () => {
        gsap.set('.img', { backgroundPosition: (i) => getBgPos(i) });
      }
    });

    function getBgPos(i) {
      return (
        (-gsap.utils.wrap(
          0,
          360,
          gsap.getProperty(ringRef.current, 'rotationY') - 180 - i * 36
        ) /
          360) *
          400 +
        'px 0px'
      );
    }
  }, []);

  return (
    <div className="ddd">
      <div className="sticky-container">
        <div className="threeDSlider">
          <div className="container">
            <div id="ring" ref={ringRef}>
              {[...Array(10)].map((_, index) => (
                <div key={index} className="img"></div>
              ))}
            </div>
            <div className="vignette"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDSlider;
