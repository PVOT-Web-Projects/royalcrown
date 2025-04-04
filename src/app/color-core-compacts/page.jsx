"use client"
import { useEffect } from "react";
import "./decorativelaminates.scss";
import colorCoreLaminatesData from "@/components/ProductsComponenetsInner/colorCoreLaminatesInnerOne/colorCoreLaminatesDataOne";
import ProductsCommonInnerPage from "@/components/ProductsComponenetsInner/ProductCommonInnerPage/page";
const ColorcoreCompacts = () => {
  useEffect(() => {
    document.title = "Colour Core Compacts | Royal Crown";
  });
  return (
    <>
      <ProductsCommonInnerPage data={colorCoreLaminatesData} />
    </>
  );
};
export default ColorcoreCompacts; 