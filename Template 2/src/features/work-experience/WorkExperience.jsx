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
            <li>Proactively build relationships in the B2B SaaS market through outbound strategies (email, LinkedIn, and content creation)</li>
            <li>Utilize LinkedIn Sales Navigator, Apollo.io, and Crunchbase to uncover new companies to target</li>
            <li>Develop pipelines with Clay to find applicable leads, enrich them, and generate personalised insights and compliments using AI</li>
            <li>Wrote and continue to improve (via metrics analysis) segmented multi-channel Lemlist sequences for lead outreach</li>
            <li>Track progress in Pipedrive CRM</li>
            <li>Generated $294,000 in additional revenue (no quota)</li>
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
              Developed partnerships with Fortune 500 clients such as Facebook, TikTok, and Lloyds Bank for regular feedback sessions
            </li>
            <li>
              Exceeded performance KPIs by 125% for the last 3 quarters
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
              Developed a unique PKIaaS solution for comprehensive Air Force cyber protection
            </li>
            <li>
              Conducted project demonstrations for Air Force, BAE, and Boeing senior officials to secure funding
            </li>
            <li>
              Assumed role of Lead Frontend Engineer (for 4 months), providing mentorship and delegating tasks to Junior colleagues
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
              Collaborated with stakeholders to architect a solution required for the continued use of 60 active military
              Chinook helicopters
            </li>
            <li>
              Successfully delivered project on time and within budget constraints.
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
              Conducted customer product demonstrations and feedback sessions every month
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
              Developed a leading SaaS platform for Air Force training, addressing market needs overshadowed by complex legacy systems
            </li>
            <li>
              Lead face-to-face customer product demonstrations every month
            </li>
            <li>
              Exceeded performance KPIs by 150% in each bi-weekly release cycle throughout the project duration
            </li>
          </ul>
        </div>
      </JobEntry>
    </>
  );
};

export default WorkExperience;
