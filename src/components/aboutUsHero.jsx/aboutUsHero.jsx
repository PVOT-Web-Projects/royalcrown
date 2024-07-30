import Image from "next/image";
import dummy_image from "../../images/dummy_image.jpg"
import "./aboutUsHero.scss";
export default function AboutUsHero (){
    return(
        <>
        <div className="aboutHeroContainer">
            <div className="aboutUsHeroWrapper">
                <Image src={dummy_image} alt="heroImage" className="aboutUsHeroImage"/>
                <div className="hero_content">
                    <div className="hero_content_header">About Us</div>
                    <p className="hero_content_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, necessitatibus.</p>
                </div>
            </div>
        </div>
        </>
    )
}