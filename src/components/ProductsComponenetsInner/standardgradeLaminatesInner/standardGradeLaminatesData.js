import icon1 from "../../../images/Icons-11-2048x2048.png";
import icon2 from "../../../images/Icons-12.png";
import Image1 from "../../../images/1_LOW-ELECTRICAL-RESISTANT.svg";
import Image5 from "../../../images/svglogo/Anti-Bacterial.png";
import Image6 from "../../../images/svglogo/International Standard.png";
import Image7 from "../../../images/svglogo/Custom Dimensions.png";
import Image8 from "../../../images/svglogo/Wide Range to choose.png";
import Image9 from "../../../images/svglogo/Easy Maintenance.png";
import Image10 from "../../../images/svglogo/Aesthetically beautiful.png";
import Image11 from "../../../images/svglogo/Fire Resistant.png";
import Image12 from "../../../images/svglogo/Space Saving.png";
import Image13 from "../../../images/svglogo/Cigratte Burn Resistant.png";
import Image14 from "../../../images/svglogo/Weather Resistant.png";
import Image15 from "../../../images/svglogo/Stain Resistant.png";
import Productimg1 from "../../../images/5-2048x749.png";
import Img1 from "../../../images/QbissNew.webp";
import Image2 from "../../../images/svglogo/Easy_Installation.png"
import Image3 from "../../../images/svglogo/Air_Ventilation.png"
import Image4 from "../../../images/svglogo/Light_Weight.png"
// import products from "@/components/aboutUs_products/productData";
// import verticalIcon from "../../images/vertical-icon.svg";
// import horizontalIcon from "../../images/horizontal-icon.svg";
// import laboratoriesIcon from "../../images/laboratories-icon.svg";
// import electronicIndustriesIcon from "../../images/electronic-industries-icon.svg";
// import pharmaceuticalLabsIcon from "../../images/pharmaceutical-labs-icon.svg";
// import itOfficesIcon from "../../images/it-offices-icon.svg";
// import callCentresIcon from "../../images/call-centres-icon.svg";

const StandaradGradeLaminates = {
  header: "Standard Grade interior compact (Qbiss)",
  description: `Experience the power of Crown Decor’s Qbiss, a high-pressure structural laminate meticulously
crafted from multiple layers of kraft papers, resulting in laminate thicknesses ranging from
2mm to 25mm. Boasting a decorative face on both sides, Qbiss is the perfect interior solution
for washroom cubicles, locker doors, wall panels, and laboratory furniture. With an impressive
density of 1.45gm/cm3, our compacts offer exceptional strength, damage resistance, and
remarkable structural stability. What's more, they require no substrate support in thicknesses
over 6mm. Choose Qbiss for a sophisticated and enduring interior solution.`,
//   description1: `They are designed to impress with their striking patterns, cutting-edge technology, easy-touse features, and high-quality materials. These laminates can be effortlessly moulded into
// sleek cylindrical inward or outward curves, delivering a modern and sophisticated touch to
// any design.`,
  images:[
   {
     headerImg: Img1,
   }
  ],
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
  features: [
    {
      image1: Image5,
      description: "Made from Anti-Bacterial grade high pressure compact laminate panel confirming to EN438",
    },
    {
      image1: Image6,
      description: "Accessories made of Nylon Polyamide, Stainless Steel and aluminium of International standard",
    },
    {
      image1: Image7,
      description: "Available in standard and custom made dimension",
    },
    {
      image1: Image8,
      description: "Wide colour range to choose from",
    },
    {
      image1: Image9,
      description: "Hygienic and easily maintainable",
    },
    {
      image1: Image10,
      description: "Durable and aesthetically appealing",
    },
    {
      image1: Image11,
      description: "Fire retardant",
    },
    {
      image1: Image2,
      description: "Easy Installation",
    },
    {
      image1: Image3,
      description: "Air Ventilation",
    },
    {
      image1: Image12,
      description: "Space saving - partition panels are only 12mm thick as compared to conventional system like 150mm thick brick wall",
    },
    {
      image1: Image4,
      description: "Light Weight",
    },
    {
      image1: Image13,
      description: "Resistant to cigarette burns",
    },
    {
      image1: Image14,
      description: "Exceptional water, humidity and high temperature Resistance",
    },
    {
      image1: Image15,
      description: "Scratch and Stain Resistance",
    },
    {
      image1: Image5,
      description: "Anti - Bacterial, Anti - Fungal and Termite Resistant",
    },

  ],
  products: [
    {
      ProductImg: Productimg1,
    }
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
    pdfLink: [
      {
        pdfUrl: "/pdfs/standard-grade.pdf",
        pdfDesc: "Download",
      },
    ],
  },
};

export default StandaradGradeLaminates;
