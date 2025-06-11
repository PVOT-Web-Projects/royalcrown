"use client"
import { usePathname } from 'next/navigation'; // Import usePathname hook
import Footer2 from "@/components/footers/footer2/Footer2";
import Header from "../components/headerNew/Header";
import HeaderCopy from "@/components/headerNewCopy/HeaderCopy";
import HeaderCopyOne from '@/components/headerNewCopyOne/HeaderCopyOne';
// import Header1 from "@/components/headers/index"
import "./globals.scss";
import Script from 'next/script'
// import Footer from "@/components/footers/footer/Footer";

// export const metadata = {
//   title: "Royal Crown",
//   description: "Royal Crown",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current pathname

  const isHomePage = pathname === "/"; // Check if the current page is the homepage

  return (
    <html lang="en">
      <head></head>
      <body>
        {/* <Header1 /> */}
        {/* <Header /> */}
        {/* <HeaderCopy /> */}
        {isHomePage ? <HeaderCopy /> : <HeaderCopyOne />} {/* Conditional rendering */}
        {children}
        {/* <Footer /> */}
        <Footer2 />
        <Script src="http://localhost/humbeeassets/js/style.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
