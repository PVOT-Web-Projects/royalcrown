import Image from "next/image";
import bigImage from "@/images/big_image_footer.png";
import "./bigImageWithSocial.scss";
import logo from "@/images/svgLogos/white_logo.svg";
import Link from "next/link";
import fb from "@/images/svgLogos/fb.svg";
import ig from "@/images/svgLogos/ig.svg";
import yt from "@/images/svgLogos/yt.svg";
import wa from "@/images/svgLogos/wa.svg";
import li from "@/images/svgLogos/li.svg";
import Form2 from "../forms/form2/Form2";

const BigImageWithSocial = () => {
  return (
    <div className="big_image_with_social">
      <div className="wrapper">
        <div className="big_image">
          <Image src={bigImage} alt="bigImage" />

          <div className="logo">
            <Link href={"/"}>
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className="socials">
            <ul>
              <li>
                <Link href={"https://www.facebook.com/"} target="_blank">
                  <Image src={fb} alt="fb" />
                </Link>
              </li>
              <li>
                <Link href={"https://www.instagram.com/"} target="_blank">
                  <Image src={ig} alt="ig" />
                </Link>
              </li>
              <li>
                <Link href={"https://www.youtube.com/"} target="_blank">
                  <Image src={yt} alt="yt" />
                </Link>
              </li>
              <li>
                <Link href={"https://www.whatsapp.com/"} target="_blank">
                  <Image src={wa} alt="wa" />
                </Link>
              </li>
              <li>
                <Link href={"https://in.linkedin.com/"} target="_blank">
                  <Image src={li} alt="li" />
                </Link>
              </li>
            </ul>
          </div>
          <Form2 />
        </div>
      </div>
    </div>
  );
};
export default BigImageWithSocial;
