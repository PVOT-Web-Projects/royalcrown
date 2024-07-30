"use client";
import BlogsPage from "@/components/blogspage/page";
import { useEffect } from "react";
import BlogsMain from "@/components/blogPosts/page";
import FluidAnimation from "react-fluid-animation";
import ReactFluidAnimation from "@usertive/react-fluid-animation";
import "./blogs.scss";
const Blogs = () => {
  useEffect(() => {
    document.title = "Blogs | Royal Crown";
  });

//   const animationConfig = {
//     textureDownsample: 2,
//     densityDissipation: 0.98,
//     velocityDissipation: 0.98,
//     pressureDissipation: 0.8,
//     pressureIterations: 20,
//     curl: 3000,
//     splatRadius: 0.005,
//   };

  return (
    <div className="Demo1">
      <div className="Democlass">
        {/* <FluidAnimation config={animationConfig} className="Demo1" /> */}
        <ReactFluidAnimation  className="Demo2" />
     
      <BlogsPage />
      <BlogsMain />
    </div>
    </div>
  );
};
export default Blogs;
