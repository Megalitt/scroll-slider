import React from 'react';
import  Logo from '../image/Group1.svg';
import  Tel from '../image/fluent_call-20-regular.svg';

const Header = () => {
  // const screenWidth = window.screen.width

  return (
    <header className='header'>
      <img className='logo' src={Logo} alt="Нет изображения"/>
      <div className='phone'>+7 (495) 495-49-54</div>
      <img className='phone-icon' src={Tel} alt="Нет изображения"/>
    </header>
  );
};

export default Header;