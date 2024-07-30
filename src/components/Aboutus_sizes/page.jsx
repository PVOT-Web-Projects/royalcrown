import React from "react";
import Image from "next/image";
import AboutUs_size_image1 from "@/images/AboutUs_size_image1.png";
import AboutUs_size_image2 from "@/images/AboutUs_size_image2.png";
import "./aboutUs_sizes.scss";
const page = () => {
  return (
    <>
      <div class="aboutUs_size_outer">
        <div class="parent">
          <div class="div1"></div>

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
    </>
  );
};

export default page;
