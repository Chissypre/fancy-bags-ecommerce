import React from 'react';
import Rating from 'react-rating-stars-component';

const RatingStars = ({ rating }) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

  return (
    < Rating
      count={5} // Number of stars
      value={rating} // The current rating value (from state or props)
      size={24} // Size of the stars
      edit={false} // Set to true if you want to allow user input
      isHalf={true} // Set to true if you want to allow half-star ratings
      onChange={ratingChanged} // Callback function for rating change
    />
  );
};

export default RatingStars;
