import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { searchContext } from "./context/searchContext";

function App() {
  const [search, setSearch] = React.useState("");
  return (
    <div className="App">
      <searchContext.Provider value={{ search, setSearch }}>
        <Header />
        <Main />
        <Footer />
      </searchContext.Provider>
    </div>
  );
}

export default App;
