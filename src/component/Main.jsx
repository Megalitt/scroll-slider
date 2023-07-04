import React from 'react';


const Main = ({Mask1, Mask2 }) => {
  return (
    <main className='main'>
      <h2 className='title-h2'>ut aliquip ex ea commodo consequat</h2>
      <div className="wrap">
        <img className='img-1' src={Mask1}/>
        <div className="text-wrap">
          <h4 className='title-h4'>Lorem ipsum dolor sit<br/> amet, consectetur<br/> adipiscing elit</h4>
          <p className='text'>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className="text-wrap text-revers">
          <h4 className='title-h4'>Lorem ipsum dolor sit<br/> amet, consectetur<br/> adipiscing elit</h4>
          <p className='text'>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <img className='img-2 img-2-revers' src={Mask2}/>
      </div>
      
    </main>
  );
};

export default Main;