import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import './EducationHistory.css';
import ContentTitle from '../content-title/ContentTitle';
import EducationEntry from './education-entry/EducationEntry';

const EducationHistory = () => {
  library.add(faUserGraduate);

  return (
    <div>
      <ContentTitle icon={<FontAwesomeIcon icon="user-graduate" />} text="EDUCATION" />

      <EducationEntry
        courseTitle="BSc in Digital and Technology Solutions (Computer Science)"
        date="09/2019 - 06/2023"
        institutionDetails="University of Warwick"
      >
        <div className="education-details">
          Currently attending part-time as an apprentice.
        </div>
      </EducationEntry>
    </div>
  );
};

export default EducationHistory;
