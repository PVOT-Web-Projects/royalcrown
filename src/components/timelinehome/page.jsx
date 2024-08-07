"use client";
import React, { useRef } from "react";
import "./timelinehome.scss";
import { motion } from "framer-motion";

const TimelineHome = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);

  return (
    <div className="Timelinecontainer">
      <div className="content">
        <motion.div
          className="Timelinetext1"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          We are known for providing high density laminates with unparalleled
          services in terms of quality and reliability. We are known for
          providing high density laminates with unparalleled services in terms
          of quality and reliability.
        </motion.div>
        <motion.div
          ref={scrollRef1}
          className="Timelinecircle1"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2}}
          viewport={{ once: true }}
        ></motion.div>
      </div>
      <div className="content1">
        <motion.div
          className="Timelinecircle2"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1}}
          viewport={{ once: true }}
        ></motion.div>
      </div>
      <div className="content2">
        <motion.div
          className="Timelinetext2"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 100, opacity: 1}}
          transition={{ duration: 2 , delay: 1.5}}
          viewport={{ once: true }}
        >
          <p>          We are known for providing high density laminates with unparalleled
          services in terms of quality and reliability. We are known for
          providing high density laminates with unparalleled services in terms
          of quality and reliability.
          </p>

        </motion.div>

        <motion.div
          ref={scrollRef3}
          className="Timelinecircle3"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1}}
          transition={{ duration: 2, delay: 1.5}}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  );
};

export default TimelineHome;
