"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import corporateCardsImage from "../../images/csr-solutioncards_Small.jpeg";
import "./corporateTwocards.scss";

const CorporateTwoCards = () => {
  return (
    <div className="corporateCardsWrapper">
      <div className="corporateCardsContainer">
        <div className="corporateCardsImage">
          <Image
            src={corporateCardsImage}
            alt=""
            className="corporateCardsImageInner"
          />
        </div>
        <div className="corporateCardDescription">
          <motion.div
            className="coporateCardHeader"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p>corporate social responsibility</p>
          </motion.div>
          <div className="coporateCardHeader2">
            <p>In it for good</p>
          </div>
          <div className="corporateCardDescriptionInner">
            <p>
              We believe in building greater futures by connecting people to
              opportunities in the digital economy. It is an ethos in keeping
              with the values of our parent company, the Tata group. The work we
              do is driven toward creating a fairer and more equitable world for
              all.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CorporateTwoCards;
