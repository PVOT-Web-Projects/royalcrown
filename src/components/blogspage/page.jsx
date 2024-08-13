"use client";
import React from "react";
import "./blogs.scss";
import { motion } from "framer-motion";
const BlogsPage = ({ text, description }) => {
  return (
    <div className="BlogsMainContainer">
      <div>
        <p className="TitleBlogs">{text}</p>
        <div>
          <p className="DescriptionBlogs">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <BlogsPage
        text="Blogs"
        description="Our furniture collections are meticulously designed to elevate your living spaces."
      />
    </motion.div>
  );
};
export default Blogs;
