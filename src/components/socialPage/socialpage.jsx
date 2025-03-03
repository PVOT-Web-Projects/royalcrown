import React from "react";
import Image from "next/image";
import Footer_img from "@/images/white_logo.png";
import facebookIcon from "@/images/FacebookIcon.svg";
import instagramIcon from "@/images/InstaIcon.svg";
import youtubeIcon from "@/images/YoutubeIcon.svg";
import whatsappIcon from "@/images/WhatsappIcon.svg";
import linkedinIcon from "@/images/LinkedinIcon.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {motion} from "framer-motion";
import "./socialpage.scss";
gsap.registerPlugin(ScrollTrigger);
const SocialPage = ({ socialMediaImgSrc }) => {
  // const imageRef = useRef(null);
  const icons = [
    { src: facebookIcon, alt: "Facebook", link: "https://www.facebook.com/royalcrownlaminates/" },
    { src: instagramIcon, alt: "Instagram", link: "https://www.instagram.com/royalcrownlaminates/" },
    { src: youtubeIcon, alt: "YouTube", link: "https://www.youtube.com" },
    
    { src: linkedinIcon, alt: "LinkedIn", link: "https://www.linkedin.com/company/crown-laminates/" },
    { src: whatsappIcon, alt: "WhatsApp", link: "https://www.whatsapp.com" },
  ];
  // useEffect(() => {
  //   gsap.fromTo(
  //     imageRef.current,
  //     { y: -100, scale: 1.3, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
  //     {
  //       y: 0,
  //       scale: 1,
  //       opacity: 1,
  //       clipPath: "inset(0% 0% 0% 0%)",
  //       ease: "power4.out",
  //       scrollTrigger: {
  //         trigger: imageRef.current,
  //         start: "top 80%",
  //         end: "bottom 40%",
  //         scrub: 2, // Smoothness of the scroll animation
  //       },
  //     }
  //   );
  // }, []);
  return (
    <div className="socialPage">
      <div className="Footer_Logo">
        {/* <Image src={Footer_img} alt="Image" className="FooterImg" /> */}
      </div>
      <motion.div className="SocialMediaImg"
       initial={{ x: -100, opacity: 0 }}
       whileInView={{ x: 0, opacity: 1 }}
       transition={{ duration: 1.5 ,delay: 0.5 }}
       viewport={{ once: true }}
      //  ref={imageRef}
       >
        <Image src={socialMediaImgSrc} alt="Image" className="SocialImg" />
      </motion.div>
      {/* <div className="SocialMediaMain">
        {icons.map((item, index) => (
          <div className="SocialIcons" key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="Link"
            >
              <Image src={item.src} alt={item.alt} className="ImageIconSvg" />
            </a>
          </div>
        ))}
      </div> */}
    </div>
  );
};
export default SocialPage;
