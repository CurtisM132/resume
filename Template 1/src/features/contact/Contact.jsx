import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAddressCard, faAt, faPhoneAlt, faHome, faLink,
} from '@fortawesome/free-solid-svg-icons';

import './Contact.css';
import ContentTitle from '../content-title/ContentTitle';

const Contact = () => {
  library.add(faAddressCard);
  library.add(faAt);
  library.add(faPhoneAlt);
  library.add(faHome);
  library.add(faLink);

  return (
    <div>
      <ContentTitle icon={<FontAwesomeIcon icon="address-card" />} text="CONTACT" />

      <div className="row-container">
        <FontAwesomeIcon icon="at" className="contact-icon" style={{ marginTop: '2px' }} />
        <div style={{fontSize: "0.72rem"}}>curtisastonmartin@hotmail.co.uk</div>
      </div>
      <div className="row-container">
        <FontAwesomeIcon icon="phone-alt" className="contact-icon" />
        <div>07400 282166</div>
      </div>
      <div className="row-container">
        <FontAwesomeIcon icon="home" className="contact-icon" />
        <div>Reading, Berkshire</div>
      </div>
      <div className="row-container">
        <FontAwesomeIcon icon="link" className="contact-icon" />
        <div style={{fontSize: "0.72rem"}}>www.linkedin.com/in/curtismartin3</div>
      </div>
    </div>
  );
};

export default Contact;
