import React from 'react';
import FlagHolder from './FlagHolder';

const IntroBox = ( { texts, toggleLanguage, languageEnum } ) => { 

  return (
    <div className="intro-box">
      {texts}
      <div className="face-img-container"><img className="face-img" src="/facepic.jpg" /></div>
      <FlagHolder toggleLanguage={toggleLanguage} languageEnum={languageEnum} />
    </div>
  );
  
}; // IntroBox

export default IntroBox;