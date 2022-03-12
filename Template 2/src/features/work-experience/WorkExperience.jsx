import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

import './WorkExperience.css';
import ContentTitle from '../content-title/ContentTitle';
import JobEntry from './job-entry/JobEntry';

const WorkExperience = () => {
  library.add(faBriefcase);

  return (
    <>
      <ContentTitle icon={<FontAwesomeIcon icon="briefcase" />} text="WORK EXPERIENCE" />

      <JobEntry
        jobTitle="Software Engineer"
        date="09/2017 - Present"
        employerDetails="Thales"
      >
        <hr className="line-break" />

        <div className="project-details">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <b>Cybels - Trusted Communities (R&#38;D)</b>
            </div>
            <div className="project-date">
              03/2020 - Present
            </div>
          </div>

          <ul>
            <li>
              Developed multiple <b>Go/Golang Microservices</b> for critical areas of the system (i.e., certification authority, PKI management,
              data persistance using a <b>CouchDB</b> clone, <b>RESTful APIs</b>)
            </li>
            <li>
              Architected and implemented a customer critical NFC communications Microservice, then personally demo&apos;d
              the functionality to top RAF, BAE, and Boeing officials
            </li>
            <li>
              Use of numerous <b>Docker</b> containers (development and testing environment)
            </li>
            <li>
              <b>Linux</b> (Ubuntu) development environment
            </li>
            <li>
              Heavy test coverage using both Unit (standard library) and Integration (<b>Ginko</b> and <b>Gomega</b>) tests to consistently keep technical debt and bugs low
            </li>
            <li>
              Additionally worked, for a period, as the Lead Software Engineer developing the project&apos;s React SPAs
            </li>
          </ul>
        </div>

        <hr className="line-break" />

        <div className="project-details">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <b>GMPS MML</b>
            </div>
            <div className="project-date">
              06/2020 - 03/2021
            </div>
          </div>

          <ul>
            <li>
              Developed a helicopter flight instrument data transformation DLL, written in <b>C</b> (GCC compiled), critical for the
              continued use of active service Chinook helicopers
            </li>
            <li>
              Directly collaborated with the customer and Project Manager to architect a maintainable solution
              which I delivered on time and within budget
            </li>
            <li>
              Aggressive Unit and Integration testing to meet DO-178D (aircraft worthiness) certification
            </li>
            <li>
              High degree of project responsibility (i.g., SRS creation, task scheduling, running Agile meetings)
            </li>
          </ul>
        </div>

        <hr className="line-break" />

        <div className="project-details">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <b>Facilities for Air Combat Training (FACT)</b>
            </div>
            <div className="project-date">
              On a Consultant Basis
              <br />
              01/2020 - 06/2020
              <br />
              09/2017 - 02/2019
            </div>
          </div>

          <ul>
            <li>
              Developed the map-centric (using OpenLayers/Cesium) <b>Angular</b> SPA which connected through a RESTful HTTP and WS API to the C++ backend.
              The SPA could handle up to 10,000 moving entities with minimal latency and high framerate going above what was required for the military contract
            </li>
            <li>
              In conjunction to frontend feature work, I developed associated <b>C++</b> backend components of said feature ensuring seamless integration
            </li>
            <li>
              Implemented a bespoke GIS Map Solution (using Geoservers load-balanced with Apache HTTP Server) that provided map imagery for the whole system, 
              which continues to be used for site deployments and demos
            </li>
            <li>
              Developed multiple <b>Python</b> scripts to automate heavy overhead processses and improve team productivity
            </li>
          </ul>
        </div>

        <hr className="line-break" />

        <div className="project-details">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <b>Nuada</b>
            </div>
            <div className="project-date">
              02/2019 - 08/2019
            </div>
          </div>

          <ul>
            <li>
              Interfaced directly with the customer to develop multiple <b>Angular</b> SPAs that simplified the configuration 
              and running of military simulators and their associated resources
            </li>
            <li>
              Helped develop <b>Java Microservices</b> deployed using Docker networks with a RabbitMQ broker
            </li>
          </ul>
        </div>
      </JobEntry>
    </>
  );
};

export default WorkExperience;
