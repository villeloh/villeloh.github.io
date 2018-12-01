import React from 'react';
import InfoItem from './InfoItem';

const ItemContainer = ( { textMap, toggleItemVisibility } ) => { 

  // console.log("textMap: " + textMap.toString());

  let infoArray = []
  textMap.forEach( (textArray, key) => {

    // console.log("key + value: " + key + " " +textArray.toString());
    infoArray.push(<li key={key}><InfoItem contentArray={textArray} toggleVisibility={toggleItemVisibility} mapKey={key} /></li>);
  });

  // console.log("infoItems: " + infoArray.toString());

  return (
    <div className="item-container">
      <ul className="item-list">{infoArray}</ul>
    </div>
  );
}; // ItemContainer

export default ItemContainer;