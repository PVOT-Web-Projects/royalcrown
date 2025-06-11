// components/StatsSection.jsx
import Image from "next/image";
import styles from "@/components/whyroyalcrownhero/whyroyalcrown.module.css";
import img1 from "@/images/BlogsCards1.jpg";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const imageRef = useRef(null);

  //   useEffect(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: imageRef.current,
  //         start: "top 80%",
  //         end: "bottom 60%",
  //         scrub: 1,
  //       },
  //     });

  //     tl.fromTo(
  //       imageRef.current,
  //       { scale: 1.7, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
  //       {
  //         scale: 1,
  //         opacity: 1,
  //         clipPath: "inset(0% 0% 0% 0%)",
  //         duration: 1.8,
  //         ease: "power3.out",
  //       }
  //     );
  //   }, []);
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { y: -100, scale: 1.7, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: 2, // Smoothness of the scroll animation
        },
      }
    );
  }, []);
  // useEffect(() => {
  //   gsap.fromTo(
  //     imageRef.current,
  //     { x: -200, scale: 1.7, opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
  //     {
  //       x: 0,
  //       scale: 1,
  //       opacity: 1,
  //       clipPath: "inset(0% 0% 0% 0%)",
  //       ease: "power4.out",
  //       duration: 1.8, // Duration for smooth animation
  //     }
  //   );
  // }, []);

  // from left to right animation
  // useEffect(() => {
  //   gsap.fromTo(
  //     imageRef.current,
  //     { x: -50, scale: 1.5, opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
  //     {
  //       x: 0,
  //       scale: 1,
  //       opacity: 1,
  //       clipPath: "inset(0% 0% 0% 0%)",
  //       ease: "power4.out",
  //       scrollTrigger: {
  //         trigger: imageRef.current,
  //         start: "top 90%",
  //         end: "bottom 40%",
  //         scrub: 2, // Smoothness of the scroll animation
  //       },
  //     }
  //   );
  // }, []);

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContent}>
        <div className={styles.statsItem}>
          <motion.div
            className={styles.statsItemDiv}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5  }}
            viewport={{ once: true }}
          >
            <p className={styles.statsItempara}>Unparalleled Services</p>
            <p className={styles.statsItemparainner}>
              We provide high-density laminates with unmatched reliability.
            </p>
          </motion.div>
          <motion.div
            className={styles.statsItemDiv}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5  }}
            viewport={{ once: true }}
          >
            <p className={styles.statsItempara}>Wide Range</p>
            <p className={styles.statsItemparainner}>
              With 2000+ SKUs and 100+ textures, our extensive portfolio offers
              exceptional value.
            </p>
          </motion.div>
        </div>

        {/* GSAP Image Animation */}
        <div className={styles.imageContainer} ref={imageRef}>
          <Image
            src={img1}
            alt="Studio"
            className={styles.centerImage}
            priority
          />
        </div>

        <div className={styles.statsItem}>
          <motion.div
            className={styles.statsItemDiv}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5  }}
            viewport={{ once: true }}
          >
            <p className={styles.statsItempara}>Product Compatibility</p>
            <p className={styles.statsItemparainner}>
              Our laminates are designed to fit seamlessly onto almost any
              wooden surface and come in multiple sheet sizes
            </p>
          </motion.div>
          <motion.div
            className={styles.statsItemDiv}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5  }}
            viewport={{ once: true }}
          >
            <p className={styles.statsItempara}>Environment</p>
            <p className={styles.statsItemparainner}>
              We’ve invested in eco-friendly manufacturing processes that
              prioritize responsible sourcing, minimal waste, and a reduced
              carbon footprint.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
