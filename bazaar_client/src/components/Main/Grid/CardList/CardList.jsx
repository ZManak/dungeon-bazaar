/* import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { v4 as uuidv4 } from "uuid";
import { AwesomeButton } from "react-awesome-button";


const CardList = (props) => {
  const items = props.data;
  /* const [items, setItems] = useState([]);
    const [pageNumber, setPageNumber]= useState(1)
    const [itemNumber]= useState(5)

    
    const currentPageNumber = (pageNumber * itemNumber) - itemNumber  
    const paginatedItems = items.splice(currentPageNumber, itemNumber)
    console.log(items);
    console.log(paginatedItems)

    const handlePrev =()=>{
        if(pageNumber === 1) return
        setPageNumber(pageNumber - 1)
    }
    const handleNext =()=>{
        setPageNumber(pageNumber + 1)
    }

    useEffect(() => {
        setItems(props.data)
    })    
    return (
        <div>
          {paginatedItems.map((item)=>(
                <Card item={item} key={uuidv4} />)
            )}
            <div>Page {pageNumber} </div>
            <div>
                <AwesomeButton onPress={handlePrev}>prev</AwesomeButton>
                <AwesomeButton onPress={handleNext}>next</AwesomeButton>
            </div>
        </div> */

/*const printCards = () => {
    <section className="cardList">
      {items.map((item) => (
        <Card item={item} key={uuidv4} />
      ))}
    </section>;
  };

  return <div>{printCards()}</div>;
};
export default CardList;
 */

import React from "react";
import Card from "../Card/Card";
import { v4 as uuidv4 } from "uuid";

const CardList = (props) => {
  const printCards = () => (
    <section className="cardList">
      {props.data.map((item) => (
        <Card item={item} key={uuidv4} />
      ))}
    </section>
  );
  return <div>{printCards()}</div>;
};

export default CardList;
