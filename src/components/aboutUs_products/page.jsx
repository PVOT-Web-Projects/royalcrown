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
  const [shortTitle, setShortTitle] = useState("");
  const [shortNumber, setShortNumber] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [activeTab, setActiveTab] = useState("");
  console.log(currentData);

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const fullPath = pathName + hash;

    const category = categoryMap[fullPath] || "all";
    setCurrentData(
      category === "all" ? products : products.filter((data) => data.category === category)
    );
    setActiveTab(fullPath);
    const { title, number, description } = getShortDescription(category);
    setShortTitle(title);
    setShortNumber(number);
    setShortDescription(description);
  }, [pathName]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial size
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
  const categoryMap = {
    "/products#xylem": "Xylem",
    "/products#royal-crown": "Royal Crown",
    "/products#crown": "Crown",
    "/products#Qbiss": "QBliss",
    "/products#Crown_Xcl": "Crown XCL",
  };
  
  
  const handleTabClick = (newTab, category) => {
    setActiveTab(newTab);
    const filteredData = products.filter((data) => data.category === category);
    setCurrentData(filteredData);
  
    const { number, title, description } = getShortDescription(category);
    setShortNumber(number);
    setShortTitle(title);
    setShortDescription(description);
  };
  
  const getShortDescription = (category) => {
    switch (category) {
      case "Royal Crown":
        return {
          number: "03",
          title: "Royal Crown",
          description: "Royal Crown Laminates takes pride in its rich legacy of innovation, cutting-edge technology, and expertise, offering over 450 trendsetting surface designs. Our collection of modern laminates boasts a wide range of finishes and textures in 1mm thickness, empowering you to effortlessly realize your dream decor."
        };
      case "Xylem":
        return {
          number: "02",
          title: "Xylem",
          description: "Step into the world of Xylem, where innovation is at the heart of everything we do. Xylem represents our premium-grade decorative laminates, meticulously crafted to elevate your surroundings."
        };
        case "QBliss":
          return {
            number: "05",
            title: "Xylem",
            description: "Qbiss is a high-pressure structural laminate made from multiple layers of kraft papers, with a thickness range from 2mm to 25mm. Its decorative face on both sides makes it suitable for interior applications like washroom cubicles, locker doors, wall panels, and laboratory furniture. With a density of 1.45gm/cm3, our compacts are exceptionally resilient and require no substrate support in thicknesses over 6mm."
          };
          case "Crown":
            return {
              number: "05",
              title: "crown",
              description: "Crown's Lean Line offers an exquisite and cost-effective range of laminates in a variety of designs, colors, and textures, all in 0.8mm thickness. Manufactured at our highly advanced production facility, the Lean Line guarantees a consistent and exceptional level of quality."
            };
            case "Crown XCL":
              return {
                number: "06",
                title: "Crown XCL",
                description: "XCL- Exterior Compact Laminate is a high pressure laminate, built up from multiple papers of kraft papers to produce laminate in thickness ranging from 2mm to 25mm."
              };
         
      default:
        return {
          number: "",
          title: "",
          description: "",
        };
    }
  };
  
  const visibleTabs = ["Royal Crown", "Crown XCL", "QBliss", "Xylem" , "crown"].filter(
    (category) => activeTab === "" || activeTab === `/products#${category.replace(" ", "-").toLowerCase()}`
  );


  return (
    <>
     <div className="productMainContainer">
        <div className="productMain">
          {/* <div className="productHeader">
            <motion.div
              className="productHeaderInner"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Products
            </motion.div>
          </div> */}
          <div className="productNumber">
            <p>{shortNumber}</p>
          </div>
          <div className="productDescription">
            <motion.div
              className="productDescriptionBorder"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }} // Adjust this width to fit your design
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{once : true}}
            />
            <div className="productDescriptionHeader">
              {shortTitle}
            </div>
            <div className="productDescriptionContent">
              <p>
                {shortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

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
          {visibleTabs.map((label) => (
              <Link
                key={label}
                href={`/products#${label.replace(" ", "-").toLowerCase()}`}
                scroll={false}
                className={`tab-item ${activeTab === `/products#${label.replace(" ", "-").toLowerCase()}` ? "active" : ""}`}
                onClick={() => handleTabClick(`/products#${label.replace(" ", "-").toLowerCase()}`, label)}
              >
                <div className="tab-content-inner">{label}</div>
              </Link>
            ))}
            {/* {activeTab === "" && (
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
            )} */}
          </div>
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
            <div className="dropdown1">
              <div className="dropdown-label">
                <label htmlFor="color-select" className="colorSelectDropdown">
                  SELECT COLOR
                </label>
              </div>A
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
