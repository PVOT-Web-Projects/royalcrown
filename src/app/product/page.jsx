"use client";
import { useEffect } from "react";
import ProductHero from "@/components/productHero/page";
import "./product.scss";
import Products from "@/components/product/page";
// import AboutUs_products from "@/components/aboutUs_products/page";
import AboutUs_productsOne from "@/components/aboutUs_productsOne/page";
import Form from "@/components/forms/form1/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/getInTouchImage.jpg";
import { useRef } from "react";
// import Lenis from "lenis"; // Import Lenis
const AboutUs = () => {
  const section1 = useRef();
  const section2 = useRef();
  // const scrollContainer = useRef();
  useEffect(() => {
    document.title = "Products | Royal Crown";
  });

  // Dynamically import LocomotiveScroll and initialize it
  // useEffect(() => {
  //   let locomotiveScroll;
  //   const initializeScroll = async () => {
  //     const { default: LocomotiveScroll } = await import("locomotive-scroll");
  //     locomotiveScroll = new LocomotiveScroll({
  //       el: scrollContainer.current,
  //       smooth: true, 
  //     });
  //   };
  //   initializeScroll();
  //   return () => {
  //     if (locomotiveScroll) {
  //       locomotiveScroll.destroy();
  //     }
  //   };
  // }, []);

   // Dynamically import Lenis and initialize it
  //  useEffect(() => {
  //   let lenis;
  //   const initializeScroll = () => {
  //     lenis = new Lenis({
  //       duration: 2,  // Duration of the smooth scroll, adjust as necessary
  //       smooth: true,   // Enable smooth scrolling
  //       direction: 'vertical',  // Scroll direction (vertical by default)
  //       lerp: 2,      // Adjust the interpolation to smooth out the scroll
  //       gestureSensitivity: 0.05, // Sensitivity of the gestures
  //     });

  //     // Start Lenis
  //     function animate(time) {
  //       lenis.raf(time);  // Render frame using Lenis
  //       requestAnimationFrame(animate);
  //     }
  //     requestAnimationFrame(animate);
  //   };
  //   initializeScroll();
  //   return () => {
  //     if (lenis) {
  //       lenis.destroy();
  //     }
  //   };
  // }, []);


  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="ProductsHero"
    //  ref={scrollContainer}
     >
      <div ref={section1}>
        <ProductHero goToSectionRef={section2} scrollTo={scrollTo} />
      </div>
      <div ref={section2}>
        <Products />
        <AboutUs_productsOne />
      </div>
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    </div>
  );
};
export default AboutUs;
