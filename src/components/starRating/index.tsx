import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
const StarRating = ({ noOfStars }: any) => {
  const [rating, setRating] = useState(0);
  const [hover, SetHover] = useState(0);

  const handleClick = (index: number) => {
    setRating(index);
  };
  const onMouseEnter = (index: number) => {
    SetHover(index);
  };
  const onMouseLeave = () => {
    SetHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(noOfStars)]?.map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave()}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
