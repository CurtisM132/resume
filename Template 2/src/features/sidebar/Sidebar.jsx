import React from 'react';

import './SideBar.css';
import Skills from '../skills/Skills';
import Hobbies from '../hobbies/Hobbies';
import Contact from '../contact/contact-vertical/Contact';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Contact />
      <Skills />
      <Hobbies />
    </div>
  );
};

export default Sidebar;
