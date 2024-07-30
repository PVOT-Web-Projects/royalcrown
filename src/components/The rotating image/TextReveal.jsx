import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './textReveal.css';
gsap.registerPlugin(ScrollTrigger);

const TextRevel = ({ phrase , currentIndex , textRefs }) => {
    
  const refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {

      const createAnimation = () => {
        gsap.to(textRefs.current[currentIndex], {
          scrollTrigger: {
            trigger: container.current,
            scrub: true,
            start: 'top 70%',
            end: 'bottom 70%',
          },
          opacity: 1,
          ease: 'none',
          stagger: 0.1,
          color: '#7F7047',
        });
      };

    // const createAnimation = () => {
    //     gsap.fromTo(
    //       textRefs.current[currentIndex],
    //       { opacity: 0.2, color: 'rgb(255 255 255)' },
    //       {
    //         opacity: 1,
    //         color: '', // End state
    //         ease: 'none',
    //         stagger: 0.1,
    //         scrollTrigger: {
    //           trigger: container.current,
    //           scrub: 1,
    //           start: 'top 80%',
    //           end: 'bottom 20%',
    //           onEnter: self => self.progress = 0.5,
    //         },
    //       }
    //     );
    //   };

    createAnimation();
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [phrase , currentIndex]);


  const splitWords = phrase => {
    return phrase.split(' ').map((word, i) => {
      const letters = splitLetters(word);
      return (
        <p key={word + '_' + i} className='currentText'>
          {letters}
        </p>
      );
    });
  };
  const splitLetters = word => {
    return word.split('').map((letter, i) => (
      <span
        key={letter + '_' + i}
        ref={el => {
          refs.current.push(el);
        }}
      >
        {letter}
      </span>
    ));
  };
  return (
    <div className={"scroll_text_wrapper"}>
      <div ref={container} className={"main1"}>
        <div className="body1">
          {splitWords(phrase)}
        </div>
      </div>
    </div>
  );
};
export default TextRevel;