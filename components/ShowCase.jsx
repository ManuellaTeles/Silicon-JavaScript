import React from 'react';

import applepayp from '../assets/Images/applepayplogo.svg'
import applepayplogodarkmode from '../assets/Images/applepayplogodarkmode.svg'
import googlepay from '../assets/Images/googlepaylogo.svg'
import googlepaylogodarkmode from '../assets/Images/googlepaylogodarkmode.svg'
import mobiles from '../assets/Images/2mobiles with bankcards.png'


const ShowCase = () => {
  return (
    <>
      <section aria-label="showcase" className="showcase">
        <div className="container space-y-3">
          <h1 className="d4">Manage All Your Money in One App</h1>

          <div className="content space-y-3">
            <p className="text-lg">
              We offer you a new generation of the mobile banking.
              Save, spend & manage money in your pocket.
            </p>

            <div className="market-btns">
              <a href="#" className="store-btn">
                <span className="sr-only">download on the app store</span>
                <img className="show-light" src={applepayp} alt="appstorelogo" />
                <img className="show-dark" src={applepayplogodarkmode} alt="appstorelogodarkmode" />
              </a>
              <a href="#" className="store-btn">
                <span className="sr-only">get it on google</span>
                <img className="show-light" src={googlepay} alt="googleplaylogo" />
                <img className="show-dark" src={googlepaylogodarkmode} alt="appstorelogodarkmode" />
              </a>
            </div>

            <div className="more">
              <a className="btn-round btn-white">
                <i className="fa-solid fa-chevron-down"></i>
              </a>
              <span>Discover more</span>
            </div>
          </div>

          <div className="phone-img-container">
            <img src={mobiles} alt="two iphones with bank cards image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCase;