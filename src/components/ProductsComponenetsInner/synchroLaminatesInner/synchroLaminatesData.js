import icon1 from "../../../images/Icons-11-2048x2048.png";
import icon2 from "../../../images/Icons-12.png";
import Image1 from "../../../images/1_LOW-ELECTRICAL-RESISTANT.svg";
import Productimg1 from "../../../images/5-2048x749.png";
// import products from "@/components/aboutUs_products/productData";
// import verticalIcon from "../../images/vertical-icon.svg";
// import horizontalIcon from "../../images/horizontal-icon.svg";
// import laboratoriesIcon from "../../images/laboratories-icon.svg";
// import electronicIndustriesIcon from "../../images/electronic-industries-icon.svg";
// import pharmaceuticalLabsIcon from "../../images/pharmaceutical-labs-icon.svg";
// import itOfficesIcon from "../../images/it-offices-icon.svg";
// import callCentresIcon from "../../images/call-centres-icon.svg";

const SynchroLaminatesData = {
  header: "Synchro Laminates",
  description: `Royal Crown Post-Form Laminates offer an unparalleled level of sophistication and style to
your furniture. thoroughly designed to create a seamless finish, these specialty-grade high pressure laminates are crafted using a unique "postforming" process, allowing them to
gracefully bend and conform to any curve. Whether used vertically or horizontally, they
provide a sleek, edge-free look that enhances the overall aesthetic of any space. Elevate your
furniture to new heights with Royal Crown Post-Form Laminates.
`,
  description1: `They are designed to impress with their striking patterns, cutting-edge technology, easy-touse features, and high-quality materials. These laminates can be effortlessly moulded into
sleek cylindrical inward or outward curves, delivering a modern and sophisticated touch to
any design.
`,
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
        pdfUrl: "/",
        pdfDesc: "Download",
      },
    ],
  },
};

export default SynchroLaminatesData;
