"use client";
import React from "react";
import "./timelinehome.scss";
import { motion } from "framer-motion";

const TimelineHome = () => {
  return (
    <div className="Timelinecontainer">
        <motion.div
           className="certification_heading"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Our Legacy: 45 Years of Excellence
              </motion.div>
      <div className="Timelinecontainer1">
        <motion.div
          className="TimelinetextContainer1"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          For over 45 years, Royal Crown Laminates has been at the forefront of
          the decorative laminates industry. Our journey began with a bold
          vision to transform interior spaces through innovative, high-quality
          laminates that marry aesthetics with durability. This long-standing
          legacy of excellence has built a foundation of trust among designers,
          architects, and homeowners alike.
        </motion.div>
        <motion.div
          className="Timelinecircle1"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
      <div className="Timelinecontainer2">
        <motion.div
          className="TimelinetextContainer2"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1  , delay: 1 }}
          viewport={{ once: true }}
        >
          Our enduring reputation is rooted in decades of experience and a
          relentless commitment to quality. Every laminate we produce reflects
          our heritage of precision craftsmanship and the integration of modern
          technology, ensuring products that not only enhance your living spaces
          but also stand the test of time.
        </motion.div>
        <motion.div
          className="Timelinecircle2"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
      <div className="TimelineContainer3">
        <motion.div
          className="TimelinetextContainer3"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <p className="TimeTextNewinner">
            At Royal Crown Laminates, our 45-year legacy is more than just a
            milestone—it’s a promise to continually deliver superior design,
            sustainable practices, and customer-centric solutions. As we evolve
            with the market, our focus remains on innovating and setting new
            benchmarks in quality, ensuring that every project you undertake is
            supported by a heritage of expertise and reliability.
          </p>
        </motion.div>

        <motion.div
          className="Timelinecircle3"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  );
};

export default TimelineHome;
