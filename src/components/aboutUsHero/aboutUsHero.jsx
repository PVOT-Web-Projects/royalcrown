import Image from "next/image";
import Image1 from "../../images/image 73.jpg";
import Image2 from "../../images/image 72.jpg";
import Image3 from "../../images/image 15.jpg";
import "./aboutUsHero.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    </div>
  );
}
