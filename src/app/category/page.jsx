import AllLaminates from "@/components/allLaminates/AllLaminates";
import BigImageWithSocial from "@/components/bigImageWithSocials/BigImageWithSocial";
import CategoryLeftRight from "@/components/categoryLeftRight/CategoryLeftRight";
import CursorEffect from "@/components/cursorEffect/CursorEffect";
import Form from "@/components/forms/form1/Form";
import SocialPage from "@/components/socialPage/socialpage";
import SocialMediaImg from "@/images/socials-image.png";
import "./category.scss";
const Category = () => {
  return (
    <>
      {/* <CursorEffect  */}
      <CategoryLeftRight />
      <AllLaminates />
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
      {/* <BigImageWithSocial /> */}
    </>
  );
};
export default Category;
