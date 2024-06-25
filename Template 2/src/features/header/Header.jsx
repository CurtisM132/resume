import React from 'react';

import Contact from '../contact/contact-horizontal/Contact';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="name">
        Curtis Martin
      </div>

      {/* <div className="header-tag">
        Driven, dependable, and empathetic individual with 6 months of sales experience and 6+ years of enterprise software engineering experience.
        Seeking a long-term sales position that aligns with my values and offers internal growth opportunities.
      </div> */}

      <Contact />
    </div>
  );
};

export default Header;
