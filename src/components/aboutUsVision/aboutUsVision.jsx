"use client";
import Image from "next/image";
import AboutUs_vision from "@/images/fctImage.JPG";
import "./aboutUsVision.scss";
import { motion } from "framer-motion";

export default function AboutUsVision() {
  return (
    <>
      <div className="aboutVisionWrapper">
        <div className="aboutVisionContainer">
          <motion.div
            className="visionHeader"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div>Vision</div>
          </motion.div>
          <div>
            <Image src={AboutUs_vision} alt="" className="visionImage" />
          </div>
          <div className="visionDescription">
            <div className="description_left">
              At the heart of The Royal Way lies our vision: Customers for Life.
              We believe in forging enduring relationships by delivering
              exceptional quality, innovative design, and unmatched service. Our
              commitment is to transform everyday spaces into
              inspiring experiences, ensuring that every interaction builds
              trust, and every project reflects our passion for excellence. By
              listening to our customers and anticipating their needs, we aim to
              create not just products, but lasting value that turns every
              client into a lifelong partner.
            </div>
            <div className="description_right">
              <div className="description_right_box">
                <div className="right_box_number">10</div>
              </div>
              <div className="description_right_text">years of experience</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
