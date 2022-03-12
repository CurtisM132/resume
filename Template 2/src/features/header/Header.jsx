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
        Backend Mid-level Software Engineer of 4.5 years at Thales 
        <br />
        Currently developing Go/Golang Microservices, in a Linux environment, for deployment and testing in Docker containers
      </div>
      
      <Contact />
    </div>
  );
};

export default Header;
