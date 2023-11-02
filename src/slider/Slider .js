import React, { useState } from 'react';
import './Slider.css';
import BtnSlider from './BtnSlider';
import { v4 as uuidv4 } from 'uuid'; // Importez uuid une seule fois

const dataSlider = [
  {
    id: uuidv4(), // Utilisez uuidv4() pour générer un ID unique
    title: 'Slide 1',
    image: '/Imgs/img1.jpg',
  },
  {
    id: uuidv4(),
    title: 'Slide 2',
    image: '/Imgs/img2.jpg',
  },
  {
    id: uuidv4(),
    title: 'Slide 3',
    image: '/Imgs/img3.jpg',
  },
  {
    id: uuidv4(),
    title: 'Slide 4',
    image: '/Imgs/img4.jpg',
  },


];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((index + 1) % dataSlider.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + dataSlider.length) % dataSlider.length);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((slide, slideIndex) => (
        <div key={slide.id} className={`slide ${slideIndex === index ? 'active' : ''}`}>
          <h1>{slide.title}</h1>
          <img src={process.env.PUBLIC_URL + slide.image} alt={slide.title} />
        </div>
      ))}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
    </div>
  );
}
