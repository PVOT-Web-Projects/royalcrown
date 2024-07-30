import React from "react";
import "./product_info.scss";
import Image from "next/image";
import Img1 from "@/images/highly_resistance_chemcals.png";
import Img2 from "@/images/highly_abrasion_resistance.png";
import Img3 from "@/images/low_maintanence.png";
import Img4 from "@/images/highly_durable.png";
import Img5 from "@/images/scratch_resistance.png";
const cards = [
  {
    title: "HIGHLY RESISTANT TO CHEMICALS",
    description:
      "Specially treated EB cured layer makes resistant to all kinds of chemicals.",
    icon: Img1,
    backgroundColor: "#CBCBCB",
  },
  {
    title: "HIGH ABRASION RESISTANCE",
    description:
      "Our products have a high resistance to abrasion, which allows for their use in all kinds of applications on surfaces that hold tools, glassware and other laboratory equipment.",
    icon: Img2,
    backgroundColor: "#E3E1E1",
  },
  {
    title: "LOW MAINTENANCE",
    description:
      "Laminates are generally easy to care for, and with the exceptional properties of Our laminates, maintenance & care becomes even easier.",
    icon: Img3,
    backgroundColor: "#CBCBCB",
  },
  {
    title: "HIGHLY DURABLE",
    description:
      "With superior chemical and physical properties, products are highly durable and recommended for areas that involve working, storing and disposing of chemicals.",
    icon: Img4,
    backgroundColor: "#E3E1E1",
  },
  {
    title: "SCRATCH RESISTANT",
    description:
      "Performance laminates and compact panel have higher scratch resistance than other products and laminates in the market.",
    icon: Img5,
    backgroundColor: "#CBCBCB",
  },
  {
    title: "HIGHLY DURABLE",
    description:
      "With superior chemical and physical properties, products are highly durable and recommended for areas that involve working, storing and disposing of chemicals.",
    icon: Img4,
    backgroundColor: "#E3E1E1",
  },
];

const Card = ({ title, description, icon, backgroundColor }) => (
  <div className="card" style={{ backgroundColor }}>
    {icon && <Image src={icon} alt={title} className="card-icon" />}
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
  </div>
);

const KeyFeaturesInfo = () => (
  <div className="Card-Grid-MainContainer">
    <div className="Card_MainTitle">
        <p className="Card_MainTitle_text">KEY FEATURES</p>
    </div>
    <div className="card-grid">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
          backgroundColor={card.backgroundColor}
        />
      ))}
    </div>
  </div>
);

export default KeyFeaturesInfo;
