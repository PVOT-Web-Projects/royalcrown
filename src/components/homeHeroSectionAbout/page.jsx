"use client";
import Image from "next/image";
import "./homeheroAbout.scss";
// import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image4 from "../../images/image_15_small.jpg";
// import Image5 from "../../images/image 48.jpg";
// import Image6 from "../../images/laminate - about-us 6.jpg";
import Image4 from "../../images/aboutIMg1.jpg";
import Image5 from "../../images/aboutImgg2.jpg";
import Image6 from "../../images/fctImg5.JPG";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeHeroSection() {
  // const eleganceContainer = useRef(null);

  // useEffect(() => {
  //   gsap.to(eleganceContainer.current, {
  //     scale: 0.35,
  //     y: -300,              // Scroll down the image container
  //     opacity: 0,          // Fade out the image container
  //     scrollTrigger: {
  //       trigger: eleganceContainer.current,
  //       start: "top+=800 100%",  // Start animation when the top of the section hits the center of the viewport
  //       end: "bottom-=10 top",    // End when the section leaves the viewport
  //       scrub: true,          // Smooth scrolling animation
  //       markers: true,
  //     },
  //   });
  // },[])
  return (
    <div className="elegance-WrapperAbout">
      <div className="elegance-container">
        <div className="text-section">
          <div className="text-section-header">
            <div className="text-section-header-inner">
              <div className="header_text">
                <motion.div
                  className="HeaderTextInner"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  explore our legacy
                </motion.div>
                {/* <motion.div
                    className="animated-border"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  /> */}
              </div>
            </div>
            <motion.div
              className="image-wrapper-1"
              initial={{ y: 700, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image src={Image4} alt="Image 1" className="image_1" />
            </motion.div>
          </div>
          <div className="text-section-content">
            <div className="text-section-inner">
              <div className="TextSectionInnerFirst">
                Crown Decor, a Royale Touche Laminate group company, is a niche
                luxury laminate brand from India. It was launched in 1979 with
                the idea that laminate has unlimited potential in surface décor.
                We made people look at laminates as a resilient and flexible
                product. We gave laminates a complete makeover with unparalleled
                endless designs and textures. The product has a rich, luxurious
                feel that adds aesthetic value to interiors, making architects',
                end users', and interior designers' lives easy. Since 2011,
                Crown Laminates has boasted a legacy celebrating innovation,
                cutting-edge technology, craft, and expertise.
                {/* At Royal Crown, customers are the cornerstone of our unique
                business model. We are dedicated to providing every individual
                with an unparalleled royal service, ensuring that their
                experience is etched into their memories forever. Our story
                began on a scorching Indian summer day, where the golden grasses
                and swaying flowers painted a picture of tranquility. It was on
                this day that a visionary businessmen's dream was transformed
                into the reality we now know as Royal Crown. */}
                {/* Customers are at the heart of our unique business model. Royal
                Crown thrives at providing royal service to everyone. Our work
                is all about our customers and we believe their experience
                should be worth a thousand memories. However, we do have a tiny
                tale to tell, a sneak peek to our story. */}
              </div>
              <div className="text-section-inner-footer">read more</div>
            </div>
            <motion.div
              className="image-wrapper-2"
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image src={Image6} alt="Image 3" />
            </motion.div>
          </div>
        </div>
        <div className="image-section">
          <motion.div
            className="image-wrapper-3"
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image src={Image5} alt="Image 2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
