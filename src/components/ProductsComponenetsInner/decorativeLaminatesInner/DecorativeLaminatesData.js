import icon1 from "../../../images/Icons-11-2048x2048.png";
import icon2 from "../../../images/Icons-12.png";
import Image1 from "../../../images/1_LOW-ELECTRICAL-RESISTANT.svg";
import Productimg1 from "../../../images/5-2048x749.png";
// import verticalIcon from "../../images/vertical-icon.svg";
// import horizontalIcon from "../../images/horizontal-icon.svg";
// import laboratoriesIcon from "../../images/laboratories-icon.svg";
// import electronicIndustriesIcon from "../../images/electronic-industries-icon.svg";
// import pharmaceuticalLabsIcon from "../../images/pharmaceutical-labs-icon.svg";
// import itOfficesIcon from "../../images/it-offices-icon.svg";
// import callCentresIcon from "../../images/call-centres-icon.svg";

const DecorativeLaminatesData = {
  header: "Decorative Laminates",
  description: `Royal Crown’s decorative laminates undergo a cautious production process where multiple
 papers, including tissue paper, decor paper, barrier paper, and kraft paper, are impregnated
 with resin to create an exceptionally durable product. Through high heat and pressure
 fusion, our laminates form strong bonds, guaranteeing superior performance. The non
decorative side is uniformly sanded using cutting-edge machinery to ensure optimal
 adhesion. Our unwavering commitment to aggressive quality control measures is embedded
 in our manufacturing process, guaranteeing the delivery of only top-quality laminates..`,
  description1: `Our carefully curated range caters to a vast spectrum of applications, extending from
 furniture and kitchen cabinets to office interiors. As the epitome of interior solutions, our
 decorative laminate brand offers a diverse array, ranging from captivating abstracts to rich
 wood grains, luxurious textiles to elegant stones, and versatile gloss surfaces to tactile
 textures. Designed for both vertical and horizontal applications, our laminates are the
 quintessential choice for surface decoration, boasting abrasion resistance, mild chemical
 resistance, diverse finishes, and effortless cleaning, making them the perfect enhancement
 for any space.`,
  boxes: [
    {
      icon: icon1,
      title: "SHEET THICKNESS",
      details: "0.6 mm to 1.5mm",
    },
    {
      icon: icon2,
      title: "SHEET SIZE",
      details: ["1220 x 2440 mm", "mm", "mm", "mm"],
    },
  ],
  products:[
    {
      ProductImg: Productimg1,
    }
  ],
  features: [
    {
      image1: Image1,
      description: "Aesthetically Beautiful",
    },
    {
      image1: Image1,
      description: "Scratch Resistant",
    },
    {
      image1: Image1,
      description: "Solvent Resistant",
    },
    {
      image1: Image1,
      description: "Impact Resistant",
    },
    {
      image1: Image1,
      description: "Heat Retardant",
    },
    {
      image1: Image1,
      description: "Fire Retardant",
    },
    {
      image1: Image1,
      description: "Easy to clean & maintain",
    },
    {
      image1: Image1,
      description: "Sustainable",
    },
  ],
  application: {
    alignment: [
      {
        label: "Vertical",
        description: "Vertical alignment description here.",
      },
      {
        label: "Horizontal",
        description: "Horizontal alignment description here.",
      },
    ],
    suitableFor: [
      { label: "Laboratories", description: "Laboratories description here." },
      {
        label: "Electronic Industries",
        description: "Electronic Industries description here.",
      },
      {
        label: "Pharmaceutical Labs",
        description: "Pharmaceutical Labs description here.",
      },
      { label: "IT Offices", description: "IT Offices description here." },
      { label: "Call Centres", description: "Call Centres description here." },
    ],
  },
};

export default DecorativeLaminatesData;