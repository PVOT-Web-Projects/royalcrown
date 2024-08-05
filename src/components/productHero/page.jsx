"use client";
import Image from "next/image";
import "./productHero.scss";
import productImage from "../../images/productHero.jpg";
import scrollSvg from "../../images/svgLogos/mouse.svg";
import { motion } from "framer-motion";
export default function ProductHero() {
  return (
    <>
      <div className="productHeroContainer">
        <div className="productHeroWrapper">
          <div className="productHeroSection1">
            <div className="heroSectionHeader">
              <motion.div
                className="section1header1"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Premium
              </motion.div>
              <motion.div
                className="section1header2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Perfecto
              </motion.div>
            </div>
            <motion.div
              className="heroSectionDescription"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Customers are at the heart of our unique business model. Royal
              Crown thrives at providing royal service to everyone. Our work is
              all about our customers and we believe their experience should be
              worth.
            </motion.div>
          </div>
          <motion.div
            className="productHeroSection2"
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <div>
              <Image src={productImage} alt="" className="productHeroImage" />
            </div>
          </motion.div>
        </div>
        <div className="productHeroFooter">
          <Image src={scrollSvg} alt="" />
        </div>
      </div>
    </>
  );
}
