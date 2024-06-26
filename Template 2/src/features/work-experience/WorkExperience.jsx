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
            <li>As part of the founding outbound sales talent, I designed, created, and oversee WANDR&apos;s outbound strategies
              (email, LinkedIn, and content creation) in the B2B SaaS market to create a sustainable new revenue source to
              scale operations.</li>
            <li>Wrote and continue to improve (via metrics analysis) segmented multi-channel Lemlist sequences for lead outreach.</li>
            <li>Develop pipelines with Clay to find applicable leads, enrich them, and generate personalised insights and compliments using AI.</li>
            <li>Utilise LinkedIn Sales Navigator, Apollo.io, and Crunchbase to uncover new target companies.</li>
            <li>Track lead and deal progress in Pipedrive CRM.</li>
            <li>Generated $294,000 in additional revenue (no quota).</li>
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
          {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>
              <i>Yoti Sign (eSignature SaaS / DocuSign competitor)</i>
            </div>
            <div className="project-date">
              06/2022 - 12/2023
            </div>
          </div> */}

          <ul>
            <li>
              Fostered partnerships with Fortune 500 clients such as Facebook, TikTok, and Lloyds Bank to build 2-way
              communication lines and facilitate regular feedback sessions for continuous improvement.
            </li>
            <li>
              Exceeded performance KPIs (productivity output) by 125% for the last 3 quarters.
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
              <i>Cybels - Trusted Communities (R&#38;D)</i>
            </div>
            <div className="project-date">
              03/2021 - 06/2022
            </div>
          </div>

          <ul>
            <li>
              Developed a unique PKIaaS (SaaS) solution for end-to-end Air Force cyber-protection to reduce terrorist attacks and sabotage.
            </li>
            <li>
              Conducted project demonstrations to Air Force, BAE, and Boeing senior officials to secure further project funding, required to stop
              the project from terminating.
            </li>
            <li>
              Additionally assumed the role of Lead Frontend Engineer (for 4 months), which included providing mentorship and task
              delegation to Junior colleagues.
            </li>
          </ul>
        </div>

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
              Collaborated with stakeholders to architect and develop a software solution required for the continued use of 60
              active military Chinook helicopters, meeting all deadlines and budget constraints.
            </li>
            <li>
              Led meetings, gathered requirements, and managed military-grade test accreditation as part of senior-level
              responsibilities.
            </li>
          </ul>
        </div>

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
              Simplifies the configuration of geographically dispersed military simulators to promote cross-department
              military training.
            </li>
            <li>
              Conducted customer product demonstrations and feedback sessions every month to team members and project stakeholders.
            </li>
            <li>
              Led end-to-end system demonstrations for senior military personnel at an annual trade show (I/ITSEC)
              leading to increased project and company visibility/reputation in the market.
            </li>
          </ul>
        </div>

        <div className="project-details">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <i>Facilities for Air Combat Training (FACT)</i>
            </div>
            <div className="project-date">
              01/2020 - 06/2020
              <br />
              09/2017 - 02/2019
            </div>
          </div>

          <ul>
            <li>
              Developed a leading SaaS platform to simplify the planning and execution of military flight simulator training scenarios
              for the Air Force, addressing market needs overshadowed by complex legacy systems.
            </li>
            <li>
              Lead face-to-face customer product demonstrations every month to team members and project stakeholders.
            </li>
            <li>
              Exceeded performance KPIs (productivity output) by 150% in each bi-weekly release cycle throughout the project duration.
            </li>
          </ul>
        </div>
      </JobEntry>
    </>
  );
};

export default WorkExperience;
