"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./aboutUs_timeline.scss";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const triggerElement = triggerRef.current;
    const mediaQuery = window.matchMedia("(min-width: 1600px)");
    const xValue = mediaQuery.matches ? "-220vw" : "-350vw";
    
    const pin = gsap.fromTo(
      sectionElement,
      {
        y: 0,
      },
      {
        y: xValue,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerElement,
          start: "top top",
          end: "300 top",
          scrub: 1.5,
          pin: true,
        },
      }
    );

    const timelineYears = sectionElement.querySelectorAll(".timeline_year_outer");

    timelineYears.forEach((year, index) => {
      ScrollTrigger.create({
        trigger: year,
        start: "left 80%",
        end: "left 50%",
        onEnter: () => gsap.to(year, { opacity: 1 }),
        onLeaveBack: () => gsap.to(year, { opacity: 0.5 }),
        onEnterBack: () => gsap.to(year, { opacity: 1 }),
        onLeave: () => gsap.to(year, { opacity: 0.5 }),
      });
    });

    return () => {
      pin.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div className="wrap">
          <div ref={sectionRef} className="scroll-section-inner">
            <div className="timeline_year_outer" style={{ opacity: 0.5 }}>
              <div className="timeline_year">1990</div>
            </div>
            <div className="timeline_year_outer" style={{ opacity: 0.5 }}>
              <div className="timeline_year">1993</div>
            </div>
            <div className="timeline_year_outer" style={{ opacity: 0.5 }}>
              <div className="timeline_year">1995</div>
            </div>
            <div className="timeline_year_outer" style={{ opacity: 0.5 }}>
              <div className="timeline_year">1997</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
