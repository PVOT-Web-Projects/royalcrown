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
  description: `Royal Crown’s Synchro laminate is a game-changing decorative laminate that brings a whole
new level of realism to surfaces. By perfectly aligning the visual design with a synchronized
texture, this innovative laminate creates an unparalleled sensory experience. Imagine the
natural feel of wood grain or the authentic texture of stone, now brought to life in your interior
spaces. Crafted through a meticulous embossing process, synchro laminate ensures that what
you see is what you feel. The result is a breathtakingly realistic appearance and a tactile
sensation that is second to none. From the visual depth to the intricate texture, every detail is
thoughtfully replicated to elevate your environment. Whether it's furniture, cabinetry, wall
panels, or flooring, synchro laminates bring the allure of natural materials without
compromising on durability, maintenance, or affordability. With its unmatched attention to
detail, this laminate is designed to elevate interior designs to a whole new level of
sophistication and modernity.
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
  },
};

export default SynchroLaminatesData;
