import React from "react";
import {
  IoLocationOutline,
  IoStar,
  IoStarHalfOutline,
  IoStarOutline,
} from "react-icons/io5";
import { destinations } from "../../assets/assets";
import { Link } from "react-router-dom";

const HotelCard = ({ tour }) => {
  const { title, duration, price, thumbnail, reviews } = tour;

  const totalRating = reviews?.reduce((sum, r) => sum + r.rating, 0) || 0;
  const avgRating = reviews?.length
    ? (totalRating / reviews.length).toFixed(1)
    : null;

  const getStars = (avg) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (avg >= i) {
        stars.push(<IoStar key={i} />);
      } else if (avg >= i - 0.5) {
        stars.push(<IoStarHalfOutline key={i} />);
      } else {
        stars.push(<IoStarOutline key={i} />);
      }
    }

    return stars;
  };

  return (
    <>
      <div className="tour-card">
        <div className="img">
          <img src={tour.images?.[0]} alt={tour.title} />
          {tour.isFeatured && <div className="badge">Featured</div>}
        </div>
        <div className="text">
          {avgRating && (
            <div className="rating">
              <IoStar />
              <span>{avgRating}</span>
              <small>({reviews.length} reviews)</small>
            </div>
          )}

          <h4>
            {duration} — {title}
          </h4>
          <div className="div">
            <div className="location">
              <span>
                <IoLocationOutline />
              </span>
              <span>{tour.location} </span>
            </div>
            <div className="stars">{getStars(avgRating)}</div>
          </div>
          <div className="price-book">
            <div className="price">
              {tour.currency}
              {price.toFixed(2)} <small>/ ticket</small>
            </div>
            <Link to={""}>
              <span>Book Now</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelCard;
