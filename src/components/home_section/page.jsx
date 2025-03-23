"use client";
import Image from "next/image";
import "./Home_Sec.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image1 from "../../images/NewSec.png";
import Image2 from "../../images/NewSecOne.png";
import Image3 from "../../images/NewSecTwo.png";
import Image4 from "../../images/NewSecThree.png";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function Home_Sec() {
    const imageRef = useRef(null);
    const imageRef1 = useRef(null);
    const sectionRef = useRef(null);
    const imageRef2 = useRef(null);

    useEffect(() => {
        // Set initial state of the .project-content
        gsap.set("#project-content", {
            x: -200,
            y: -200,
            opacity: 0,
        });

        // Animation with ScrollTrigger
        gsap.to("#project-content", {
            duration: 1.6,
            x: 0,
            y: 0,
            opacity: 1,
            delay: 0.2,
            ease: "power2.inOut",
            yoyo: true,
            scrollTrigger: {
                trigger: ".projects-section",
                start: "top center",
                end: "center",
                markers: false, // Set to true if you want to debug with markers
            },
        });
    }, []);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { y: 0, scale: 1.2, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
            {
                y: 0,
                scale: 1,
                opacity: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 40%",
                    scrub: 2, // Smoothness of the scroll animation
                },
            }
        );
    }, []);
    // const eleganceContainer = useRef(null);
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
                    start: "top 70%",
                    end: "bottom 40%",
                    scrub: 2, // Smoothness of the scroll animation
                },
            }
        );
    }, []);
    useEffect(() => {
        gsap.fromTo(
            imageRef1.current,
            { y: -100, scale: 1.7, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
            {
                y: 0,
                scale: 1,
                opacity: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "power4.out",
                scrollTrigger: {
                    trigger: imageRef1.current,
                    start: "top 90%",
                    end: "bottom 50%",
                    scrub: 2, // Smoothness of the scroll animation
                },
            }
        );
    }, []);
    useEffect(() => {
        gsap.fromTo(
            imageRef2.current,
            { y: -100, scale: 1.7, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
            {
                y: 0,
                scale: 1,
                opacity: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "power4.out",
                scrollTrigger: {
                    trigger: imageRef2.current,
                    start: "top 70%",
                    end: "bottom 40%",
                    scrub: 2, // Smoothness of the scroll animation
                },
            }
        );
    }, []);
    return (
        <div className="ExploreSectionHome" id="project-content">
            <div className="ExploreSectionFlexHome">
                <div className="ImageDivHome">
                    <div className="ImageOneHomeFirst">
                        <p className="ImageOneHomeFirstText">ONLY<br />
                            THE FINEST</p>
                    </div>
                    <div className="ImageOneHome">
                        <Image src={Image1} alt="none" className="ImageSectionOneHome" />
                    </div>
                    <div className="ImageTwoHome">
                        <Image src={Image2} alt="none" className="ImageSectionTwoHome" />
                    </div>
                    <div className="ImageThreeHome">
                        <Image src={Image3} alt="none" className="ImageSectionThreeHome" />
                    </div>
                    <div className="ImageFourHome">
                        <Image src={Image4} alt="none" className="ImageSectionFourHome" />
                    </div>

                </div>
                {/*  */}
                <div>
                    <div>
                        <motion.div
                            className="HeaderTextInnerHome"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <p>Timeless Design</p>

                        </motion.div>
                        <div className="HeaderTextInnerHomeOneText">
                            <p>Our laminates have been developed to bring combine current trends with universal design and functionality</p>
                        </div>
                    </div>
                    <div>
                        <motion.div
                            className="HeaderTextInnerHomeOne"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <p>Unmatched quality</p>

                        </motion.div>
                        <div className="HeaderTextInnerHomeOneText">
                            <p>Our laminates are crafted with precision, ensuring exceptional durability, superior performance, and a flawless finish that stands the test of time.</p>
                        </div>
                    </div>

                </div>
                {/* IMage section */}

            </div>
        </div>
    );
}
