import Image from "next/image";
import "./aboutUs_Texture.scss";
import Crown from "../../images/crown11.png";
import image from "../../images/image 26.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import YellowButton from "../buttons/yellowButton/YellowButton";

const AboutUs_Texture = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const rightRef = useRef(null);
  const rightBottomRef = useRef(null);
  const footerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const triggerElement = triggerRef.current;
    const footerElement = footerRef.current;

    if (sectionElement && triggerElement) {
      const horizontalSections = gsap.utils.toArray(".image_box");

      const scrollAnimation = gsap.fromTo(
        horizontalSections,
        { xPercent: 0 },
        {
          xPercent: -100 * (horizontalSections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: triggerElement,
            pin: true,
            scrub: true,
            start: "top top",
            end: "+=1000",
            snap: 1 / (horizontalSections.length - 1),
          },
        }
      );

      return () => {
        scrollAnimation.kill();
      };
    }

    if (footerElement) {
      const counterElements = footerElement.querySelectorAll('.footer_box_description');

      counterElements.forEach((element) => {
        const targetNumber = parseInt(element.getAttribute('data-target'), 10);

        gsap.fromTo(
          element,
          { innerText: 0 },
          {
            innerText: targetNumber,
            duration: 2,
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom bottom',
              scrub: true,
            },
            snap: { innerText: 1 },
            ease: 'power1.inOut',
            modifiers: {
              innerText: (value) => parseInt(value).toFixed(0),
            },
          }
        );
      });
    }
  }, []);

  return (
    <>
      <div className="aboutUs_Texture_Container" ref={triggerRef}>
        <div className="aboutUs_Texture_wrapper">
          <motion.div
            className="texture_left"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <div className="heading_text">
              <p>Why</p>
              <p className="brown">Royal</p>
              <p className="brown">Crown?</p>
            </div>
            <div className="texture_section">
              <div>
                <div className="number">1000+</div>
                <div className="text">Textures</div>
              </div>
              <div>
                <div className="number">2000+</div>
                <div className="text">SKUs</div>
              </div>
            </div>
          </motion.div>
          <div className="texture_right">
            <div className="imageBox" ref={sectionRef}>
              <div className="image_box">
                <Image src={image} alt="texture image" className="image1" />
              </div>
              <div className="image_box">
                <Image src={image} alt="texture image" className="image1" />
              </div>
              <div className="image_box">
                <Image src={image} alt="texture image" className="image1" />
              </div>
              <div className="image_box">
                <Image src={image} alt="texture image" className="image1" />
              </div>
            </div>
            <div className="size_section">
              <motion.div
                className="size_section_inner"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <div className="size_left">
                  <p>Sizes</p>
                </div>
                <div className="size_right">
                  <div>
                    <p>1220 x 2440mm</p>
                  </div>
                  <div>
                    <p>1220 x 2440mm</p>
                  </div>
                  <div>
                    <p>1220 x 2440mm</p>
                  </div>
                  <div>
                    <p>1220 x 2440mm</p>
                  </div>
                  <div>
                    <p>1220 x 2440mm</p>
                  </div>
                  <div>
                    <p>1220 x 2440mm</p>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* <div className="texture_footer">
              <motion.div className="texture_inner"
               initial={{ x: 100, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ duration: 2 }}
               viewport={{ once: true }}
              >
                <div className="logo_image">
                  <Image src={Crown} alt="Crown Logo" />
                </div>
                <div className="footer_text">
                  <p className="footer_text_inner">High Rating Reviews</p>
                </div>
                <div className="btn">
                  <YellowButton btn_text={"More"} url={"/"} />
                </div>
              </motion.div>
            </div> */}
          </div>
        </div>
        <div className="texture_footer_wrapper">
          <div className="texture_footer_container">
            <div className="footer_box">
              <div className="footer_box_heading">
                <div>Our Team</div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z" />
                </svg>
              </div>
              <div className="footer_box_description" data-taget ="1">
                100 <sup>+</sup>
              </div>
            </div>
            <div className="footer_box">
              <div className="footer_box_heading">
                <div>Our Customer</div>
              </div>
              <div>
                <svg
                  width="80"
                  height="80"
                  xmlns="http://www.w3.org/2000/svg"
                  // fill-rule="evenodd"
                  // clip-rule="evenodd"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 16.488l1.526-.723c1.792-.81 2.851-.344 4.349.232 1.716.661 2.365.883 3.077 1.164 1.278.506.688 2.177-.592 1.838-.778-.206-2.812-.795-3.38-.931-.64-.154-.93.602-.323.818 1.106.393 2.663.79 3.494 1.007.831.218 1.295-.145 1.881-.611.906-.72 2.968-2.909 2.968-2.909.842-.799 1.991-.135 1.991.72 0 .23-.083.474-.276.707-2.328 2.793-3.06 3.642-4.568 5.226-.623.655-1.342.974-2.204.974-.442 0-.922-.084-1.443-.25-1.825-.581-4.172-1.313-6.5-1.6v-5.662zm-1 6.538h-4v-8h4v8zm1-7.869v-1.714c-.006-1.557.062-2.447 1.854-2.861 1.963-.453 4.315-.859 3.384-2.577-2.761-5.092-.787-7.979 2.177-7.979 2.907 0 4.93 2.78 2.177 7.979-.904 1.708 1.378 2.114 3.384 2.577 1.799.415 1.859 1.311 1.853 2.879 0 .13-.011 1.171 0 1.665-.483-.309-1.442-.552-2.187.106-.535.472-.568.504-1.783 1.629-1.75-.831-4.456-1.883-6.214-2.478-.896-.304-2.04-.308-2.962.075l-1.683.699z" />
                </svg>
              </div>
              <div className="footer_box_description">
                100 <sup>+</sup>
              </div>
            </div>
            <div className="footer_box">
              <div className="footer_box_heading">
                <div>Our Stores</div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 9v-1.098l1.047-4.902h1.905l1.048 4.9v1.098c0 1.067-.933 2.002-2 2.002s-2-.933-2-2zm5 0c0 1.067.934 2 2.001 2s1.999-.833 1.999-1.9v-1.098l-2.996-5.002h-1.943l.939 4.902v1.098zm-10 .068c0 1.067.933 1.932 2 1.932s2-.865 2-1.932v-1.097l.939-4.971h-1.943l-2.996 4.971v1.097zm-4 2.932h22v12h-22v-12zm2 8h18v-6h-18v6zm1-10.932v-1.097l2.887-4.971h-2.014l-4.873 4.971v1.098c0 1.066.933 1.931 2 1.931s2-.865 2-1.932zm15.127-6.068h-2.014l2.887 4.902v1.098c0 1.067.933 2 2 2s2-.865 2-1.932v-1.097l-4.873-4.971zm-.127-3h-14v2h14v-2z" />
                </svg>
              </div>
              <div className="footer_box_description">
                100 <sup>+</sup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs_Texture;
