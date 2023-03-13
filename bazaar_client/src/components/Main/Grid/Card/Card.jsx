import React, {useState} from "react";
import { AwesomeButton } from 'react-awesome-button';

const Card = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [logos, setLogos] = useState(["ra ra-sword ra-3x", "ra ra-meat ra-3x", "ra ra-helmet ra-3x", "ra ra-flask ra-3x"])
  const collapse = () => {
    !collapsed ? setCollapsed(true) :
    setCollapsed(false)
  }
  const randomLogo = logos[Math.floor( Math.random() * 4 )];
  
  return <div className="pixel-border">
      <i className={randomLogo}></i>
      <h4>{props.item.itemName}</h4>
      <p>Price: {props.item.price} ¢</p>
      <p>Rating: {props.item.rating} / 10</p>
      <AwesomeButton onPress={collapse}>Manufacturer Details</AwesomeButton>
      {collapsed ? <div className="makerData">
        <p>Manufactured by: {props.item.Maker.makerName}</p>
        <p>Address: {props.item.Maker.address}</p>
        <p>CIF: {props.item.Maker.cif}</p>
      </div> : <></>}
    </div>
};

export default Card;
