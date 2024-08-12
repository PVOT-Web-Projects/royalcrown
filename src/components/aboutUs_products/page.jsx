"use client";
import React, { useState, useMemo, useEffect } from "react";
import "./aboutUs_product.scss";
import Image from "next/image";
import products from "./productData.js";
import { Dropdown } from "primereact/dropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Page = () => {
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFinish, setSelectedFinish] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedThickness, setSelectedThickness] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [isMobile, setIsMobile] = useState(0);
  const [tab, setTab] = useState("");
  const [currentData, setCurrentData] = useState(products);
  const pathName = usePathname();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const fullPath = pathName + hash;

    if (fullPath === "/xylem") {
      setCurrentData(products.filter((data) => data.category === "Xylem"));
      setTab("/products#xylem");
      setActiveTab("/xylem");
    } else if (fullPath === "/Qbiss") {
      setCurrentData(products.filter((data) => data.category === "QBliss"));
      setTab("/products#Qbiss");
      setActiveTab("/Qbiss");
    } else if (fullPath === "/Crown_Xcl") {
      setCurrentData(products.filter((data) => data.category === "Crown XCL"));
      setTab("/products#Crown_Xcl");
      setActiveTab("/Crown_Xcl");
    } else if (fullPath === "/Crown") {
      setCurrentData(
        products.filter((data) => data.category === "Royal Crown")
      );
      setTab("/products#Crown");
      setActiveTab("/Crown");
    } else {
      setCurrentData(products);
      setTab("");
      setActiveTab("");
    }
  }, [pathName]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const brands = [
    { label: "All Brands", value: "all" },
    { label: "Xylem", value: "Xylem" },
    { label: "Royal Crown", value: "Royal Crown" },
    { label: "QBliss", value: "QBliss" },
    { label: "Crown XCL", value: "Crown XCL" },
  ];

  const categories = [
    { label: "All Categories", value: "all" },
    { label: "Decorative", value: "Decorative" },
    { label: "Interior Compacts", value: "Decorative Interior Compacts" },
    { label: "Exterior Compacts", value: "Decorative Exterior Compacts" },
  ];

  const types = [
    { label: "All Types", value: "all" },
    { label: "Spotless", value: "Spotless" },
    { label: "Exotic Urbane", value: "Exotic Urbane" },
    { label: "Classic Wood Grains", value: "Classic Wood Grains" },
    { label: "Stones", value: "Stones" },
    { label: "Solid Colors", value: "Solid Colors" },
    { label: "Textiles", value: "Textiles" },
    { label: "Mirrors", value: "Mirrors" },
    { label: "Woodgrains", value: "Woodgrains" },
  ];

  const finish = [
    { label: "Royal Art", value: "Royal Art" },
    { label: "Finish1", value: "Finish1" },
    { label: "Finish2", value: "Finish2" },
    { label: "Finish3", value: "Finish3" },
  ];

  const size = [
    { label: "8 x 2", value: "8 x 2" },
    { label: "8 x 9", value: "8 x 9" },
    { label: "3 x 2", value: "3 x 2" },
    { label: "6 x 6", value: "6 x 6" },
  ];

  const thickness = [
    { label: "0.9 MM", value: "0.9 MM" },
    { label: "0.4 MM", value: "0.4 MM" },
    { label: "1.2 MM", value: "1.2 MM" },
    { label: "2.5 MM", value: "2.5 MM" },
  ];

  const color = [
    { label: "Red", value: "Red" },
    { label: "Blue", value: "Blue" },
    { label: "Green", value: "Green" },
    { label: "Gray", value: "Gray" },
    { label: "Brown", value: "Brown" },
    { label: "Pink", value: "Pink" },
    { label: "Yellow", value: "Yellow" },
    { label: "White", value: "White" },
  ];

  const mappedColor = useMemo(() => {
    return color.map((c) => ({ ...c, className: "myOptionClassName" }));
  }, [color]);

  const handleBrandChange = (e) => {
    setSelectedBrand(e.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.value);
  };

  const handleFinishChange = (e) => {
    setSelectedFinish(e.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.value);
  };

  const handleThicknessChange = (e) => {
    setSelectedThickness(e.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.value);
  };

  const filteredProducts = currentData.filter((product) => {
    const brandMatch =
      selectedBrand === "all" || product.category === selectedBrand;
    const typeMatch =
      selectedType === "all" || product.categoryType === selectedType;
    const colorMatch =
      selectedColor === "all" || product.categoryColor === selectedColor;
    const categoryMatch =
      selectedCategory === "all" || product.categoryValue === selectedCategory;
    const finishMatch =
      selectedFinish === "all" || product.categoryFinish === selectedFinish;
    const sizeMatch =
      selectedSize === "all" || product.categorySize === selectedSize;
    const thicknessMatch =
      selectedThickness === "all" ||
      product.categoryThickness === selectedThickness;
    return (
      brandMatch &&
      typeMatch &&
      categoryMatch &&
      finishMatch &&
      sizeMatch &&
      thicknessMatch
    );
  });

  const handleTabChange = (newTab) => {
    setTab(newTab);
    setActiveTab(newTab); // Update the active tab state
    // Update URL hash
    window.history.pushState(null, "", newTab);
  };
  return (
    <>
      <div className="first_top">
        <div id="sticky_top" className="products_name">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Explore Collection
          </motion.div>
          <div className="products-tabs" id="sticky_top">
            <div
              className={`tab-item ${activeTab === "/xylem" ? "active" : ""}`}
              onClick={() => handleTabChange("/xylem")}
            >
              <Link href="/products#xylem" onClick={(e) => e.preventDefault()}>
                Xylem
              </Link>
            </div>
            <div
              className={`tab-item ${activeTab === "/Qbiss" ? "active" : ""}`}
              onClick={() => handleTabChange("/Qbiss")}
            >
              <Link href="/products#Qbiss" onClick={(e) => e.preventDefault()}>
                Qbiss
              </Link>
            </div>
            <div
              className={`tab-item ${
                activeTab === "/Crown_Xcl" ? "active" : ""
              }`}
              onClick={() => handleTabChange("/Crown_Xcl")}
            >
              <Link
                href="/products#Crown_Xcl"
                onClick={(e) => e.preventDefault()}
              >
                Crown XCL
              </Link>
            </div>
            <div
              className={`tab-item ${activeTab === "/Crown" ? "active" : ""}`}
              onClick={() => handleTabChange("/Crown")}
            >
              <Link href="/products#Crown" onClick={(e) => e.preventDefault()}>
                Crown
              </Link>
            </div>
          </div>
        </div>

        <div className="supply">
          <div id="sticky">
            <div className="dropdown1">
              <div className="dropdown-label">
                <label htmlFor="category-select">SELECT CATEGORY</label>
              </div>
              <Dropdown
                id="category-select"
                options={categories}
                value={selectedCategory}
                onChange={handleCategoryChange}
                placeholder="Select a Category"
                className="category-select"
              />
            </div>

            <div className="dropdown1">
              <div className="dropdown-label">
                <label htmlFor="type-select">SELECT TYPE</label>
              </div>
              <Dropdown
                id="type-select"
                options={types}
                value={selectedType}
                onChange={handleTypeChange}
                placeholder="Select a Type"
                className="category-select"
              />
            </div>

            <div className="dropdown1">
              <div className="dropdown-label">
                <label htmlFor="color-select">SELECT COLOR</label>
              </div>
              {isMobile ? (
                <Dropdown
                  className="color-select"
                  options={mappedColor}
                  value={selectedColor}
                  onChange={handleColorChange}
                  placeholder="Select a Color"
                />
              ) : (
                <div className="color_dropdown">
                  <div className="color1"></div>
                  <div className="color2"></div>
                  <div className="color3"></div>
                  <div className="color4"></div>
                  <div className="color5"></div>
                  <div className="color6"></div>
                  <div className="color7"></div>
                  <div className="color8"></div>
                </div>
              )}
            </div>

            <div className="dropdown1">
              <div className="dropdown-label">
                <label htmlFor="finish-select">SELECT FINISH</label>
              </div>
              <Dropdown
                id="finish-select"
                options={finish}
                value={selectedFinish}
                onChange={handleFinishChange}
                placeholder="Select a Finish"
                className="category-select"
              />
            </div>

            <div className="dropdown1">
              <div className="dropdown-label">
                <label htmlFor="size-select">SELECT SIZE</label>
              </div>
              <Dropdown
                id="size-select"
                options={size}
                value={selectedSize}
                onChange={handleSizeChange}
                placeholder="Select a Size"
                className="category-select"
              />
            </div>

            <div className="dropdown1">
              <div className="dropdown-label">
                <label htmlFor="thickness-select">SELECT THICKNESS</label>
              </div>
              <Dropdown
                id="thickness-select"
                options={thickness}
                value={selectedThickness}
                onChange={handleThicknessChange}
                placeholder="Select a Thickness"
                className="category-select"
              />
            </div>
          </div>
          <div className="product_container">
            {filteredProducts.map((product, index) => {
              const className =
                index === 9
                  ? "big"
                  : [0, 2, 3, 7, 8, 10].includes(index)
                  ? "tall"
                  : "";
              return (
                <div key={index} className={`AboutUs_product ${className}`}>
                  <Image src={product.image} alt={product.name} />
                  <div className="overlay">
                    <span>
                      <svg
                        width="40"
                        height="40"
                        xmlns="http://www.w3.org/2000/svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        fill="white"
                      >
                        <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
                      </svg>
                      <div>Know More</div>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
