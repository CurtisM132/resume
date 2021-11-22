import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';

import './Interests.css';
import ContentTitle from '../content-title/ContentTitle';

const INTERESTS = [
  'Reading',
  'Weightlifting',
  'Archery',
  'Hiking',
  'Productivity',
];

const Interests = () => {
  library.add(faHourglass);

  return (
    <div>
      <ContentTitle icon={<FontAwesomeIcon icon="address-card" />} text="INTERESTS" />

      {INTERESTS.map((i) => (
        <div className="skill-text" key={i}>
          {i}
        </div>
      ))}
    </div>
  );
};

export default Interests;
