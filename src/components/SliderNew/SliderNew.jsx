"use client";

import React, { use, useEffect, useRef, useState } from 'react';
import './SliderNew.scss';
import { gsap } from "gsap";
import Link from "next/link";
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const Slider = () => {
  const slideRef = useRef(null);
  const intervalRef = useRef(null);
  const name = useRef(null);
  const des = useRef(null);
  const link = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const precentage = useRef(null);

  const slides = [
    {
      image: '/RC.jpg',
      name: "ROYAL CROWN",
      description: "Royal Crown Laminates takes pride in its rich legacy of innovation, cutting-edge technology, and expertise, offering over 450 trendsetting surface designs. Our collection of modern laminates boasts a wide range of finishes and textures in 1mm thickness, empowering you to effortlessly realize your dream decor.",
      // link: "/royal-crown",
      url: "/royal-crown",
    },
    {
      image: "/CR.jpg",
      name: "CROWN",
      description: "Crown's Lean Line offers an exquisite and cost-effective range of laminates in a variety of designs, colors, and textures, all in 0.8mm thickness. Manufactured at our highly advanced production facility, the Lean Line guarantees a consistent and exceptional level of quality.",
      // link: "https://kinhtrangtrithanhphat.com/",
      url: "/crown-xcl",
    },
    {
      image: "/XY.jpg",
      name: "XYLEM",
      description: "Step into the world of Xylem, where innovation is at the heart of everything we do. Xylem represents our premium-grade decorative laminates, meticulously crafted to elevate your surroundings. Each laminate embodies inspiring, high quality, and artistic excellence designed to define your unique style. From curating unique designs to creating exclusive laminates, we are on a mission to bring your vision to life.",
      // link: "https://kinhopbepthanhphat.com/bao-gia-tranh-kinh/",
      url: "/xylem",
    },
    {
      image: "/Qbis.png",
      name: "QBISS",
      description: "Qbiss is a high-pressure structural laminate made from multiple layers of kraft papers, with a thickness range from 2mm to 25mm. Its decorative face on both sides makes it suitable for interior applications like washroom cubicles, locker doors, wall panels, and laboratory furniture. With a density of 1.45gm/cm3, our compacts are exceptionally resilient and require no substrate support in thicknesses over 6mm.",
      // link: "https://kinhtrangtrithanhphat.com/bao-gia-kinh-trang-tri/",
      url: "/qbiss",
    },
    {
      image: "/XCL.jpg",
      name: "CROWN XCL",
      description: "XCL - Exterior Compact Laminate is a highly durable, versatile material made from layers of kraft papers, offering thickness options from 2mm to 25mm. With decorative surfaces on both sides and a UV protective film, it is perfect for Building Facades/Cladding, Balconies, Verandah, Outdoor Benches, etc. Boasting a density of 1.45gm/cm3, our compacts are exceptionally sturdy, resistant to damage, and exhibit outstanding structural stability, eliminating the need for substrate support in thicknesses above 6mm.",
      // link: "https://phongtamkinhthanhphat.com/",
      url: "/crown-xcl",
    },
  ];

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      handleNext(); // Call handleNext instead of modifying DOM directly
    }, 7000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Function to update brightness dynamically
  const updateBrightness = () => {
    const items = slideRef.current.children;
    // Reset all items to full brightness
    Array.from(items).forEach((item) => {
      item.classList.remove("background");
    });
    // Apply dimming only to background items
    for (let i = 2; i < items.length; i++) {
      items[i].classList.add("background");
    }
  };
  // Initialize brightness on first render
  useEffect(() => {
    updateBrightness();
  }, []);

  // const handleNext = () => {
  //   if (slideRef.current) {
  //     const items = slideRef.current.querySelectorAll('.item');
  //     slideRef.current.appendChild(items[0]);
  //     startTimer();
  //   }
  // };

  // Function for Next button click
  const handleNext = () => {
    clearInterval(intervalRef.current);
    const items = slideRef.current.children;
    const firstItem = items[0];

    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );

    gsap.to(firstItem, {
      x: -200,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        slideRef.current.appendChild(firstItem);
        gsap.set(firstItem, { x: 200, opacity: 0 });
        gsap.to(firstItem, { x: 0, opacity: 1, duration: 0.5 });
        updateBrightness();
        startTimer();
      },
    });
  };

  // Function for Previous button click
  const handlePrev = () => {
    clearInterval(intervalRef.current);
    const items = slideRef.current.children;
    const lastItem = items[items.length - 1];

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );

    gsap.set(lastItem, { x: -200, opacity: 0 });
    slideRef.current.prepend(lastItem);
    gsap.to(lastItem, { x: 0, opacity: 1, duration: 0.5 });
    updateBrightness();
    startTimer();
  };

  useEffect(() => {
    if (name.current && des.current && link.current) {
      const nameSplit = new SplitText(name.current, {
        type: "words,lines",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
      });

      gsap.to(precentage.current, {
        width: ((currentIndex + 1) / slides.length) * 100 + '%',
        duration: 0.8,
        ease: 'power2.out',
      });

      requestAnimationFrame(() => {
        
        

        gsap.fromTo(
          nameSplit.lines,
          {
            y: '100%',
          },
          {
            delay: 0.4,
            y: '0%',
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            willChange: 'transform',
          }
        );
        gsap.fromTo(
          des.current,
          {
            y: '400%',
          },
          {
            delay: 0.4,
            y: '0%',
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            willChange: 'transform, opacity',
          }
        );

        gsap.fromTo(
          link.current,
          {
            y: '600%',
          },
          {
            delay: 0.4,
            y: '0%',
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            willChange: 'transform, opacity',
          }
        );
      });
    }
  }, [currentIndex]);


  const handleSlideClick = (e) => {
    if (slideRef.current) {
      const firstItem = slideRef.current.querySelector('.item');
      firstItem.after(e.currentTarget);
      startTimer();
    }
  };

  return (
    <div className="container1">
      <div id="slide" className="slider" ref={slideRef}>
        {slides.map((item, index) => (
          <div
            key={index}
            className={`itemone ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.image})` }}
            onClick={handleSlideClick}
          >
            <h4 className='slide-name'>{item.name}</h4>

          </div>
        ))}
      </div>

      <div className="content">
        <div className="name" ref={name}>{slides[currentIndex].name}</div>
        <div className="des" ref={des}>{slides[currentIndex].description}</div>
        <Link href={slides[currentIndex].url} className="yello_btnoNe" ref={link}>
          <span className="button-content-slide">Read More</span>
        </Link>
      </div>

      <div className="buttons">
        <div className='navigation-button'>

          <button id="prev" onClick={handlePrev}>
            &#8592;
          </button>
          <button id="next" onClick={handleNext}>
            &#8594;
          </button>
        </div>
        <div className='straight-line'>
          <div className='precentage-line' ref={precentage}></div>
        </div>
        <div className='sliderNumber'>0{currentIndex + 1}</div>
      </div>
    </div>
  );
};

export default Slider;