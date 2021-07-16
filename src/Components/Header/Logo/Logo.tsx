import React from "react";
import GOTLogo from "../../../Assets/Images/GOT.svg";
import "./Logo.styles.css";
const Logo = (): JSX.Element => {
  return (
    <>
      <img src={GOTLogo} alt="Game Of Thrones" className="logoImage" />
    </>
  );
};

export default Logo;
