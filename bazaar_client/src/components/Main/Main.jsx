import axios from "axios";
import React, {useEffect, useState} from "react";
import { Routes,Route } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';


const Main = () => {
  const [items, setItems] = useState([{}])

  useEffect(() => {
    const getItems = async () => {
      try{
      const res = await axios.get("http://localhost:3000/api");
      const items = res.data;
      setItems(items)
    }catch(err){
      console.log(err);
    }
  }
  getItems()
},[]);

  return <main>
    <h1>Main</h1>
    <section className="mainItems">
    {items.map(item => <article className="mainCard" key={uuidv4}>
      <h3>{item.itemName}</h3>
      <p>Price: {item.price}</p>
      <p>Rating: {item.rating}</p>
    </article> )}
    </section>
  </main>;
};

export default Main;
