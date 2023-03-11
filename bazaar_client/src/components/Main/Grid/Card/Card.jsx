import React from "react";

const Card = (props) => {
  return <div className="itemCard">
      <h2>{props.item.itemName}</h2>
      <p>Price: {props.item.price}</p>
      <p>Rating: {props.item.rating}</p>
      <button >DETAILS</button>
      { <div className="makerData">
        <p>Manufactured by: {props.item.Maker.makerName}</p>
        <p>Address: {props.item.Maker.address}</p>
        <p>CIF: {props.item.Maker.cif}</p>
      </div> }
    </div>
};

export default Card;
