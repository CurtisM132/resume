import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './EducationEntry.css';

const propTypes = {
  courseTitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  institutionDetails: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

const EducationEntry = function ({
  courseTitle, date, institutionDetails, children,
}) {
  return (
    <>
      <div className="container">
        <div>
          <div className="course-title">{courseTitle}</div>
          <div className="institution-details">{institutionDetails}</div>
        </div>
        <div className="education-date">{date}</div>
      </div>

      <div className="education-details">
        {children}
      </div>
    </>
  );
};

EducationEntry.propTypes = propTypes;

export default EducationEntry;
