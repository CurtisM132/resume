import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faIdCard, faAt, faPhoneAlt, faHome, faLink,
} from '@fortawesome/free-solid-svg-icons';

import './Contact.css';
import ContentTitle from '../../content-title/ContentTitle';

const Contact = () => {
  library.add(faIdCard);
  library.add(faHome);
  library.add(faAt);
  library.add(faPhoneAlt);
  library.add(faLink);

  return (
    <div className="contact-container">
      <ContentTitle icon={<FontAwesomeIcon icon="id-card" />} text="CONTACT" />

      <div className="row-container">
        <FontAwesomeIcon icon="home" className="contact-icon" />
        <div>Reading, UK</div>
      </div>
      <div className="row-container">
        <FontAwesomeIcon icon="phone-alt" className="contact-icon" />
        <div>07400 282166</div>
      </div>
      <div className="row-container">
        <FontAwesomeIcon icon="at" className="contact-icon" style={{ marginTop: '2px' }} />
        <div>curtis.martin.work@gmail.me</div>
      </div>
      <div className="row-container">
        <FontAwesomeIcon icon="link" className="contact-icon" />
        {/* <div style={{fontSize: "0.72rem"}}>www.linkedin.com/in/curtismartin3</div> */}
        {/* <a style={{fontSize: "0.72rem"}} href="http://www.linkedin.com/in/curtismartin3">curtismartin3</a> */}
        <a style={{fontSize: "0.72rem"}} href="https://linktr.ee/curtis__martin">Linktree</a>

      </div>
    </div>
  );
};

export default Contact;
