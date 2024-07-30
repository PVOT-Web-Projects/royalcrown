import AboutUsButton from "../buttons/aboutUsButton/aboutUsButton";
import "./aboutUsWhyUs.scss";
export default function AboutUsWhyUs() {
  return (
    <>
      <div className="whyUsContainer">
        <div className="whyUsWrapper">
          <div className="whyusHeader">Why us</div>
          <div className="whyUsCardWrapper">
            <div className="cardouter_1">
              <div className="cardSvg">
                <svg
                  viewBox="0 0 512 512"
                  color="#5b3524"
                  height="30px"
                  width="30px"
                >
                  <path
                    fill="#5b3524"
                    d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
                  />
                </svg>
              </div>
              <div className="cardinner">
                <div className="card_header">20+</div>
                <div className="card_description">
                  We are known for providing high density laminates with
                  unparalleled services in terms of quality and reliability. We
                  are known for providing high density laminates with
                  unparalleled services in terms of quality and reliability.
                </div>
                <div className="card-button">
                  <AboutUsButton text={"Legacy"} />
                </div>
              </div>
            </div>
            <div className="cardouter_2">
              <div className="cardinner_1">
                <div className="cardSvg">
                  <svg
                    viewBox="0 0 512 512"
                    color="#5b3524"
                    height="30px"
                    width="30px"
                  >
                    <path
                      fill="#5b3524"
                      d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
                    />
                  </svg>
                </div>
                <div className="card-button">
                  <AboutUsButton text={"categories"} />
                </div>
                <div className="card_description">
                  We are known for providing high density laminates with
                  unparalleled services in terms of quality and reliability. We
                  are known for providing high density laminates with
                  unparalleled services in terms of quality and reliability.
                </div>
              </div>
              <div className="cardinner_2">
                <div className="card_description">
                  We are known for providing high density laminates with
                  unparalleled services in terms of quality and reliability. We
                  are known for providing high density laminates with
                  unparalleled services in terms of quality and reliability.
                </div>
                <div className="card-button">
                  <AboutUsButton text={"innovation"} />
                </div>
              </div>
            </div>
            <div className="cardouter_3">
              <div className="cardinner">
                <div className="cardSvg">
                  <svg
                    viewBox="0 0 512 512"
                    color="#5b3524"
                    height="30px"
                    width="30px"
                  >
                    <path
                      fill="#5b3524"
                      d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
                    />
                  </svg>
                </div>
                <div className="card_header">5+</div>
                <div className="card_description">
                  We are known for providing high density laminates with
                  unparalleled services in terms of quality and reliability. We
                  are known for providing high density laminates with
                  unparalleled services in terms of quality and reliability.
                </div>
                <div className="card-button">
                  <AboutUsButton text={"certificates"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
