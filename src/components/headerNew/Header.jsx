"use client";

import Link from "next/link";
import logo from "@/images/svgLogos/FinalHeaderLogo.svg";
import logo1 from "@/images/svgLogos/white_logo.svg";
import logo2 from "@/images/svgLogos/header_crown_logo.svg";
import logo3 from "@/images/crown_white.png";
import "./header.scss";
import Image from "next/image";
import LinkHover from "../linkHover/LinkHover";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PageTransition from "../pageTransition/PageTransition";

const Header = () => {
  const [isHome, setIsHome] = useState(true);
  const pathname = usePathname();
  console.log("url", isHome);
  useEffect(() => {
    if (pathname === "/") setIsHome(true);
    else setIsHome(false);
  }, [pathname]);
  return (
    <header>
      <nav>
        <ul className={isHome ? "dark" : "light"}>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            }}
            viewport={{ once: true }}
          >
            <LinkHover url={"/about-us"} text={"About Us"} fontSize={"16px"} isHomePage={isHome}/>
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            }}
            viewport={{ once: true }}
          >
            <LinkHover url={"/products"} text={"Products"} fontSize={"16px"} isHomePage={isHome}/>
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.2,
              },
            }}
            viewport={{ once: true }}
          >
            <LinkHover url={"#"} text={"What's New"} fontSize={"16px"} isHomePage={isHome}/>
          </motion.li>
        </ul>
        <motion.div
          className="logo"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.2,
            },
          }}
          viewport={{ once: true }}
        >
          <PageTransition href={"/"}>
            {isHome ? (
              <Image src={logo} alt="header_logo" />
            ) : (
              <Image src={logo} alt="header_logo" />
            )}
          </PageTransition>
        </motion.div>
        <ul className={isHome ? "dark" : "light"}>
          <motion.li
            initial={{
              opacity: 0, 
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.6,
              },
            }}
            viewport={{ once: true }}
          >
            <LinkHover url={"#"} text={"Catalogue"} fontSize={"16px"} isHomePage={isHome}/>
          </motion.li>
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 2,
              },
            }}
            viewport={{ once: true }}
          >
            <LinkHover url={"#"} text={"Laminate Library"} fontSize={"16px"} isHomePage={isHome}/>
          </motion.li>
          <div className="side_logo">
            {isHome ? (
              <Image src={logo2} alt="header_crown_logo" />
            ) : (
              <Image src={logo3} alt="header_crown_logo" />
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
