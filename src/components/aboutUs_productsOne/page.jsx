"use client"
import { useState, useMemo, useEffect, useRef } from "react"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import "./aboutUs_product.scss"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Dropdown } from "primereact/dropdown"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Skeleton, Grid } from "@mui/material"

const Page = () => {
  const itemsPerPage = 25
  const [pageNumber, setPageNumber] = useState(1)
  const [selectedTab, setSelectedTab] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState([])
  const [selectedFinish, setSelectedFinish] = useState("all")
  const [selectedSize, setSelectedSize] = useState("all")
  const [selectedThickness, setSelectedThickness] = useState("all")
  const [selectedColor, setSelectedColor] = useState("all")
  const [isMobile, setIsMobile] = useState(0)
  const [tab, setTab] = useState("")
  const [loading, setLoading] = useState(true)
  const pathName = usePathname()
  const [shortTitle, setShortTitle] = useState("")
  const [selectedTag, setSelectedTag] = useState("all")
  const [filteredProducts, setFilteredProducts] = useState([])
  const [shortNumber, setShortNumber] = useState("")
  const [shortDescription, setShortDescription] = useState("")
  const [activeTab, setActiveTab] = useState("")
  const [activeTabOne, setActiveTabOne] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [products, setProducts] = useState([])
  const [currentData, setCurrentData] = useState([])

  const isInitialLoad = useRef(true)
  const isBackNavigation = useRef(false)
  const isFilterChange = useRef(false)
  const previousFilters = useRef({})
  const hasLoadedFromStorage = useRef(false)
  useEffect(() => {
    const handlePopState = () => {
      console.log("Back navigation detected")
      isBackNavigation.current = true
      // Immediately restore page number on back navigation
      const savedPage = localStorage.getItem("pageNumber")
      if (savedPage) {
        setPageNumber(Number.parseInt(savedPage, 10))
      }
    }

    window.addEventListener("popstate", handlePopState)
    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [])

  // Load saved page number from localStorage on mount ONLY
  useEffect(() => {
    if (!hasLoadedFromStorage.current) {
      const savedPage = localStorage.getItem("pageNumber")
      if (savedPage) {
        console.log("Loading saved page:", savedPage)
        setPageNumber(Number.parseInt(savedPage, 10))
      }
      hasLoadedFromStorage.current = true
    }
  }, [])

  const router = useRouter()
  const projectsRef = useRef(null)
  console.log(currentData);
  // Fetch products
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const apiUrl = "https://admin.royalcrownlaminates.com/wp-json/wc/store/products/?per_page=100&page="
        const pageNumbers = Array.from({ length: 12 }, (_, index) => index + 1)
        const fetchPromises = pageNumbers.map((page) => fetch(`${apiUrl}${page}`).then((res) => res.json()))
        const allProducts = await Promise.all(fetchPromises)
        const combinedProducts = allProducts.flat()
        setProducts(combinedProducts)
        setLoading(false)
      } catch (error) {
        console.error("Failed to fetch data:", error)
        setLoading(false)
      }
    }

    fetchAllProducts()
  }, [])

  // Only save page number when user manually changes it or when filters change
  const handlePageChange = (event, value) => {
    console.log("Page changed to:", value)
    setPageNumber(value)
    localStorage.setItem("pageNumber", value.toString())

    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }

  // Detect filter changes more accurately
  useEffect(() => {
    // Skip on initial load
    if (isInitialLoad.current) {
      return
    }

    const currentFilters = {
      brand: selectedBrand,
      type: selectedType,
      category: JSON.stringify(selectedCategory),
      finish: selectedFinish,
      size: selectedSize,
      thickness: selectedThickness,
      color: selectedColor,
      searchTerm: searchTerm,
      tag: selectedTag,
    }

    const prevFilters = previousFilters.current

    // Check if any filter actually changed
    const hasFilterChanged = Object.keys(currentFilters).some((key) => prevFilters[key] !== currentFilters[key])

    if (hasFilterChanged) {
      console.log("Filter changed, will reset page")
      isFilterChange.current = true
      previousFilters.current = { ...currentFilters }
    }
  }, [
    selectedBrand,
    selectedType,
    selectedCategory,
    selectedFinish,
    selectedSize,
    selectedThickness,
    selectedColor,
    searchTerm,
    selectedTag,
  ])

  // Enhanced page number management - only reset when filters actually change
  useEffect(() => {
    // Skip on initial load
    if (isInitialLoad.current) {
      isInitialLoad.current = false
      // Set initial filters
      previousFilters.current = {
        brand: selectedBrand,
        type: selectedType,
        category: JSON.stringify(selectedCategory),
        finish: selectedFinish,
        size: selectedSize,
        thickness: selectedThickness,
        color: selectedColor,
        searchTerm: searchTerm,
        tag: selectedTag,
      }
      return
    }

    // If coming back from product page, preserve page number
    if (isBackNavigation.current) {
      console.log("Back navigation - preserving page number")
      isBackNavigation.current = false
      return
    }
  }, [filteredProducts])

  // Load saved filters and tab
  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem("filters"))
    const savedTab = localStorage.getItem("activeTab")

    if (savedFilters) {
      setSelectedBrand(savedFilters.brand || "all")
      setSelectedType(savedFilters.type || "all")
      setSelectedCategory(savedFilters.category || [])
      setSelectedFinish(savedFilters.finish || "all")
      setSelectedSize(savedFilters.size || "all")
      setSelectedThickness(savedFilters.thickness || "all")
      setSelectedColor(savedFilters.color || "all")
    }

    if (savedTab) {
      handleTabClick(savedTab)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025)
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : ""
    const categorySlug = hash ? hash.replace("#", "") : ""
    if (categorySlug) {
      setActiveTab(categorySlug)
      const filteredData = products.filter((product) =>
        product.categories.some((categoryItem) => categoryItem.slug === categorySlug),
      )
      setCurrentData(filteredData)
    } else {
      setCurrentData(products)
    }
  }, [pathName, products])

  const categories = [
    { label: "Plain Colour", value: "Plain Colour" },
    { label: "Abstract", value: "Abstracts" },
    // { label: "Classic Wood Grains", value: "Classic Wood Grains" },
    { label: "Stones", value: "Stones" },
    // { label: "Solid Colors", value: "Solid Colors" },
    { label: "Textile", value: "Textile" },
    { label: "Mirrors", value: "Mirrors" },
    { label: "Woodgrain", value: "Woodgrain" },
  ]

  const size = [
    { label: "8 x 4", value: "8*4" },
    { label: "10 x 4.25", value: "8*9" },
    { label: "12 x 6", value: "3*2" },
    { label: "14 x 6", value: "6*6" },
    { label: "3 x 6", value: "3*6" },
    { label: "6 x 3", value: "6*3" },
  ]

  const thickness = [
    { label: "0.8 mm", value: "0.8 mm" },
    { label: "1.00 mm", value: "1.00 mm" },
    { label: "6 mm", value: "6 mm" },
    { label: "8 mm", value: "8 mm" },
    { label: "12 mm", value: "12 mm" },
    { label: "13 mm", value: "13 mm" },
  ]

  const color = [
    { label: "Red", value: "Red" },
    { label: "Blue", value: "Blue" },
    { label: "Green", value: "Green" },
    { label: "Gray", value: "Grey" },
    { label: "Brown", value: "Brown" },
    { label: "Pink", value: "Pink" },
    { label: "Yellow", value: "Yellow" },
    { label: "White", value: "White" },
  ]

  const mappedColor = useMemo(() => {
    return color.map((c) => ({ ...c, className: "myOptionClassName" }))
  }, [color])

  const handleTypeChange = (e) => {
    event.preventDefault()
    setSelectedType(e.value)
  }

  const handleCategoryChange = (event) => {
    event.preventDefault()
    const { value, checked } = event.target
    setSelectedCategory((prevSelectedCategory) => {
      if (checked) {
        console.log("Category Selected:", value);
        return [...prevSelectedCategory, value]
      } else {
        return prevSelectedCategory.filter((category) => category !== value)
      }
    })
  }

  const handleSizeChange = (e) => {
    event.preventDefault()
    setSelectedSize(e.value)
  }

  const handleSizeClick = (sizeValue) => {
    event.preventDefault()
    setSelectedSize((prevSelectedSize) => {
      if (prevSelectedSize === sizeValue) {
        console.log("Size Deselected:", sizeValue);
        return null
      } else {
        console.log("Size Selected:", sizeValue);
        return sizeValue
      }
    })
    const exploreCollectionElement = document.querySelector("#sticky_top")
    if (exploreCollectionElement) {
      exploreCollectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const handleSearchChange = (event) => {
    event.preventDefault()
    setSearchTerm(event.target.value)
  }

  const handleThicknessChange = (e) => {
    event.preventDefault()
    setSelectedThickness(e.value)
  }

  const handleColorChange1 = (e) => {
    event.preventDefault()
    setSelectedColor(e.value)
  }

  const handleColorChange = (color) => {
    event.preventDefault()
    if (selectedColor === color) {
      setSelectedColor(null)
    } else {
      setSelectedColor(color)
    }
  }

  const resetFiltersDrop = () => {
    setSelectedBrand("all")
    setSelectedCategory([])
    setSelectedFinish("all")
    setSelectedSize("all")
    setSelectedThickness("all")
    setSelectedColor("all")
    setSelectedType("all")
    setSearchTerm("")
    setActiveTab("") // Reset the active tab
    setPageNumber(1)
    setSelectedTag("all") // Add this to reset the tag filter
    // Update the URL to just '/product' without hash
  // router.push("/product", undefined, { shallow: true })
  // Reset URL to `/product` without hash
  if (typeof window !== "undefined") {
    window.history.pushState({}, "", "/product");
  }
    localStorage.setItem("pageNumber", "1")
    setFilteredProducts(products)
  }

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter((product) => {
        const designCodeAttr = product.attributes.find((attr) => attr.name.toLowerCase() === "design code")
        const productCodeAttr = product.attributes.find((attr) => attr.name.toLowerCase() === "product code")

        const productCode = productCodeAttr && productCodeAttr.terms.length > 0 ? productCodeAttr.terms[0].name : ""

        const designCode =
          designCodeAttr && designCodeAttr.terms.length > 0 ? designCodeAttr.terms[0].name + productCode : ""
        return designCode.toLowerCase().includes(searchTerm.toLowerCase())
      })
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts(products)
    }
  }, [searchTerm, products])

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage))
  const currentPage = Math.min(pageNumber, totalPages)
  const lastIndex = currentPage * itemsPerPage
  const firstIndex = lastIndex - itemsPerPage
  const displayedData = filteredProducts.slice(firstIndex, lastIndex)

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setPageNumber(totalPages)
    }
  }, [currentPage, totalPages])


  //  useEffect(() => {
  //     setPageNumber(1);
  //   }, [filteredProducts]);

