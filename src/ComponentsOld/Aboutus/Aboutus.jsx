"use client"

import React from 'react';
import Image from 'next/image';
import laminateabout from '@/images/laminateabout.png';
import goldcrown from '@/images/goldcrownlogoo.png';
import "./Aboutus.scss";
import ShadowHeading from '../shadowHeading/ShadowHeading';

const AboutUs = () => {
  return (
    <section className="aboutUs">
    <Image className='crownimg' src={goldcrown} alt="logo" />
      <div className="aboutcontainer">
        <div className="one">
          <Image className='image' src={laminateabout} alt="logo" />
        </div>
        <div className="two">
          {/* <h2 className='aboutheading2'>ABOUT US</h2>
          <h2 className='aboutheading'>ABOUT US</h2> */}
          <ShadowHeading text={"ABOUT US"} fontSize={"80px"} />
         
         <div className='about_para'>
         <p className='aboutpara'>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor . Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor . </p>
          <p className='aboutpara2'>
          Customers are at the heart of our unique business model. Royal Crown thrives at providing royal service to everyone. Our work is all about our customers and we believe their experience should be worth a thousand memories. However, we do have a tiny tale to tell, a sneak peek to our story. It all started on that historic Indian summer day when the long days almost stretch into each other, when the scorching heat of the sun turns the wands of the grasses golden, when the beautiful and radiant flowers are swaying with the wind and when a faint sound of birds chirping is heard; A born businessman had a vision which was brought into reality by Royal Crown creators.
          </p>
         </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
