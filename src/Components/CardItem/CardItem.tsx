import React from "react";
import "./CardItem.styles.css";
type IItemInfo = {
  key: number;
  fullName: string;
  title: string;
  family: string;
  imageURL: string;
};
const CardItem: React.FC<IItemInfo> = ({
  key,
  fullName,
  title,
  family,
  imageURL,
}) => {
  return (
    <div className="cardItem" key={key}>
      <div className="cardInner">
        <div className="cardFront">
          <img src={imageURL} alt={fullName} title={fullName} />
        </div>
        <div className="cardBack">
          <h2 id="cardItemCharacterName">{fullName}</h2>
          <hr />
          <h4 id="cardItemTitle">{title}</h4>
          <h4 id="cardItemFamily">{family}</h4>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
