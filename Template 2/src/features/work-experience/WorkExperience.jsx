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
        jobTitle="Business Developer"
        date="12/2023 - Present"
        employerDetails="WANDR"
      >
        <div className="project-details">
          <ul>
            <li>
              Created an automated system to identify potential customers, enrich them with personal and contact information,
              then contact them with AI personalised emails to generate a new sustainable revenue source.
            </li>
          </ul>
        </div>
      </JobEntry>

      <hr className="line-break" />

      <JobEntry
        jobTitle="Backend Engineer"
        date="03/2022 - 12/2023"
        employerDetails="Yoti"
      >
        {/* <hr className="line-break" /> */}

        <div className="project-details">
          {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <b>Yoti Sign (eSignature Platform)</b>
            </div>
            <div className="project-date">
              03/2022 - 12/2023
            </div>
          </div> */}

          <ul>
            <li>
              Developed and maintained 39 Go(lang) Microservices to create a high-performance alternative to DocuSign, with both a website
              and external API.
            </li>
            <li>
              Designed and implemented an efficient entity-specific event storage system with Go(lang), CQRS, Protobuf, and PostgreSQL, cutting
              event query times by 10x and lowering bounce rate by 7.3%.
            </li>
            <li>
              Implemented a Redis-based distributed caching system for faster responses to historically sluggish requests.
            </li>
            <li>
              Deployed with Docker; Orchestrated with Kubernetes; Data persistence via PostgreSQL and AWS S3; Protobuf and gRPC/REST for synchronous communication;
              NSQ for asynchronous; Metrics captured via Prometheus and visualised in Grafana.
            </li>
          </ul>
        </div>
      </JobEntry>

      <hr className="line-break" />

      <JobEntry
        jobTitle="Software Engineer"
        date="09/2017 - 06/2022"
        employerDetails="Thales"
      >
        {/* <hr className="line-break" /> */}

        <div className="project-details">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <i>Cybels - Trusted Communities (R&#38;D)</i>
            </div>
            <div className="project-date">
              03/2021 - 06/2022
            </div>
          </div>

          <ul>
            <li>
              Architected 9 Go(lang) Microservices, developed and maintained the other 23 Go(lang) Microservices to create an end-to-end
              cyber protection system for the RAF.
            </li>
            <li>
              Designed and implemented an NFC sub-system, then demonstrated it to senior RAF, BAE, and Boeing officials to secure R&D funding.
            </li>
            <li>
              Additionally worked, for a 3 month period, as the Lead Frontend Engineer developing the project&apos;s React SPAs.
              Included mentorship and task delegation for Junior colleagues.
            </li>
          </ul>
        </div>

        {/* <hr className="line-break" /> */}

        <div className="project-details">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <i>GMPS MML</i>
            </div>
            <div className="project-date">
              06/2020 - 03/2021
            </div>
          </div>

          <ul>
            <li>
              Designed and developed a C DLL solution to support the operations of 60 active military Chinook helicopters,
              meeting all deadlines and budget constraints.
            </li>
            <li>
              Led meetings, gathered requirements, and managed military-grade test accreditation as part of senior-level responsibilities.
            </li>
          </ul>
        </div>

        {/* <hr className="line-break" /> */}

        <div className="project-details">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <i>Nuada</i>
            </div>
            <div className="project-date">
              02/2019 - 08/2019
            </div>
          </div>

          <ul>
            <li>
              Developed Angular SPAs to streamline configuration and setup of military flight simulators, incorporating
              Material Design and utilizing JSON messages via RESTful APIs.
            </li>
            <li>
              Created Java Microservices deployed on Docker Swarm integrated with a RabbitMQ broker for efficient asynchronous communication.
            </li>
          </ul>
        </div>

        {/* <hr className="line-break" /> */}

        <div className="project-details">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <i>Facilities for Air Combat Training (FACT)</i>
            </div>
            <div className="project-date">
              As a Consultant
              <br />
              01/2020 - 06/2020
              <br />
              09/2017 - 02/2019
            </div>
          </div>

          <ul>
            <li>
              Developed a map-centric (OpenLayers/Cesium) Angular SPA to simplify the planning and running
              of military flight simulator training scenarios. Occasional development work on the C++ backend.
            </li>
            <li>
              Established connections to the C++ backend through RESTful APIs and WebSockets, prioritising performance for
              handling up to 3000 moving entities; Spearheaded the migration to Electron.
            </li>
            <li>
              Researched, designed, and implemented a bespoke GIS map solution by load-balancing Geoservers with Apache HTTP Server.
            </li>
          </ul>
        </div>
      </JobEntry>
    </>
  );
};

export default WorkExperience;
