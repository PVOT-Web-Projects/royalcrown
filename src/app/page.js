import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Headingwithbutton from "@/components/Headingwithbutton/headingwithbutton";
import Form from "@/components/forms/form1/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
import "./Home.scss";
import "./variables.scss";
import RoyalCrownSlider from "@/components/RoyalCrownSlider/RoyalCrownSlider";
import CircularScroll from "@/components/Circularscroll/Circularscroll";
import Certification from "@/components/Certifications/Certification";
import PlyMarquee from "@/components/plyMarquee/PlyMarquee";
import InsightSlider from "@/components/Insightslider/Insightslider1";
import AboutUs from "@/components/Aboutus/Aboutus";
import ThreeDSlider from "@/components/threeDSlider/ThreeDSlider";
import ThreeDSlider2 from "@/components/threeDSlider copy/ThreeDSlider";
import RotatingImages from "@/components/The rotating image/RotatingImages";
import InsightMainSlider from "@/components/insight_Slider_latest/InsightMain";
// import DemoCarousel from "@/components/democarousel/page";

export default function Home() {
  return (
    <main className="main">
      <HeroBanner />
      <AboutUs />

       {/* commented */}
      {/* <ThreeDSlider2 /> */}
       {/* commented */}


      {/* <div style={{height:"400px"}}></div> */}
      {/* <RotatingImages/> */}
      {/* <div style={{height:"850vh"}}></div> */}

      {/* <DemoCarousel /> */}
      <Headingwithbutton />
      <PlyMarquee />
      <RoyalCrownSlider />

      <Certification />
      <InsightMainSlider />
      {/* <InsightSlider /> */}
      
    

       {/* commented */}
      {/* <CircularScroll /> */}
      {/* <ThreeDSlider /> */}
       {/* commented */}
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    </main>
  );
}
