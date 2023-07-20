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
        jobTitle="Backend Engineer"
        date="06/2023 - Present"
        employerDetails="Yoti"
      >
        <hr className="line-break" />

        <div className="project-details"  style={{ marginBottom: '35px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <b>Yoti Sign (eSignature Platform)</b>
            </div>
            <div className="project-date">
              03/2022 - Present
            </div>
          </div>

          <ul>
            <li>
              Actively developing the project&apos;s fleet of <b>Go(lang) Microservices</b>
            </li>
            <li>
              Architected and implemented an entity-specific event storage and aggregation system using <b>CQRS</b> to decrease 
              consumer query times by over 10x leading to reduced customer bounce rates 
            </li>
            <li>
              Use of <b>Protobuf</b> and <b>gRPC/REST</b> for inter-service communication
            </li>
            <li>
              Data persistence via <b>PostgreSQL</b> (with JSON document storage)
            </li>
          </ul>
        </div>

      </JobEntry>

      <JobEntry
        jobTitle="Software Engineer"
        date="09/2017 - 06/2022"
        employerDetails="Thales"
      >
        <hr className="line-break" />

        <div className="project-details">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <b>Cybels - Trusted Communities (R&#38;D)</b>
            </div>
            <div className="project-date">
              03/2021 - Present
            </div>
          </div>

          <ul>
            <li>
              Developed <b>Go(lang) Microservices</b> for critical areas of the system (i.e., CA, PKI management, <b>CouchDB</b> clone, <b>RESTful APIs</b>)
            </li>
            <li>
              Architected and implemented a bespoke NFC Microservice, then personally demonstrated the functionality to top RAF, BAE, and Boeing officials
            </li>
            <li>
              Heavy Unit and Integration (<b>Ginko</b> and <b>Gomega</b>) test coverage
            </li>
            <li>
              Worked, for a 3 month period, as the Lead Frontend Engineer developing the project&apos;s React SPAs
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
              Developed a <b>C</b> DLL critical for the continued use of military service Chinook helicopters
            </li>
            <li>
              Directly interfaced and collaborated with project stakeholders to architect a maintainable solution
              which I then delivered on time and within budget
            </li>
            <li>
              High degree of project responsibility (i.e., Scrum Master, requirement capturing, etc)
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
              Developed the map-centric (OpenLayers/Cesium) <b>Angular</b> SPA, which connected through a RESTful HTTP and WS API to the C++ backend
            </li>
            <li>
              Helped develop the backend <b>C++</b> server which interconnected via HLA to 8 other systems
            </li>
            <li>
              Implemented a bespoke GIS Map Solution (Geoservers load-balanced with Apache HTTP Server)
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
              and instantiation of military simulators and their associated resources
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
