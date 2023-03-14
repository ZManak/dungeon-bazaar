import React from "react";
import Search from "./Search/Search";

const Header = () => {
  return <header>
    <img id="skeleton" src="./assets/images/skeleton.gif" alt="" itemType=""/>
    <article className="headerTitle">
    <h1>Dungeon Bazaar</h1>
    <Search></Search>
    </article>
  </header>;
};

export default Header;
