import image1 from "@/images/decorative1.png";
import image2 from "@/images/decorative2.png";
import image3 from "@/images/decorative3.png";
import image4 from "@/images/interior1.png";
import image5 from "@/images/interior2.png";
import image6 from "@/images/interior3.png";
import image7 from "@/images/exterior1.png";
import image8 from "@/images/exterior2.png";
import image9 from "@/images/exterior3.png";
import logo1 from "@/images/xylem.png";
import logo2 from "@/images/crown.png";
import logo3 from "@/images/crown_qbiss.png";
import logo4 from "@/images/crownXCL.png";
import CategoryLeftRightItem from "./categoryLeftRightItem.jsx/CategoryLeftRightItem";
import "./categoryLeftRight.scss"

const categoryLeftRightData = [
    {
        title:"DECORATIVE LAMINATES",
        text:"Our Decorative Laminates are produced by impregnating multitude of papers including tissue paper, decor paper, barrier paper, kraft paper with resin. The resulting sandwich is fused underheat and pressure. The fusion process creates strong bonds that contribute to our laminates'exceptional durability. ",
        url:"/",
        image1:image1,
        image2:image2,
        image3:image3,
        logo1:logo1,
        logo2:logo2,
    },
    {
        title:"INTERIOR COMPACTS",
        text:"Qbiss is a high pressure structural laminate, built up from multiple papers of kraft papers to produce laminate in thickness ranging from 2mm to 25mm. ",
        url:"/",
        image1:image4,
        image2:image5,
        image3:image6,
        logo1:logo3,
    },
    {
        title:"EXTERIOR COMPACTS",
        text:"XCL- Exterior Compact Laminate is a high pressure laminate, built up from multiple papers of kraft papers to produce laminate in thickness ranging from 2mm to 25mm. ",
        url:"/",
        image1:image7,
        image2:image8,
        image3:image9,
        logo1:logo4,
    },
]

const CategoryLeftRight = ()=>{
    return(
        <div className="category_left_right">
            <div className="category_left_right_wrapper">
               {categoryLeftRightData.map((item, index)=>(
                <CategoryLeftRightItem key={index} {...item} />
               ))}
            </div>
        </div>
    )
}
export default CategoryLeftRight