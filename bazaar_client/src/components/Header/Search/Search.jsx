import React, {useRef, useState} from "react";

const Search = () => {
  const [input, setInput] = useState('');
  const inputText = useRef()

  const handleSubmit = () => {
    setTimeout(() => {
      setInput(inputText.current.value)
    }, 4000)
    console.log(input)
    };

  return <div>
    <input className="pixel-border" type="text" placeholder='Search deals...' ref={inputText} onChange={handleSubmit}/>
    </div>
};

export default Search;
