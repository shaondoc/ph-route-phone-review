import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  return (
    <div className="review">
      <h3>{review.Name}</h3>
      <p>{review.review}</p>
      <small>Rating: {review.rating}</small>
    </div>
  );
};

export default Review;
