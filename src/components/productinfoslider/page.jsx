"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./productslider.scss";
import { usePathname, useSearchParams } from "next/navigation";

const SlidesContent = ({ slide }) => (
  <div className="Carousel_text_maincontent">
    <div className="FirstSSliderText">
      <p className="Text_InnerText">{slide.name}</p>
      <p className="TextInner1">{slide.categories[0].name}</p>
      <div className="TextButtonoUTER">
        <p className="TextInnerCollection">{slide.type}</p>
        <div className="submit_btn">
          <button type="submit" className="yello_btn">
            <span className="button-content">Enquire Now</span>
          </button>
        </div>
      </div>
    </div>
    <div className="SecondSliderText">
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">product category</p>
          <p className="ProductCategoryText2">{slide.tags[0].name}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">design number</p>
          <p className="ProductCategoryText2">{slide.attributes[4].terms[0].name}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">Design Name</p>
          <p className="ProductCategoryText2">{slide.name}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">Product Size</p>
          <p className="ProductCategoryText2">{slide.attributes[0].terms[0].name}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">finish code</p>
          <p className="ProductCategoryText2">{slide.tags[2].name}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">Thickness (MM)</p>
          <p className="ProductCategoryText2">{slide.attributes[1].terms[0].name}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">Color</p>
          <p className="ProductCategoryText2">{slide.attributes[3].terms[0].name}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">Product Type</p>
          <p className="ProductCategoryText2">{slide.attributes[2].terms[0].name}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">Theme / mood</p>
          <p className="ProductCategoryText2">{slide.tags[0].name}</p>
        </div>
</div>
    </div>
  </div>
);

export default function ProductInfoSlider() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [slidesData, setSlidesData] = useState([]); // Store API data

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    let hashUrl = hash.slice(1);
    handleSingleProject(hashUrl);
  }, [pathname, searchParams]);

  const handleSingleProject = async (hashUrl) => {
    try {
      const response = await fetch(
        `https://vanras.humbeestudio.xyz/wp-json/wc/store/products/${hashUrl}/`
      );
      const data = await response.json();
      setSlidesData(Array.isArray(data) ? data : [data]); // Ensure `slidesData` is always an array
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  const filterImages = (...images) => images.filter((image) => image);

  
  return (
    <div className="ProductInfoSliderMain">
      <div className="MainContainer" style={{ marginTop: "50px" }}>
        <div className="abc left">
          {/* Left section containing the product details */}
          <div className="Carousel_Slider_container">
            {slidesData.length > 0 ? (
              slidesData.map((slide, index) => (
                <div key={index} className="ProductInfoContent">
                  <SlidesContent slide={slide} />
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>

        <div className="abc right">
          {/* Right section containing product images */}
          <div className="Carousel_Slider_container2">
            {slidesData.length > 0 ? (
              slidesData.map((slide, index) => (
                <div key={index} className="third_section_content">
                  <Image
                    src={slide.images[0].src}
                    alt="carousel_image"
                    className="third_section_image1"
                    width={300}
                    height={1000}
                  />
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>

          {/* Disclaimer text */}
          <div className="tenExp" style={{ marginBottom: "50px" }}>
            <div className="ProductInfoText">
              <p className="ProductInfoTextInner">
                Disclaimer:
                <span> Colours on screen may vary from actual product</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

