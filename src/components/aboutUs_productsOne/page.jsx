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
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedFinish, setSelectedFinish] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedThickness, setSelectedThickness] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [isMobile, setIsMobile] = useState(0);
  const [tab, setTab] = useState("");
  const [currentData, setCurrentData] = useState(products);
  const pathName = usePathname();
  const [activeTab, setActiveTab] = useState("");
  console.log(currentData);

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const fullPath = pathName + hash;

    if (fullPath === "/products#xylem") {
      setCurrentData(products.filter((data) => data.category === "Xylem"));
      setActiveTab("/products#xylem");
    } else if (fullPath === "/products#royal-crown") {
      setCurrentData(
        products.filter((data) => data.category === "Royal Crown")
      );
      setActiveTab("/products#royal-crown");
    } else if (fullPath === "/products#crown") {
      setCurrentData(products.filter((data) => data.category === "Crown XCL"));
      setActiveTab("/products#crown");
    } else if (fullPath === "/products#Qbiss") {
      setCurrentData(products.filter((data) => data.category === "QBliss"));
      setActiveTab("/products#Qbiss");
    } else if (fullPath === "/products#Crown_Xcl") {
      setCurrentData(products.filter((data) => data.category === "Crown XCL"));
      setActiveTab("/products#Crown_Xcl");
    } else {
      setCurrentData(products);
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
    // { label: "Select Categories", value: "all" },
    // { label: "Decorative", value: "Decorative" },
    // { label: "Interior Compacts", value: "Decorative Interior Compacts" },
    // { label: "Exterior Compacts", value: "Decorative Exterior Compacts" },
    { label: "Spotless", value: "Spotless" },
    { label: "Exotic Urbane", value: "Exotic Urbane" },
    { label: "Classic Wood Grains", value: "Classic Wood Grains" },
    { label: "Stones", value: "Stones" },
    { label: "Solid Colors", value: "Solid Colors" },
    { label: "Textiles", value: "Textiles" },
    { label: "Mirrors", value: "Mirrors" },
    { label: "Woodgrains", value: "Woodgrains" },
  ];

  const types = [
    // { label: "Select Types", value: "all" },
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
    { label: "3 x 6", value: "3 x 6" },
    { label: "6 x 3", value: "6 x 3" },
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
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      // Add the selected category to the array
      setSelectedCategory((prev) => [...prev, value]);
    } else {
      // Remove the unselected category from the array
      setSelectedCategory((prev) =>
        prev.filter((category) => category !== value)
      );
    }
  };

  const handleFinishChange = (e) => {
    setSelectedFinish(e.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.value);
  };

  const handleSizeClick = (sizeValue) => {
    // Set the selected size
    setSelectedSize(sizeValue);

    // Scroll to the "Explore Collection" section
    const exploreCollectionElement = document.querySelector("#sticky_top");
    if (exploreCollectionElement) {
      exploreCollectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
      selectedCategory.length === 0 ||
      selectedCategory.includes(product.categoryValue); // Multi-select logic
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

  // const handleTabClick = (newTab, category) => {
  //   setActiveTab(newTab);
  //   setCurrentData(products.filter((data) => data.category === category));
  // };
  const handleTabClick = (newTab) => {
    setTab(newTab);
    setActiveTab(newTab);
    window.history.pushState(null, "", newTab);

    // Filter the data based on the selected tab
    if (newTab === "/products#xylem") {
      setCurrentData(products.filter((data) => data.category === "Xylem"));
    } else if (newTab === "/products#Qbiss") {
      setCurrentData(products.filter((data) => data.category === "QBliss"));
    } else if (newTab === "/products#Crown_Xcl") {
      setCurrentData(products.filter((data) => data.category === "Crown XCL"));
    } else if (newTab === "/products#Crown") {
      setCurrentData(products.filter((data) => data.category === "Royal Crown"));
    } 
    else if (newTab === "/products#royal-crown") {
      setCurrentData(products.filter((data) => data.category === "Xylem"));
    } 
    else {
      // Reset to default if not a specific tab
      setCurrentData(products);
    }
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
              className={`tab-item ${
                activeTab === "/products#xylem" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick("/products#xylem");
              }}
            >
              <div className="tab-content-inner">Xylem</div>
            </div>
            <div
              className={`tab-item ${
                activeTab === "/products#Qbiss" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick("/products#Qbiss");
              }}
            >
              <div className="tab-content-inner">Qbiss</div>
            </div>
            
            <div
              className={`tab-item ${
                activeTab === "/products#Crown_Xcl" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick("/products#Crown_Xcl");
              }}
            >
              <div className="tab-content-inner">Crown Xcl</div>
            </div>
            <div
              className={`tab-item ${
                activeTab === "/products#royal-crown" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick("/products#royal-crown");
              }}
            >
              <div className="tab-content-inner">Royal Crown</div>
            </div>
            <div
              className={`tab-item ${
                activeTab === "/products#Crown" ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick("/products#Crown");
              }}
            >
              <div className="tab-content-inner">Crown</div>
            </div>
          </div>
          {/* <div className="products-tabs" id="sticky_top">
            {activeTab === "" && (
              <>
                <Link
                  href="/products#royal-crown"
                  scroll={false}
                  className={`tab-item ${
                    activeTab === "/products#royal-crown" ? "active" : ""
                  }`}
                  onClick={() =>
                    handleTabClick("/products#royal-crown", "Royal Crown")
                  }
                >
                  <div className="tab-content-inner">Royal Crown</div>
                </Link>
                <Link
                  href="/products#crown"
                  scroll={false}
                  className={`tab-item ${
                    activeTab === "/products#crown" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("/products#crown", "Crown XCL")}
                >
                  <div className="tab-content-inner">CROWN</div>
                </Link>
                <Link
                  href="/products#Qbiss"
                  scroll={false}
                  className={`tab-item ${
                    activeTab === "/products#Qbiss" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("/products#Qbiss", "QBliss")}
                >
                  <div className="tab-content-inner">Qbiss</div>
                </Link>
                <Link
                  href="/products#xylem"
                  scroll={false}
                  className={`tab-item ${
                    activeTab === "/products#xylem" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("/products#xylem", "Xylem")}
                >
                  <div className="tab-content-inner">Xylem</div>
                </Link>
                <Link
                href="/products#Crown_Xcl"
                scroll={false}
                className={`tab-item ${
                  activeTab === "/products#Crown_Xcl" ? "active" : ""
                }`}
                onClick={() =>
                  handleTabClick("/products#Crown_Xcl", "Crown XCL")
                }
              >
                <div className="tab-content-inner">Crown XCL</div>
              </Link>
              </>
            )}

            {activeTab !== "" && (
              <>
                {activeTab === "/products#royal-crown" && (
                  <Link
                    href="/products#royal-crown"
                    scroll={false}
                    className={`tab-item ${
                      activeTab === "/products#royal-crown" ? "active" : ""
                    }`}
                    onClick={() =>
                      handleTabClick("/products#royal-crown", "Royal Crown")
                    }
                  >
                    <div className="tab-content-inner">Royal Crown</div>
                  </Link>
                )}
                {activeTab === "/products#crown" && (
                  <Link
                    href="/products#crown"
                    scroll={false}
                    className={`tab-item ${
                      activeTab === "/products#crown" ? "active" : ""
                    }`}
                    onClick={() =>
                      handleTabClick("/products#crown", "Crown XCL")
                    }
                  >
                    <div className="tab-content-inner">CROWN</div>
                  </Link>
                )}
                {activeTab === "/products#Qbiss" && (
                  <Link
                    href="/products#Qbiss"
                    scroll={false}
                    className={`tab-item ${
                      activeTab === "/products#Qbiss" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("/products#Qbiss", "QBliss")}
                  >
                    <div className="tab-content-inner">Qbiss</div>
                  </Link>
                )}
                {activeTab === "/products#xylem" && (
                  <Link
                    href="/products#xylem"
                    scroll={false}
                    className={`tab-item ${
                      activeTab === "/products#xylem" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("/products#xylem", "Xylem")}
                  >
                    <div className="tab-content-inner">Xylem</div>
                  </Link>
                )}
                 {activeTab === "/products#Crown_Xcl" && (
                 <Link
                href="/products#Crown_Xcl"
                scroll={false}
                className={`tab-item ${
                  activeTab === "/products#Crown_Xcl" ? "active" : ""
                }`}
                onClick={() =>
                  handleTabClick("/products#Crown_Xcl", "Crown XCL")
                }
              >
                <div className="tab-content-inner">Crown XCL</div>
              </Link>
                )}
              </>
            )}
          </div> */}
        </div>

        <div className="supply">
          <div id="sticky">
            <div className="dropdown1">
              <div className="dropdown-label">
                <label className="colorSelectDropdown" htmlFor="type-select">
                  SELECT TYPE
                </label>
              </div>
              {isMobile ? (
                <Dropdown
                  id="type-select"
                  options={types}
                  value={selectedType}
                  onChange={handleTypeChange}
                  placeholder="Select Type"
                  className="category-select"
                />
              ) : (
                <div className="dropdown-label" id="dropdownLabel">
                  {categories.map((category) => (
                    <label key={category.value} className="checkbox-container">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        id={category.value}
                        value={category.value}
                        checked={selectedCategory.includes(category.value)}
                        onChange={handleCategoryChange}
                      />
                      <span class="checkmark"></span>
                      {category.label}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* <div className="dropdown1">
              <div className="dropdown-label">
              </div>
              <Dropdown
                id="type-select"
                options={types}
                value={selectedType}
                onChange={handleTypeChange}
                placeholder="Select Type"
                className="category-select"
              />
            </div> */}

            <div className="dropdown1">
              <div className="dropdown-label">
                <label htmlFor="color-select" className="colorSelectDropdown">
                  SELECT COLOR
                </label>
              </div>
              {isMobile ? (
                <Dropdown
                  className="color-select"
                  options={mappedColor}
                  value={selectedColor}
                  onChange={handleColorChange}
                  placeholder="Select Color"
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
                {/* <label htmlFor="finish-select">SELECT FINISH</label> */}
              </div>
              <Dropdown
                id="finish-select"
                options={finish}
                value={selectedFinish}
                onChange={handleFinishChange}
                placeholder="Select Finish"
                className="category-select"
              />
            </div>

            <div className="dropdown1">
              <div className="dropdown-label">
                <label htmlFor="size-select" className="colorSelectDropdown">
                  SELECT SIZE
                </label>
              </div>
              {isMobile ? (
                <Dropdown
                  id="size-select"
                  className="color-select"
                  options={size}
                  value={selectedSize}
                  onChange={handleSizeChange}
                  placeholder="Select a Size"
                />
              ) : (
                <div className="color_dropdown">
                  {size.map((sizeOption) => (
                    <div
                      key={sizeOption.value}
                      className={`SizeProduct ${
                        selectedSize === sizeOption.value ? "selected" : ""
                      }`}
                      onClick={() => handleSizeClick(sizeOption.value)}
                    >
                      <p>{sizeOption.label}</p>
                    </div>
                  ))}
                </div>
              )}
              {/* <Dropdown
                id="size-select"
                options={size}
                value={selectedSize}
                onChange={handleSizeChange}
                placeholder="Select a Size"
                className="category-select"
              /> */}
            </div>

            <div className="dropdown1">
              <div className="dropdown-label">
                <label
                  htmlFor="thickness-select"
                  className="colorSelectDropdown"
                >
                  SELECT THICKNESS
                </label>
              </div>
              {isMobile ? (
                <Dropdown
                  id="thickness-select"
                  className="color-select"
                  options={thickness}
                  value={selectedThickness}
                  onChange={handleThicknessChange}
                  placeholder="Select Thickness"
                />
              ) : (
                <div className="color_dropdown">
                  {thickness.map((thicknessOption) => (
                    <div
                      key={thicknessOption.value}
                      className={`ThicknessProduct ${
                        selectedThickness === thicknessOption.value
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedThickness(thicknessOption.value)
                      }
                    >
                      <p>{thicknessOption.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="product_container">
            {filteredProducts.map((product, index) => {
              // Determine if the tab is active
              const isTabActive = !!activeTab;

              // Only apply "big" or "tall" classNames if not in the tab view
              const className = isTabActive
                ? "" // Normal size for tab view
                : index === 9
                ? "big"
                : [
                    0, 2, 3, 8, 9, 10, 12, 13, 14, 17, 18, 20, 22, 23, 25,
                  ].includes(index)
                ? "tall"
                : "";

              return (
                <div key={index} className={`AboutUs_product ${className}`}>
                  <Link href={"/product-information"}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="ProductImage"
                    />
                    <div className="overlay">
                      <div>
                        <svg
                          width="40"
                          height="40"
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="white"
                          className="aboutUsProductSvg"
                        >
                          <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
                        </svg>
                      </div>
                      <div className="AnchorTag">Know More</div>
                    </div>
                  </Link>
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
