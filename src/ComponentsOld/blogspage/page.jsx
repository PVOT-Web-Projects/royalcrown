import React from "react";
import "./blogs.scss";
const BlogsPage = ({ text }) => {
  return (
    <div className="BlogsMainContainer">
      <p>{text}</p>
    </div>
  );
};

const Blogs = () => {
  return (
    <div>
      <BlogsPage text="Blogs" />
    </div>
  );
};
export default Blogs;
