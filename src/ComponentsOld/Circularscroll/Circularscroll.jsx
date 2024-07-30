'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './Circularscroll.scss'
import Image from 'next/image';
import circle1 from '@/images/circle1.jpg'

gsap.registerPlugin(ScrollTrigger);

const CircularScroll = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery_box",
        start: "top center-=200px",
        end: "bottom bottom", 
        scrub: true, 
        pin: true,
        // markers: true, 
      }
    });

    tl.to('.gallery_box_outer',{
      duration: 10,
      rotateY: 360,
      ease: "none",
    });
  }, []);
  
  

  return (
    <>
      <section className="work2">
        <div className="gallery_box">
          <div className="gallery_box_outer">
            <div className="gallery_box_in">
            <Image className='logocertificate' src={circle1} alt="certificationimg" /></div>
            <div className="gallery_box_in" ><Image className='logocertificate' src={circle1} alt="certificationimg" /></div>
            <div className="gallery_box_in" ><Image className='logocertificate' src={circle1} alt="certificationimg" /></div>
            <div className="gallery_box_in" ><Image className='logocertificate' src={circle1} alt="certificationimg" /></div>
            <div className="gallery_box_in" ><Image className='logocertificate' src={circle1} alt="certificationimg" /></div>
            <div className="gallery_box_in" ><Image className='logocertificate' src={circle1} alt="certificationimg" /></div>
            <div className="gallery_box_in" ><Image className='logocertificate' src={circle1} alt="certificationimg" /></div>
            <div className="gallery_box_in" ><Image className='logocertificate' src={circle1} alt="certificationimg" /></div>
            <div className="gallery_box_in" ><Image className='logocertificate' src={circle1} alt="certificationimg" /></div>
          </div>
        </div>
      </section>

    </>
  );
};

export default CircularScroll;
