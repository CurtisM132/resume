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
    <div className="contact-container">
      <div className="row-container">
        <FontAwesomeIcon icon="home" className="contact-icon" />
        <div>UK / Remote</div>
      </div>
      <div className="row-container">
        <FontAwesomeIcon icon="phone-alt" className="contact-icon" />
        <div>07400 282166</div>
      </div>
      <div className="row-container">
        <FontAwesomeIcon icon="at" className="contact-icon" style={{ marginTop: '2px' }} />
        <div style={{ fontSize: "0.72rem" }}>curtis.martin.work@gmail.com</div>
      </div>
      <div className="row-container">
        <FontAwesomeIcon icon="link" className="contact-icon" />
        <div style={{ fontSize: "0.72rem" }} href="www.linkedin.com/in/curtismartin3">www.linkedin.com/in/curtismartin3</div>
      </div>
    </div>
  );
};

export default Contact;
