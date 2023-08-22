import React from 'react';

import './SideBar.css';
import Skills from '../skills/Skills';
import Contact from '../contact/contact-vertical/Contact';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Contact />
      <br></br>
      <Skills />
    </div>
  );
};

export default Sidebar;
