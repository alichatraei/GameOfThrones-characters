import React from "react";
import './CardItem.styles.css'
const CardItem = () => {
  return (
    <div className="cardItem">
      <div className="cardInner">
        <div className="cardFront">
          <img src={"#"} alt="#" title="photo" />
        </div>
        <div className="cardBack">
          <h2>Hello</h2>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
