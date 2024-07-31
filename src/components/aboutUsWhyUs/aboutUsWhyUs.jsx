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
                    width="40"
                    height="40"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35" cy="35" r="34.5" stroke="#5B3524" />
                    <path
                      d="M48.9558 25.0002C48.9558 24.1718 48.2843 23.5002 47.4558 23.5002L33.9558 23.5002C33.1274 23.5002 32.4558 24.1718 32.4558 25.0002C32.4558 25.8286 33.1274 26.5002 33.9558 26.5002L45.9558 26.5002L45.9558 38.5002C45.9558 39.3286 46.6274 40.0002 47.4558 40.0002C48.2843 40.0002 48.9558 39.3286 48.9558 38.5002L48.9558 25.0002ZM23.0607 51.5167L48.5165 26.0609L46.3952 23.9396L20.9393 49.3954L23.0607 51.5167Z"
                      fill="#5B3524"
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
                    width="40"
                    height="40"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35" cy="35" r="34.5" stroke="#5B3524" />
                    <path
                      d="M48.9558 25.0002C48.9558 24.1718 48.2843 23.5002 47.4558 23.5002L33.9558 23.5002C33.1274 23.5002 32.4558 24.1718 32.4558 25.0002C32.4558 25.8286 33.1274 26.5002 33.9558 26.5002L45.9558 26.5002L45.9558 38.5002C45.9558 39.3286 46.6274 40.0002 47.4558 40.0002C48.2843 40.0002 48.9558 39.3286 48.9558 38.5002L48.9558 25.0002ZM23.0607 51.5167L48.5165 26.0609L46.3952 23.9396L20.9393 49.3954L23.0607 51.5167Z"
                      fill="#5B3524"
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
                    width="40"
                    height="40"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35" cy="35" r="34.5" stroke="#5B3524" />
                    <path
                      d="M48.9558 25.0002C48.9558 24.1718 48.2843 23.5002 47.4558 23.5002L33.9558 23.5002C33.1274 23.5002 32.4558 24.1718 32.4558 25.0002C32.4558 25.8286 33.1274 26.5002 33.9558 26.5002L45.9558 26.5002L45.9558 38.5002C45.9558 39.3286 46.6274 40.0002 47.4558 40.0002C48.2843 40.0002 48.9558 39.3286 48.9558 38.5002L48.9558 25.0002ZM23.0607 51.5167L48.5165 26.0609L46.3952 23.9396L20.9393 49.3954L23.0607 51.5167Z"
                      fill="#5B3524"
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
