import React, { useState } from 'react';
import NotificationIcon from '../assets/Images/notification logo.svg';

const Subscribe = () => {
  const [emailInput, setEmailInput] = useState('');
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!emailInput.trim()) {
      setFormError('Enter your email address please');
      setFormSuccess('');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
      setFormError('You must enter a valid email address');
      setFormSuccess('');
    } else {
      setFormError('');
      setFormSuccess('Thank you ! Your submission has been sent!');
      console.log('Email Submitted:', emailInput);
    }
  };

  return (
    <div className="subscribebottom">
      <div className="flexdisplay">
        <img src={NotificationIcon} alt="Notification logo" />
        <h2 className="subscribetext">
          Subscribe to our newsletter to stay informed about latest updates
        </h2>
      </div>
      <div className="wrapper">
        <form onSubmit={handleFormSubmit} className="input-group">
          <i className="fa-regular fa-envelope icon"></i>
          <input className="form-input email" type="text" placeholder="Your email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
          <button className="btn" type="submit">
            Subscribe
          </button>
        </form>
        {formError && <p style={{ color: 'red' }}>{formError}</p>}
        {formSuccess && <p style={{ color: 'green' }}>{formSuccess}</p>}
      </div>
    </div>
  );
};

export default Subscribe;
