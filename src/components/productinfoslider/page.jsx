"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./productslider.scss";
import { usePathname, useSearchParams } from "next/navigation";
import { Skeleton, Grid } from "@mui/material";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
const SlidesContent = ({ slide }) => (
  <div className="Carousel_text_maincontent">
    <div className="FirstSSliderText">
      <p className="Text_InnerText">{slide.name}</p>
      <p className="TextInner1">
        {slide.categories[0].name} /{" "}
        {slide.categories[1].name === "Qbliss"
          ? "Qbiss"
          : slide.categories[1].name}
      </p>
      <div className="TextButtonoUTER">
        <p className="TextInnerCollection">
          {slide.attributes[3].terms[0].name}
        </p>
        <div className="submit_btn">
          <Link href={"/contact-us"}>
            <button type="submit" className="yello_btn">
              <span className="button-content">Enquire Now</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
    <div className="SecondSliderText">
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">design code</p>
          <p className="ProductCategoryText2">
            {/* {slide.attributes[8].terms[0].name} */}
            {slide.attributes[7]?.terms[0]?.name || ""}
          </p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">product code</p>
          <p className="ProductCategoryText2">
            {slide.attributes[0].terms[0].name}
          </p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">product category</p>
          <p className="ProductCategoryText2">
            {slide.attributes[5].terms[0].name}
          </p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">Product Size</p>
          <p className="ProductCategoryText2">
            {slide.attributes[1].terms[0].name}
          </p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">product type</p>
          <p className="ProductCategoryText2">
            {slide.attributes[3].terms[0].name}
          </p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">Thickness (MM)</p>
          <p className="ProductCategoryText2">
            {slide.attributes[2].terms[0].name}
          </p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">Color</p>
          <p className="ProductCategoryText2">
            {slide.attributes[4].terms[0].name}
          </p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">Decor Type</p>
          <p className="ProductCategoryText2">{slide.categories[0].name}</p>
        </div>
      </div>
      <div className="SecondSliderTextInner">
        <div className="ProductCategoryText">
          <p className="ProductCategoryText1">Theme / mood</p>
          <p className="ProductCategoryText2">
            {slide.attributes[6].terms[0].name}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function ProductInfoSlider() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [slidesData, setSlidesData] = useState([]); // Store API data
  const [loading, setLoading] = useState(true); // Initially, set loading to t
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0); // Track active slide index

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

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
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching project data:", error);
    }
  };

  const filterImages = (...images) => images.filter((image) => image);
  // const handleDownload = async () => {
  //   const activeImage = slidesData[0]?.images[activeSlideIndex]?.src; // Get the current active image URL
  //   if (!activeImage) {
  //     console.error("No image found to download.");
  //     return;
  //   }

  //   try {
  //     const response = await fetch(activeImage);
  //     const blob = await response.blob();
  //     const blobUrl = URL.createObjectURL(blob);

  //     const link = document.createElement("a");
  //     link.href = blobUrl;
  //     link.download = activeImage.split("/").pop();
  //     link.click();

  //     URL.revokeObjectURL(blobUrl);
  //   } catch (error) {
  //     console.error("Error downloading image:", error);
  //   }
  // };
  const handleDownload = async (imageUrl) => {
    try {
      // Fetch the image as a blob
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      // Create a temporary URL for the image blob
      const blobUrl = URL.createObjectURL(blob);

      // Create a temporary anchor element to trigger the download
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = imageUrl.split("/").pop(); // Use the image file name for the download
      link.click();

      // Cleanup the created object URL
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

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
              <div>
                <Skeleton variant="rectangle" width={1000} height={400} />
              </div>
            )}
          </div>
        </div>

        <div className="abc right">
          {/* Right section containing product images */}
          <div className="Carousel_Slider_container2">
            {slidesData.length > 0 ? (
              slidesData.map((slide, index) => (
                <div key={index} className="third_section_content">
                  <Swiper
                    modules={[Navigation, Autoplay, FreeMode]} // Import Navigation module
                    spaceBetween={10} // Space between slides
                    slidesPerView={1} // Show one slide at a time
                    speed={1500}
                    loop={false} // Infinite loop
                    autoplay={{ delay: 5000 }} // Auto slide every 3 seconds
                    // navigation={true} // Navigation arrows
                    navigation={{
                      nextEl: ".swiper-button-next-product",
                      prevEl: ".swiper-button-prev-product",
                    }}
                    onSlideChange={(swiper) =>
                      setActiveSlideIndex(swiper.activeIndex)
                    } // Track active slide index
                  >
                    {slide.images.map((image, idx) => (
                      <SwiperSlide key={idx}>
                        <Image
                          src={image.src}
                          alt={`carousel_image_${idx}`}
                          className="third_section_image1"
                          width={300}
                          height={1362}
                          onClick={() => openModal(image.src)}
                        />
                        <div className="imageSizeLabel">
                          {image.src.includes("A4") ? "A4" : "FullSheet"}
                        </div>{" "}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="swiper-image-bottom">
                    <div className="swiper-button-container">
                      <div className="swiper-button-next-product">
                        <svg
                          width="30"
                          height="30"
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        >
                          <path
                            fill="#5B3524"
                            d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"
                          />
                        </svg>
                      </div>
                      <div className="swiper-button-prev-product">
                        <svg
                          width="30"
                          height="30"
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        >
                          <path
                            fill="#5B3524"
                            d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* <Image
                    src={slide.images[0].src}
                    alt="carousel_image"
                    className="third_section_image1"
                    width={300}
                    height={1000}
                    onClick={() => openModal(slide.images[0].src)}
                  /> */}
                    <div className="DownloadButton">
                      <div className="DownloadOuter">
                        <div
                          className="DownloadInner"
                          onClick={() => {
                            const fullSizeImage = slide.images.find((img) =>
                              img.src.includes("FullSheet")
                            );
                            handleDownload(
                              fullSizeImage
                                ? fullSizeImage.src
                                : slide.images.length > 1
                                ? slide.images[1].src
                                : slide.images[0].src
                            );
                            // Check the number of images and download accordingly
                            // handleDownload(
                            //   slide.images.length > 1
                            //     ? slide.images[1].src
                            //     : slide.images[0].src
                            // );
                          }}
                          // onClick={() => handleDownload(slide.images[1].src)}
                        >
                          <svg
                            className="DownloadSvg"
                            viewBox="0 0 24 24"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <g id="Interface / Download">
                                {" "}
                                <path
                                  id="Vector"
                                  d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                                  stroke="#ffffff"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>{" "}
                              </g>{" "}
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <Skeleton variant="square" width={400} height={400} />
              </div>
            )}
          </div>

          {/* Modal Section */}
          {isModalOpen && (
            <div className="modal-overlay-product">
              <div className="modal-content-product">
                <button className="close-button-product" onClick={closeModal}>
                  X
                </button>
                <Image
                  src={modalImage}
                  alt="Modal Image"
                  className="modal-image-product"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          )}
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
