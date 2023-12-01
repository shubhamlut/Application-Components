import React from "react";

import "../styles/Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="cardPicture">
        <img
          src="https://b.zmtcdn.com/data/pictures/3/20601383/77fff737d0481bb34ef0b9cd8b914798_o2_featured_v2.jpg"
          alt="Description of the image"
        />
      </div>
      <div className="cardDetails">
        <div className="cardDetailsColOne">
          <div className="cardLabel">Jaffer Bhai's Delhi Darbar</div>
          <div className="cardDesc">North Indian, Biryani, Seafood...</div>
        </div>
        <div className="cardDetailsColTwo">
          <div className="rating">3.8*</div>
          <div className="rate">₹300 for one</div>
        </div>
      </div>
      <div className="cardFooter">Restaurant partner follows WHO protocol</div>
    </div>
  );
};

export default Card;
