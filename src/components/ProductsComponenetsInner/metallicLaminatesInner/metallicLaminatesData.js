import icon1 from "../../../images/Icons-11-2048x2048.png";
import icon2 from "../../../images/Icons-12.png";
import Image1 from "../../../images/1_LOW-ELECTRICAL-RESISTANT.svg";
import Productimg1 from "../../../images/metallicLaminates.png";
// import products from "@/components/aboutUs_products/productData";
// import verticalIcon from "../../images/vertical-icon.svg";
// import horizontalIcon from "../../images/horizontal-icon.svg";
// import laboratoriesIcon from "../../images/laboratories-icon.svg";
// import electronicIndustriesIcon from "../../images/electronic-industries-icon.svg";
// import pharmaceuticalLabsIcon from "../../images/pharmaceutical-labs-icon.svg";
// import itOfficesIcon from "../../images/it-offices-icon.svg";
// import callCentresIcon from "../../images/call-centres-icon.svg";

const MetallicLaminatesData = {
  header: "Metallic Laminates",
  description: `Experience the allure of Royal Crown’s metallic laminate, a revolutionary decorative material
that effortlessly emulates the striking beauty of metal surfaces, including brushed aluminium,
stainless steel, and copper. Crafted with careful attention to detail, this laminate infuses spaces
with a heightened sense of luxury and modern sophistication, perfect for elevating any interior.
Unleash your creativity with the versatile design potential of our metallic laminates, which are
the preferred choice for high-end cabinetry, wall panels, furniture, and countertops. These
laminates are not just visually captivating but also boast remarkable durability, resisting
scratches, stains, and moisture. The easy maintenance and cleaning of metallic laminates
ensures a lasting impression for years to come. Available in a stunning array of matte to highgloss finishes and a variety of captivating metal effects, these laminates offer unparalleled
flexibility to bring your design vision to life. Treat your space to the opulence of metallic
laminate and redefine the essence of luxury in your interior design.
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
    ]
  },
};

export default MetallicLaminatesData;
