import React, { useState } from 'react';
import starSvg from './assets/images/icon-star.svg';
import thankYouSvg from './assets/images/illustration-thank-you.svg';
import Rating from './components/Rating';
import data from './ratingsData';

function App() {
  const [ratings, setRatings] = useState(data);
  const [ratingValue, setRatingValue] = useState(null);
  const [submit, setSubmit] = useState(false);

  const getValue = (id) => {
    setRatings((prevState) => {
      const newData = [];
      prevState.forEach((item) => {
        if (item.id === id) {
          newData.push({ ...item, on: !item.on });
          setRatingValue(item.id);
        } else {
          newData.push({ ...item, on: false });
        }
      });
      return newData;
    });
  };

  return (
    <main>
      {!submit && (
        <div className="card">
          <div className="img-container">
            <img src={starSvg} alt="star" />
          </div>
          <h2>How did we do?</h2>
          <p className="message">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <Rating data={ratings} handler={getValue} />

          <button
            className="submit-btn"
            disabled={ratingValue ? false : true}
            onClick={() => setSubmit(true)}
          >
            Submit
          </button>
        </div>
      )}

      {submit && (
        <div className="card secondary-card">
          <img src={thankYouSvg} alt="" className="secondary-item" />

          <div className="selected-rating">
            <p>You selected {ratingValue} out of 5</p>
          </div>
          <h2>Thank you!</h2>
          <p className="message">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </main>
  );
}

export default App;
