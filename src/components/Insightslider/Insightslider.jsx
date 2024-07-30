"use client";
import React from "react";
import "./Insightslider.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray(".horizontal-section");
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#container",
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          end: () => "+=" + document.querySelector("#container").offsetWidth,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="mainContainer">
       <div className="InsightsTextMain">
        <p className="InsightsText">Latest Insights</p>
        <div className="InsightsButton">
            <button className="innerrbutton">Explore All Blogs</button>
        </div>
       </div>
        <main id="container">
      <section className="horizontal-section">
        <div className="textSlider">
            <p className="textSliderText">Urban Design Trends with Royal Crown Luxury Laminates</p>
            <p className="textSliderText2">07 March 2024</p>
        </div>
      </section>

      <section className="horizontal-section">
        <div className="textSlider">
            <p className="textSliderText">Urban Design Trends with Royal Crown Luxury Laminates</p>
            <p className="textSliderText2">07 March 2024</p>
        </div>
      </section>

      <section className="horizontal-section">
        <div className="textSlider">
            <p className="textSliderText">Urban Design Trends with Royal Crown Luxury Laminates</p>
            <p className="textSliderText2">07 March 2024</p>
        </div>
      </section>

      <section className="horizontal-section">
        <div className="textSlider">
            <p className="textSliderText">Urban Design Trends with Royal Crown Luxury Laminates</p>
            <p className="textSliderText2">07 March 2024</p>
        </div>
      </section>
      
      <section className="horizontal-section">
        <div className="textSlider">
            <p className="textSliderText">Urban Design Trends with Royal Crown Luxury Laminates</p>
            <p className="textSliderText2">07 March 2024</p>
        </div>
      </section>

      <section className="horizontal-section">
        <div className="textSlider">
            <p className="textSliderText">Urban Design Trends with Royal Crown Luxury Laminates</p>
            <p className="textSliderText2">07 March 2024</p>
        </div>
      </section>
      <section className="horizontal-section">
        <div className="textSlider">
            <p className="textSliderText">Urban Design Trends with Royal Crown Luxury Laminates</p>
            <p className="textSliderText2">07 March 2024</p>
        </div>
      </section>

      <section className="horizontal-section">
        <div className="textSlider">
            <p className="textSliderText">Urban Design Trends with Royal Crown Luxury Laminates</p>
            <p className="textSliderText2">07 March 2024</p>
        </div>
      </section>
      
    </main>
    </div>
  );
};
export default Footer;
