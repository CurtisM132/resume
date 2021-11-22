import React, { Fragment } from 'react'

import "./WorkHistory.css"
import BodyTitle from "../body-title/BodyTitle";
import JobEntry from "../work-history/JobEntry";


const WorkHistory = () => {
    return (
        <Fragment>
            <BodyTitle text="WORK HISTORY" />

            <JobEntry
                jobTitle="Software Engineer"
                date="09/2017 - Present"
                employerDetails="Thales UK">
                <div className={"projectDetails"}>
                    FACT, a refreshed web interface for a flight instructor to control linked simulators

                    Sep 2017 - Feb 2019, Aug 2020 - July 2020

                    Developed the front-end Angular SPA website featuring a map-centric design (using OpenLayers) that connected, through a backend server, to a simulation network to display and manipulate military training scenarios. A prime focus on usability, performance, and compact feature design.

                    Developed the C++ backend server to enable communication from the website to the simulation network and handle any advanced interactions that required additional calculations.

                    Designed and implemented a GIS map tiling solution (using load-balanced Geoservers) to provide raster and vector map layers to the front-end.
                </div>

                <div className={"projectDetails"}>
                    Nuada, a solution to synchronise simulation events and resources across the UK
                    Feb 2019 - Aug 2020

                    Angular website hosted on Microsoft SharePoint which communicated, through a RESTful api, to the Java microservice backend. Developed the front-end and helped develop the backend.
                </div>

                <div className={"projectDetails"}>
                    Solely developing a C DLL to act as a communication layer between a third party application and Thales proprietary systems for use on a military helicopter. Strong focus on unit and integration testing as the software has to be DO-178D certified to be allowed on-board the aircraft. Due to team size, I increased my responsibility (SRS creation, Self Task Prioritisation, Software and Process Documentation) to ensure we complete the project on time.
                </div>
            </JobEntry>
        </Fragment>
    )
}

export default WorkHistory;