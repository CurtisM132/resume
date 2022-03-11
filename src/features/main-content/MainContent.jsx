import React from 'react';

import './MainContent.css';
import WorkExperience from '../work-experience/WorkExperience';
import EducationHistory from '../education-history/EducationHistory';

const MainContent = () => {
  return (
    <div className="main-content">
      <div style={{ marginBottom: '20px' }}>
        <WorkExperience />
      </div>
      <EducationHistory />
    </div>
  );
};

export default MainContent;
