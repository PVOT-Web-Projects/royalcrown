"use client";
import { useEffect } from "react";
import BlogsPage from "@/components/blogspage/page";
import BlogsMain from "@/components/blogPosts/page";
import "./blogs.scss";
const Blogs = () => {
  useEffect(() => {
    document.title = "Blogs | Royal Crown";
  });


  return (
    <div>
        <BlogsPage />
        <BlogsMain />
    </div>
  );
};
export default Blogs;
