"use client"
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
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsHero() {
  return (
    <div className="aboutUsHeroWrapper">
      <div className="aboutUsHeroContainer">
        <div className="aboutUsHeroHeader">
          <motion.div
            className="aboutUsHeroHeader1"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            About
          </motion.div>
          <motion.div
            className="aboutUsHeroHeader2"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Royal Crown
          </motion.div>
        </div>

        <div className="aboutUsImageContainer">
          <div className="aboutUsImageContainerInner">
            <motion.div
              className="aboutUsHeroImage1"
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image src={Image1} alt="" className="heroImage" />
            </motion.div>
            <motion.div
              className="aboutUsHeroImage2"
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image src={Image2} alt="" className="heroImage" />
            </motion.div>
            <motion.div
              className="aboutUsHeroImage3"
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image src={Image3} className="heroImage" />
            </motion.div>
          </div>
        </div> 
      </div>
      <div className="elegance-container">
        <div className="text-section">
          <div className="text-section-header">
            <div className="text-section-header-inner">
              <div className="header_text">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  Where elegance meets desire
                </motion.div>
                <motion.div
                  className="animated-border"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
            <motion.div
              className="image-wrapper-1"
              initial={{ y: 700, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image src={Image4} alt="Image 1" className="image-1" />
            </motion.div>
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
              <div className="text-section-inner-footer">See our story</div>
            </div>
            <motion.div
              className="image-wrapper-2"
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image src={Image6} alt="Image 3" />
            </motion.div>
          </div>
        </div>
        <div className="image-section">
          <motion.div
            className="image-wrapper-3"
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image src={Image5} alt="Image 2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
