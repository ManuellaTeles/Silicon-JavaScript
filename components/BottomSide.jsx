import React, { useState, useEffect } from 'react';
import Subscribe from './Subscribe';
import CallIcon from '../assets/Images/call icon.svg';
import messageIcon from '../assets/Images/message icon.svg';

const Bottom = () => {
  const [faqList, setFaqList] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [expandedState, setExpandedState] = useState({});

  useEffect(() => {
    const getFAQs = async () => {
      try {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        if (!res.ok) {
          throw new Error('Something went wrong!');
        }
        const result = await res.json();
        setFaqList(result);
      } catch (error) {
        setFetchError(error.message);
      }
    };

    getFAQs();
  }, []);

  const handleToggle = (faqId) => {
    setExpandedState((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  return (
    <section className="faqquestions" aria-label="Frequently Asked Questions">
      <div className="container">
        <header className="del-up space-y-3">
          <div className="part-1">
            <h2 className="h4">Any questions? Check out the FAQs</h2>
            <p>Still have unanswered questions and need to get in touch?</p>

            <div className="contact-2">
              <div className="boxes">
                <img src={CallIcon} alt="call logo" />
                <p>Still have questions?</p>
                <a className="btn" href="#">
                  <span className="color-purple">Contact us</span>
                  <i className="fa-solid fa-arrow-right color-purple"></i>
                </a>
              </div>

              <div className="boxes">
                <img src={messageIcon} alt="message logo" />
                <p>Don't like phone calls?</p>
                <a className="btn" href="#">
                  <span className="color-green">Contact us</span>
                  <i className="fa-solid fa-arrow-right color-green"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="del-2">
            {fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
            {faqList.map((faqItem) => (
              <div
                key={faqItem.id}
                className={`ruta ${expandedState[faqItem.id] ? 'ruta-3' : ''}`}
              >
                <div className="flex">
                  <h2>{faqItem.title}</h2>
                  <div className={`more ${expandedState[faqItem.id] ? 'more-up' : ''}`}>
                    <a
                      className="btn-round btn-white"
                      onClick={() => handleToggle(faqItem.id)}
                    >
                      <i
                        className={`fa-solid ${
                          expandedState[faqItem.id] ? 'fa-chevron-up' : 'fa-chevron-down'
                        }`}
                      ></i>
                    </a>
                  </div>
                </div>
                {expandedState[faqItem.id] && <p>{faqItem.content}</p>}
              </div>
            ))}
          </div>
        </header>

        <div className="bottom">
          <Subscribe />
          <footer>© 2024 Silicon. All rights reserved. Credit MadrasThemes</footer>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
