import React from 'react';

import "./Skills.css";
import BodyTitle from "../body-title/BodyTitle";


const PROGRAMMING_LANGUAGES = [
    "Go (Golang)",
    "Javascript",
    "HTML / CSS",
    "Typescript",
    "Python",
    "C",
];

const FRAMEWORKS = [
    "React",
    "Angular",
];

const SOFTWARE_AND_TOOLS = [
    "Git",
    "Docker",
    "Jira",
    "BitBucket",
    "Microsoft Office",
];

const CI_CD = [
    "Jenkins",
    "Nexus",
    "Maven",
];

const Skills = () => {
    return (
        <div>
            <BodyTitle text="SKILLS" />

            <div className={"skill-container"}>
                <div className={"skill-subtitle"}>
                    Languages
                </div>

                {PROGRAMMING_LANGUAGES.map((i) => (
                    <div className={"skill-text"}>
                        {i}
                    </div>
                ))}
            </div>

            <div className={"skill-container"}>
                <div className={"skill-subtitle"}>
                    Frameworks
                </div>

                {FRAMEWORKS.map((i) => (
                    <div className={"skill-text"}>
                        {i}
                    </div>
                ))}
            </div>

            <div className={"skill-container"}>
                <div className={"skill-subtitle"}>
                    Software &#38; Tools
                </div>

                {SOFTWARE_AND_TOOLS.map((i) => (
                    <div className={"skill-text"}>
                        {i}
                    </div>
                ))}
            </div>

            <div className={"skill-container"}>
                <div className={"skill-subtitle"}>
                    CI / CD
                </div>

                {CI_CD.map((i) => (
                    <div className={"skill-text"}>
                        {i}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;