import React from 'react';

import Contact from '../contact/Contact';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="name">
        Curtis Martin
      </div>

      <div className="header-tag">
        Backend Software Engineer with 6 Years of Experience
        <br />

        {/* <span className="header-subtag">
          Over 6 years of experience, the most recent 2 exclusively working on Go(lang) Microservices
        </span> */}
      </div>
      
      <Contact />
    </div>
  );
};

export default Header;
