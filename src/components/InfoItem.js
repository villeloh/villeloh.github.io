import React from 'react';

const InfoItem = ( { contentArray, toggleVisibility, mapKey } ) => { 

  const isVisible = contentArray[2] // not ideal, but time is of the essence

  // console.log("re-rendered InfoItem!");

  const btnClasses = ['info-item-btn'];
  if (isVisible) { 
    btnClasses.push('flipped-arrow') 
  } else {
    btnClasses.push('normal-arrow')
  }

  return (
    <div className="info-item">
      <header>
        <div onClick={() => {toggleVisibility(mapKey, isVisible)}} className={btnClasses.join(' ')} ></div>
        <h3>{contentArray[0]}</h3>
      </header> 
      { isVisible && <div className="visible-text" >{contentArray[1]}</div>}
    </div>
  );
  
}; // InfoItem

export default InfoItem;