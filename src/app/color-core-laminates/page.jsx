"use client"
import { useEffect } from "react";
import "./decorativelaminates.scss";
import colorCoreLaminatesData from "@/components/ProductsComponenetsInner/colorCoreLaminatesInner/colorCoreLaminatesData";
import ProductsCommonInnerPage from "@/components/ProductsComponenetsInner/ProductCommonInnerPage/page";
const ColorcoreLaminates = () => {
  useEffect(() => {
    document.title = "Color Core Laminates | Royal Crown";
  });
  return (
    <>
      <ProductsCommonInnerPage data={colorCoreLaminatesData} />
    </>
  );
};
export default ColorcoreLaminates; 