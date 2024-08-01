
import ProductHero from "@/components/productHero/page";
import "./product.scss";
import Products from "@/components/product/page";
import AboutUs_products from "@/components/aboutUs_products/page";
import Form from "@/components/forms/form1/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
const AboutUs = () => {
  return (
    <div> 
      <ProductHero />
      <Products/> 
      <AboutUs_products/>
      <div className="Form_Page">
      <SocialPage socialMediaImgSrc={SocialMediaImg}  />
      <Form />
      </div>
    </div>
  );
};
export default AboutUs;
