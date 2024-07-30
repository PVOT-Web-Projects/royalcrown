import React from "react";
import "./headingwithbutton.scss";
import YellowButton from "../buttons/yellowButton/YellowButton";

const headingwithbutton = () => {
  return (
    <div className="container">
      <h1 className="heading">
        Sturdily beautiful. Warm, bright. Naturally comforting. Timelessly{" "}
        <span className="subheading">modern.</span>
      </h1>
      <YellowButton btn_text={"Let's Start"} url={"/"} />
      {/* <div className="buttonContainer">
        <button className="button">Let's Start</button>
      </div> */}
    </div>
  );
};

export default headingwithbutton;
