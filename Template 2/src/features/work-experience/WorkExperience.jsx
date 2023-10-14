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
      <ContentTitle icon={<FontAwesomeIcon icon="briefcase" />} text="EXPERIENCE" />

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
              Interfacing with and implementing feedback from Fortune 500 companies (e.g., Facebook, Tik Tok, Lloyds Bank)
            </li>
            <li>
              Actively developing the project&apos;s fleet of 50 Go(lang) Microservices
            </li>
            <li>
              Architected and implemented an event storage and aggregation system with CQRS to decrease website query 
              times and bounce rates by over 10x 
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
              Spearheaded end-to-end ownership of multiple system-critical components to produce a one-of-a-kind 
              Public Key Infrastructure as a Service (PKIaaS) solution
            </li>
            <li>
              Demonstrated the system to top RAF, BAE, and Boeing officials to secure further project funding
            </li>
            <li>
              Additionally worked, for a 3 month period, as the Lead Frontend Engineer
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
              Directly interfaced and collaborated with project stakeholders to architect a solution
              required for the continued use of 60 active military service Chinook helicopters. Delivered within
              strict time and budget constraints
            </li>
            <li>
              High degree of project responsibility (i.e., Scrum Master, requirement capturing, documentation verifier, etc)
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
              Demo-ed and interfaced with the customer every month to develop the system to their needs
            </li>
            <li>
              Produced a solution to simplify the configuration and instantiation of cross-functional and geographically dispersed military simulators
            </li>
            <li>
              Demonstrated the system to military personnel at an annual trade show (I/ITSEC)
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
              Developed the greenfield map-centric website that became the defacto system for air force simulation training planning and execution
            </li>
            <li>
              Demo-ed and interfaced with the customer every month to develop the system to their needs
            </li>
            <li>
              Independently researched, designed, and delivered a bespoke GIS system to provide military-grade ground imaging
            </li>
          </ul>
        </div>
      </JobEntry>
    </>
  );
};

export default WorkExperience;
