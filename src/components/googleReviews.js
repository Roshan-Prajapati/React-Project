import React from "react";
import "./googleReviews.css";

const reviews = [
  {
    name: "Ankur Singh Chicham",
    time: "9 months ago",
    rating: 5,
    comment: "Excellent service in area of income tax and wealth inheritance.",
  },
  {
    name: "Aman Jaiswal",
    time: "9 months ago",
    rating: 5,
    comment: "Best platform for income tax.",
  },
  {
    name: "Ranjit Singh",
    time: "9 months ago",
    rating: 5,
    comment: "Nice service, good knowledge of sales and income tax 😊.",
  },
  {
    name: "Nandini jha",
    time: "10 months ago",
    rating: 5,
    comment:
      "Exceptional expertise in taxation, covering direct tax, and GST, sets this consultancy in such location apart. Their services are not only affordable.",
  },
];

const GoogleReviews = () => {
  return (
    <div className="reviews-container">
      <div className="business-info">
        <img src="your-logo.png" alt="Bizdoor Business Consultants" className="logo" />
        <span className="rating">4.8</span>
        <span className="reviews-count">(Based on 232 reviews)</span>
      </div>

      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <span className="review-name">{review.name}</span>
              <span className="review-time">{review.time}</span>
            </div>
            <div className="review-comment">
              <p>{review.comment}</p>
            </div>
            <div className="review-stars">
              {Array.from({ length: review.rating }, (_, i) => (
                <span key={i} className="star">&#9733;</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleReviews;
