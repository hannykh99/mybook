import React, { useState } from 'react';

import './Card.css';

export default function Card(props) {
  let bg_img = `url(${props.images})`;
  let { title, newPrice, dollar, starRating } = props;

  const [showDetails, setShowDetails] = useState(false);

  const renderStarRating = () => {
    const stars = [];
    for (let i = 0; i < starRating; i++) {
      stars.push(<span key={i} className="star-icon">&#9733;</span>);
    }
    return stars;
  };

  const handleViewDetails = () => {
    setShowDetails(true);
  };

  return (
    <div className="card">
      <div className="wrapper">
        <div className="card_img fluid  " style={{ backgroundImage: bg_img }}></div>
        <div className="cardInfo">
          <h1>{title}</h1>
          <div className="action">
            <div className="priceGroup">
              <div className="star-rating">{renderStarRating()}</div>
              <p className="price newPrice">
                {dollar}
                {newPrice}
              </p>
            </div>
            <div className="view">
            
              <a href='#' className='
              btn btn-primary'>View Details</a>
            </div>
            <div className="cart">
              <svg className="outCart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path d="M2 6h10l10 40h32l8-24H16"></path>
                <circle cx="23" cy="54" r="4"></circle>
                <circle cx="49" cy="54" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}