import Image from "next/image";
import { useEffect, useState } from "react";
import "./aboutLaminate.scss";
import crown from "../../images/crown11.png";
import gsap from "gsap";

const AboutLaminate = ({
  heading,
  text,
  leftText,
  rightText,
  image,
  scrollTo,
  goToSectionRef,
  showArrow,
}) => {
  useEffect(() => {
    const animateLine = () => {
      gsap.fromTo(
        '#scroll-line',
        { y: 5 },
        {
          y: 15,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          duration: 1.5,
        }
      );
    };

    animateLine();
  }, []);
  return (
    <div className="about_laminate">
      <div className="laminate-wrapper">
        <div className="laminate-left">
          {/* <div className="left_aboutus">ABOUT US</div> */}
          <div>
            <Image src={image} className="left_image" />
          </div>
        </div>
        <div className="laminate-right">
          <div className="heading_text">
            <div className="laminate_header">About Us </div>
            <div className="heading">{heading}</div>
            <div className="text">{text}</div>
            <div className="text">{text}</div>
          </div>
          <div className="bottom_text">
            <Image src={crown} alt="crown" />
            <div className="right_text">{rightText}</div>
          </div>
        </div>
      </div>
      {showArrow && (
        <div className="container_mouse" onClick={() => scrollTo(goToSectionRef)}>
          <svg
            height={50}
            width={50}
            className="nectar-scroll-icon"
            viewBox="0 0 30 45"
          >
            <path
              className="nectar-scroll-icon-path"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeMiterlimit="10"
              d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"
            ></path>
            <line
              id="scroll-line"
              x1="15"
              y1="10"
              x2="15"
              y2="20"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default AboutLaminate;
