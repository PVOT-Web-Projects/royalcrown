"use client";
import { useEffect } from "react";
import "./establish.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Establish = () => {
  useEffect(() => {
    const parentContainer = document.getElementById("section-timeline");
    if (parentContainer) {
      const timelineContainer = parentContainer.querySelector(".timeline-container");
      if (timelineContainer) {
        const sections = timelineContainer.querySelectorAll(".year");
        const vh = (coef) => window.innerHeight * (coef / 100);

        ScrollTrigger.create({
          id: "parent-timeline",
          trigger: parentContainer,
          start: "top top",
          toggleClass: "started",
          pin: true,
          markers: true,
          end: () => "+=" + (sections.length - 1) * vh(50),
        });

        sections.forEach((sct, i) => {
          let startPosition = `top+=${vh(20) * i} top`;
          let endPosition = `bottom+=${vh(20) * (i + 1)} top`;
          if (i === 0) {
            startPosition = "top top";
            endPosition = `bottom+=${vh(20)} top`;
          }

          ScrollTrigger.create({
            id: "section",
            trigger: sct,
            start: startPosition,
            end: endPosition,
            scrub: 1,
            toggleClass: "active",
            markers: true,
            onEnter: () => {
              const sctIndex = sct.getAttribute("data-count");
              const shiftValue = 12;
              console.log(sctIndex);

              const tlContainerShiftUp = shiftValue * sctIndex * -1;

              timelineContainer.style.marginTop = tlContainerShiftUp + "px";
            },
            onLeaveBack: () => {
              const currentMarginTop = parseInt(timelineContainer.style.marginTop);
              const newMarginValue = currentMarginTop + 48;
              timelineContainer.style.marginTop = newMarginValue + "px";
            },
          });
        });
      }
    }
  }, []);

  return (
    <div className="establish">
      <div id="section-timeline" className="section-timeline">
        <div className="timeline-container">
          <article className="year year-1" data-count="1">
            <hgroup>
              <h2>1935</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </hgroup>
          </article>
          <article className="year year-2" data-count="2">
            <hgroup>
              <h2>1949</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </hgroup>
          </article>
          <article className="year year-3" data-count="3">
            <hgroup>
              <h2>1950</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </hgroup>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Establish;
