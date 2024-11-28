import { useState } from 'react';
import assets from '../assets';

export const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Российская сеть дальней космической связи',
      description:
        'Мы обеспечиваем надежную радиосвязь с космическими аппаратами при полетах к Луне, Марсу и другим планетам Солнечной системы',
    },
    {
      id: 2,
      title: 'Российская сеть дальней космической связи 2',
      description:
        'Мы обеспечиваем надежную радиосвязь с космическими аппаратами при полетах к Луне, Марсу и другим планетам Солнечной системы',
    },
    {
      id: 3,
      title: 'Российская сеть дальней космической связи 3',
      description:
        'Мы обеспечиваем надежную радиосвязь с космическими аппаратами при полетах к Луне, Марсу и другим планетам Солнечной системы',
    },
    {
      id: 4,
      title: 'Российская сеть дальней космической связи 4',
      description:
        'Мы обеспечиваем надежную радиосвязь с космическими аппаратами при полетах к Луне, Марсу и другим планетам Солнечной системы',
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className='slider'>
      <div className='slide'>
        <h2 className='slider-title'>
          <img className='slider-flag' src={assets.ruFlag} alt='ru flag' />
          {slides[activeSlide].title}
        </h2>
        <p className='slider-desc'>{slides[activeSlide].description}</p>
        <a className='slider-btn' href='#!'>
          Оставить заявку
        </a>
      </div>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};
