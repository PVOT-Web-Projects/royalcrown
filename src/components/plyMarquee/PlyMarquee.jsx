"use client"
const { default: Image } = require("next/image");
const { default: Marquee } = require("react-fast-marquee");
import img1 from "@/images/ply1.png";
import img2 from "@/images/ply2.png";
import img3 from "@/images/ply3.png";
import img4 from "@/images/ply4.png";
import img5 from "@/images/ply5.png";
import img6 from "@/images/ply6.png";
import img7 from "@/images/ply7.png";
import "./plyMarquee.scss";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import "./marquee.css"

const PlyMarquee = () => {
  const [getCategory, setGetCategory] = useState("");
  const [getThickness, setGetThickness] = useState("");
  const [getSize, setGetSize] = useState("");
  const [getColor, setGetColor] = useState("");
  
  const category = [
    { cat: "Xylem" },
    { cat: "Xylem2" },
    { cat: "Xylem3" },
    { cat: "Xylem4" },
    { cat: "Xylem5" },
  ];
  const thickness = [
    { thick: "1MM" },
    { thick: "2MM" },
    { thick: "3MM" },
    { thick: "4MM" },
  ];
  const sizes = [
    { size: "25 Sq MM" },
    { size: "25 Sq MM" },
    { size: "25 Sq MM" },
    { size: "25 Sq MM" },
  ];
  const colors = [
    { color: "Brown" },
    { color: "White" },
    { color: "Black" },
    { color: "Blue" }, 
  ];
  return (
    <div className="ply_marquee">
      <div className="filter_wrapper">
        <div className="filter">
          <Dropdown
            options={category}
            optionLabel="cat"
            placeholder="Category"
            onChange={(e) => setGetCategory(e.target.value)}
            value={getCategory}
          />
        </div>
        <div className="filter">
          <Dropdown
            options={thickness}
            optionLabel="thick"
            placeholder="Thickness"
            onChange={(e) => setGetThickness(e.target.value)}
            value={getThickness}
          />
        </div>
        <div className="filter">
          <Dropdown
            options={sizes}
            optionLabel="size"
            placeholder="Size"
            onChange={(e) => setGetSize(e.target.value)}
            value={getSize}
          />
        </div>
        <div className="filter">
          <Dropdown
            options={colors}
            optionLabel="color"
            placeholder="Colour"
            onChange={(e) => setGetColor(e.target.value)}
            value={getColor}
          />
        </div>
      </div>
      <Marquee class="r3f_marquee" speed={70}>
        <div className="ply_list">
          <div className="ply_item">
            <div className="ply_info">
              <div className="info_left">
                <div className="num">6038</div>
                <div className="text">tw</div>
              </div>
              <div className="info_right">
                <div className="ply_name">Mauri</div>
                <div className="ply_wood">true wood</div>
              </div>
            </div>
            <Image src={img1} alt="ply" />
          </div>
          <div className="ply_item">
            <div className="ply_info">
              <div className="info_left">
                <div className="num">6038</div>
                <div className="text">tw</div>
              </div>
              <div className="info_right">
                <div className="ply_name">Mauri</div>
                <div className="ply_wood">true wood</div>
              </div>
            </div>
            <Image src={img2} alt="ply" />
          </div>
          <div className="ply_item">
            <div className="ply_info">
              <div className="info_left">
                <div className="num">6038</div>
                <div className="text">tw</div>
              </div>
              <div className="info_right">
                <div className="ply_name">Mauri</div>
                <div className="ply_wood">true wood</div>
              </div>
            </div>
            <Image src={img3} alt="ply" />
          </div>
          <div className="ply_item">
            <div className="ply_info">
              <div className="info_left">
                <div className="num">6038</div>
                <div className="text">tw</div>
              </div>
              <div className="info_right">
                <div className="ply_name">Mauri</div>
                <div className="ply_wood">true wood</div>
              </div>
            </div>
            <Image src={img4} alt="ply" />
          </div>
          <div className="ply_item">
            <div className="ply_info">
              <div className="info_left">
                <div className="num">6038</div>
                <div className="text">tw</div>
              </div>
              <div className="info_right">
                <div className="ply_name">Mauri</div>
                <div className="ply_wood">true wood</div>
              </div>
            </div>
            <Image src={img5} alt="ply" />
          </div>
          <div className="ply_item">
            <div className="ply_info">
              <div className="info_left">
                <div className="num">6038</div>
                <div className="text">tw</div>
              </div>
              <div className="info_right">
                <div className="ply_name">Mauri</div>
                <div className="ply_wood">true wood</div>
              </div>
            </div>
            <Image src={img6} alt="ply" />
          </div>
          <div className="ply_item">
            <div className="ply_info">
              <div className="info_left">
                <div className="num">6038</div>
                <div className="text">tw</div>
              </div>
              <div className="info_right">
                <div className="ply_name">Mauri</div>
                <div className="ply_wood">true wood</div>
              </div>
            </div>
            <Image src={img7} alt="ply" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};
export default PlyMarquee;
