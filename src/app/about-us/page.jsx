"use client";
import { useEffect } from "react";
import "./Home.scss";
import AboutUsEstablishment from "@/components/aboutUsEstablishment/aboutUsEstablishment";
import AboutUsVision from "@/components/aboutUsVision/aboutUsVision";
import AboutUsWhyUs from "@/components/aboutUsWhyUs/aboutUsWhyUs";
import Form from "@/components/forms/form1/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/getInTouchImage.jpg";
import AboutUsDemo from "@/components/aboutdemohero/page";
// import HomeHeroSection from "@/components/homeHeroSection/page";
import HomeHeroSection from "@/components/homeHeroSectionAbout/page";
import AboutUsHero from "@/components/aboutUsHero/aboutUsHero";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us | Royal Crown";
  });
  return (
    <div>
      {/* <AboutUsDemo /> */}
      <AboutUsHero />
      <HomeHeroSection />
      {/* <HomeHeroSection/> */}
      {/* <AboutUsEstablishment /> */}
      <AboutUsVision />
      <AboutUsWhyUs
        heading={"Why Us"}
        cardOneText={
          "With a presence in 60+ countries and global warehousing, we ensure seamless accessibility. Committed to sustainability, we utilize wind and solar power to reduce our carbon footprint. As proud members of FSC and Greenguard, we prioritize eco-friendly practices while delivering high-quality, responsibly sourced laminates worldwide."
        }
        cardTwoText={
          "With a diverse range of 2000 SKUs and 100 unique textures, we offer endless design possibilities. From classic to contemporary, our extensive collection ensures the perfect match for every project. Crafted for durability and aesthetics, our laminates provide versatility to transform spaces with style and functionality."
        }
        cardThreeText={
          "Our state-of-the-art manufacturing unit, ensures top-quality laminates crafted with precision. Using technology and strict quality control, we deliver durable and stylish solutions. With a wide range of sizes available, our laminates offer versatility, reliability, and superior performance."
        }
        cardFourText={
          "With 15,000+ dealerships across India and abroad, along with 150+ product showrooms, we ensure easy access to our premium laminates. Our strong distribution network guarantees seamless availability, bringing quality and innovation closer to you. Wherever you are, our expansive presence ensures superior products and exceptional service at your convenience."
        }
      />
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    </div>
  );
};
export default AboutUs;
