
import KeyFeaturesInfo from "@/components/key_features_info/page";
import ProductInfoSlider from "@/components/productinfoslider/page";
import RelatedProductInfo from "@/components/related_products_info/page";
const ProductInformation =() =>{
    return(
        <div>
            <ProductInfoSlider />
            <KeyFeaturesInfo />
            <RelatedProductInfo />

        </div>
    )
}
export default ProductInformation;