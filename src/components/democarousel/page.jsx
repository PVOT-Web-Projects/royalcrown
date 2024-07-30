import React from 'react';
import './democarousel.scss';

const images = [
  '/images/demoimage.png',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
  '/images/image7.jpg',
  '/images/image8.jpg',
  '/images/image9.jpg',
  '/images/image10.jpg',
  '/images/image11.jpg',
];

const DemoCarousel = () => {
  return (
    <div className="MainCarousel">
        <div className="carousel">
      <div className="carousel-control-button left">
        <input type="radio" name="carousel-control-input" />
      </div>
      <div className="carousel-control-button right">
        <input type="radio" name="carousel-control-input" checked />
      </div>
      <div className="carousel-rotation-direction">
        <ul className="carousel-item-wrapper" style={{ '--_num-elements': images.length }}>
          {images.map((image, index) => (
            <li className="carousel-item" key={index} style={{ '--_index': index + 1, '--_image-url': `url(${image})` }}>
              <div className="carousel-image" style={{ backgroundImage: `url(${image})` }}></div>
            </li>
          ))}
          <li className="carousel-ground"></li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default DemoCarousel;
