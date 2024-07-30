"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./abc.scss";
import Image from "next/image";
import demoimage from "../../images/insightslider.png";
import YellowButton from "../buttons/yellowButton/YellowButton";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const counterRef = useRef(null); // Ref for the counter element
  const [currentIndex, setCurrentIndex] = useState(0);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const triggerElement = triggerRef.current;

    // Ensure the section element and trigger element are available
    if (sectionElement && triggerElement) {
      const horizontalSections = gsap.utils.toArray(".scroll-section");

      const scrollAnimation = gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerElement,
          start: "top top",
          end: () => "+=" + triggerElement.offsetWidth * (horizontalSections.length - 1),
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          onUpdate: (self) => {
            const index = Math.round(self.progress * (horizontalSections.length - 1));
            setCurrentIndex(index);
          },
        },
      });

      return () => {
        scrollAnimation.kill();
      };
    }
  }, []);

  useEffect(() => {
    if (counterRef.current) {
      gsap.fromTo(
        counterRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2 }
      );
    }
  }, [currentIndex]);

  return (
    <div style={{ position: "relative", marginTop: "80px" }}>
      <section className="scroll-section-outer">
        <div ref={triggerRef}>
          <div className="InsightsTextMain">
            <p className="InsightsText">Latest Insights</p>
            <div className="InsightsButton">
              <YellowButton btn_text={"Explore All Blogs"} url={"/"} />
            </div>
          </div>
          <div className="wrap">
            <div className="fixed-counter">
              <div>
                <div className="counter">
                  {String(currentIndex + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
            <div ref={sectionRef} className="scroll-section-inner">
              <div className="scroll-section">
                <div>
                  <Image src={demoimage} alt="none" className="image1" />
                  <div className="textSlider">
                    <p className="textSliderText">
                      Urban Design Trends with Royal Crown Luxury Laminates
                    </p>
                    <p className="textSliderText2">07 March 2024</p>
                  </div>
                </div>
              </div>
              <div className="scroll-section">
                <div>
                  <Image src={demoimage} alt="none" className="image1" />
                  <div className="textSlider">
                    <p className="textSliderText">
                      Urban Design Trends with Royal Crown Luxury Laminates
                    </p>
                    <p className="textSliderText2">07 March 2024</p>
                  </div>
                </div>
              </div>
              <div className="scroll-section">
                <div>
                  <Image src={demoimage} alt="none" className="image1" />
                  <div className="textSlider">
                    <p className="textSliderText">
                      Urban Design Trends with Royal Crown Luxury Laminates
                    </p>
                    <p className="textSliderText2">07 March 2024</p>
                  </div>
                </div>
              </div>
              <div className="scroll-section">
                <div>
                  <Image src={demoimage} alt="none" className="image1" />
                  <div className="textSlider">
                    <p className="textSliderText">
                      Urban Design Trends with Royal Crown Luxury Laminates
                    </p>
                    <p className="textSliderText2">07 March 2024</p>
                  </div>
                </div>
              </div>
              <div className="scroll-section">
                <div>
                  <Image src={demoimage} alt="none" className="image1" />
                  <div className="textSlider">
                    <p className="textSliderText">
                      Urban Design Trends with Royal Crown Luxury Laminates
                    </p>
                    <p className="textSliderText2">07 March 2024</p>
                  </div>
                </div>
              </div>
              <div className="scroll-section">
                <div>
                  <Image src={demoimage} alt="none" className="image1" />
                  <div className="textSlider">
                    <p className="textSliderText">
                      Urban Design Trends with Royal Crown Luxury Laminates
                    </p>
                    <p className="textSliderText2">07 March 2024</p>
                  </div>
                </div>
              </div>
              <div className="scroll-section">
                <div>
                  <Image src={demoimage} alt="none" className="image1" />
                  <div className="textSlider">
                    <p className="textSliderText">
                      Urban Design Trends with Royal Crown Luxury Laminates
                    </p>
                    <p className="textSliderText2">07 March 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ScrollSection;
