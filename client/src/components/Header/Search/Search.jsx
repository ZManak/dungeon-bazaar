import axios from "axios";
import React, { useRef, useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  const inputText = useRef();

  const handleSubmit = () => {
    setTimeout(() => {
      setInput(inputText.current.value);
 console.log(input);
    const item = axios.get(`/api/search/${input}`);
    }, 4000);
   
  };

  return (
    <div>
      <input
        className="pixel-border"
        type="text"
        placeholder="Search deals..."
        ref={inputText}
        onChange={handleSubmit}
      />
    </div>
  );
};

export default Search;
