"use client";
import Image from "next/image";
import Image1 from "../../images/image 73.jpg";
import Image2 from "../../images/image 72.jpg";
import Image3 from "../../images/image 15.jpg";
import "./aboutUsHero.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import HomeHeroSection from "../homeHeroSection/page";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsHero() {
  const headerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const eleganceSectionRef = useRef(null);

  useEffect(() => {
    // Scale down the text and fade out on scroll
    gsap.to(headerRef.current, {
      scale: 0.35,
      opacity: 0,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom+=600 1",
        scrub: true,
        // markers: true,
      },
    });
  
    // Scroll down and fade out the image container, but only after the elegance section reaches a certain point
    gsap.to(imageContainerRef.current, {
      scale: 0.35,
      opacity: 0,
      scrollTrigger: {
        trigger: eleganceSectionRef.current, // Wait for the elegance section to come into view
        start: "top+=100 100%", // Start fading when the elegance section is in position
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });
  
    // Apply the same animation to the homeContainer section
    gsap.to(eleganceSectionRef.current, {
      scale: 0.35,
      opacity: 0,
      scrollTrigger: {
        trigger: eleganceSectionRef.current,
        start: "top+=800 100%", // Match this start point to previous sections if needed
        end: "bottom+=400 top",
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <>
      {/* About Us Header Section */}
      <section className="aboutUsHeroWrapper">
        <div className="aboutUsHeroHeaderContainer" ref={headerRef}>
          <motion.div
            className="aboutUsHeroHeader1"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            About
          </motion.div>
          <motion.div
            className="aboutUsHeroHeader2"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Royal Crown
          </motion.div>
        </div>
      </section>

      {/* About Us Image Container Section */}
      <section className="aboutUsImageContainerSection">
        <div className="aboutUsImageContainer" ref={imageContainerRef}>
          <div className="aboutUsImageContainerInner">
            <div className="aboutUsHeroImage1">
              <Image src={Image1} alt="" className="heroImage" />
            </div>
            <div className="aboutUsHeroImage2">
              <Image src={Image2} alt="" className="heroImage" />
            </div>
            <div className="aboutUsHeroImage3">
              <Image src={Image3} alt="" className="heroImage" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Home Hero Section */}
      <section ref={eleganceSectionRef}>
        <HomeHeroSection />
      </section>
    </>
  );
}
