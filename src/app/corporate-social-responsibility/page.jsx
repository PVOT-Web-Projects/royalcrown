"use client"
import { useEffect } from "react";
import CorporateImg from "@/components/corporateheader/page";
import CorporateTwoCards from "@/components/corporateTwoCards/page";

const CorporateSocial =() =>{
    useEffect(() => {
        document.title = "Corporate Social Responsibility | Royal Crown";
      });
    return(
        <div>
          <CorporateImg />
          <CorporateTwoCards />
        </div>
    )
}
export default CorporateSocial;