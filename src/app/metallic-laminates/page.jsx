"use client"
import { useEffect } from "react";
import "./decorativelaminates.scss";
import MetallicLaminatesData from "@/components/ProductsComponenetsInner/metallicLaminatesInner/metallicLaminatesData";
import ProductsCommonInnerPage from "@/components/ProductsComponenetsInner/ProductCommonInnerPage/page";
const MetallicLaminates = () => {
  useEffect(() => {
    document.title = "Metallic Laminates | Royal Crown";
  });
  return (
    <>
      <ProductsCommonInnerPage data={MetallicLaminatesData} />
    </>
  );
};
export default MetallicLaminates; 