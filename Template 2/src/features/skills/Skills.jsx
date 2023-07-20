import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

import './Skills.css';
import ContentTitle from '../content-title/ContentTitle';

const PROGRAMMING_LANGUAGES = [
  'Go(lang)',
  'Typescript',
  'Javascript',
  'HTML / CSS',
  'Python',
  'C',
];

const FRAMEWORKS = [
  'React',
  'Angular',
];

const SOFTWARE_AND_TOOLS = [
  'Docker',
  'Kubernetes',
  'PostgreSQL',
  'Git',
  'Prometheus',
  'Grafana',
  'SonarCube',
];

const OPERATING_SYSTEMS = [
  'Windows',
  'Linux',
];

const CI_CD = [
  'Concourse',
  'Jenkins',
  'Nexus',
  'Maven',
  'Artifactory',
];

const OTHER = [
  'Agile / Scrum',
  'Kanban',
  'REST',
  'gRPC',
  'Protobuf',
  'Pub / Sub (MQTT)',
];

const Skills = () => {
  library.add(faChartLine);

  return (
    <div>
      <ContentTitle icon={<FontAwesomeIcon icon="chart-line" />} text="SKILLS" />

      <div className="skill-container">
        <div className="skill-subtitle">
          Languages
        </div>

        {PROGRAMMING_LANGUAGES.map((i) => (
          <div className="skill-text" key={i}>
            {i}
          </div>
        ))}
      </div>

      <div className="skill-container">
        <div className="skill-subtitle">
          Frameworks
        </div>

        {FRAMEWORKS.map((i) => (
          <div className="skill-text" key={i}>
            {i}
          </div>
        ))}
      </div>

      <div className="skill-container">
        <div className="skill-subtitle">
          Software &#38; Tools
        </div>

        {SOFTWARE_AND_TOOLS.map((i) => (
          <div className="skill-text" key={i}>
            {i}
          </div>
        ))}
      </div>

      <div className="skill-container">
        <div className="skill-subtitle">
          Operating Systems
        </div>

        {OPERATING_SYSTEMS.map((i) => (
          <div className="skill-text" key={i}>
            {i}
          </div>
        ))}
      </div>

      <div className="skill-container">
        <div className="skill-subtitle">
          CI / CD
        </div>

        {CI_CD.map((i) => (
          <div className="skill-text" key={i}>
            {i}
          </div>
        ))}
      </div>

      <div className="skill-container">
        <div className="skill-subtitle">
          Other
        </div>

        {OTHER.map((i) => (
          <div className="skill-text" key={i}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
