import icon1 from "../../../images/Icons-11-2048x2048.png";
import icon2 from "../../../images/Icons-12.png";
import Productimg1 from "../../../images/colorcoreLaminates.png";
import Ab1 from "../../../images/svglogo/AestheticallyBeautiful.jpg";
import Scr1 from "../../../images/svglogo/Scratchresistant.jpg";
import Hr1 from "../../../images/svglogo/HeatRetardant.jpg";
import Fr1 from "../../../images/svglogo/FireResistant.jpg";
import Es1 from "../../../images/svglogo/EasytoClean.jpg";
import Sus1 from "../../../images/svglogo/Sustainability.jpg";
import Imp1 from "../../../images/svglogo/ImpactResistant.jpg";
import Sr1 from "../../../images/svglogo/ChemicalResistant.jpg";
import Img1 from "../../../images/color-core-laminate.webp";

const colorCoreLaminatesData = {
  header: " Colour Core Compacts",
  description: `Crown Decor’s Color core compact laminate represents the pinnacle of high-density laminates, boasting a flawlessly consistent color throughout its thickness to deliver a seamless and contemporary aesthetic. Crafted through the accurate compression of layers of kraft paper impregnated with resin, each uniformly dyed in the same color, and finished with a protective overlay, this material exudes enduring strength and a visually cohesive look that maintains its allure at every edge and intersection. This premium laminate is the go-to choice for achieving a sleek, modern appeal in countertops, partitions, worktops, and furniture, especially in spaces where exposed edges or a monolithic design effect are coveted. Offering a diverse array of colors and finishes, designers are empowered to create captivating visual statements without the distraction of contrasting edge lines. Beyond its visual allure, our laminate stands as a paragon of durability, withstanding impact, moisture, heat, and wear, thus making it the perfect fit for high-traffic areas in both residential and commercial settings. Its unwavering color consistency not only ensures enduring beauty but also simplifies maintenance and reparability over time.
`,
  images: [
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
      image1: Ab1,
      description: "Aesthetically Beautiful",
    },
    {
      image1: Scr1,
      description: "Scratch Resistant",
    },
    {
      image1: Sr1,
      description: "Solvent Resistant",
    },
    {
      image1: Imp1,
      description: "Impact Resistant",
    },
    {
      image1: Hr1,
      description: "Heat Retardant",
    },
    {
      image1: Fr1,
      description: "Fire Retardant",
    },
    {
      image1: Es1,
      description: "Easy to clean & maintain",
    },
    {
      image1: Sus1,
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
        pdfUrl: "/pdfs/exteriorgrade.pdf",
        pdfDesc: "Download",
      },
    ]
  },
};

export default colorCoreLaminatesData;
