import React, { useEffect, useState } from "react";
import Image from "next/image";
import AboutUs_vision from "../../images/image 19.jpg";
import vision_playButton from "@/images/svgLogos/vision_playButton.svg";
import "./aboutus_vision.scss";
import logo from "../../images/logo_white.png";
import LineHeaderText from "../lineheadertext/page";
const page = ({ duration = 60 }) => {
  const [width, setWidth] = useState(0);
  const increment = 100 / (duration * 10); // Increase the width 10 times per second

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setWidth((prevWidth) => {
        const newWidth = prevWidth + increment;
        if (newWidth >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newWidth;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [increment]);
  return (
    <>
      <div className="aboutUs_vision_outer">
        <div className="vision_header">
          <div className="headerText">Vision</div>
        </div>
        <div className="aboutUs_Wrapper">
          {/* <div className="video_section_1">
            <div className="vision_video">
              <iframe
                className="video_iframe"
                src="https://www.youtube.com/embed/JpabryVkBHU"
                title="#Enchante#ROYAL#CROWN#LAMINATES"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video_description">
              <div className="title">Video Title</div>
              <div className="description">
                From our infant days we have carved ourselves as renowned
                manufacturers and exporters of premium grade decorative
                laminates.
              </div>
            </div>
          </div> */}
          {/* <div className="video_section_1">
            <div className="vision_video">
              <iframe
                className="video_iframe"
                src="https://www.youtube.com/embed/JpabryVkBHU"
                title="#Enchante#ROYAL#CROWN#LAMINATES"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video_description">
              <div className="title">Video Title</div>
              <div className="description">
                From our infant days we have carved ourselves as renowned
                manufacturers and exporters of premium grade decorative
                laminates.
              </div>
            </div>
          </div>
          <div className="video_section_1">
            <div className="vision_video">
              <iframe
                className="video_iframe"
                src="https://www.youtube.com/embed/JpabryVkBHU"
                title="#Enchante#ROYAL#CROWN#LAMINATES"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video_description">
              <div className="title">Video Title</div>
              <div className="description">
                From our infant days we have carved ourselves as renowned
                manufacturers and exporters of premium grade decorative
                laminates.
              </div>
            </div>
          </div> */}
          <div className="video_section">
            <div className="vision_video">
              <Image
                class="vision_image_outer"
                src={AboutUs_vision}
                alt="Picture of the author"
              />
              <Image
                class="vision_playButton"
                src={vision_playButton}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="video_description">
              <div className="title">Video Title</div>
              <div className="description">
                From our infant days we have carved ourselves as renowned
                manufacturers and exporters of premium grade decorative
                laminates.
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default page;
