// import { useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import "./HomeSliderOne.scss";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }
// const ScrollAnimation = () => {
//   useEffect(() => {
//     gsap.utils.toArray(".ScrollTextSection").forEach((section) => {
//       const circularPath = section.querySelector("#circularPath");
//       const curvPath = section.querySelector("#curvPath");
//       const textCircular = section.querySelector("#textCircular");
//       const textCurv = section.querySelector("#textCurv");
//       const [card1, card2, card3, card4, card5] = [
//         ".card1",
//         ".card2",
//         ".card3",
//         ".card4",
//         ".card5"
//       ].map((cls) => section.querySelector(cls));

//       ScrollTrigger.create({
//         trigger: section,
//         start: "top center",
//         end: "top+=250 center",
//         scrub: true,
//         onUpdate: (self) => {
//           const progress = self.progress;
//           gsap.set(textCircular, { opacity: 1 - progress });
//           gsap.set(textCurv, { opacity: progress });
//         },
//       });

//       // Card Rotation Animation
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top center",
//         end: "top+=250 center",
//         scrub: true,
//         onUpdate: (self) => {
//           const progress = self.progress;
//           gsap.set(card2, {
//             transform: `rotate(${-30 * progress}deg) scale(0.8)`,
//             transformOrigin: "left bottom",
//           });
//           gsap.set(card4, {
//             transform: `rotate(${30 * progress}deg) scale(0.8)`,
//             transformOrigin: "right bottom",
//           });
//         },
//       });

//       const cardAnimation = gsap.timeline({
//         scrollTrigger: {
//           trigger: section,
//           start: "top+=300 center",
//           end: "top+=550 center",
//           scrub: true,
//           pin: true,
//         },
//       });

//       cardAnimation
//         .to(card1, { duration: 1, rotation: -12, x: -444, y: 44, scale: 0.9 }, 0)
//         .to(card2, { duration: 1, rotation: -6, x: -204, y: 6, scale: 0.9 }, 0)
//         .to(card3, { duration: 1, scale: 0.9 }, 0)
//         .to(card4, { duration: 1, rotation: 6, x: 204, y: 6, scale: 0.9 }, 0)
//         .to(card5, { duration: 1, rotation: 12, x: 444, y: 44, scale: 0.9 }, 0)
//         .to(
//           section,
//           { duration: 1, backgroundColor: "white", ease: "none" },
//           0
//         )
//         .to(
//           textCurv,
//           { duration: 1, fill: "black", ease: "none" },
//           0
//         );
//     });

//     return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   }, []);

//   return (
//     <div>
//       <div className="ScrollTextSection">
//         <svg width="1500" height="600" viewBox="0 0 900 400">
//           <path
//             d="M 150,350 A 300,300 0 0,1 750,350"
//             stroke="black"
//             id="circularPath"
//             fill="transparent"
//             strokeWidth="2"
//             opacity="0"
//           />
//           <text fontSize="60" fill="white" id="textCircular">
//             <textPath href="#circularPath" startOffset="50%" textAnchor="middle">
//               WHERE ELEGANCE MEETS DESIRE
//             </textPath>
//           </text>

//           <path
//             d="M 25 300 Q 225 200, 450 300 Q 675 400, 875 300"
//             stroke="black"
//             id="curvPath"
//             fill="transparent"
//             strokeWidth="2"
//             opacity="0"
//           />
//           <text fontSize="56" fill="white" id="textCurv" style={{ opacity: 0 }}>
//             <textPath href="#curvPath" startOffset="50%" textAnchor="middle">
//               WHERE ELEGANCE MEETS DESIRE
//             </textPath>
//           </text>
//         </svg>

//         <div className="card-container">
//           <div className="card card1"></div>
//           <div className="card card2"></div>
//           <div className="card card3"></div>
//           <div className="card card4"></div>
//           <div className="card card5"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollAnimation;


import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./HomeSliderOne.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollAnimation = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  const handleCardClick = (url) => setVideoUrl(url);
  const closeModal = () => setVideoUrl(null);

  useEffect(() => {
    gsap.utils.toArray(".ScrollTextSection").forEach((section) => {
      const textCircular = section.querySelector("#textCircular");
      const textCurv = section.querySelector("#textCurv");
      const [card1, card2, card3, card4, card5] = [
        ".card1",
        ".card2",
        ".card3",
        ".card4",
        ".card5",
      ].map((cls) => section.querySelector(cls));

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "top+=250 center",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(textCircular, { opacity: 1 - progress });
          gsap.set(textCurv, { opacity: progress });
        },
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "top+=250 center",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(card2, {
            transform: `rotate(${-30 * progress}deg) scale(0.8)`,
            transformOrigin: "left bottom",
          });
          gsap.set(card4, {
            transform: `rotate(${30 * progress}deg) scale(0.8)`,
            transformOrigin: "right bottom",
          });
        },
      });

      const cardAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top+=300 center",
          end: "top+=550 center",
          scrub: true,
          pin: true,
        },
      });

      cardAnimation
        .to(card1, { rotation: -12, x: -444, y: 44, scale: 0.9 }, 0)
        .to(card2, { rotation: -6, x: -204, y: 6, scale: 0.9 }, 0)
        .to(card3, { scale: 0.9 }, 0)
        .to(card4, { rotation: 6, x: 204, y: 6, scale: 0.9 }, 0)
        .to(card5, { rotation: 12, x: 444, y: 44, scale: 0.9 }, 0);
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div>
      <div className="ScrollTextSection">
        <svg width="1500" height="600" viewBox="0 0 900 400">
          <path d="M 150,350 A 300,300 0 0,1 750,350" id="circularPath" fill="transparent" />
          <text fontSize="60" fill="white" id="textCircular">
            <textPath href="#circularPath" startOffset="50%" textAnchor="middle">
              WHERE ELEGANCE MEETS DESIRE
            </textPath>
          </text>

          <path d="M 25 300 Q 225 200, 450 300 Q 675 400, 875 300" id="curvPath" fill="transparent" />
          <text fontSize="56" fill="white" id="textCurv" style={{ opacity: 0 }}>
            <textPath href="#curvPath" startOffset="50%" textAnchor="middle">
              WHERE ELEGANCE MEETS DESIRE
            </textPath>
          </text>
        </svg>

        <div className="card-container">
          <div className="card card1" onClick={() => handleCardClick("https://vanras.humbeestudio.xyz/videos/Living%20Space.mp4")}></div>
          <div className="card card2" onClick={() => handleCardClick("https://vanras.humbeestudio.xyz/videos/Bedroom.mp4")}></div>
          <div className="card card3" onClick={() => handleCardClick("https://vanras.humbeestudio.xyz/videos/Kitchen.mp4")}></div>
          <div className="card card4" onClick={() => handleCardClick("https://vanras.humbeestudio.xyz/videos/Bathroom.mp4")}></div>
          <div className="card card5" onClick={() => handleCardClick("https://vanras.humbeestudio.xyz/videos/Outdoor.mp4")}></div>
        </div>
      </div>

      {videoUrl && (
        <div className="video-modal">
          <div className="video-content">
            <button className="close-btn" onClick={closeModal}>✖</button>
            <video src={videoUrl} controls autoPlay />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollAnimation;