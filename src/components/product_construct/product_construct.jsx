import Image from "next/image";
import Image1 from "../../images/5-2048x749.png";
import "./product_construct.scss";
export default function ProductConstruct (){
    return(
        <>
        <div className="product_construct_wrapper">
            <div className="product_construct_header">
                <div>PRODUCT CONSTRUCT</div>
            </div>
            <div>
                <Image src={Image1} alt="" className="product_construct_image"/>
            </div>
        </div>
        </>
    )
}