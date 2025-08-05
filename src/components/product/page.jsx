"use client";
import "./product.scss";
import { motion } from "framer-motion";
export default function Products({ scrollTo, goToSectionRef }) {
  return (
    <>
      <div className="productMainContainer">
        <div className="productMain">
          <div className="productHeader">
            <motion.div
              className="productHeaderInner"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Products
            </motion.div>
          </div>

          <div className="productNumber">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              05
            </motion.p>

            {/* <p className="productNumberOne">categories</p> */}
          </div>

          <div className="productDescription">
            <motion.div
              className="productDescriptionBorder"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }} // Adjust this width to fit your design
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <div className="productDescriptionHeader">
              Craftsmanship at its best
            </div>
            <div className="productDescriptionContent">
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                At Royal Crown Laminates, every product embodies the pinnacle of
                craftsmanship. Our expert artisans blend traditional techniques
                with modern innovation,meticulously crafting each laminate to
                achieve unmatched precision and durability. This commitment to
                detail transforms ordinary surfaces into exceptional works of
                art,ensuring that every piece reflects our relentless pursuit of
                quality and timeless elegance.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
