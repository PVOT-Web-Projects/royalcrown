"use client";
import AboutUsHero from "@/components/aboutUsHero/aboutUsHero";
import "./Home.scss";
import AboutUsEstablishment from "@/components/aboutUsEstablishment/aboutUsEstablishment";
import AboutUsVision from "@/components/aboutUsVision/aboutUsVision";
import AboutUsWhyUs from "@/components/aboutUsWhyUs/aboutUsWhyUs";
import Form from "@/components/forms/form1/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
const AboutUs = () => {
  return (
    <div>
      <AboutUsHero />
      <AboutUsEstablishment />
      <AboutUsVision />
      <AboutUsWhyUs />
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    </div>
  );
};
export default AboutUs;
