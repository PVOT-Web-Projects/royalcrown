// components/StatsSection.jsx
import Image from "next/image";
import styles from "@/components/whyroyalcrownhero/whyroyalcrown.module.css";
import img1 from "@/images/BlogsCards1.jpg";
import { motion } from "framer-motion";
const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContent}>
        <div className={styles.statsItem}>
          <motion.div
            className={styles.statsItemDiv}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className={styles.statsItempara}>2017</p>
            <p className={styles.statsItemparainner}>
              We&apos;re based in Kraków, Poland. <br />
              We have been manufacturing fronts since 2017.
            </p>
          </motion.div>
          <motion.div className={styles.statsItemDiv}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          >
            <p className={styles.statsItempara}>2017</p>
            <p className={styles.statsItemparainner}>
              FØRMATs found their way to a partments internationally, in Berlin,
              Paris and more.
            </p>
          </motion.div>
        </div>
        <motion.div className={styles.imageContainer}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >
          <Image
            src={img1} // Place the image in public/images
            alt="Studio"
            className={styles.centerImage}
          />
        </motion.div>
        <div className={styles.statsItem}>
          <motion.div className={styles.statsItemDiv}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          >
            <p className={styles.statsItempara}>2017</p>
            <p className={styles.statsItemparainner}>
              We&apos;re based in Kraków, Poland. <br />
              We have been manufacturing fronts since 2017.
            </p>
          </motion.div>
          <motion.div className={styles.statsItemDiv}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          >
            <p className={styles.statsItempara}>2017</p>
            <p className={styles.statsItemparainner}>
              FØRMATs found their way to apartments internationally, in Berlin,
              Paris and more.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
