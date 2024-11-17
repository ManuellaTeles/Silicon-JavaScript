import React from 'react';


import Logo1 from '../assets/Images/logo1.svg'
import Logo2 from '../assets/Images/logo2.svg'
import Logo3 from '../assets/Images/logo3.svg'
import Logo4 from '../assets/Images/logo4.svg'
import Logo5 from '../assets/Images/logo5.svg'
import Logo6 from '../assets/Images/logo6.svg'


const Logos = () => {
  return (
    <>
      <section aria-label="our-customers" className="logos">
        <div className="container">
          <div className="logo-card">
            <img src={Logo1} alt="Inspum logo" />
          </div>
          <div className="logo-card">
            <img src={Logo2} alt="Inspum logo" />
          </div>
          <div className="logo-card">
            <img src={Logo3} alt="Inspum logo" />
          </div>
          <div className="logo-card">
            <img src={Logo4} alt="Inspum logo" />
          </div>
          <div className="logo-card">
            <img src={Logo5} alt="Inspum logo" />
          </div>
          <div className="logo-card">
            <img src={Logo6} alt="Inspum logo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Logos;

