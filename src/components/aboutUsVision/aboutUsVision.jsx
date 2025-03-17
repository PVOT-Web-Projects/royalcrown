"use client";
import Image from "next/image";
import AboutUs_vision from "@/images/fctImage.JPG";
import "./aboutUsVision.scss";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function AboutUsVision() {
  const imageRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { y: 0, scale: 1.2, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: 2, // Smoothness of the scroll animation
        },
      }
    );
  }, []);
  return (
    <>
      <div className="aboutVisionWrapper" >
        <div className="aboutVisionContainer" ref={imageRef}>
          <motion.div
            className="visionHeader"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div>Vision</div>
          </motion.div>
          <div className="ImagrefCurrent" 
          // ref={imageRef}
          >
            <Image src={AboutUs_vision} alt="" className="visionImage" />
          </div>
          <div className="visionDescription">
            <div className="description_left">
              At the heart of The Royal Way lies our vision: Customers for Life.
              We believe in forging enduring relationships by delivering
              exceptional quality, innovative design, and unmatched service. Our
              commitment is to transform everyday spaces into
              inspiring experiences, ensuring that every interaction builds
              trust, and every project reflects our passion for excellence. By
              listening to our customers and anticipating their needs, we aim to
              create not just products, but lasting value that turns every
              client into a lifelong partner.
            </div>
            <div className="description_right">
              <div className="description_right_box">
                <div className="right_box_number">45</div>
              </div>
              <div className="description_right_text">years of experience</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
