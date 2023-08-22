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
        date="06/2022 - Present"
        employerDetails="Yoti"
      >
        <hr className="line-break" />

        <div className="project-details"  style={{ marginBottom: '35px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <b>Yoti Sign (eSignature Platform)</b>
            </div>
            <div className="project-date">
              06/2022 - Present
            </div>
          </div>

          <ul>
            <li>
              Actively developing the project&apos;s fleet of Go(lang) Microservices
            </li>
            <li>
              Architected and implemented an event storage and aggregation system with CQRS to decrease query 
              times by over 10x to reduce the website bounce rate 
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
              03/2021 - 06/2022
            </div>
          </div>

          <ul>
            <li>
              Development ownership of multiple system critical Go(lang) Microservices
            </li>
            <li>
              Architected and implemented a custom NFC Microservice, then personally presented the functionality to top RAF, BAE, and 
              Boeing officials to secure further project funding
            </li>
            <li>
              Worked independantly, for a 3 month period, as the Lead Frontend Engineer
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
              Developed a C DLL required for the continued use of military service Chinook helicopters
            </li>
            <li>
              Directly interfaced and collaborated with project stakeholders to architect a maintainable solution
              which I then delivered within strict time and budget constraints
            </li>
            <li>
              High degree of project responsibility (i.e., Scrum Master, requirement capturing, etc)
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
              Interfaced directly with the customer to develop multiple innovative Angular SPAs to simplify the configuration 
              and instantiation of military simulators
            </li>
            <li>
              Helped develop Java Microservices deployed using Docker with a RabbitMQ broker
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
              Developed the map-centric (OpenLayers/Cesium) Angular SPA, which connected through a RESTful HTTP and WS API to the C++ backend
            </li>
            <li>
              Helped develop, in coordination with other teams, the backend C++ server
            </li>
            <li>
              Independantly researched, designed, and implemented a bespoke GIS map solution
            </li>
          </ul>
        </div>
      </JobEntry>
    </>
  );
};

export default WorkExperience;