const categoryMap = {
    "/product#xylem": "Xylem",
    "/product#royal-crown": "Royal Crown",
    "/product#crown": "crown",
    "/product#qbliss": "qbliss",
    "/product#Crown_Xcl": "Crown XCL",
  };
  const handleTabClick = (tab) => {
    setSelectedTag(tab.toLowerCase())
    setActiveTab(tab) 
    localStorage.setItem("activeTab", tab)
    
  }

  useEffect(() => {
    const filters = {
      brand: selectedBrand,
      type: selectedType,
      category: selectedCategory,
      finish: selectedFinish,
      size: selectedSize,
      thickness: selectedThickness,
      color: selectedColor,
    }
    localStorage.setItem("filters", JSON.stringify(filters))
  }, [selectedBrand, selectedType, selectedCategory, selectedFinish, selectedSize, selectedThickness, selectedColor])

 useEffect(() => {
     console.log("Selected Tag:", selectedTag);
     console.log("Products Data:", products);
     let filtered = products;
     if (selectedTag !== "all") {
       const actualTag = selectedTag.split("#")[1];
       filtered = filtered.filter((product) => {
         if (Array.isArray(product.categories)) {
           return product.categories.some((category) => {
             return category.slug.toLowerCase() === actualTag.toLowerCase();
           });
         }
         return false;
       });
     }
     console.log("Filtered by selectedTag:", filtered);
     filtered = filtered.filter((product) => {
       const brandMatch =
         selectedBrand === "all" || product.category === selectedBrand;
       const categoryMatch =
         selectedCategory.length === 0 ||
         selectedCategory.some((selectedCat) =>
           product.attributes.some(
             (attr) =>
               attr.name === "type" &&
               attr.terms.some((term) => term.name === selectedCat)
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
       const thicknessMatch =
         selectedThickness === "all" ||
         selectedThickness === null ||
         product.attributes[2].terms[0].name === selectedThickness;
       const colorMatch =
         selectedColor === "all" ||
         selectedColor === null ||
         product.attributes[4].terms[0].name === selectedColor;
       const typeMatch =
         selectedType === "all" ||
         selectedType === null ||
         product.attributes[3].terms[0].name === selectedType;
       // Add more filters as necessary
       return (
         brandMatch &&
         categoryMatch &&
         finishMatch &&
         sizeMatch &&
         thicknessMatch &&
         colorMatch &&
         typeMatch
       );
     });
     console.log("Final Filtered Products:", filtered);
     // Update the state with filtered products
     setFilteredProducts(filtered);
   }, [
     selectedTag,
     products,
     selectedBrand,
     selectedCategory,
     selectedFinish,
     selectedSize,
     selectedThickness,
     selectedColor,
     selectedType, // Add other filter states as needed
   ]);

  const handleThicknessClick = (thicknessValue) => {
    setSelectedThickness((prevSelectedThickness) => {
      if (prevSelectedThickness === thicknessValue) {
        console.log("Thickness Deselected:", thicknessValue);
        return null
      } else {
         console.log("Thickness Selected:", thicknessValue);
        return thicknessValue
      }
    })
    const exploreCollectionElement = document.querySelector("#sticky_top")
    if (exploreCollectionElement) {
      exploreCollectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }
// Restore scroll position on back navigation
  useEffect(() => {
    if (isBackNavigation.current) {
      const savedScrollPosition = sessionStorage.getItem("scrollPosition")
      if (savedScrollPosition) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedScrollPosition, 10))
          sessionStorage.removeItem("scrollPosition")
        }, 100)
      }
    }
  }, [pageNumber])
  return (
    <>
      <div className="productMainContainer">
        <div className="productMain">
          <div className="productNumber">
            <p>{shortNumber}</p>
          </div>
          <div className="productDescription">
            <motion.div
              className="productDescriptionBorder"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <div className="productDescriptionHeader">{shortTitle}</div>
            <div className="productDescriptionContent">
              <p>{shortDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="first_top1">
        <motion.div
          className="exploreCollection"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Explore Collection
        </motion.div>
        <div id="sticky_top" className="products_name">
          <div className="products-tabs" id="sticky_top">
            {["Royal Crown", "Crown XCL", "qbliss", "Xylem", "crown"].map((label) => (
              <Link
                key={label}
                href={`/product#${label.replace(" ", "-").toLowerCase()}`}
                scroll={false}
                className={`tab-item ${
                  activeTab === `/product#${label.replace(" ", "-").toLowerCase()}` ? "active" : ""
                }`}
                onClick={() => handleTabClick(`/product#${label.replace(" ", "-").toLowerCase()}`, label)}
              >
                <div className="tab-content-inner">{label === "qbliss" ? "qbiss" : label}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="supply">
          <div id="sticky">
            <div className="resetFilters">
              <button className="resetButton" onClick={resetFiltersDrop} scroll={false}>
                <span className="resetButton-content">reset</span>
              </button>
            </div>

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
                      <span className="checkmark"></span>
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
                      onClick={() => handleColorChange(colorItem.value)}
                      scroll={false}
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
                      className={`SizeProduct ${selectedSize === sizeOption.value ? "selected" : ""}`}
                      onClick={() => handleSizeClick(sizeOption.value)}
                      scroll={false}
                    >
                      <p>{sizeOption.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="dropdown1">
              <div className="dropdown-label">
                <label htmlFor="thickness-select" className="colorSelectDropdown">
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
                      className={`ThicknessProduct ${selectedThickness === thicknessOption.value ? "selected" : ""}`}
                      onClick={() => handleThicknessClick(thicknessOption.value)}
                      scroll={false}
                    >
                      <p>{thicknessOption.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {loading ? (
            <Grid container spacing={2}>
              {Array.from({ length: 25 }).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Skeleton variant="rectangular" width="100%" height={200} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <div className="product_container" ref={projectsRef}>
              {displayedData.length === 0 ? (
                <div className="noMatchFound">No match found</div>
              ) : (
                displayedData.map((product, index) => {
                  const className =
                    index === 9 ? "big" : [0, 2, 3, 8, 9, 10, 12, 13, 14, 17, 18, 20, 21].includes(index) ? "tall" : ""

                  const designCodeAttr = product.attributes.find((attr) => attr.name.toLowerCase() === "design code")
                  const productCodeAttr = product.attributes.find((attr) => attr.name.toLowerCase() === "product code")

                  const productCode =
                    productCodeAttr && productCodeAttr.terms.length > 0 ? productCodeAttr.terms[0].name : ""

                  const designCode =
                    designCodeAttr && designCodeAttr.terms.length > 0 ? designCodeAttr.terms[0].name + productCode : ""

                  const defaultImage = "http://vanras.humbeestudio.xyz/wp-content/uploads/2025/03/default_image.png"

                  return (
                    <div key={index} className={`AboutUs_product ${className}`}>
                      <Image
                        src={product.images?.length > 0 ? product.images[0].src : defaultImage}
                        alt={product.name}
                        className="ProductImage"
                        width={500}
                        height={600}
                        onClick={() => {
                          console.log("Navigating to product, saving page:", pageNumber)
                          // Ensure page is saved before navigation
                          localStorage.setItem("pageNumber", pageNumber.toString())
                          sessionStorage.setItem("scrollPosition", window.pageYOffset.toString())
                          router.push(`/product-information#${product.id}`)
                        }}
                      />
                      <div className="overlay">
                        <div>
                          <svg
                            width="40"
                            height="40"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="white"
                            className="aboutUsProductSvg"
                          >
                            <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
                          </svg>
                        </div>
                        <div className="AnchorTag">Know More</div>
                      </div>
                      <div className="designCodeContainer">
                        <p className="designCode">{designCode}</p>
                      </div>
                    </div>
                  )
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
                color="primary"
                shape="rounded"
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
  )
}

export default Page
