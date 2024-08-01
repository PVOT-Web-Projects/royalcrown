'use client'
import { useState } from "react";
import Link from 'next/link'
import img1 from "@/images/HoverImg1.png";
import img2 from "@/images/HoverImg1.png";
import img3 from "@/images/HoverImg1.png";
import img4 from "@/images/HoverImg1.png";
import img5 from "@/images/HoverImg1.png";
import img6 from "@/images/HoverImg1.png";
import img7 from "@/images/HoverImg1.png";
import img8 from "@/images/HoverImg1.png";
import InsightsPageCardHover from "./insightsPageCardHover";
import InsightsPageCardItem from "./insightsPageCardItem";
const projects = [
  {
    title: "Urban Design Trends with Royal Crown Luxury Laminates Urban Design Trends with Royal Crown Luxury Laminates",
    description:
      "26 July 2024",
    image1: img1,
    link1: "/",
  },
  {
    title: "Urban Design Trends with Royal Crown Luxury Laminates Urban Design Trends with Royal Crown Luxury Laminates",
    description:
      "26 July 2024",
    image1: img2,
    link1: "/",
  },
  {
    title: "Urban Design Trends with Royal Crown Luxury Laminates Urban Design Trends with Royal Crown Luxury Laminates",
    description:
      "26 July 2024",
    image1: img3,
    link1: "/",
  },
  {
    title: "Urban Design Trends with Royal Crown Luxury Laminates Urban Design Trends with Royal Crown Luxury Laminates",
    description:
      "26 July 2024",
    image1: img4,
    link1: "/",
  },
  {
    title: "Urban Design Trends with Royal Crown Luxury Laminates Urban Design Trends with Royal Crown Luxury Laminates",
    description:
      "26 July 2024",
    image1: img5,
    link1: "/",
  },
  {
    title: "Urban Design Trends with Royal Crown Luxury Laminates Urban Design Trends with Royal Crown Luxury Laminates",
    description:
      "26 July 2024",
    image1: img6,
    link1: "/",
  },
  {
    title: "Urban Design Trends with Royal Crown Luxury Laminates Urban Design Trends with Royal Crown Luxury Laminates",
    description:
      "26 July 2024",
    image1: img7,
    link1: "/",
  },
  {
    title: "Urban Design Trends with Royal Crown Luxury Laminates Urban Design Trends with Royal Crown Luxury Laminates",
    description:
      "26 July 2024",
    image1: img8,
    link1: "/",
  },
];
const ServicesPageCard = () => {
  const [hoverImage, setHoverImage] = useState({ active: false, index: 0 });
  return (
    <div className={"servicesPageCard"}>
      <div className={"servicesPageCard_wrapper"}>
        {projects.map((project, index) => {
          return (
            <Link
              href={project.link1} // Use the link from the card or "/" as a fallback
              key={index}
            >
              <InsightsPageCardItem
                index={index}
                title={project.title}
                setHoverImage={setHoverImage}
                description={project.description}
              />
            </Link>
          );
        })}
      </div>
      <InsightsPageCardHover hoverImage={hoverImage} projects={projects} />
    </div>
  );
};

export default ServicesPageCard;
