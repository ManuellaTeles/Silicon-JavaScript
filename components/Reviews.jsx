import React, { useEffect, useState } from 'react';
import StarIcon from '../assets/Images/icon.svg';

const Reviews = () => {
  const [feedback, setFeedback] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        if (res.ok) {
          const data = await res.json();
          setFeedback(data);
        } else {
          setFetchError('Something went wrong');
        }
      } catch (error) {
        setFetchError(error.message);
      }
    };

    loadTestimonials();
  }, []);

  return (
    <section className="reviews" aria-label="User Reviews">
      <div className="container">
        <header className="del-1">
          <h2 className="h1">Clients are Loving Our App</h2>
        </header>

        <div className="del-2">
          {fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
          {feedback.map((entry) => (
            <div className="card" key={entry.id}>
              <img className="logo" src={StarIcon} alt="Star icon" />

              <div className="star">
                {Array.from({ length: entry.starRating }).map((_, idx) => (
                  <i key={idx} className="fa-solid fa-star"></i>
                ))}
                {Array.from({ length: 5 - entry.starRating }).map((_, idx) => (
                  <i key={idx + entry.starRating} className="fa-regular fa-star"></i>
                ))}
              </div>

              <p className="review">{entry.comment}</p>

              <div className="content">
                <img
                  className="profile-pic"
                  src={entry.avatarUrl}
                  alt={entry.author}
                />

                <div className="name">
                  <h4>{entry.author}</h4>
                  <p>{entry.jobRole}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
