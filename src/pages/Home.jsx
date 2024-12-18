import { Header, Slider } from '../components';
import { useState } from 'react';

export const Home = () => {
  const [sliderClass, setSliderClass] = useState('slide-1');

  return (
    <div className={`home-page ${sliderClass}`}>
      <Header />
      <div className='home-page__container container'>
        <Slider setSliderClass={setSliderClass} />
      </div>
    </div>
  );
};
