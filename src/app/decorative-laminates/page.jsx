"use client"
import { useEffect } from "react";
import "./decorativelaminates.scss";
import DecorativeLaminatesData from "@/components/ProductsComponenetsInner/decorativeLaminatesInner/DecorativeLaminatesData";
import ProductsCommonInnerPage from "@/components/ProductsComponenetsInner/ProductCommonInnerPage/page";
const DecorativeLaminates = () => {
  useEffect(() => {
    document.title = "Decorative Laminates | Royal Crown";
  });
  return (
    <>
      <ProductsCommonInnerPage data={DecorativeLaminatesData} />
    </>
  );
};
export default DecorativeLaminates;
