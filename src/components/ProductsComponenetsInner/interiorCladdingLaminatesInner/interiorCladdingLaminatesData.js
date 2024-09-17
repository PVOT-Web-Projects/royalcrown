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

const InteriorCladdingLaminatesData = {
  header: "Interior cladding",
  description: `Crown Decor’s Interior cladding compact laminate stands as a high-density, resilient material
carefully designed for wall cladding and other interior applications where strength, aesthetics,
and easy maintenance take precedence. Fashioned by compressing multiple layers of kraft
paper saturated with phenolic resin under intense heat and pressure, this self-supporting
laminate eliminates the need for additional backing or substrate. Its top surface features a
decorative layer that expertly replicates various materials such as wood, stone, and metal, or
showcases modern abstract designs and solid colors.`,
  description1: `Engineered for the most demanding environments including hospitals, schools, airports, and
commercial spaces, our interior cladding compact laminate exhibits exceptional resistance to
impact, moisture, and scratches. Its bacteria-resistant, easy-to-clean, and non-porous properties
make it the ultimate choice for spaces requiring rigorous hygiene standards, such as restrooms,
kitchens, and healthcare facilities. Available in a rich array of thicknesses, colors, and finishes,
this material unlocks endless design possibilities while delivering a seamless, modern aesthetic.
Its unwavering durability and design adaptability have firmly positioned interior cladding
compact laminate as the top choice for creating enduring and stylish interior surfaces.`,
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
      description: "Scratch Resistant",
    },
    {
      image1: Image1,
      description: "Graffiti Resistant",
    },
    {
      image1: Image1,
      description: "Termite Resistant",
    },
    {
      image1: Image1,
      description: "Water Resistant",
    },
    {
      image1: Image1,
      description: "Easy to clean",
    },
    {
      image1: Image1,
      description: "Impact Resistant",
    },
    {
      image1: Image1,
      description: "Anti-Bacterial",
    },
    {
      image1: Image1,
      description: "Cigarette Burn Resistant",
    },
    {
      image1: Image1,
      description: "Fire Resistant",
    },
    {
      image1: Image1,
      description: "Abrasion Resistant",
    },
    {
      image1: Image1,
      description: "Wide Choice of Colours",
    },
    {
      image1: Image1,
      description: "Chemical Resistant",
    },
    {
      image1: Image1,
      description: "Flexibility of Design and Space Saving",
    },
    {
      image1: Image1,
      description: "Fast Colours and Durable",
    },
    {
      image1: Image1,
      description: "less Volatile Organic Compounds[VOC] Emission",
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

export default InteriorCladdingLaminatesData;
