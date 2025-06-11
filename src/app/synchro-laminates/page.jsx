"use client"
import { useEffect } from "react";
import "./decorativelaminates.scss";
import SynchroLaminatesData from "@/components/ProductsComponenetsInner/synchroLaminatesInner/synchroLaminatesData";
import ProductsCommonInnerPage from "@/components/ProductsComponenetsInner/ProductCommonInnerPage/page";
const SynchroLaminates = () => {
  useEffect(() => {
    document.title = "Synchro Laminates | Royal Crown";
  });
  return (
    <>
      <ProductsCommonInnerPage data={SynchroLaminatesData} />
    </>
  );
};
export default SynchroLaminates; 