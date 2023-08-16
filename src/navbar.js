import React from 'react';
import './Navbar.css';

function Navbar() {
  const scrollTo = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="prajawal-btn" onClick={() => scrollTo('home')}>
          <span className="prajawal-text">Prajawal.in</span>
        </button>
      </div>
      <div className="navbar-right">
        <ul>
          <li><button onClick={() => scrollTo('portfolio')}>Portfolio</button></li>
          <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
