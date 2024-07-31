import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Headingwithbutton from "@/components/Headingwithbutton/headingwithbutton";
import "./Home.scss";
import "./variables.scss";
import Form from "@/components/forms/form1/Form"
import RoyalCrownSlider from "@/components/RoyalCrownSlider/RoyalCrownSlider";
import SocialMediaImg from "@/images/socials-image.png";
import SocialPage from "@/components/socialPage/socialpage";
import Certification from "@/components/Certifications/Certification";
import ThreeSlider from "@/components/threedslider/page"

export default function Home() {
  return (
    <main className="main">
      <HeroBanner />
      <Headingwithbutton />
      
      <ThreeSlider />
      <RoyalCrownSlider />
      <Certification />
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg}  />
        <Form />
      </div>
    </main>
  );
}
