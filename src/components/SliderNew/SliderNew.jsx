"use client";

import React, { useEffect, useRef } from 'react';
import './SliderNew.scss';
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import Img1 from "@/images/Royalcrown123.jpeg";
import Img2 from "@/images/Crown123.jpeg";
import Img3 from "@/images/Xylem123.jpeg";
import Img4 from "@/images/QbissNew.webp";
import Img5 from "@/images/CrownXCLNew.jpg";

const Slider = () => {
  const slideRef = useRef(null);
  const intervalRef = useRef(null);

  const slides = [
    {
      image: "https://vanras.humbeestudio.xyz/images/RcNew.png",
      name: "ROYAL CROWN",
      description: "Royal Crown Laminates takes pride in its rich legacy of innovation, cutting-edge technology, and expertise, offering over 450 trendsetting surface designs. Our collection of modern laminates boasts a wide range of finishes and textures in 1mm thickness, empowering you to effortlessly realize your dream decor.",
      // link: "/royal-crown",
      url: "/royal-crown",
    },
    {
      image: "https://vanras.humbeestudio.xyz/images/CrownNew.png",
      name: "CROWN",
      description: "Crown's Lean Line offers an exquisite and cost-effective range of laminates in a variety of designs, colors, and textures, all in 0.8mm thickness. Manufactured at our highly advanced production facility, the Lean Line guarantees a consistent and exceptional level of quality.",
      // link: "https://kinhtrangtrithanhphat.com/",
      url: "/crown-xcl",
    },
    {
      image: "https://vanras.humbeestudio.xyz/images/XyemNew.png",
      name: "XYLEM",
      description: "Step into the world of Xylem, where innovation is at the heart of everything we do. Xylem represents our premium-grade decorative laminates, meticulously crafted to elevate your surroundings. Each laminate embodies inspiring, high quality, and artistic excellence designed to define your unique style. From curating unique designs to creating exclusive laminates, we are on a mission to bring your vision to life.",
      // link: "https://kinhopbepthanhphat.com/bao-gia-tranh-kinh/",
      url: "/xylem",
    },
    {
      image: "https://vanras.humbeestudio.xyz/images/QbissNew.png",
      name: "QBISS",
      description: "Qbiss is a high-pressure structural laminate made from multiple layers of kraft papers, with a thickness range from 2mm to 25mm. Its decorative face on both sides makes it suitable for interior applications like washroom cubicles, locker doors, wall panels, and laboratory furniture. With a density of 1.45gm/cm3, our compacts are exceptionally resilient and require no substrate support in thicknesses over 6mm.",
      // link: "https://kinhtrangtrithanhphat.com/bao-gia-kinh-trang-tri/",
      url: "/qbiss",
    },
    {
      image: "https://vanras.humbeestudio.xyz/images/CrownXclNew.png",
      name: "CROWN XCL",
      description: "XCL - Exterior Compact Laminate is a highly durable, versatile material made from layers of kraft papers, offering thickness options from 2mm to 25mm. With decorative surfaces on both sides and a UV protective film, it is perfect for Building Facades/Cladding, Balconies, Verandah, Outdoor Benches, etc. Boasting a density of 1.45gm/cm3, our compacts are exceptionally sturdy, resistant to damage, and exhibit outstanding structural stability, eliminating the need for substrate support in thicknesses above 6mm.",
      // link: "https://phongtamkinhthanhphat.com/",
      url: "/crown-xcl",
    },
  ];

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (slideRef.current) {
        const items = slideRef.current.querySelectorAll('.item');
        slideRef.current.appendChild(items[0]);
      }
    },7000);
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
    const items = slideRef.current.children;
    const firstItem = items[0];
    // Animate the first card out to the left (off-screen)
    gsap.to(firstItem, {
      x: -200,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        // Move the first card to the end
        slideRef.current.appendChild(firstItem);
        // Reset its position and opacity to prepare for sliding back in from the right
        gsap.set(firstItem, { x: 200, opacity: 0 });
        // Animate it back into view smoothly
        gsap.to(firstItem, { x: 0, opacity: 1, duration: 0.5 });
        updateBrightness(); // Apply brightness logic after shifting items
      },
    });
  };

  // Function for Previous button click
  const handlePrev = () => {
    const items = slideRef.current.children;
    const lastIndex = items.length - 1;
    const lastItem = items[lastIndex];
    // Set the last card to the left (off-screen)
    gsap.set(lastItem, { x: -200, opacity: 0, y: 0 });
    // Move the last card to the start
    slideRef.current.prepend(lastItem);
    // Animate it into view
    gsap.to(lastItem, { x: 0, opacity: 1, duration: 0.5 });
    updateBrightness(); // Apply brightness logic after shifting items
  };

  // const handlePrev = () => {
  //   if (slideRef.current) {
  //     const items = slideRef.current.querySelectorAll('.item');
  //     slideRef.current.prepend(items[items.length - 1]);
  //     startTimer();
  //   }
  // };

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
            className="item"
            style={{ backgroundImage: `url(${item.image})` }}
            // onClick={handleSlideClick}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.description}</div>
              {/* <a className="button-content" href={item.url}>Read more</a> */}
              <Link href={item.url} className="yello_btnoNe">
              <span className="button-content">Read More</span>
                {/* <span className="button-content">{`GO TO ${slide.btnName}`}</span> */}
              </Link>
            </div>
            {/* <div className="imageWrapper">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      priority={index === 0} // Optional: prioritize the first image for faster loading
                    />
                  </div> */}
          </div>
        ))}
      </div>
      {/* <div className="buttons">
        <button id="prev" onClick={handlePrev}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button id="next" onClick={handleNext}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div> */}

      <div className="buttons">
        <button id="prev" onClick={handlePrev}>
          &#8592;
        </button>
        <button id="next" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Slider; 