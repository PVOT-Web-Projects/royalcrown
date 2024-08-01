import Image from "next/image";
import "./productHero.scss";
import productImage from "../../images/productHero.jpg";
import scrollSvg from "../../images/svgLogos/mouse.svg";
export default function ProductHero() {
  return (
    <>
      <div className="productHeroContainer">
        <div className="productHeroWrapper">
          <div className="productHeroSection1">
            <div className="heroSectionHeader">
              <div className="section1header1">Premium</div>
              <div className="section1header2">Perfecto</div>
            </div>
            <div className="heroSectionDescription">
              Customers are at the heart of our unique business model. Royal
              Crown thrives at providing royal service to everyone. Our work is
              all about our customers and we believe their experience should be
              worth.
            </div>
          </div>
          <div className="productHeroSection2">
            <div>
                <Image src={productImage} alt=""className="productHeroImage"/>
            </div>
          </div>
        </div>
        <div className="productHeroFooter">
            <Image src={scrollSvg} alt=""/>
        </div>
      </div>
    </>
  );
}
