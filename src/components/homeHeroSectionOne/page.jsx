"use client";
import Image from "next/image";
import "./homeheroOne.scss";
// import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image4 from "../../images/image_15_small.jpg";
// import Image5 from "../../images/image 48.jpg";
// import Image6 from "../../images/laminate - about-us 6.jpg";
// import Image4 from "../../images/aboutIMg1.jpg";
// import Image5 from "../../images/aboutImgg2.jpg";
// import Image6 from "../../images/fctImg5.JPG";
import Image4 from "../../images/newExp2.png";
import Image5 from "../../images/newExp1.png";
import Image6 from "../../images/exp3.png";
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
    // Set initial state of the .project-content
    gsap.set("#project-content", {
      x: -200,
      y: -200,
      opacity: 0,
    });

    // Animation with ScrollTrigger
    gsap.to("#project-content", {
      duration: 1.6,
      x: 0,
      y: 0,
      opacity: 1,
      delay: 0.2,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        markers: false, // Set to true if you want to debug with markers
      },
    });
  }, []);

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
    <div className="ExploreSection">
      <div className="ExploreSectionFlex" ref={sectionRef}>
        {/*  */}
        <div>
          <motion.div
            className="HeaderTextInner"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p> explore our <br /> legacy</p>
          </motion.div>

          <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="TextSectionInnerFirst">
            <p>
              Crown Decor, a Royale Touche Laminate group company, is a niche
              luxury laminate brand from India. It was launched in 1979 with the
              idea that laminate has unlimited potential in surface décor. We
              made people look at laminates as a resilient and flexible product.
              We gave laminates a complete makeover with unparalleled endless
              designs and textures. The product has a rich, luxurious feel that
              adds aesthetic value to interiors, making architects', end users',
              and interior designers' lives easy. Since 2011, Crown Laminates
              has boasted a legacy celebrating innovation, cutting-edge
              technology, craft, and expertise.
            </p>
            <Link href={"/about-us"}>
              <div className="text-section-inner-footer">read more</div>
            </Link>
          </motion.div>

        </div>
        {/* IMage section */}
        <div className="ImageDiv">
          <div className="ImageOne" ref={imageRef}>
            <Image src={Image4} alt="none" className="ImageSectionOne" />
          </div>
          <div className="ImageTwo" ref={imageRef1}>
            <Image src={Image5} alt="none" className="ImageSectionTwo" />
          </div>
          <div className="ImageThree" ref={imageRef2}>
            <Image src={Image6} alt="none" className="ImageSectionThree" />
          </div>
        </div>
      </div>
    </div>
  );
}
