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
        Results driven and empathetic Software Engineer with 6+ years of enterprise-level SaaS experience transitioning
        into Sales as an SDR. Able to understand the intricacies of any SaaS product and communicate the functionality as
        tangible benefits. Capable of identifying pain points and gaps in a prospect&apos;s current solution to highlight
        the need for change. Proactive with learning (50 books read a year for the past 3 years) and persistent with work
        and hobbies (weightlifting 5x a week for 6+ years).
      </div>

      <Contact />
    </div>
  );
};

export default Header;
