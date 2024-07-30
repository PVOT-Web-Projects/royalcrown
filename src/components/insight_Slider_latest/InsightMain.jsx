"use client";
import InsightsData from "./InsightData/AllInsightsData";
import InsightsItem from "./InsightsItem/AllinsightsItem"
import "./Insightmain.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import { useState } from "react";

const AllLaminates = () => {
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [tooltipOpacity, setTooltipOpacity] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = InsightsData.length;

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const box = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      top: clientY - box.top,
      left: clientX - box.left,
    });
    setTooltipOpacity(1);
  };

  const handleMouseLeave = () => {
    setTooltipOpacity(0);
  };

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <>
    <div className="HeaderTextMain">
        <p>Latest Insights</p>
      </div>
    <div className="all_laminates">
      
      <div
        className="wrapper" 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
        }}
      >
        <div
          id="tooltip"
          style={{
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
            opacity: tooltipOpacity,
            transition: "opacity 0.3s ease",
            zIndex: "2",
          }}
        >
          Scroll to Explore
        </div>
        <Swiper
          modules={[FreeMode, Scrollbar, Mousewheel, Pagination]}
          slideToClickedSlide={true}
          slidesPerView="auto"
          className="laminatesF"
          freeMode={{
            enabled: true,
            sticky: false,
            momentumBounce: false,
            momentumRatio: 0.5, // Adjust momentum ratio for smoother scrolling
          }}
          scrollbar={{
            el: ".swiper-scrollbar",
            draggable: true,
            dragSize: 100,
          }}
          mousewheel={{
            enabled: true,
            sensitivity: 0.5, // Adjust sensitivity for smoother scrolling
            releaseOnEdges: true, // Optionally allow scrolling outside swiper bounds
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            type: "bullets", // Show pagination dots
          }}
          onSlideChange={handleSlideChange}
        >
          {InsightsData.map((item, index) => (
            <SwiperSlide key={index}>
              <InsightsItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="counter_slide">
        <div className="slide-count">
          {`0${activeSlide + 1}`} / {totalSlides}
        </div>
        <div className="dots">
          <div className="swiper-pagination"></div>
        </div>
        <div className="collection">
          Explore All 
          {/* <strong> Collection</strong> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default AllLaminates;
