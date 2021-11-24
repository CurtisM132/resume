import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

import './WorkHistory.css';
import ContentTitle from '../content-title/ContentTitle';
import JobEntry from './job-entry/JobEntry';

const WorkHistory = () => {
  library.add(faBriefcase);

  return (
    <>
      <ContentTitle icon={<FontAwesomeIcon icon="briefcase" />} text="WORK HISTORY" />

      <JobEntry
        jobTitle="Software Engineer"
        date="09/2017 - Present"
        employerDetails="Thales UK"
      >
        <hr />

        <div className="project-details">
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div>
              <b>Cybels - Trusted Communities (R&#38;D)</b>
              <br />
              <i>https://www.thalesgroup.com/en/cybels-protect-0</i>
            </div>
            <div className={"project-date"}>
              03/2020 - Present
            </div>
          </div>

          <p>
            <ul>
              <li>
                Currently working on Go microservice components to develop critical areas
                of the system (i.e., digital certificate issuing, PKI management, RESTful APIs)
            </li>
              <li>
                Utilising Go Test and Ginko to create unit and integration tests for every new feature
            </li>
              <li>
                Hired, originally, as the primary engineer to create multiple React frontend SPAs. All SPAs featured a RESTful JSON API
                (utilising HTTP and WS), a Material Design UI, and Redux state management
            </li>
              <li>
                Recently liaised with a sibling team to design and create a service that handles NFC reader/device communication
                and performs custom functionality based on a customer's specific requirements and security clearance level
            </li>
            </ul>
          </p>
        </div>

        <hr />

        <div className="project-details">
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div>
              <b>GMPS MML</b>
            </div>
            <div className={"project-date"}>
              06/2020 - 03/2021
            </div>
          </div>

          <div className="project-desc">
            A middle-man DLL written in C that acts as a communication layer between a 3rd party simulation application and Thales proprietary systems for use on a Chinook helicopter.
          </div>

          <ul>
            <li>
              Primary Engineer developing the solution
            </li>
            <li>
              Strong focus on aggressive unit and integration testing to meet DO-178D certification
            </li>
            <li>
              Increased my responsibility around the planning and release of the solution (i.e., SRS creation,
              task prioritisation, software and process documentation)
            </li>
          </ul>
        </div>

        <hr />

        <div className="project-details">
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div>
              <b>FACT</b>
              <br />

            </div>
            <div className={"project-date"}>
              On a Consultant Basis
              <br />
              01/2020 - 06/2020
              <br />
              09/2017 - 02/2019
            </div>
          </div>

          <div className="project-desc">
            Map-centric Angular SPA connected, through a high-performance C++ backend, to a simulation
            network with multiple military-grade flight simulators to display and manipulate military
            training scenarios. A prime focus on usability/accessibility, performance, and a compact feature-rich design.
          </div>

          <ul>
            <li>
              Developed the frontend map-centric (OpenLayers) Angular SPA
              </li>
            <li>
              Helped to develop the C++ backend server
              </li>
            <li>
              Designed and implemented a GIS map solution (using load-balanced Geoservers) to provide
              raster and vector map imagery to the whole system
              </li>
            <li>
              Created multiple Python scripts to reduce process overhead and increase productivity
              </li>
          </ul>
        </div>

        <hr />

        <div className="project-details">
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div>
              <b>Nuada</b>
              <br />
              <i>https://www.thalesgroup.com/en/nuada</i>
            </div>
            <div className={"project-date"}>
              02/2019 - 08/2019
            </div>
          </div>

          <div className="project-desc">
            A solution that simplifies the planning, preparation, and delivery of activities that employ networked simulation environments and resources.
          </div>

          <ul>
            <li>
              Developed the frontend Angular SPA
              </li>
            <li>
              Helped to develop the Java Microservice backend
              </li>
          </ul>
        </div>
      </JobEntry>
    </>
  );
};

export default WorkHistory;
