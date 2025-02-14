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
import HomeHeroSection from "@/components/homeHeroSection/page";
import AboutUsHero from "@/components/aboutUsHero/aboutUsHero";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us | Royal Crown";
  });
  return (
    <div>
      {/* <AboutUsDemo /> */}
      <AboutUsHero />
      {/* <HomeHeroSection/> */}
      <AboutUsEstablishment />
      <AboutUsVision />
      <AboutUsWhyUs
        heading={"Why Us"}
        cardOneText={
          "With over 45 years of expertise, Royal Crown Laminates has built a strong legacy ofquality and trust. Our journey reflects a commitment to excellence, delivering premiumlaminates that blend aesthetics with durability."
        }
        cardTwoText={
          "Our diverse range of laminates offers endless design possibilities. With various textures, finishes, and thicknesses, we provide solutions for both residential andcommercial projects. Whether you seek classic elegance or contemporary designs."
        }
        cardThreeText={
          "Innovation drives everything we do at Royal Crown Laminates. We constantly explorenew designs, materials, and technologies to create high-quality laminates. We ensureour products stay ahead of trends, offering stylish solutions."
        }
        cardFourText={
          "We adhere to the highest quality and environmental standards, reflected in ourprestigious certifications like FSC and Greengard. These certifications ensure that ourproducts are safe, sustainable, and responsibly manufactured."
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
