// import KeyFeaturesInfo from "@/components/key_features_info/page";
"use client";
import React, { Suspense, lazy, useState, useEffect } from "react";
// import ProductInfoSlider from "@/components/productinfoslider/page";
import RelatedProductInfo from "@/components/related_products_info/page";
import SocialPage from "@/components/socialPage/socialpage";
import Form from "@/components/forms/form1/Form";
import "./productInfo.scss";
import SocialMediaImg from "@/images/getInTouchImage.jpg";
import ClipLoader from "react-spinners/PuffLoader";

const ProductInformationPage = lazy(() =>
  import("@/components/productinfoslider/page")
);
const ProductInformation = () => {
  const [isLoaded, setIsLoaded] = useState(false); // Track if the page is fully loaded
  const [isLoading, setIsLoading] = useState(true); // Track the loading state for the page
  useEffect(() => {
    document.title = "Product Information | Royal Crown";
  });
 
  // Set the page to loaded once the Suspense child component has finished loading
  const handlePageLoad = () => {
    setIsLoaded(true);
  };

  // Timeout to hide loader after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loader after 5 seconds
    }, 5000);

    // Clear the timeout when the component is unmounted or when the content is loaded
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Set the page to fully loaded once lazy component has finished loading
    if (isLoaded) {
      setIsLoading(false); // Hide loader once lazy-loaded component is ready
    }
  }, [isLoaded]);

  return (
    <div className="product-info-container">
       {/* Loader overlay, visible until the page is fully loaded */}
       {isLoading && (
        <div className="loading-overlay">
          <ClipLoader color="#5b3524" size="60"/>
          {/* <div className="loader"></div>  */}
        </div>
      )}
        {/* Suspense to handle lazy loading */}
      <Suspense 
       fallback={null}
      // fallback={<div></div>}
      >
        <ProductInformationPage onLoad={handlePageLoad}/>
      </Suspense>
      {/* <ProductInfoSlider /> */}
      {/* Need to change */}
      {/* <KeyFeaturesInfo /> */}
      <RelatedProductInfo />
      <div className="Form_Page">
        <SocialPage socialMediaImgSrc={SocialMediaImg} />
        <Form />
      </div>
    </div>
  );
};
export default ProductInformation;
