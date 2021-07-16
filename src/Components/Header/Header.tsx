import React from "react";
import { Logo, SearchInput } from "./";
import "./Header.styles.css";
const Header = ({ filterText, setFilterText }: any) => {
  return (
    <div className="headerContainer">
      <Logo />
      <SearchInput filterText={filterText} setFilterText={setFilterText} />
    </div>
  );
};
export default Header;
