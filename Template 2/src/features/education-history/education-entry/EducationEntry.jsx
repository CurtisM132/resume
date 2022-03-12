import React from 'react';
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

const defaultProps = {
  children: undefined
}

const EducationEntry = function ({
  courseTitle, date, institutionDetails, children,
}) {
  return (
    <div className="education-entry-container">
      <div className="education-details-container">
        <div>
          <div className="course-title">{courseTitle}</div>
          <div className="institution-details">{institutionDetails}</div>
        </div>
        <div className="education-date">{date}</div>
      </div>

      { children &&
        <div className="education-details">
          {children}
        </div>
      }
    </div>
  );
};

EducationEntry.propTypes = propTypes;
EducationEntry.defaultProps = defaultProps;

export default EducationEntry;
