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
        jobTitle="Software Engineer"
        date="06/2022 - Present"
        employerDetails="Yoti"
      >
        <hr className="line-break" />

        <div className="project-details" style={{ marginBottom: '25px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <b>Yoti Sign</b>
            </div>
            <div className="project-date">
              06/2022 - Present
            </div>
          </div>

          <ul>
            <li>
              A market-leading eSignature SaaS platform (DocuSign competitor)
            </li>
            <li>
              Built relationships with senior leaders with our Fortune 500 company clients (e.g., Facebook, TikTok,
              Lloyds Bank) to facilitate regular feedback sessions
            </li>
            <li>
              Exceeded performance KPIs by 125% for the past 3 quarters
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
              A one-of-a-kind Public Key Infrastructure as a Service (PKIaaS) solution for end-to-end (software, personnel, hardware) cyber
              protection to increase the RAF&apos;s trust of their systems, supply chains, and fighter jets
            </li>
            <li>
              Spearheaded the development of vital features, then demonstrated them to high-ranking RAF, BAE, and Boeing senior officials,
              to secure further project funding
            </li>
            <li>
              Additionally worked, for a 3 month period, as the Lead Frontend Engineer (included mentorship and task delegation for Junior team members)
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
              required for the continued use of 60 active military service Chinook helicopters. Delivered successfully within
              strict time and budget constraints.
            </li>
            <li>
              High degree of project responsibility (i.e., meeting runner, requirements capturing, military-level
              test accreditation, etc)
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
              SaaS solution to simplify the configuration of geographically dispersed military simulators to promote cross-department
              military collaboration and training efforts
            </li>
            <li>
              Lead product demonstrations every month to gain feedback and show our customers how the pain points they previously
              raised were getting rectified
            </li>
            <li>
              Performed end-to-end system demonstrations for senior military personnel at an annual trade show (I/ITSEC), highlighting the
              positive impacts the system could have for training their new pilots
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
              A SaaS product that went on to become the defacto system for air force training, filling a gap in the market dominated,
              at the time, by hard-to-use and slow legacy products
            </li>
            <li>
              Lead face-to-face product demonstrations every month to highlight new key features of the system to our customer,
              capturing feedback in the process
            </li>
            <li>
              Exceeded performance KPIs by 150% every release cycle (2 weeks) leading to the best performance review in the team
            </li>
          </ul>
        </div>
      </JobEntry>
    </>
  );
};

export default WorkExperience;
