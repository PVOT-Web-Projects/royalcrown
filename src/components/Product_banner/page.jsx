import React from "react";
import Image from "next/image";
import Link from "next/link";
import productBannerImage from "@/images/product_page_banner.png";
import "./productBanner.scss";
const productBanner = () => {
  return (
    <>
      <div class="first_outer">
      <div class="productBannerOuter">
        <div class="bannerSide1">
          <div class="bannerHeading">PRODUCT RANGE</div>
          <div class="bannerText">
            Explore the newest collection of laminates from The Royal Crown.,
            which are available in standard and custom made dimenstion Scroll to
            Explore
          </div>
        </div>

        <div class="bannerSide2">
          <Image
            class="vision_image"
            src={productBannerImage}
            alt="Banner_image"
          />
        </div>

        

      </div>
      <div className="link">
            <Link href={"#"}>Let's Start</Link>
          </div>
      </div>
    </>
  );
};

export default productBanner;
