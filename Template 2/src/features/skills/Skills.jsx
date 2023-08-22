import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

import './Skills.css';
import ContentTitle from '../content-title/ContentTitle';

const TRAITS = [
  'Results Driven',
  'Self Motivated',
  'Active Listener',
  'Optimist',
  'Feedback Seeking',
  'Stress Tolerant',
];

const OTHER = [
  'Technically Adept',
  'Project Management',
];

const Skills = () => {
  library.add(faChartLine);

  return (
    <div>
      <ContentTitle icon={<FontAwesomeIcon icon="chart-line" />} text="SKILLS" />

      <div className="skill-container">
        <div className="skill-subtitle">
          Traits
        </div>

        {TRAITS.map((i) => (
          <div className="skill-text" key={i}>
            {i}
          </div>
        ))}
      </div>

      <div className="skill-container">
        <div className="skill-subtitle">
          Other
        </div>

        {OTHER.map((i) => (
          <div className="skill-text" key={i}>
            {i}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Skills;
