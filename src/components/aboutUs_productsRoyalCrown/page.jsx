"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./aboutUs_productRc.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Dropdown } from "primereact/dropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
// import Skeleton from '@mui/material/Skeleton';
import { Skeleton, Grid } from "@mui/material";

const Page = () => {
  const itemsPerPage = 25;
  const [isMobileOne, setIsMobileOne] = useState(false); // State for mobile detection
  const [lastScrollTop, setLastScrollTop] = useState(0); // Track the last scroll position
  const stickyRef = useRef(null); // Ref for the sticky element
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedFinish, setSelectedFinish] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedThickness, setSelectedThickness] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [isMobile, setIsMobile] = useState(0);
  const [tab, setTab] = useState("");
  const pathName = usePathname();
  const [shortTitle, setShortTitle] = useState("");
  const [selectedTag, setSelectedTag] = useState("all"); // Initially no tag selected
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [shortNumber, setShortNumber] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [activeTab, setActiveTab] = useState("");
  const [products, setProducts] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  // Adding a loading state
  const [loading, setLoading] = useState(true); // Initially, set loading to t
  const router = useRouter();
  // Create a ref to the element you want to scroll to
  const projectsRef = useRef(null);
  console.log(currentData);
  // useEffect(() => {
  //   fetch(
  //     "https://vanras.humbeestudio.xyz/wp-json/wc/store/products/?per_page=100"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoading(false); // Set loading to false once data is fetched
  //       console.log("API Response:", data); // Log the response for debugging
  //       setProducts(data);
  //       setFilteredProducts(data); // Initially show all products
  //     })
  //     .catch((error) => {
  //       setLoading(false); // Set loading to false once data is fetched
  //       console.error("Failed to fetch data:", error);
  //     });
  // }, []);
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        // The API URL structure
        const apiUrl =
          // "https://vanras.humbeestudio.xyz/wp-json/wc/store/products/?per_page=100&page=";
          "https://admin.royalcrownlaminates.com/wp-json/wc/store/products/?per_page=100&page=";
        // Fetching all pages (1 to 9 in this case)
        const pageNumbers = Array.from({ length: 9 }, (_, index) => index + 1);

        // Fetch all pages in parallel using Promise.all
        const fetchPromises = pageNumbers.map((page) =>
          fetch(`${apiUrl}${page}`).then((res) => res.json())
        );

        // Wait for all API calls to complete
        const allProducts = await Promise.all(fetchPromises);

        // Combine all the fetched data into one array
        const combinedProducts = allProducts.flat();

        // Set the combined data into state
        setProducts(combinedProducts);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchAllProducts();
  }, []); // Only run once when the component is mounted
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    // const fullPath = pathName + hash;
    const categorySlug = hash ? hash.replace("#", "").toLowerCase() : ""; // Get category slug from the URL hash and ensure lowercase comparison
    console.log("Selected Category from URL Hash:", categorySlug);
    if (categorySlug) {
      console.log("Products:", products);
      const filteredData = products.filter((product) => {
        console.log("Checking product:", product);

        if (product.categories && Array.isArray(product.categories)) {
          console.log("Product Categories:", product.categories);
          return product.categories.some((category) => {
            console.log("Checking category  slug:", category.slug);
            return (
              category.slug &&
              category.slug.toLowerCase().trim() === categorySlug
            );
          });
        }
        return false; // If no valid categories, don't include the product
      });
      console.log("Filtered Data Based on Category:", filteredData);

      if (filteredData.length > 0) {
        setCurrentData(filteredData);
        // setActiveTab(fullPath);
        // setShortTitle(title);
        // setShortNumber(number);
        // setShortDescription(description);
      } else {
        console.log("No products found for the selected category.");
        setCurrentData([]); // If no products are found, clear current data
      }
    } else {
      console.log("No category slug found. Showing all products.");
      setCurrentData(products); // Set currentData to show all products
    }
  }, [pathName, products]);
  const handlePageChange = (event, value) => {
    setPageNumber(value);
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

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
  const categories = [
    { label: "Plain Colour", value: "Plain Colour" },
    { label: "Abstract", value: "Abstracts" },
    { label: "Classic Wood Grains", value: "Classic Wood Grains" },
    { label: "Stones", value: "Stones" },
    { label: "Solid Colors", value: "Solid Colors" },
    { label: "Textiles", value: "Textiles" },
    { label: "Mirrors", value: "Mirrors" },
    { label: "Woodgrains", value: "Woodgrains" },
  ];
  const size = [
    { label: "8 x 4", value: "8*4" },
    { label: "10 x 4.25", value: "8*9" },
    { label: "12 x 6", value: "3*2" },
    { label: "14 x 6", value: "6*6" },
    { label: "3 x 6", value: "3*6" }, 
    { label: "6 x 3", value: "6*3" },
  ];
  const thickness = [
    { label: "0.8 mm", value: "0.8 mm" },
    { label: "1.00 mm", value: "1.00 mm" },
    { label: "6 mm", value: "6 mm" },
    { label: "8 mm", value: "8 mm" },
    { label: "12 mm", value: "12 mm" },
    { label: "13 mm", value: "13 mm" },
  ];

  const color = [
    { label: "Red", value: "Red" },
    { label: "Blue", value: "Blue" },
    { label: "Green", value: "Green" },
    { label: "Gray", value: "Grey" },
    { label: "Brown", value: "Brown" },
    { label: "Pink", value: "Pink" },
    { label: "Yellow", value: "Yellow" },
    { label: "White", value: "White" },
  ];
  const mappedColor = useMemo(() => {
    return color.map((c) => ({ ...c, className: "myOptionClassName" }));
  }, [color]);
  const handleTypeChange = (e) => {
    setSelectedType(e.value);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCategory((prevSelectedCategory) => {
      if (checked) {
        console.log("Category Selected:", value); // Log the selected category
        return [...prevSelectedCategory, value];
      } else {
        return prevSelectedCategory.filter((category) => category !== value);
      }
    });
  };
  const handleSizeChange = (e) => {
    setSelectedSize(e.value);
  };
  const handleSizeClick = (sizeValue) => {
    setSelectedSize((prevSelectedSize) => {
      // If the size is already selected, deselect it (set to null or "")
      if (prevSelectedSize === sizeValue) {
        console.log("Size Deselected:", sizeValue);
        return null; // Deselect the size to show all products
      } else {
        console.log("Size Selected:", sizeValue);
        return sizeValue; // Select the new size
      }
    });
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

  const handleColorChange1 = (e) => {
    setSelectedColor(e.value);
  };
  const handleColorChange = (color) => {
    if (selectedColor === color) {
      setSelectedColor(null); // Clear the selection
    } else {
      setSelectedColor(color); // Set the selected color
    }
  };

  const filteredProducts1 = useMemo(() => {
    return products.filter((product) => {
      // Check if the product belongs to the "Xylem" category
      const isRoyalCrownCategory = product.categories.some(
        (category) => category.name.toLowerCase() === "royal crown"
      );
      const brandMatch =
        selectedBrand === "all" || product.category === selectedBrand;
      const categoryMatch =
        selectedCategory.length === 0 ||
        selectedCategory.some((selectedCat) =>
          product.attributes.some(
            (attr) =>
              attr.name === "type" &&
              attr.terms.some((term) => term.slug === selectedCat)
          )
        );
      const finishMatch =
        selectedFinish === "all" ||
        selectedFinish === null ||
        product.categories[1].slug === selectedFinish;
      const sizeMatch =
        selectedSize === "all" ||
        selectedSize === null ||
        product.attributes[1].terms[0].name === selectedSize;
         // Thickness filtering
      const thicknessAttr = product.attributes.find(
        (attr) => attr.name.toLowerCase() === "thickness"
      );
      const thicknessMatch =
        selectedThickness === "all" ||
        selectedThickness === null ||
        thicknessAttr?.terms[0]?.name === selectedThickness;
      // const thicknessMatch =
      //   selectedThickness === "all" ||
      //   selectedThickness === null ||
      //   product.attributes[2].terms[0].name === selectedThickness;
      
      // Color filtering
      const colorAttr = product.attributes.find(
        (attr) => attr.name.toLowerCase() === "color"
      );
      const colorMatch =
        selectedColor === "all" ||
        selectedColor === null ||
        colorAttr?.terms[0]?.name === selectedColor;
      // const colorMatch =
      //   selectedColor === "all" ||
      //   selectedColor === null ||
      //   product.attributes[4].terms[0].name === selectedColor;
      const typeMatch =
        selectedType === "all" ||
        selectedType === null ||
        product.attributes[3].terms[0].name === selectedType;
      // Search by design code

      // Get Design Code, default to "No Data Found" if not available
      // const designCode = product.attributes[6]?.terms[0].name || "";
      const designCodeAttr = product.attributes.find(
        (attr) => attr.name.toLowerCase() === "design code"
      );
      const productCodeAttr = product.attributes.find(
        (attr) => attr.name.toLowerCase() === "product code"
      );
      //Handle the null case for productCodeAttr

      const productCode =
        productCodeAttr && productCodeAttr.terms.length > 0
          ? productCodeAttr.terms[0].name
          : ""; // Fallback if no product code is found

      const designCode =
        designCodeAttr && designCodeAttr.terms.length > 0
          ? designCodeAttr.terms[0].name + productCode
          : ""; // Fallback if no design code is found
      const searchMatch =
        !searchTerm ||
        (designCode.toLowerCase() || "").includes(searchTerm.toLowerCase());

      console.log("Checking Product:", product); // Log each product being checked
      console.log(
        "Matches Filters:",
        isRoyalCrownCategory,
        brandMatch,
        "CategoryMatch",
        categoryMatch,
        "finish data",
        finishMatch,
        "size data",
        sizeMatch,
        "thickness data",
        thicknessMatch,
        "color match",
        colorMatch,
        typeMatch
      );

      return (
        isRoyalCrownCategory &&
        brandMatch &&
        categoryMatch &&
        finishMatch &&
        sizeMatch &&
        thicknessMatch &&
        colorMatch &&
        typeMatch &&
        searchMatch
      );
    });
  }, [
    products,
    selectedBrand,
    selectedCategory,
    selectedFinish,
    selectedSize,
    selectedThickness,
    selectedColor,
    searchTerm,
    selectedType, // Added selectedType to the dependencies of useMemo
  ]);

  // Calculate total pages dynamically based on filtered products
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts1.length / itemsPerPage)
  );
  // Ensure the current page is within the valid range
  const currentPage = Math.min(pageNumber, totalPages);
  // Calculate indices for the current page
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  // Slice the filtered products to display only the current page's items
  const displayedData = filteredProducts1.slice(firstIndex, lastIndex);
  // Render only valid pagination buttons
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setPageNumber(totalPages); // Redirect to the last valid page
    }
  }, [currentPage, totalPages]);
  // Reset to the first page if filters change
  useEffect(() => {
    setPageNumber(1); // Reset to the first page when filtered products change
  }, [filteredProducts1]);

  // const lastIndex = pageNumber * itemsPerPage;
  // const firstIndex = lastIndex - itemsPerPage;
  // const displayedData =
  //   filteredProducts1.length > 0
  //     ? filteredProducts1.slice(firstIndex, lastIndex)
  //     : [];
  useEffect(() => {
    if (selectedTag === "all") {
      setFilteredProducts(products);
    } else if (selectedTag === "Royal Crown") {
      // Highlighted: Check for Royal Crown explicitly
      const filtered = products.filter(
        (product) => product.category === "Xylem"
      ); // Highlighted: Filter by category Royal Crown
      console.log("Filtered Products for Royal Crown:", filtered); // Log the filtered result
      setFilteredProducts(filtered);
    } else {
      const filtered = products.filter((product) => {
        console.log("Checking product:", product); // Log each product
        return (
          product.type &&
          product.type.some((tag) => {
            console.log("Checking tag:", tag.slug, selectedTag); // Log each tag
            return tag.slug === selectedTag;
          })
        );
      });
      console.log("Filtered Products:", filtered); // Log the filtered result
      setFilteredProducts(filtered);
    }
  }, [selectedTag, products]);
  const handleThicknessClick = (thicknessValue) => {
    setSelectedThickness((prevSelectedThickness) => {
      if (prevSelectedThickness === thicknessValue) {
        console.log("Thickness Deselected:", thicknessValue);
        return null; // Deselect the thickness to show all products
      } else {
        console.log("Thickness Selected:", thicknessValue);
        return thicknessValue; // Select the new thickness
      }
    });
    const exploreCollectionElement = document.querySelector("#sticky_top");
    if (exploreCollectionElement) {
      exploreCollectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter((product) => {
        const designCodeAttr = product.attributes.find(
          (attr) => attr.name.toLowerCase() === "design code"
        );
        const designCode =
          designCodeAttr && designCodeAttr.terms.length > 0
            ? designCodeAttr.terms[0].name
            : "";

        return designCode.toLowerCase().includes(searchTerm.toLowerCase());
      });
      // const filtered = products.filter((product) => {
      //   return product.attributes[6]?.terms[0]?.name
      //     ?.toLowerCase()
      //     .includes(searchTerm.toLowerCase()); // Match design code attribute
      // });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // If no search term, show all products
    }
  }, [searchTerm, products]);

  const resetFiltersDrop = () => {
    setSelectedBrand("all");
    setSelectedCategory([]);
    setSelectedFinish("all");
    setSelectedSize("all");
    setSelectedThickness("all");
    setSelectedColor("all");
    setSelectedType("all");
    setSearchTerm(""); // Reset the search term
    setFilteredProducts(products);
    // Reset the URL to /product without the hash
    // router.push("/product", undefined, { shallow: true });
  };
  // Filter products based on search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter((product) => {
        const designCodeAttr = product.attributes.find(
          (attr) => attr.name.toLowerCase() === "design code"
        );
        const designCode =
          designCodeAttr && designCodeAttr.terms.length > 0
            ? designCodeAttr.terms[0].name
            : "";

        return designCode.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // If no search term, show all products
    }
  }, [searchTerm, products]);

  // Detect if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobileOne(window.innerWidth < 1025); // Update isMobile state
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial size
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Scroll event listener to hide/show the sticky element
  useEffect(() => {
    if (isMobileOne) {
      const handleScroll = () => {
        const currentScrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        // If the user is scrolling down
        if (currentScrollTop > lastScrollTop) {
          // Hide the sticky element
          if (stickyRef.current) {
            stickyRef.current.style.transform = "translateY(-100%)"; // Move it up
            stickyRef.current.style.zIndex = -1; // Set z-index to -1 when hidden
          }
        } else {
          // If scrolling up, show the sticky element
          if (stickyRef.current) {
            stickyRef.current.style.transform = "translateY(0)"; // Move it down
            stickyRef.current.style.zIndex = 1; // Set z-index to 1 when visible
          }
        }

        setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // Update the scroll position
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMobileOne, lastScrollTop]);

  return (
    <>
      <div className="productMainContainer">
        <div className="productMain">
          <div className="productNumber">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              02
            </motion.p>
          </div>
          <div className="productDescription">
            <motion.div
              className="productDescriptionBorder"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }} // Adjust this width to fit your design
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <div className="productDescriptionHeader">royal crown</div>
            <div className="productDescriptionContent">
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Royal Crown Laminates takes pride in its rich legacy of
                innovation, cutting-edge technology, and expertise, offering
                over 450 trendsetting surface designs. Our collection of modern
                laminates boasts a wide range of finishes and textures in 1mm
                thickness, empowering you to effortlessly realize your dream
                decor.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className="first_top">
        <motion.div
          className="exploreCollection"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Explore Collection
        </motion.div>
        <div id="sticky_top" className="products_name1">
          <div className="products-tabs" id="sticky_top">
            <div
              scroll={false}
              className="tab-item"
              style={{ background: "#5b3524" }}
            >
              <div className="tab-content-inner">royal crown</div>
            </div>
          </div>
        </div>

        <div className="supply">
          <div
            id="sticky"
            // ref={stickyRef} style={{ transition: "transform 0.3s ease" }}
          >
            {/* reset filter */}
            <div className="resetFilters">
              <button
                className="resetButton"
                onClick={resetFiltersDrop}
                scroll={false}
              >
                <span className="resetButton-content">reset</span>
                {/* Reset Filters */}
              </button>
            </div>
            {/* reset filter ends */}
            <div className="searchContainer">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="searchInput"
              />
            </div>
            <div className="dropdown1">
              <div className="dropdown-label">
                <label className="colorSelectDropdown" htmlFor="type-select">
                  SELECT TYPE
                </label>
              </div>
              {isMobile ? (
                <Dropdown
                  id="tag-select"
                  options={categories}
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
              </div>
              {isMobile ? (
                <Dropdown
                  className="color-select"
                  options={mappedColor}
                  value={selectedColor}
                  onChange={handleColorChange1}
                  placeholder="Select Color"
                />
              ) : (
                <div className="color_dropdown">
                  {color.map((colorItem, index) => (
                    <div
                      key={index}
                      className={`color-box color${index + 1}`}
                      onClick={() => handleColorChange(colorItem.value)} // Add color change functionality
                    ></div>
                  ))}
                </div>
              )}
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
                      scroll={false}
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
                        handleThicknessClick(thicknessOption.value)
                      } // Add click functionality
                    >
                      <p>{thicknessOption.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Skeleton Loader */}
          {loading ? (
            // <div className="skeleton-loader">
            <Grid container spacing={2}>
              {/* Render exactly 25 skeletons in the grid */}
              {Array.from({ length: 25 }).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Skeleton variant="rectangular" width="100%" height={200} />
                </Grid>
              ))}
            </Grid>
          ) : (
            // </div>
            // <div className="skeleton-loader">
            //   <div className="skeleton-item"></div>
            //   <div className="skeleton-item"></div>
            //   <div className="skeleton-item"></div>
            // </div>
            <div className="product_container" ref={projectsRef}>
              {displayedData.length === 0 ? (
                // Display this message if no products are found
                <div className="noMatchFound">No match found</div>
              ) : (
                displayedData.map((product, index) => {
                  console.log(displayedData);
                  // const isTabActive = !!activeTab;
                  const className =
                    // ? "" // Normal size for tab view
                    // :
                    index === 9
                      ? "big"
                      : [
                          0, 2, 3, 8, 9, 10, 12, 13, 14, 17, 18, 20, 21,
                        ].includes(index)
                      ? "tall"
                      : "";
                  // Get Design Code, default to "No Data Found" if not available
                  // const designCode = product.attributes[8]?.terms[0].name || "";
                  const designCodeAttr = product.attributes.find(
                    (attr) => attr.name.toLowerCase() === "design code"
                  );
                  const productCodeAttr = product.attributes.find(
                    (attr) => attr.name.toLowerCase() === "product code"
                  );
                  const productCode =
                    productCodeAttr && productCodeAttr.terms.length > 0
                      ? productCodeAttr.terms[0].name
                      : ""; // Fallback if no product code is found
                  const designCode =
                    designCodeAttr && designCodeAttr.terms.length > 0
                      ? designCodeAttr.terms[0].name + productCode
                      : // +
                        //   productCodeAttr.terms[0].name
                        ""; // Fallback if no design code is found

                  const defaultImage =
                    "http://vanras.humbeestudio.xyz/wp-content/uploads/2025/03/default_image.png";

                  return (
                    <div key={index} className={`AboutUs_product ${className}`}>
                      <Image
                        src={
                          product.images?.length > 0
                            ? product.images[0].src
                            : defaultImage
                        }
                        alt={product.name}
                        className="ProductImage"
                        width={500}
                        height={600}
                        onClick={() => {
                          console.log("Product ID:", product.id);
                          router.push(`/product-information#${product.id}`);
                        }}
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
                        <div
                          className="AnchorTag"
                          onClick={() => {
                            console.log("Product ID:", product.id);
                            router.push(`/product-information#${product.id}`);
                          }}
                        >
                          Know More
                        </div>
                      </div>
                      {/* Design Code Container */}
                      <div className="designCodeContainer">
                        <p className="designCode">{designCode}</p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>
        {currentData.length > 0 && (
          <div>
            <Stack spacing={2} justifyContent="center">
              <Pagination
                count={totalPages}
                page={currentPage}
                // count={Math.ceil(currentData.length / itemsPerPage)}
                color="primary"
                shape="rounded"
                // page={pageNumber}
                size="small"
                variant="outlined"
                onChange={handlePageChange}
                hidePrevButton
                hideNextButton
                siblingCount={1}
                boundaryCount={1}
                sx={{
                  "& .MuiPaginationItem-root": {
                    backgroundColor: "transparent",
                    border: "1px solid #5b3524",
                    color: "#5b3524",
                    margin: "0 10px",
                    padding: "8px 1px",
                    minWidth: "26px",
                    height: "26px",
                    fontSize: "15px",
                    borderRadius: "0px",
                    lineHeight: "0.5",
                    transition: "background-color 0.3s, color 0.3s",

                    "@media (max-width: 768px)": {
                      margin: "0 9px",
                      padding: "12px 8px",
                      fontSize: "15px",
                    },

                    "@media (max-width: 425px)": {
                      margin: "0 8px",
                      padding: "12px 8px",
                      fontSize: "12px",
                    },

                    "&.Mui-selected": {
                      backgroundColor: "#5b3524",
                      margin: "0 10px",
                      padding: "14px 10px",
                      fontSize: "16px",
                      color: "white",
                      border: "none",

                      "@media (max-width: 768px)": {
                        margin: "0 9px",
                        padding: "12px 10px",
                        fontSize: "15px",
                      },

                      "@media (max-width: 425px)": {
                        margin: "0 8px",
                        padding: "12px 10px",
                        fontSize: "12px",
                      },
                    },

                    "&.Mui-selected:hover": {
                      backgroundColor: "#5b3524",
                      color: "white",
                      border: "none",
                    },
                  },
                }}
              />
            </Stack>
          </div>
        )}
      </div>
    </>
  );
};
export default Page;
