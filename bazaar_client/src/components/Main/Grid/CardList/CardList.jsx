import React from "react";
import Card from "../Card/Card";
import {v4 as uuidv4} from 'uuid'

const CardList = (props) => {
  const printCards = () => <section className="cardList">{props.data.map((item) => <Card item={item} key={uuidv4} />)}</section>
  return <div>
    {printCards()}
  </div>;
};

export default CardList;
