import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './JobEntry.css';

const propTypes = {
  jobTitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  employerDetails: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

const JobEntry = function ({
  jobTitle, date, employerDetails, children,
}) {
  return (
    <>
      <div className="container">
        <div>
          <div className="job-title">{jobTitle}</div>
          <div className="employer-details">{employerDetails}</div>
        </div>
        <div className="job-date">{date}</div>
      </div>

      <div className="projectDetails">
        {children}
      </div>
    </>
  );
};

JobEntry.propTypes = propTypes;

export default JobEntry;
