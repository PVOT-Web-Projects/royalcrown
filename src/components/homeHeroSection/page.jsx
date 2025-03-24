"use client";
import Image from "next/image";
import "./homehero.scss";
// import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image4 from "../../images/image_15_small.jpg";
// import Image5 from "../../images/image 48.jpg";
// import Image6 from "../../images/laminate - about-us 6.jpg";
import Image4 from "../../images/aboutIMg1.jpg";
import Image5 from "../../images/aboutImgg2.jpg";
import Image6 from "../../images/fctImg5.JPG";
// import Image4 from "../../images/exp1.png";
// import Image5 from "../../images/exp2.png";
// import Image6 from "../../images/exp3.png";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function HomeHeroSection() {
  const imageRef = useRef(null);
  const imageRef1 = useRef(null);
  const sectionRef = useRef(null);
  const imageRef2 = useRef(null);
useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { y: 0, scale: 1.2, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: 2, // Smoothness of the scroll animation
        },
      }
    );
  }, []);
  // const eleganceContainer = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { y: -100, scale: 1.7, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 2, // Smoothness of the scroll animation
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      imageRef1.current,
      { y: -100, scale: 1.7, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef1.current,
          start: "top 90%",
          end: "bottom 50%",
          scrub: 2, // Smoothness of the scroll animation
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      imageRef2.current,
      { y: -100, scale: 1.7, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef2.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 2, // Smoothness of the scroll animation
        },
      }
    );
  }, []);
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
    <div className="elegance-Wrapper" ref={sectionRef}>
      <div className="elegance-container">
        <div className="text-section">
          <div className="text-section-header">
            <div className="text-section-header-inner">
              <div className="header_text">
                <motion.div
                  className="HeaderTextInner"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5  }}
                  viewport={{ once: true }}
                >
                  <p>
                    explore our <br /> legacy
                  </p>
                  {/* <p>
                  explore our</p>
                  <p>legacy</p> */}
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
            <div className="image-wrapper-1" ref={imageRef}>
              <Image src={Image4} alt="Image 1" className="image_1" />
            </div>
          </div>
          <div className="text-section-content">
            <div className="text-section-inner">
              <motion.div
                className="TextSectionInnerFirst"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                Royal Crown Laminates' legacy celebrates innovation,
                cutting-edge technology, craft, and expertise in delivering the
                best and trendsetting laminate surfaces. We have grown to become
                a leader in every sense of the word in the laminate industry.
                Our unceasing efforts with architects, interiors, OEMs,
                contractors, carpenters, and end consumers and an in-depth
                understanding of the market and its demands have strengthened
                our product base. Moreover, it has helped us establish ourselves
                as domestic and global leaders.
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
              </motion.div>
              <Link href={"/about-us"}>
                <div className="text-section-inner-footer">read more</div>
              </Link>
            </div>
            <div ref={imageRef1} className="image-wrapper-2">
              <Image src={Image6} alt="Image 3" />
            </div>
          </div>
        </div>
        <div className="image-section">
          <div ref={imageRef2} className="image-wrapper-3">
            <Image src={Image5} alt="Image 2" />
          </div>
        </div>
      </div>
    </div>
  );
}
