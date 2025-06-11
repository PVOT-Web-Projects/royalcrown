"use client"
import { useEffect } from "react";
import "./decorativelaminates.scss";
import ExteriorCladdingLaminatesData from "@/components/ProductsComponenetsInner/exteriorCladdingLaminatesInner/exteriorCladdingLaminatesData";
import ProductsCommonInnerPage from "@/components/ProductsComponenetsInner/ProductCommonInnerPage/page";
const ExteriorCladdingLaminates = () => {
  useEffect(() => {
    document.title = "Exterior Cladding Laminates | Royal Crown";
  });
  return (
    <>
      <ProductsCommonInnerPage data={ExteriorCladdingLaminatesData} />
    </>
  );
};
export default ExteriorCladdingLaminates; 