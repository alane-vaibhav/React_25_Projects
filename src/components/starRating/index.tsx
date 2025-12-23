import React from "react";
import { FaStar } from "react-icons/fa";
const StarRating = (noOfStarts = 5) => {
  return (
    <div className="star-rating">
      {[...Array(noOfStarts)]?.map((item, index) => {
        return (
          <FaStar
            key={index}
            // onClick={}
            // onMouseEnter={}
            // onMouseLeave={}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
