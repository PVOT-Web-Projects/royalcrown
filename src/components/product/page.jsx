"use client";
import "./product.scss";
import {motion} from "framer-motion";
export default function Products() {
  return (
    <>
       <div className="productMainContainer">
            <div className="productMain">
                <div className="productHeader">
                    <div className="productHeaderInner">Products</div>
                </div>
                <div className="productNumber">
                    <p>03</p>
                </div>
                <div className="productDescription">
                    <motion.div
                        className="productDescriptionBorder"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }} // Adjust this width to fit your design
                        transition={{ duration: 1, ease: 'easeOut' }}
                    />
                    <div className="productDescriptionHeader">
                        Craftsmanship at its best
                    </div>
                    <div className="productDescriptionContent">
                        <p>
                            Customers are at the heart of our unique business model. Royal Crown thrives at providing royal service to everyone. Our work is all about our customers and we believe their experience should be worth a thousand memories. However, we do have a tiny tale to tell, a sneak peek to our story. It all started on that historic Indian summer day when the long days almost stretch into each other, when the scorching heat of the sun turns the wands of the grasses golden, when the beautiful and radiant flowers are swaying with the wind and when a faint sound of birds chirping is heard; A born businessman had a vision which was brought into reality by Royal Crown creators.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
