import axios from "axios";
import React, {useEffect, useState} from "react";
import { Routes,Route } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import CardList from "./Grid/CardList/CardList";


const Main = () => {
  const [items, setItems] = useState([{Maker:{address:"", cif: null, makerName:""}, id:null, itemName:"", makerId:null, price:null, rating:""}])
  const [toogleName, setName] = useState(false)
  const orderByName = async () => {
    if (toogleName) { try{
      const res = await axios.get("http://localhost:3000/api/nameAsc");
      const items = res.data;
      setItems(items)
    }catch(err){
      console.log(err);
    }
  } else {
    try{
      const res = await axios.get("http://localhost:3000/api/nameDesc");
      const items = res.data;
      setItems(items)
    }catch(err){
      console.log(err);
    }
  };
  toogleName ? setName(false): setName(true)};

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
    <h4>Order by:</h4>
    <section className="orderButtons">
      <button onClick={orderByName}>NAME</button>
      <button>RATING</button>
      <button>PRICE</button>
    </section>
    <section className="mainItems">
      <CardList data={items}></CardList>
    </section>
  </main>;
};

export default Main;
