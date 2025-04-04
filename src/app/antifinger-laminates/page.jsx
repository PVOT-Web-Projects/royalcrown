"use client"
import { useEffect } from "react";
import "./decorativelaminates.scss";
import AntifingerLaminatesData from "@/components/ProductsComponenetsInner/antifingerLaminatesInner/antifingerLaminatesData";
import ProductsCommonInnerPage from "@/components/ProductsComponenetsInner/ProductCommonInnerPage/page";
const ColorcoreLaminates = () => {
  useEffect(() => {
    document.title = "Anti Finger Laminates | Royal Crown";
  });
  return (
    <>
      <ProductsCommonInnerPage data={AntifingerLaminatesData} />
    </>
  );
};
export default ColorcoreLaminates; 