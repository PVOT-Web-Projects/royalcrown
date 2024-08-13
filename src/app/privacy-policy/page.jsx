"use client"
import { useEffect } from "react";
import Privacy_policy from "@/components/policyData/page";
import PrivacyPolicyImg from "@/components/privacypolicyheader/page";

const PrivacyPolicy =() =>{
    useEffect(() => {
        document.title = "Privacy Policy | Royal Crown";
      });
    return(
        <div>
            <PrivacyPolicyImg />
            <Privacy_policy />
        </div>
    )
}
export default PrivacyPolicy;