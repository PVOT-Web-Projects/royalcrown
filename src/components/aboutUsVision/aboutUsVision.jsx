import Image from "next/image";
import AboutUs_vision from "../../images/image 65.jpg";
import "./aboutUsVision.scss";

export default function AboutUsVision() {
  return (
    <>
      <div className="aboutVisionWrapper">
        <div className="aboutVisionContainer">
          <div className="visionHeader">
            <div>Vision</div>
          </div>
          <div>
            <Image src={AboutUs_vision} alt="" className="visionImage" />
          </div>
          <div className="visionDescription">
            <div className="description_left">
              We are known for providing high density laminates with
              unparalleled services in terms of quality and reliability. We are
              known for providing high density laminates with unparalleled
              services in terms of quality and reliability.
            </div>
            <div className="description_right">
              <div className="description_right_box">
                <div className="right_box_number">10</div>
              </div>
              <div className="description_right_text">years of experience</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
