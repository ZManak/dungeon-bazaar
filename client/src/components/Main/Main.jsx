import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Grid/Card/Card";
import { AwesomeButton } from "react-awesome-button";
import { searchContext } from "../../context/searchContext";

const Main = () => {
  const { search } = React.useContext(searchContext);
  const [items, setItems] = useState([]);

  const [toogleName, setName] = useState(false);
  const [toogleRating, setRating] = useState(false);
  const [tooglePrice, setPrice] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const searchItems = () => {
    if (search === "") {
      const getItems = async () => {
        try {
          const res = await axios.get("/api");
          const items = res.data;
          console.log(items);
          setItems(items);
        } catch (err) {
          console.log(err);
        }
      };
      getItems();
    } else if (search !== "") {
      const filtereditem = items.filter((item) => {
        return item.itemName.toLowerCase().includes(search.toLowerCase());
      });
      setItems(filtereditem);
    }
  };

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

  const orderByRating = async () => {
    /* if (toogleRating) {
      let ascRating = items.sort((a, b) => a.rating > b.rating);
      setItems(ascRating);
    } else {
      setItems(items.sort((a, b) => a.rating < b.rating));
    }
    toogleRating ? setRating(false) : setRating(true); */
    if (toogleRating) {
      try {
        const res = await axios.get("/api/ratingAsc");
        const items = res.data;
        setItems(items);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await axios.get("/api/ratingDesc");
        const items = res.data;
        setItems(items);
      } catch (err) {
        console.log(err);
      }
    }
    toogleRating ? setRating(false) : setRating(true);
  };

  const orderByPrice = async () => {
    if (tooglePrice) {
      /*  setItems(items.sort((a, b) => a.price > b.price));
    } else {
      setItems(items.sort((a, b) => a.price < b.price));
    } */
      try {
        const res = await axios.get("/api/priceAsc");
        const items = res.data;
        setItems(items);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await axios.get("/api/priceDesc");
        const items = res.data;
        setItems(items);
      } catch (err) {
        console.log(err);
      }
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
      if (search !== "") {
        try {
          const res = await axios.get("/api/search/" + search);
          const items = res.data;
          setItems(items);
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          const res = await axios.get("/api");
          const items = res.data;
          console.log(items);
          setItems(items);
        } catch (err) {
          console.log(err);
        }
      }
    };
    getItems();
  }, [search]);

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
        {paginate().map((item) => (
          <Card item={item} key={item.id}></Card>
        ))}
      </section>
      <section className="paginateButtons">
        <AwesomeButton
          type="danger"
          size="medium"
          onPress={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          prev
        </AwesomeButton>
        <AwesomeButton
          type="danger"
          size="medium"
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
