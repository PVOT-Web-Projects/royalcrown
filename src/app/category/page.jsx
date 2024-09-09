import ProductCategoryHeader from "@/components/product_category_header/page";
import "./category.scss";
import DissipativeLaminates from "@/components/Dissipative_laminates/page";
import laminatesData from "@/components/Dissipative_laminates/laminatesdata";
import ProductConstruct from "@/components/product_construct/product_construct";
import ProductFeatures from "@/components/productFeatures/productFeatures";
import ProductApplication from "@/components/product_application/product_application";
import ProductsInner from "@/components/ProductsComponenetsInner/decorativeLaminatesInner/page";
const Category = () => {
  return (
    <>
    <ProductsInner />
      {/* <ProductCategoryHeader />
      <DissipativeLaminates data={laminatesData}/>
      <ProductConstruct/>
      <ProductFeatures/>
      <ProductApplication/> */}
    </>
  );
};
export default Category;
