import React, {useState} from "react";
import { AwesomeButton } from 'react-awesome-button';

const Card = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const collapse = () => {
    !collapsed ? setCollapsed(true) :
    setCollapsed(false)
  }
  return <div className="pixel-border">
      <h4>{props.item.itemName}</h4>
      <p>Price: {props.item.price}</p>
      <p>Rating: {props.item.rating}</p>
      <AwesomeButton onPress={collapse}>Manufacturer Details</AwesomeButton>
      {collapsed ? <div className="makerData">
        <p>Manufactured by: {props.item.Maker.makerName}</p>
        <p>Address: {props.item.Maker.address}</p>
        <p>CIF: {props.item.Maker.cif}</p>
      </div> : <></>}
    </div>
};

export default Card;
