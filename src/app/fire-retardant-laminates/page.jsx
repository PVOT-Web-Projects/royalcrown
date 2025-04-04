"use client"
import { useEffect } from "react";
import "./decorativelaminates.scss";
import FireRetardantLaminatesData from "@/components/ProductsComponenetsInner/fireRetardantInner/fireRetardantLaminatesData";
import ProductsCommonInnerPage from "@/components/ProductsComponenetsInner/ProductCommonInnerPage/page";
const FireRetardantLaminates = () => {
  useEffect(() => {
    document.title = "Fire Retardant | Royal Crown";
  });
  return (
    <>
      <ProductsCommonInnerPage data={FireRetardantLaminatesData} />
    </>
  );
};
export default FireRetardantLaminates;