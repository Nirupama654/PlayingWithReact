import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      // Determine if the current star should be filled (colored) or not
      const filled = i <= rating;
      stars.push(
        <span
          key={i}
          className={`fa ${filled ? 'fa-star' : 'fa-star-o'}`}
          style={{ color: filled ? 'gold' : 'lightgray', marginRight: '2px' }}
        ></span>
      );
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
