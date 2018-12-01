import React from 'react';

const FlagHolder = ( { toggleLanguage, languageEnum } ) => {

  const imageUrlFin = '/finnish_flag.png';
  const imageUrlEng = '/english_flag.png';

  return (
    <div className="flag-holder">
      <img className="flag-img" src={imageUrlFin} onClick={() => { toggleLanguage(languageEnum.FIN) }}/>
      <img className="flag-img" src={imageUrlEng} onClick={() => { toggleLanguage(languageEnum.ENG) }}/>
    </div>
  );
}; // FlagHolder

export default FlagHolder;