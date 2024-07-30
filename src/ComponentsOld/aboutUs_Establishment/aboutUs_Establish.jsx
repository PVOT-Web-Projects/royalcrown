import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./aboutUs_Establishment.scss";
import establish_image from "../../images/laminate - about-us 5.jpg";
import Image from "next/image";
import crown from "../../images/crown11.png";

gsap.registerPlugin(ScrollTrigger);

const AboutUsEstablishment = () => {
  const container = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    create();
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createText();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createBoll();
  }, []);

  const createAnimation = () => {
    gsap.to(".triggered-element", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 100%",
        end: "bottom 10%",
      },
      opacity: 1,
      color: "black",
      ease: "out",
      duration: 1.5,
      ease: "slow(0.7,0.7,false)",
      scale: 1.8,
      stagger: 0.9,
    });
  };

  const create = () => {
    gsap.to(".triggered-section", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 100%",
        end: "bottom 20%",
      },
      opacity: 1,
      color: "black",
      ease: "out",
      scale: 2,
      duration: 1.5,
      ease: "slow(0.7,0.7,false)",
      stagger: 0.9,
    });
  };
  const createText = () => {
    gsap.to(".triggered-text", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 100%",
        end: "bottom 20%",
      },
      opacity: 1,
      color: "black",
      ease: "out",
      scale: 1.2,
      duration: 1.5,
      ease: "slow(0.7,0.7,false)",
      stagger: 0.9,
    });
  };

  const createBoll = () => {
    gsap.to(".triggered-bead", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 100%",
        end: "bottom 20%",
      },
      opacity: 1,
      backgroundColor: "#C3A464",
      duration: 1.5,
      ease: "slow(0.7,0.7,false)",
      scale: 2.2,
      stagger: 0.9,
    });
  };
  return (
    <>
      <div>
        <div className="timeline_outer">
          <div className="timeline_wrapper">
          <div className="establish_header">
            <div>
              <Image src={crown} />
            </div>
            <div className="header_text">The Establishment</div>
          </div>
            <div className="timeline_main_outer">
              <div className="timeline_width">
                <div className="timeline" ref={container}>
                  <div className="line"></div>

                  <div className="section">
                    <div className="timeline_year triggered-section">1990</div>
                    <p className="timeline_comment triggered-text">
                    From our infant days we have carved ourselves as renowned manufacturers and exporters of premium grade decorative laminates.
                    </p>
                    <div className="bead_outer">
                      <div className="bead"></div>
                    </div>
                    <div className="content triggered-element">
                      <Image
                        src={establish_image}
                        alt="Your Image"
                        className="timeline_image"
                      />
                    </div>
                  </div>                  
                  <div className="section">
                    <div className="timeline_year triggered-section">1991</div>
                    <p className="timeline_comment triggered-text">
                    From our infant days we have carved ourselves as renowned manufacturers and exporters of premium grade decorative laminates.
                    </p>
                    <div className="bead_outer">
                      <div className="bead"></div>
                    </div>
                    <div className="content triggered-element">
                      <Image
                        src={establish_image}
                        alt="Your Image"
                        className="timeline_image"
                      />
                    </div>
                  </div>                  
                  <div className="section">
                    <div className="timeline_year triggered-section">1990</div>
                    <p className="timeline_comment triggered-text">
                    From our infant days we have carved ourselves as renowned manufacturers and exporters of premium grade decorative laminates.
                    </p>
                    <div className="bead_outer">
                      <div className="bead"></div>
                    </div>
                    <div className="content triggered-element">
                      <Image
                        src={establish_image}
                        alt="Your Image"
                        className="timeline_image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsEstablishment;
