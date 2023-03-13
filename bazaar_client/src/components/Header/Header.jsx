import React, {NavLink} from "react";
import Search from "./Search/Search";

const Header = () => {
  return <header>
    <h1>Dungeon Bazaar</h1>
    <Search></Search>
  </header>;
};

export default Header;
