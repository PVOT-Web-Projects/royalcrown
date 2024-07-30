"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./threeDSlider.scss"; // Import your SCSS file here
import Image from "next/image";
import img1 from "@/images/circleImg1.jpg";
import img2 from "@/images/circleImg2.jpg";
import img3 from "@/images/circleImg3.jpg";
import img4 from "@/images/circleImg4.jpg";

gsap.registerPlugin(ScrollTrigger);

const ThreeDSlider2 = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery_box",
        start: "top center",
        end: "bottom center", // Increase the end point to extend the scroll distance
        scrub: true,
        pin: false, // Ensure pinning the correct element
        pinSpacing: false, // Disable automatic pin spacing
        markers: false,
      },
    });

    tl.to(".gallery_box_outer", {
      duration: 10,
      rotateY: 360,
      ease: "none",
    });

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="work2">
      <div className="work2_wrap">
        <div className="gallery_box">
          <div className="gallery_box_outer">
            <div className="gallery_box_in" style={{ background: "black" }}>
              <Image src={img1} alt="img1" />
              <p>Laminate 1</p>
            </div>
            <div className="gallery_box_in" style={{ background: "yellow" }}>
              <Image src={img2} alt="img1" />
              <p>Laminate 9</p>
            </div>
            <div className="gallery_box_in" style={{ background: "red" }}>
              <Image src={img3} alt="img1" />
              <p>Laminate 8</p>
            </div>
            <div className="gallery_box_in" style={{ background: "pink" }}>
              <Image src={img4} alt="img1" />
              <p>Laminate 7</p>
            </div>
            <div className="gallery_box_in" style={{ background: "blue" }}>
              <Image src={img1} alt="img1" />
              <p>Laminate 6</p>
            </div>
            <div className="gallery_box_in" style={{ background: "green" }}>
              <Image src={img2} alt="img1" />
              <p>Laminate 5</p>
            </div>
            <div className="gallery_box_in" style={{ background: "purple" }}>
              <Image src={img3} alt="img1" />
              <p>Laminate 4</p>
            </div>
            <div className="gallery_box_in" style={{ background: "lightgrey" }}>
              <Image src={img4} alt="img1" />
              <p>Laminate 3</p>
            </div>
            <div className="gallery_box_in" style={{ background: "orange" }}>
              <Image src={img1} alt="img1" />
              <p>Laminate 2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDSlider2;
