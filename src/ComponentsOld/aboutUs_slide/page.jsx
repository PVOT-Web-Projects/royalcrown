"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./aboutUs_slide.scss";
import Image from "next/image";
import AboutUs_size_image1 from "@/images/aboutUs_size_image1.png";
import AboutUs_size_image2 from "@/images/aboutUs_size_image2.png";
import AboutUs_size_image3 from "@/images/AboutUs_size_image3.png";
import AboutUs_size_image4 from "@/images/aboutUs_size_image4.png";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const triggerElement = triggerRef.current;
    const mediaQuery = window.matchMedia("(min-width: 1600px)");
    const xValue = mediaQuery.matches ? "-220vw" : "-250vw";
    const pin = gsap.fromTo(
      sectionElement,
      {
        x: 0,
      },
      {
        x: xValue,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerElement,
          start: "top top",
          end: "300 top",
          scrub: 2,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div className="wrap">
          <div ref={sectionRef} className="scroll-section-inner">
            <div className="scroll-section">
              <div class="aboutUs_size_outer">
                <div class="parent">
                  <div class="div1">
                    <div class="box1_heading">Sizes</div>
                    <div class="box1_text_outer">
                      <div class="box1_text">1220 x 2440mm</div>
                      <div class="box1_text">1220 x 3050mm</div>
                      <div class="box1_text">1310 x 3050mm</div>
                      <div class="box1_text">1520 x 3050mm</div>
                      <div class="box1_text">1845 x 3670mm</div>
                      <div class="box1_text">1860 x 4300mm</div>
                    </div>
                  </div>

                  <div class="div2">
                    <Image
                      class="vision_image"
                      src={AboutUs_size_image1}
                      alt="Picture of the author"
                    />
                  </div>

                  <div class="div3">
                    <Image
                      class="vision_image"
                      src={AboutUs_size_image2}
                      alt="Picture of the author"
                    />
                  </div>

                  <div class="div4">
                    <div class="side1">
                      <div class="side1_number">2000+</div>
                      <div class="side1_text">SKUs</div>
                    </div>

                    <div class="side2">
                      <div class="side2_number">100+</div>
                      <div class="side2_text">Textures</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-section">
              <div class="aboutUs_size_outer">
                <div class="parent">
                  <div class="div1">
                    <div class="box1_heading">Sizes</div>
                    <div class="box1_text_outer">
                      <div class="box1_text">1220 x 2440mm</div>
                      <div class="box1_text">1220 x 3050mm</div>
                      <div class="box1_text">1310 x 3050mm</div>
                      <div class="box1_text">1520 x 3050mm</div>
                      <div class="box1_text">1845 x 3670mm</div>
                      <div class="box1_text">1860 x 4300mm</div>
                    </div>
                  </div>

                  <div class="div2">
                    <Image
                      class="vision_image"
                      src={AboutUs_size_image1}
                      alt="Picture of the author"
                    />
                  </div>

                  <div class="div3">
                    <Image
                      class="vision_image"
                      src={AboutUs_size_image2}
                      alt="Picture of the author"
                    />
                  </div>

                  <div class="div4">
                    <div class="side1">
                      <div class="side1_number">2000+</div>
                      <div class="side1_text">SKUs</div>
                    </div>

                    <div class="side2">
                      <div class="side2_number">100+</div>
                      <div class="side2_text">Textures</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-section">
              <div class="aboutUs_size_outer">
                <div class="parentx">

                  <div class="div1x">
                    <div class="extra_card_outer">
                      <div class="extra_card_text_heading">Quality</div>
                      <div class="extra_card_text">
                      At the heart of it all is 
                      <br/>
                      our Unparalled Quality
                      </div>
                      <div class="extra_card_text">
                      Fully Equipped Laboratory
                      <br/>
                      State of the Art
                      
                      </div>
                      <div class="extra_card_text">
                      Manufacturing Unit owing to 45+
                      <br/>
                       years of experience, therefore we 
                       <br/>
                       know what we are doing and we 
                       <br/>
                       do it well
                      </div>
                      <div class="extra_card_text">
                        Warehouses around the globe
                      </div>
                    </div>
                  </div>

                  <div class="div2x">
                    <Image
                      class="vision_image"
                      src={AboutUs_size_image4}
                      alt="Picture of the author"
                    />
                  </div>

                  <div class="div3x">
                    <Image
                      class="vision_image"
                      src={AboutUs_size_image3}
                      alt="Picture of the author"
                    />
                  </div>


                  <div class="div4x">
                    <div class="extra_card_outer">
                      <div class="extra_card_text_heading">Distribution</div>
                      <div class="extra_card_text">
                        PAN India Product Showroom
                      </div>
                      <div class="extra_card_text">
                        15000+ Dealers PAN India
                      </div>
                      <div class="extra_card_text">
                        Presence in 60+ Countries
                      </div>
                      <div class="extra_card_text">
                        Warehouses around the globe
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
