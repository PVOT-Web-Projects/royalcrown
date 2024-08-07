"use client";
import Image from "next/image";
import Image1 from "../../images/image 73.jpg";
import Image2 from "../../images/image 72.jpg";
import Image3 from "../../images/image 15.jpg";
import "./aboutdemo.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image4 from "../../images/image_15_small.jpg";
import Image5 from "../../images/image 48.jpg";
import Image6 from "../../images/laminate - about-us 6.jpg";
import Image9 from "../../images/laminate - about-us 5.jpg";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsDemo() {
  return (
    <div className="AboutusContainer">
      <div className="AbousUsSection">
        <div className="AbousUsTextContainerOuter">
          <motion.div
          initial={{ y: 500, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          // viewport={{ once: true }}
           className="AbousUsTextContainer">
            <p>ABOUT ROYAL CROWN</p>
          </motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5}}
            // viewport={{ once: true }}
            className="AbousUsTextImage"
          >
            <Image src={Image1} alt="none" />
          </motion.div>
          <motion.div
            initial={{ y: 140, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.6 }}
            // viewport={{ once: true }}
            className="AbousUsTextImage1"
          >
            <Image src={Image2} alt="none" />
          </motion.div>
          <motion.div
            initial={{ y: 180, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 , delay: 0.7}}
            // viewport={{ once: true }}
            className="AbousUsTextImage2"
          >
            <Image src={Image6} alt="none" />
          </motion.div>
          <motion.div
            initial={{ y: 220, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.8 }}
            // viewport={{ once: true }}
            className="AbousUsTextImage3"
          >
            <Image src={Image4} alt="none" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
