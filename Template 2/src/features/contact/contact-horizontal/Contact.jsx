import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAt, faPhoneAlt, faHome, faLink,
} from '@fortawesome/free-solid-svg-icons';

import './Contact.css';

const Contact = () => {
  library.add(faHome);
  library.add(faAt);
  library.add(faPhoneAlt);
  library.add(faLink);

  return (
    <div className="contact-container-horizontal">
      <div className="row-container">
        <FontAwesomeIcon icon="home" className="contact-icon" />
        <div>Remote / UK</div>
      </div>
      <div className="row-container">
        <FontAwesomeIcon icon="phone-alt" className="contact-icon" />
        <div>+44 7400 282166</div>
      </div>
      <div className="row-container">
        <FontAwesomeIcon icon="at" className="contact-icon" style={{ marginTop: '2px' }} />
        <div style={{fontSize: "0.72rem"}}>curtis.martin.work@gmail.com</div>
      </div>
      <div className="row-container">
        <FontAwesomeIcon icon="link" className="contact-icon" />
        <div style={{fontSize: "0.72rem"}} href="www.linkedin.com/in/curtismartin3">LinkedIn</div>
        {/* <div style={{fontSize: "0.72rem"}}>www.linkedin.com/in/curtismartin3</div> */}
        {/* <a style={{fontSize: "0.72rem"}} href="https://linktr.ee/curtis__martin">Socials</a> */}
      </div>
    </div>
  );
};

export default Contact;
