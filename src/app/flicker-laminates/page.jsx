"use client"
import { useEffect } from "react";
import "./decorativelaminates.scss";
import FlickerLaminatesData from "@/components/ProductsComponenetsInner/flickerLaminatesInner/flickerLaminatesData";
import ProductsCommonInnerPage from "@/components/ProductsComponenetsInner/ProductCommonInnerPage/page";
const FlickerLaminates = () => {
  useEffect(() => {
    document.title = "Flicker Laminates | Royal Crown";
  });
  return (
    <>
      <ProductsCommonInnerPage data={FlickerLaminatesData} />
    </>
  );
};
export default FlickerLaminates; 