import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import "./JobEntry.css"

const propTypes = {
    jobTitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    employerDetails: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]),
}

const JobEntry = ({ jobTitle, date, employerDetails, children }) => {
    return (
        <Fragment>
            <div className={"container"}>
                <div className={"detailsContainer"}>
                    <div className={"jobTitle"}>{jobTitle}</div>
                    <div className={"employerDetails"}>{employerDetails}</div>
                </div>
                <div className={"date"}>{date}</div>
            </div>

            <div className={"projectDetails"}>
                {children}
            </div>
        </Fragment>
    )
}

JobEntry.propTypes = propTypes;

export default JobEntry;