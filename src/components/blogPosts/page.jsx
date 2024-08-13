"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import "./bloggs.scss"
import Data from "./data";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import BlogsCards from "@/components/blogPosts/blogcards";

const BlogPost = ({ readMoreRoute }) => {
  const router = useRouter();

  const handleReadMoreClick = (route) => {
    if (route) {
      router.push(route);
    }
  };

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState([]);
  const projectsRef = useRef(null);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedData(Data.slice(startIndex, endIndex));
  }, [currentPage]);

  // const handlePageChange = (event, value) => {
  //   setCurrentPage(value);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  // const handlePageChange = (event, value) => {
  //   setCurrentPage(value);
  //   if (projectsRef.current) {
  //     const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
  //     const projectsRefPosition = projectsRef.current.getBoundingClientRect().top + currentPosition;
  //     const scrollPosition = projectsRefPosition - 0; // Adjust this value as needed
  //     window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  //   }
  // };

  //   const handlePageChange = (event, value) => {
  //     setCurrentPage(value);
  //     const currentPosition = window.scrollY || document.documentElement.scrollTop;
  //     const projectsRefPosition = projectsRef.current.getBoundingClientRect().top + currentPosition;
  //     const scrollPosition = projectsRefPosition - 0; // Adjust this value as needed
  //     window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  //     console.log(currentPosition);
  //     console.log(projectsRefPosition);
  //     console.log(scrollPosition);
  // };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);

    // Calculate the scroll position relative to the projectsRef element
    const projectsRefPosition = projectsRef.current.offsetTop;
    const scrollPosition = projectsRefPosition - 20; // Adjust this value as needed

    // Scroll to the projectsRef element with smooth behavior
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    console.log(projectsRefPosition);
    console.log(scrollPosition);
  };

  // const handlePageChange = (event, value) => {
  //     setCurrentPage(value);
  //     let scrollPosition;
  //     // Determine the scroll position based on window width
  //     if (window.innerWidth <= 1600 && window.innerWidth > 1440) {
  //         scrollPosition = window.innerHeight * 1.14; // Scroll position for 1600px width
  //     } else if (window.innerWidth <= 1440 && window.innerWidth > 1024) {
  //         scrollPosition = window.innerHeight * 1.12; // Scroll position for 1440px width
  //     } else if (window.innerWidth <= 1024 && window.innerWidth > 768) {
  //         scrollPosition = window.innerHeight * 1; // Scroll position for 1024px width
  //     } else if (window.innerWidth <= 768) {
  //         scrollPosition = window.innerHeight * 1.08; // Scroll position for 768px width
  //     } else {
  //         scrollPosition = window.innerHeight * 1.08; // Default for larger screens
  //     }
  //     window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  // };

  return (
    <div ref={projectsRef} >
      <div className="BlogsInner">
      {displayedData.map((item, index) => (
        <div  key={index}  >
          <BlogsCards
            item={item}
            handleReadMoreClick={handleReadMoreClick}
          />
        </div>
        
      ))}
      </div>

      <div>
        <Stack spacing={2} justifyContent="center !important">
          <Pagination
            count={Math.ceil(Data.length / itemsPerPage)}
            color="primary"
            shape="rounded"
            page={currentPage}
            size="small"
            variant="outlined"
            onChange={handlePageChange}
            hidePrevButton
            hideNextButton
            // showFirstButton    //for showing first button on pagination
            // showLastButton     // for showing last button of pagination
            sx={{
              "& .MuiPaginationItem-root": {
                backgroundColor: "transparent",
                border: "1px solid #5B3524",
                color: "#5B3524",
                margin: "0 10px",
                padding: "18px 13px",
                fontSize: "20px",
                borderRadius: "0px",
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
                  backgroundColor: "#FFF5ED",
                  margin: "0 10px",
                  padding: "18px 13px",
                  fontSize: "20px",
                  color: "#5B3524",
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
                  backgroundColor: "#c1c0c0",
                  color: "black",
                  border: "none",
                },
              },
            }}
          />
        </Stack>
      </div>

      {/* <div style={{ background: "white", height: "100px" }}></div> */}
    </div>
  );
};

export default BlogPost;
