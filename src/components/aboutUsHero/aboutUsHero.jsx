import Image from "next/image";
import Image1 from "../../images/image 73.jpg";
import Image2 from "../../images/image 72.jpg";
import Image3 from "../../images/image 15.jpg";
import "./aboutUsHero.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image4 from "../../images/image_15_small.jpg";
import Image5 from "../../images/image 48.jpg";
import Image6 from "../../images/laminate - about-us 6.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsHero() {
  // const heroSection = useRef(null);
  // const imageSection = useRef(null);

  // useEffect(() => {
  //   const heroSectionElement = heroSection.current;
  //   const imageSectionElement = imageSection.current;

  //   const scrollAnimation = gsap.fromTo(
  //     imageSectionElement,
  //     {
  //       yPercent: "0%",
  //     },
  //     {
  //       yPercent: "-60%",
  //       ease: "power1.out",
  //       scrollTrigger: {
  //         trigger: heroSectionElement,
  //         pin: true,
  //         scrub: true,
  //         start: "top top",
  //         end: "top top",
  //         pinSpacing: false,
  //       },
  //     }
  //   );
  //   return() => {
  //       scrollAnimation.kill()
  //   }
  // }, []);

  return (
    <div className="aboutUsHeroWrapper">
      <div className="aboutUsHeroContainer">
        <div className="aboutUsHeroHeader">
          <div className="aboutUsHeroHeader1">About</div>
          <div className="aboutUsHeroHeader2">Royal Crown</div>
        </div>

        <div className="aboutUsImageContainer">
          <div className="aboutUsImageContainerInner">
            <div className="aboutUsHeroImage1">
              <Image src={Image1} alt="" className="heroImage" />
            </div>
            <div className="aboutUsHeroImage2">
              <Image src={Image2} alt="" className="heroImage" />
            </div>
            <div className="aboutUsHeroImage3">
              <Image src={Image3} className="heroImage" />
            </div>
          </div>
        </div>
      </div>
      <div className="elegance-container">
        <div className="text-section">
          <div className="text-section-header">
            <div className="text-section-header-inner">
              <div className="header_text">
                <div>Where elegance meets desire</div>
              </div>
            </div>
            <div className="image-wrapper-1">
              <Image src={Image4} alt="Image 1" className="image-1" />
            </div>
          </div>
          <div className="text-section-content">
            <div className="text-section-inner">
              <div>
                Customers are at the heart of our unique business model. Royal
                Crown thrives at providing royal service to everyone. Our work
                is all about our customers and we believe their experience
                should be worth a thousand memories. However, we do have a tiny
                tale to tell, a sneak peek to our story.
              </div>
            </div>
            <div className="image-wrapper-2">
              <Image src={Image6} alt="Image 3" />
            </div>
          </div>
        </div>
        <div className="image-section">
          <div className="image-wrapper-3">
            <Image src={Image5} alt="Image 2" />
          </div>
        </div>
      </div>
    </div>
  );
}
