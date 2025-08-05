"use client"
import { useEffect } from "react";
import "./decorativelaminates.scss";
import StandaradGradeLaminates from "@/components/ProductsComponenetsInner/standardgradeLaminatesInner/standardGradeLaminatesData";
import ProductsCommonInnerPage from "@/components/ProductsComponenetsInner/ProductCommonInnerPage/page";
const StandardGradeLaminates = () => {
  useEffect(() => {
    document.title = "Standard Grade Laminates | Royal Crown";
  });
  return (
    <>
      <ProductsCommonInnerPage data={StandaradGradeLaminates} />
    </>
  );
};
export default StandardGradeLaminates;