import React from 'react';

import Contact from '../contact/contact-horizontal/Contact';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="name">
        Curtis Martin
      </div>

      <div className="header-tag">
        Driven, dependable, and empathetic individual with over 6 years of enterprise software engineering experience recently transitioned into sales.
        Currently working as a Business Developer for a UX Design agency, but seeking a long-term position with a company that better aligns with my 
        values and offers internal growth opportunities with excellent fulfilment. Proactive learner (50 books read a year for 3 years) and persistent
        hobbyist (weightlifting 5x a week for 6+ years).
      </div>

      <Contact />
    </div>
  );
};

export default Header;
