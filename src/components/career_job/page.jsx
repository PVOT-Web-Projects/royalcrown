"use client";
import React, { useState } from "react";
import YellowSubmitButton from "../buttons/yellowSubmitButton/YellowSubmitButton";
import "./Career_job.scss";
import Cards from "../TwoCards/page";
const CareerJob = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className="CareerMainContainer">
      <div className="CareerMainContainerText">
        <p>Your Next Career Breakthrough Starts Now</p>
      </div>
      <div className="SearchMainContainer">
        <div className="inputContainer">
          <svg
            className="searchIcon"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path
              d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"
              fill="white"
            />
          </svg>
          <input
            className="input"
            name="text"
            placeholder="Search Jobs"
            type="search"
            value={inputValue}
            onChange={handleInputChange}
          />
          {inputValue && (
            <button className="close-btn" onClick={clearInput}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="close-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        <div>
          <YellowSubmitButton btn_text={"Search"} />
        </div>
      </div>
      {/* search ends */}
      <div className="SecondTextContainer">
        <div>
          <p className="SecondTextContainerInner">
            What’s It Like Working for Royal Crown ?
          </p>
        </div>
        <div className="SecondTextContainertext">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="ThirdText">
            {" "}
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        {/*  */}
        <div className="TwoCardsSection">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default CareerJob;
