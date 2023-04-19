import axios from "axios";
import React, { useRef, useState } from "react";
import { searchContext } from "../../../context/searchContext";
import { AwesomeButton, AwesomeButtonProgress } from "react-awesome-button";

const Search = () => {
  const { search, setSearch } = React.useContext(searchContext);
  const [input, setInput] = useState("");
  let inputText = useRef();

  const handleSubmit = () => {
    //e.preventDefault();
    setSearch(inputText.current.value);
    console.log(search);
  };

  return (
    <div className="searchBar">
      <input
        className="pixel-border"
        type="text"
        placeholder="Search deals..."
        ref={inputText}
      />
      <AwesomeButton onPress={handleSubmit}>Search</AwesomeButton>
      <AwesomeButton
        onPress={() => {
          inputText.current.value = "";
          setSearch("");
        }}
      >
        Clear
      </AwesomeButton>
    </div>
  );
};

export default Search;
