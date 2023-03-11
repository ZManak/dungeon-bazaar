import React from "react";

const Card = (props) => {
  return <div className="card">
      <h4>{props.item.itemName}</h4>
      <p>Price: {props.item.price}</p>
      <p>Rating: {props.item.rating}</p>
      <button className="rpg-button" >DETAILS</button>
      { <div className="makerData">
        <p>Manufactured by: {props.item.Maker.makerName}</p>
        <p>Address: {props.item.Maker.address}</p>
        <p>CIF: {props.item.Maker.cif}</p>
      </div> }
    </div>
};

export default Card;
