import React, { Fragment } from 'react'

import "./EducationHistory.css"
import BodyTitle from "../body-title/BodyTitle";
import EducationEntry from "./education-entry/EducationEntry";


const EducationHistory = () => {
    return (
        <Fragment>
            <BodyTitle text="EDUCATION" />

            <EducationEntry
                courseTitle="BSc Digital andTechnology Solutions (Computer Science)"
                date="09/2019 - Present"
                institutionDetails="University of Warwick">
                <div className={"education-details"}>
                    Solely developing a C DLL to act as a communication layer between a third party application and Thales proprietary systems for use on a military helicopter. Strong focus on unit and integration testing as the software has to be DO-178D certified to be allowed on-board the aircraft. Due to team size, I increased my responsibility (SRS creation, Self Task Prioritisation, Software and Process Documentation) to ensure we complete the project on time.
                </div>
            </EducationEntry>
        </Fragment>
    )
}

export default EducationHistory;