"use client"
import { useEffect } from "react";
import PostFormingLaminatesData from "@/components/ProductsComponenetsInner/postFormingLaminatesInner/postFormingLaminatesData";
import "./decorativelaminates.scss";
import ProductsCommonInnerPage from "@/components/ProductsComponenetsInner/ProductCommonInnerPage/page";
const PostFormingLaminates = () => {
  useEffect(() => {
    document.title = "Post Forming Laminates | Royal Crown";
  });
  return (
    <>
      <ProductsCommonInnerPage data={PostFormingLaminatesData} />
    </>
  );
};
export default PostFormingLaminates;
