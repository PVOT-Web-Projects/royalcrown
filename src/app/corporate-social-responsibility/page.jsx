"use client"
import { useEffect } from "react";
import Privacy_policy from "@/components/policyData/page";
import CorporateImg from "@/components/corporateheader/page";

const CorporateSocial =() =>{
    useEffect(() => {
        document.title = "Corporate Social Responsibility | Royal Crown";
      });
    return(
        <div>
          <CorporateImg />
            <Privacy_policy />
        </div>
    )
}
export default CorporateSocial;