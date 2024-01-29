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
        jobTitle="Business Developer"
        date="12/2023 - Present"
        employerDetails="WANDR"
      >
        <div className="project-details">
          <ul>
            <li>Proactively identify, cultivate, and maintain relationships with clients in the B2B SaaS market</li>
            <li>Educate clients on UX design and articulate the value proposition of WANDR&apos;s services</li>
            <li>Execute outbound sales strategies (cold calling, email campaigns, and LinkedIn)</li>
            <li>Source new leads using tools (Sales Nav, Apollo) and ICPs</li>
            <li>Track lead progress in CRM (Pipedrive) and capture metrics to guide outbound strategies</li>
          </ul>
        </div>
      </JobEntry>

      <hr className="line-break" />

      <JobEntry
        jobTitle="Backend Engineer"
        date="06/2022 - 12/2023"
        employerDetails="Yoti"
      >
        <div className="project-details">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <b>Yoti Sign (eSignature SaaS / DocuSign competitor)</b>
            </div>
            <div className="project-date">
              06/2022 - 12/2023
            </div>
          </div>

          <ul>
            <li>
              Built relationships with our Fortune 500 clients (e.g., Facebook, TikTok, Lloyds Bank) to
              facilitate regular feedback sessions
            </li>
            <li>
              Exceeded performance KPIs by 125% for the past 3 quarters
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
              One-of-a-kind PKIaaS solution for end-to-end (software, hardware, personnel) air force cyber protection
            </li>
            <li>
              Spearheaded the development and demonstrated to high-ranking RAF, BAE, and Boeing senior officials to secure project funding
            </li>
            <li>
              Lead Frontend Engineer (for 3 months) (included mentorship and task delegation for Junior colleagues)
            </li>
          </ul>
        </div>

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
              Directly collaborated with stakeholders to architect a solution required for the continued use of 60 active military
              Chinook helicopters. Delivered successfully within strict time and budget constraints.
            </li>
            <li>
              Senior-level responsibilities (meeting runner, requirements capturing, military-grade test accreditation, etc)
            </li>
          </ul>
        </div>

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
              Simplifies the configuration of geographically dispersed military simulators to promote cross-department
              military training
            </li>
            <li>
              Led customer product demonstrations and feedback sessions every month
            </li>
            <li>
              Led end-to-end system demonstrations for senior military personnel at an annual trade show (I/ITSEC)
            </li>
          </ul>
        </div>

        <div className="project-details">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <b>Facilities for Air Combat Training (FACT)</b>
            </div>
            <div className="project-date">
              01/2020 - 06/2020
              <br />
              09/2017 - 02/2019
            </div>
          </div>

          <ul>
            <li>
              Defacto SaaS platform for air force training, filling a gap in the market dominated by hard-to-use
              and slow legacy products
            </li>
            <li>
              Lead face-to-face customer product demonstrations every month
            </li>
            <li>
              Exceeded performance KPIs by 150% every release cycle (2 weeks)
            </li>
          </ul>
        </div>
      </JobEntry>
    </>
  );
};

export default WorkExperience;
