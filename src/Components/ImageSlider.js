
import React, { useState, useEffect } from 'react';
import { SliderData } from '../Components/SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const delay = 3000; // Set the desired delay (in milliseconds) for auto slide

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    // Auto slide effect
    const interval = setInterval(() => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    }, delay);

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, [length, delay]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={process.env.PUBLIC_URL + slide.image} alt='travel image' className='image' fluid />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;