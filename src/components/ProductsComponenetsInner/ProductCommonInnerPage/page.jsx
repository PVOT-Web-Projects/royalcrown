"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "./productsCommonPage.scss";

export default function ProductsCommonInnerPage({ data }) {
  return (
    <>
      {/* Product Category Header */}
      <div className="productCategoryHeader">
        <div className="productCategoryHeaderInner">
          <motion.div
            className="productCategoryHeaderText"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="productCategoryHeaderTextInnner">{data.header}</p>
          </motion.div>
        </div>
      </div>

      {/* Laminates Section */}
      <div className="laminatesHero">
        <div className="laminatesWrapper">
          <motion.div
            className="laminatesHeader"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p>{data.header}</p>
          </motion.div>
          <div className="laminatesBody">
            <div className="laminateBodyDescription">
              <p>{data.description}</p>
              <p>{data.description1}</p>
            </div>
            <div className="laminatesBoxOuter">
              <div className="laminatesBoxInner">
                {data.boxes.map((box, index) => (
                  <div className="laminatesBox1" key={index}>
                    <div>
                      <Image
                        src={box.icon}
                        alt="none"
                        className="laminateIconImage"
                      />
                    </div>
                    <div>
                      <p className="laminatesBoxHeader">{box.title}</p>
                    </div>
                    <div>
                      {Array.isArray(box.details) ? (
                        <ul>
                          {box.details.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{box.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Construct */}
      <div className="product_construct_wrapper">
        <motion.div
          className="product_construct_header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p>PRODUCT CONSTRUCT</p>
        </motion.div>
        {data.products.map((item, index) => (
        <div key={index}>
          <Image src={item.ProductImg} alt="" className="product_construct_image" />
        </div>
        ))}
      </div>

      {/* Product Features */}
      <div className="productFeaturesWrapper">
        <div className="productFeaturesInner">
          <motion.div
            className="productFeaturesHeader"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div>FEATURES & ATTRIBUTES</div>
          </motion.div>
          <div className="productFeaturesContainer">
            {data.features.map((item, index) => (
              <div className="productFeaturesContainerInner" key={index}>
                <div className="productImage">
                  <Image
                    src={item.image1}
                    alt={item.description}
                    className="productFeatureImage"
                  />
                </div>
                <div className="productDescription">
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Section */}
      <div className="productApplicationContainer">
        <motion.div
          className="productApplicationHeader"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div>APPLICATIONS</div>
        </motion.div>
        <div className="productApplicationSection">
          <div>
            <div className="productApplicationSection1Header">
              <div className="productApplicationSection1Header">
                ALIGNMENT & ORIENTATION:
              </div>
            </div>
            <div className="productApplicationSection1Inner_Main">
              {data.application.alignment.map((item, index) => (
                <div className="applicationSection1Inner" key={index}>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
                    </svg>
                  </div>
                  <div>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className="productApplicationSection1Header">
              <div className="productApplicationSection1Header">
                SUITABLE & IDEAL FOR:
              </div>
            </div>
            <div className="productApplicationSection2Inner_Main">
              {data.application.suitableFor.map((item, index) => (
                <div className="applicationSection1Inner" key={index}>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
                    </svg>
                  </div>
                  <div>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}