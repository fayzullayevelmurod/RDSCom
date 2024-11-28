import { useState, useEffect } from 'react';
import assets from '../assets';

export const Slider = ({ setSliderClass }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Российская сеть дальней космической связи',
      description:
        'Мы обеспечиваем надежную радиосвязь с космическими аппаратами при полетах к Луне, Марсу и другим планетам Солнечной системы',
      btnText: 'Евпатория',
    },
    {
      id: 2,
      title: 'Российская сеть дальней космической связи',
      description:
        'Мы обеспечиваем надежную радиосвязь с космическими аппаратами при полетах к Луне, Марсу и другим планетам Солнечной системы',
      btnText: 'Уссурийск',
    },
    {
      id: 3,
      title: 'Российская сеть дальней космической связи',
      description:
        'Мы обеспечиваем надежную радиосвязь с космическими аппаратами при полетах к Луне, Марсу и другим планетам Солнечной системы',
      btnText: 'Медвежьи Озера',
    },
    {
      id: 4,
      title: 'Российская сеть дальней космической связи',
      description:
        'Мы обеспечиваем надежную радиосвязь с космическими аппаратами при полетах к Луне, Марсу и другим планетам Солнечной системы',
      btnText: 'Калязин',
    },
  ];

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  // Update the parent class (home-page)
  useEffect(() => {
    setSliderClass(`slide-${activeSlide + 1}`);
  }, [activeSlide, setSliderClass]);

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
      <div className='swiper-paginations'>
        <div className='swiper-btns'>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`swiper-btn__box ${
                activeSlide === index ? 'active' : ''
              }`}
              onClick={() => goToSlide(index)}
            >
              <span className='swiper-btn__box-count'>{`0${index + 1}`}</span>
              <button>{slide.btnText}</button>
            </div>
          ))}
        </div>
        <div className='pagination'>
          <p>
            <span className='active-slider'>{`${activeSlide + 1}`}</span>
            <span>/ {slides.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
