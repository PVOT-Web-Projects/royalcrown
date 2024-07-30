"use client";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import img1 from "@/images/circleImg1.jpg";
import img2 from "@/images/circleImg2.jpg";
import img3 from "@/images/circleImg3.jpg";
import img4 from "@/images/circleImg4.jpg";
import "./rotate.scss";
import "./textReveal.css";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: img2, text: "Laminate 2" },
  { src: img3, text: "Laminate 3" },
  { src: img4, text: "Laminate 4" },
  { src: img1, text: "Laminate 5" },
  { src: img2, text: "Laminate 6" },
  { src: img3, text: "Laminate 7" },
  { src: img4, text: "Laminate 8" },
  { src: img1, text: "Laminate 9" },
  { src: img1, text: "Laminate 1" },
];

const RotatingImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRefs = useRef([]);
  const [currentText, setCurrentText] = useState(images[0].text);
  const [scrollDirection, setScrollDirection] = useState(1);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.current) {
        setScrollDirection(1);
      } else {
        setScrollDirection(-1);
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const numImages = images.length;
    const imageDuration = 1 / numImages;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery_box1",
        start: "top center",
        end: `+=${numImages * 100}%`,
        scrub: true,
        pin: ".work2_wrap",
        markers: false,
        onUpdate: (self) => {
          const progress = self.progress - 0.6 * imageDuration;
          const index = Math.floor(progress / imageDuration) % numImages;
          const rotation = progress * 360;
          const index2 =
            Math.floor((rotation / 360) * images.length) % images.length;

          setCurrentIndex(index < 0 ? numImages + index : index);
          setCurrentText(images[index < 0 ? numImages + index : index2].text);
        },
      },
    });

    tl.to(".gallery_box_outer1", {
      duration: numImages,
      rotateY: 360,
      ease: "none",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // useEffect(() => {
  //   if (textRefs.current[currentIndex]) {
  //     gsap.fromTo(
  //       textRefs.current[currentIndex],
  //       { clipPath: scrollDirection === 1 ? "inset(0 100% 0 0)" : "inset(0 0 0 0)" },
  //       {
  //         clipPath: scrollDirection === 1 ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
  //         duration: 1.5,
  //         ease: "power1.inOut",
  //       }
  //     );
  //   }
  // }, [currentIndex, scrollDirection]);

  useEffect(() => {
    if (textRefs.current[currentIndex]) {
      gsap.fromTo(
        textRefs.current[currentIndex],
        {
          clipPath:
            scrollDirection === 1 ? "inset(0 100% 0 0)" : "inset(0 0 0 0)",
        },
        {
          clipPath:
            scrollDirection === 1 ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          duration: 1.5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".gallery_box1",
            start: "top center",
            end: "+=800",
            scrub: true,
          },
        }
      );
    }
  }, [currentIndex, scrollDirection]);

  return (
    <div style={{ position: "relative" }}>
      <div className="work2">
        <div className="work2_wrap">
          <div className="gallery_box1">
            <div className="gallery_box_outer1">
              {images.map((image, index) => (
                <div
                  className="gallery_box_in1"
                  key={index}
                  style={{
                    background: index % 2 === 0 ? "black" : "yellow",
                  }}
                >
                  <Image src={image.src} alt={`img${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="">
            {images.map((image, index) => (
              <div key={index}>
                <div
                  className="currentText"
                  key={index}
                  style={{
                    fontSize: "4rem",
                    color: "#ffffff17",
                    opacity: 0.3,
                    position: "absolute",
                    top: "350px",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: -10,
                  }}
                >
                  {currentText}
                </div>
                <div
                  key={index}
                  ref={(el) => (textRefs.current[index] = el)}
                  style={{
                    fontSize: "4rem",
                    color: "white",
                    position: "absolute",
                    top: "350px",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    whiteSpace: "nowrap",
                    opacity: index === currentIndex ? 1 : 0,
                    clipPath:
                      index === currentIndex
                        ? "inset(0 0% 0 0)"
                        : "inset(0 100% 0 0)",
                    zIndex: 10,
                  }}
                  className="currentText"
                >
                  {image.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingImages;
