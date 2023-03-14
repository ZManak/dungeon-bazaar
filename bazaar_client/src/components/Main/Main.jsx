import axios from "axios";
import React, {useEffect, useState} from "react";
import { Routes,Route } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import CardList from "./Grid/CardList/CardList";
import { AwesomeButton } from "react-awesome-button";


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
    <div className="title">
    <h2>Awesome Item Stock</h2>
    <h4>Order by:</h4>
    </div>
    <section className="orderButtons">
      <AwesomeButton onPress={orderByName}>NAME</AwesomeButton>
      <AwesomeButton >RATING</AwesomeButton>
      <AwesomeButton >PRICE</AwesomeButton>
    </section>
    <section className="mainItems">
      <CardList data={items}></CardList>
    </section>
  </main>;
};

export default Main;
