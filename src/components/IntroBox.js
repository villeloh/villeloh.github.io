import React from 'react';

const IntroBox = ( { texts } ) => { 

  return (
    <div className="intro-box">
      {texts}
      <div className="face-img-container"><img className="face-img" src="/facepic.jpg" /></div>
    </div>
  );
  
}; // IntroBox

export default IntroBox;