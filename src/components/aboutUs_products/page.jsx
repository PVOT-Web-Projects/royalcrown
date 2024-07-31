"use client";
import React, { useState, useMemo, useEffect } from "react";
import "./aboutUs_product.scss";
import Image from "next/image";
import products from "./productData.js";
import { Dropdown } from "primereact/dropdown";

const Page = () => {
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFinish, setSelectedFinish] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedThickness, setSelectedThickness] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [isMobile, setIsMobile] = useState(0);

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
    return color.map((c) => ({ ...c, className: 'myOptionClassName' }));
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

  const filteredProducts = products.filter((product) => {
    const brandMatch = selectedBrand === "all" || product.category === selectedBrand;
    const typeMatch = selectedType === "all" || product.categoryType === selectedType;
    const colorMatch = selectedColor === "all" || product.categoryColor === selectedColor;
    const categoryMatch = selectedCategory === "all" || product.categoryValue === selectedCategory;
    const finishMatch = selectedFinish === "all" || product.categoryFinish === selectedFinish;
    const sizeMatch = selectedSize === "all" || product.categorySize === selectedSize;
    const thicknessMatch = selectedThickness === "all" || product.categoryThickness === selectedThickness;
    return brandMatch && typeMatch && categoryMatch && finishMatch && sizeMatch && thicknessMatch;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="first_top">
        <div id="sticky_top" className="products_name">EXPLORE PRODUCTS</div>

        <div className="supply">
          <div id="sticky" className="one">
            <div className="dropdown1">
              <label htmlFor="brand-select" className="dropdown-label">
                SELECT BRAND
              </label>
              <Dropdown
                id="brand-select"
                options={brands}
                value={selectedBrand}
                onChange={handleBrandChange}
                placeholder="Select a Brand"
                className="category-select"
              />
            </div>

            <div className="dropdown1">
              <label htmlFor="category-select" className="dropdown-label">
                SELECT CATEGORY
              </label>
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
              <label htmlFor="type-select" className="dropdown-label">
                SELECT TYPE
              </label>
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
              <label htmlFor="color-select" className="dropdown-label">
                SELECT COLOR
              </label>
              {isMobile ? (
                <Dropdown
                  id="color-select"
                  options={mappedColor}
                  value={selectedColor}
                  onChange={handleColorChange}
                  placeholder="Select a Color"
                  className="color-select"
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
              <label htmlFor="finish-select" className="dropdown-label">
                SELECT FINISH
              </label>
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
              <label htmlFor="size-select" className="dropdown-label">
                SELECT SIZE
              </label>
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
              <label htmlFor="thickness-select" className="dropdown-label">
                SELECT THICKNESS
              </label>
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

          <div className="container">
            {filteredProducts.map((product, index) => {
              const className =
                index === 9
                  ? "big"
                  : [0, 2, 3, 7, 8, 10].includes(index)
                  ? "tall"
                  : "";
              return (
                <div key={index} className={className}>
                  <Image src={product.image} alt={product.name} />
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
