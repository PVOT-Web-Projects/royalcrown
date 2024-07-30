import React from 'react'
import Marquee from "react-fast-marquee";
import "./Certification.scss";
import Image from 'next/image';
import intertek from '@/images/intertek.png'
import iso from '@/images/iso.png'

const Certification = () => {
  return (
    <>
     <div className="certification_main" style={{marginTop:"140px"}}>
     <h2 className='certification_heading'>CERTIFICATIONS</h2>
        <Marquee speed={50} loop={0}> 
          <div className='certificate_marqee'>
            <Image className='logocertificate' src={intertek} alt="certificationimg" />
            <Image className='logocertificate' src={iso} alt="certificationimg" />
            <Image className='logocertificate' src={intertek} alt="certificationimg" />
            <Image className='logocertificate' src={iso} alt="certificationimg" />
            <Image className='logocertificate' src={intertek} alt="certificationimg" />
            <Image className='logocertificate' src={iso} alt="certificationimg" />
            <Image className='logocertificate' src={intertek} alt="certificationimg" />
            <Image className='logocertificate' src={iso} alt="certificationimg" />
            <Image className='logocertificate' src={intertek} alt="certificationimg" />
            <Image className='logocertificate' src={iso} alt="certificationimg" />
            
          </div>
        </Marquee>
      </div>
      
    </>
  )
}

export default Certification
