import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Grid/Card/Card";
import { AwesomeButton } from "react-awesome-button";

const Main = () => {
  const [items, setItems] = useState([
    {
      Maker: { address: "", cif: null, makerName: "" },
      id: null,
      itemName: "",
      makerId: null,
      price: null,
      rating: "",
    },
  ]);
  const [toogleName, setName] = useState(false);
  const [toogleRating, setRating] = useState(false);
  const [tooglePrice, setPrice] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const orderByName = async () => {
    if (toogleName) {
      try {
        const res = await axios.get("/api/nameAsc");
        const items = res.data;
        setItems(items);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await axios.get("/api/nameDesc");
        const items = res.data;
        setItems(items);
      } catch (err) {
        console.log(err);
      }
    }
    toogleName ? setName(false) : setName(true);
  };

  const orderByRating = () => {
    if (toogleRating) {
      let ascRating = items.sort((a, b) => a.rating > b.rating);
      setItems(ascRating);
    } else {
      setItems(items.sort((a, b) => a.rating < b.rating));
    }
    toogleRating ? setRating(false) : setRating(true);
  };

  const orderByPrice = () => {
    if (tooglePrice) {
      items.sort((a, b) => a.price > b.price);
    } else {
      items.sort((a, b) => a.price < b.price);
    }
    tooglePrice ? setPrice(false) : setPrice(true);
  };

  const paginate = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);
    console.log(currentItems);
    return currentItems;
  };

  /* const printCards = () => {
    paginate().map((item) => <Card item={item} key={item.id} />);
  }; */

  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get("/api");
        const items = res.data;
        setItems(items);
      } catch (err) {
        console.log(err);
      }
    };
    getItems();
  }, []);

  return (
    <main>
      <div className="title">
        <h2>Awesome Item Stock</h2>
        <h4>Order by:</h4>
      </div>
      <section className="orderButtons">
        <AwesomeButton onPress={orderByName}>NAME</AwesomeButton>
        <AwesomeButton onPress={orderByRating}>RATING</AwesomeButton>
        <AwesomeButton onPress={orderByPrice}>PRICE</AwesomeButton>
      </section>
      <section className="cardList">
        {items > 1 &&
          paginate().map((item) => <Card item={item} key={item.id}></Card>)}
      </section>
      <section className="paginateButtons">
        <AwesomeButton
          onPress={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          prev
        </AwesomeButton>
        <AwesomeButton
          onPress={() => {
            let pages = Math.ceil(items.length / itemsPerPage);
            if (currentPage < pages) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          next
        </AwesomeButton>
      </section>
    </main>
  );
};

export default Main;
