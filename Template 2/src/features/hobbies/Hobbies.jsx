import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faChartLine } from '@fortawesome/free-solid-svg-icons';

import './Hobbies.css';
import ContentTitle from '../content-title/ContentTitle';

const HOBBIES = [
  'Improv',
  'Weightlifting',
  'Archery',
  'Reading',
  'Motorcycling',
  'Personal Development',
];

const Hobbies = () => {
  library.add(faBook);
  library.add(faChartLine);

  return (
    <div>
      <ContentTitle icon={<FontAwesomeIcon icon="book" />} text="INTERESTS" />

      <div className="hobbies-container">
        {HOBBIES.map((i) => (
          <div className="hobbies-text" key={i}>
            {i}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Hobbies;
