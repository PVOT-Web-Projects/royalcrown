import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
import ProductBanner from "@/components/Product_banner/page";
import AboutUs_products from "@/components/aboutUs_products/page";
import "./product.scss";
import MyForm from "@/components/forms/form1/Form";
const AboutUs = () => {
  return (
    <div className="abous_us">  
     <ProductBanner/>
     <AboutUs_products/>
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <MyForm />
      </div>
    </div>
  );
};
export default AboutUs;
