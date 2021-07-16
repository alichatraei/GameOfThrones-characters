import React from "react";
import "./CardsContainer.styles.css";
interface IProps {
  children: React.ReactNode;
}
const CardsContainer: React.FC<IProps> = ({ children }) => {
  return <div className="cardsContainer">{children}</div>;
};

export default CardsContainer;
