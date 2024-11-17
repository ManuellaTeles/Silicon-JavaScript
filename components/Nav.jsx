import React, { useState, useEffect } from 'react';

import SiliconLogo from '../assets/Images/Siliconlogo.svg';
import SiliconDarkLogo from '../assets/Images/Siliconlogodarkmodepage.svg';
import MenuIcon from '../assets/Images/Hamburgericon.svg';
import UserIcon from '../assets/Images/loggingubben.svg';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkmode');
    if (storedDarkMode === 'on') {
      setDarkModeEnabled(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkModeEnabled(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled((prevState) => {
      const isEnabled = !prevState;
      if (isEnabled) {
        localStorage.setItem('darkmode', 'on');
        document.documentElement.classList.add('dark');
      } else {
        localStorage.setItem('darkmode', 'off');
        document.documentElement.classList.remove('dark');
      }
      return isEnabled;
    });
  };

  return (
    <nav className="main-nav" aria-label="Main navigation">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <div className="container">
        <a to="/Home">
          <img className="show-light" src={SiliconLogo} alt="Silicon logo" />
          <img className="show-dark" src={SiliconDarkLogo} alt="Silicon logo dark mode" />
        </a>

        <div className="darkmode-toggle">
          <p>Dark Mode</p>
          <label className="toggle">
            <input
              type="checkbox"
              checked={darkModeEnabled}
              onChange={handleDarkModeToggle}
            />
            <span className="slider"></span>
          </label>
        </div>

        <button
          className="menu-btn"
          aria-controls="main-menu"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={handleMenuToggle}
        >
          <img src={MenuIcon} alt="Menu icon" />
        </button>

        <ul id="main-menu" className={`main-menu ${menuOpen ? '' : 'hide'}`}>
          <li>
            <a className="nav-link home" to="/Home">
              Home
            </a>
            <a className="nav-link">Features</a>
            <a className="nav-link" to="/Contact">
              Contact
            </a>
          </li>
          <li className="space">
            <a href="#" className="btn btn-primary">
              <img src={UserIcon} alt="Sign in/out logo" />
              <span>Sign in / up</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

