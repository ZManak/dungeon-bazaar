import React from "react";

const CardList = (props) => {
  const printCards = () => <section>{props.data.map((item) => <Card data={item} key={uuidv4} />)}</section>
  return <div>CardList</div>;
};

export default CardList;
