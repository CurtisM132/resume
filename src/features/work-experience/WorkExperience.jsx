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
        employerDetails="Thales UK"
      >
        <hr />

        <div className="project-details">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <b>Cybels - Trusted Communities (R&#38;D)</b>
              <br />
              <i>https://www.thalesgroup.com/en/cybels-protect-0</i>
            </div>
            <div className="project-date">
              03/2020 - Present
            </div>
          </div>

          <div className="project-desc">
            Rapidly developing proof of concept utilising a dynamically instantiated <b>Go(lang) Microservice</b> architecture complete with bespoke
            and secure service level message transportation.
          </div>

          <ul>
            <li>
              Developed multiple <b>Go(lang) Microservices</b> for critical areas of the system (i.e., certification authority, PKI management,
              data persistance using a <b>CouchDB</b> clone, <b>RESTful APIs</b>)
            </li>
            <li>
              Architected and implemented a customer critical NFC communications Microservice, then demo&apos;d the functionality to top RAF, BAE, and Boeing officials
            </li>
            <li>
              Testing and deployment of the project uses numerous <b>Docker</b> containers
            </li>
            <li>
              <b>Linux</b> (Ubuntu) development environment
            </li>
            <li>
              Heavy test coverage using both Unit (standard library) and Integration (<b>Ginko</b> and <b>Gomega</b>) tests
            </li>
            <li>
              Additionally worked, for a period, as the Lead Software Engineer developing the project&apos;s React SPAs.
              All featured <b>REST</b> JSON APIs (utilising <b>HTTP</b> and <b>WS</b>), a <b>Material Design</b> UI, and <b>Redux</b> state management
            </li>
          </ul>
        </div>

        <hr />

        <div className="project-details">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <b>GMPS MML</b>
            </div>
            <div className="project-date">
              06/2020 - 03/2021
            </div>
          </div>

          <div className="project-desc">
            Middle-man DLL written in <b>C</b>. Critical communication layer between 3rd party instrument software and Thales systems
            for use in active service Chinook (military) helicopters.
          </div>

          <ul>
            <li>
              Lead Software Engineer
            </li>
            <li>
              Aggressive Unit and Integration testing to meet DO-178D (aircraft worthiness) certification
            </li>
            <li>
              High degree of project responsibility (i.g., SRS creation, task scheduling, running Agile meetings)
            </li>
          </ul>
        </div>

        <hr />

        <div className="project-details">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <b>FACT</b>
              <br />

            </div>
            <div className="project-date">
              On a Consultant Basis
              <br />
              01/2020 - 06/2020
              <br />
              09/2017 - 02/2019
            </div>
          </div>

          <div className="project-desc">
            Map-centric <b>Angular</b> SPA connected, through a high-performance <b>C++</b> backend, to
            a simulation network with multiple military-grade flight simulators for pilot training scenarios.
          </div>

          <ul>
            <li>
              Developed the frontend map-centric (using OpenLayers/Cesium) <b>Angular</b> SPA
            </li>
            <li>
              Helped develop the high performance multi-threaded <b>C++</b> backend server
            </li>
            <li>
              Designed and implemented an efficient and performant GIS Map Solution (using Geoservers load-balanced with <b>Apache HTTP Server</b>)
            </li>
            <li>
              Developed multiple <b>Python</b> scripts to automate heavy overhead processses
            </li>
          </ul>
        </div>

        <hr />

        <div className="project-details">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <b>Nuada</b>
              <br />
              <i>https://www.thalesgroup.com/en/nuada</i>
            </div>
            <div className="project-date">
              02/2019 - 08/2019
            </div>
          </div>

          <div className="project-desc">
            A product to simplify the planning, preparation, and delivery of activities/military scenarios
            that employ networked (local or global) simulation environments and resources.
          </div>

          <ul>
            <li>
              Developed multiple <b>Angular</b> SPAs
            </li>
            <li>
              Helped develop the <b>Java Microservice</b> backend
            </li>
          </ul>
        </div>
      </JobEntry>
    </>
  );
};

export default WorkExperience;
