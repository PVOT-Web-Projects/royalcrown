"use client";
import React from "react";
import "./blogs.scss";
import {motion} from "framer-motion";
const BlogsPage = ({ text }) => {
  return (
    <div className="BlogsMainContainer">
      <p>{text}</p>
    </div>
  );
};

const Blogs = () => {
  return (
    <motion.div   initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}>
      <BlogsPage text="Blogs" />
    </motion.div>
  );
};
export default Blogs;
