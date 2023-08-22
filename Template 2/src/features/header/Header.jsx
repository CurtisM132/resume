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
        Highly motivated, dependable, and empathetic Software Engineer with over 6 years of enterprise experience looking 
        to switch careers and transition into remote sales. I&apos;m confident I can be an asset for your sales team due
         to my unique mixture of curiosity, obsession with personal development, and willingness to learn.
        
        <br />
        <br />

      </div>
      
      <Contact />
    </div>
  );
};

export default Header;
