import React from "react";

const Card = (props) => {
  return <div className="itemCard">
    <h2>{props.itemName}</h2>
    <p>{props.price}</p>
    <p>{props.rating}</p>
  </div>;
};

export default Card;
