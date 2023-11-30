import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((index) => {
        if (index <= filledStars) {
          return <span key={index}>&#9733;</span>; // Unicode character for a filled star
        } else {
          return <span key={index}>&#9734;</span>; // Unicode character for an outline star
        }
      })}
    </div>
  );
};

export default StarRating;