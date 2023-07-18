import React, { useEffect, useRef } from 'react';
import {data} from '..//data';


const Slider = () => {
  const sliderRef = useRef();
  let mous = 0;
  
  document.addEventListener('wheel', (e) => {
    const scrolledY = window.scrollY;
    let step = e.deltaY || e.detail || e.wheelDelta;
    let scrolLeft = sliderRef.current.scrollLeft;
  
    if (scrolledY >= 1200 && scrolledY <= 1800 ) {
      if((scrolLeft >= 0 && scrolLeft < 2624 && step > 0) || (scrolLeft > 0 && scrolLeft <= 2624 && step < 0)) {
        localStorage.setItem('step', mous += step);
        sliderRef.current.scrollLeft = (localStorage.getItem("step"))*0.5;
        document.body.style.overflowY = 'hidden';
      }else{
        document.body.style.overflowY = 'scroll';
      }
    }
  });

  return (
    <div className='slider'>
      <h2 className='title-h2 slider-h2'>Lorem ipsum dolor sit amet</h2>
      <div className="photo" ref={sliderRef}>
        {data.map(n => 
          <img className='slider-item' src={n} alt='none' key={n}/>
          )}
      </div>
    </div>
  );
};

export default Slider;

