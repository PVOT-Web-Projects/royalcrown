import "./shadowHeading.scss";
import { motion } from "framer-motion";

const ShadowHeading = ({ text, fontSize }) => {
  return (
    <div className="shadow_heading">
      <motion.div
        className="wrapper"
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        {/* <div
          className="shadow_heading_text shadow"
          style={{ fontSize: fontSize }}
        >
          {text}
        </div> */}
        <div
          className="shadow_heading_text normal"
          style={{ fontSize: fontSize }}
        >
          {text}
        </div>
      </motion.div>
    </div>
  );
};
export default ShadowHeading;
