"use client"
import { useEffect } from "react";
import "./decorativelaminates.scss";
import InteriorCladdingLaminatesData from "@/components/ProductsComponenetsInner/interiorCladdingLaminatesInner/interiorCladdingLaminatesData";
import ProductsCommonInnerPage from "@/components/ProductsComponenetsInner/ProductCommonInnerPage/page";
const InteriorCladdingLaminates = () => {
  useEffect(() => {
    document.title = "Interior Cladding | Royal Crown";
  });
  return (
    <>
      <ProductsCommonInnerPage data={InteriorCladdingLaminatesData} />
    </>
  );
};
export default InteriorCladdingLaminates;