"use client"
import { useEffect } from "react";
import "./decorativelaminates.scss"
import WritableLaminatesData from "@/components/ProductsComponenetsInner/writableLaminatesInner/writableLaminatesData";
import ProductsCommonInnerPage from "@/components/ProductsComponenetsInner/ProductCommonInnerPage/page";
const WritableLaminates = () => {
  useEffect(() => {
    document.title = "Writable Laminates | Royal Crown";
  });
  return (
    <>
      <ProductsCommonInnerPage data={WritableLaminatesData} />
    </>
  );
};
export default WritableLaminates;