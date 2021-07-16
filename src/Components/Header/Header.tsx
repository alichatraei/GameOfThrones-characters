import React from "react";
import { Logo, SearchInput } from "./";
import "./Header.styles.css";
const Header = () => {
  return (
    <div className="headerContainer">
      <Logo />
      <SearchInput />
    </div>
  );
};
export default Header;
