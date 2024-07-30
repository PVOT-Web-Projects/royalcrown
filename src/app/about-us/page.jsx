"use client";
import AboutUsHero from "@/components/aboutUsHero/aboutUsHero";
import "./Home.scss";
import AboutUsEstablishment from "@/components/aboutUsEstablishment/aboutUsEstablishment";
import AboutUsVision from "@/components/aboutUsVision/aboutUsVision";
import AboutUsWhyUs from "@/components/aboutUsWhyUs/aboutUsWhyUs";
const AboutUs = () => {
  return (
      <div>
        <AboutUsHero/>
        <AboutUsEstablishment/>
        <AboutUsVision />
        <AboutUsWhyUs />
      </div>
  );
};
export default AboutUs;
