import React, { Fragment } from 'react'

import "./Skills.css"
import BodyTitle from "../body-title/BodyTitle";


const Skills = () => {
    return (
        <Fragment>
            <BodyTitle text="SKILLS" />

            <div className={"textContainer"}>
                <div className={"subtitle"}>
                    Languages
                </div>
                <div className={"skillText"}>
                    Go (Golang)
                </div>
                <div className={"skillText"}>
                    Javascript
                </div>
                <div className={"skillText"}>
                    HTML / CSS
                </div>
                <div className={"skillText"}>
                    Typescript
                </div>
                <div className={"skillText"}>
                    Python
                </div>
                <div className={"skillText"}>
                    C
                </div>
            </div>

            <div className={"textContainer"}>
                <div className={"subtitle"}>
                    Frameworks
                </div>
                <div className={"skillText"}>
                    React
                </div>
                <div className={"skillText"}>
                    Angular
                </div>
            </div>

            <div className={"textContainer"}>
                <div className={"subtitle"}>
                    Software &#38; Tools
                </div>
                <div className={"skillText"}>
                    Git
                </div>
                <div className={"skillText"}>
                    Docker
                </div>
                <div className={"skillText"}>
                    Office
                </div>
            </div>

            <div className={"textContainer"}>
                <div className={"subtitle"}>
                    CI / CD
                </div>
                <div className={"skillText"}>
                    Jenkins
                </div>
                <div className={"skillText"}>
                    Nexus
                </div>
                <div className={"skillText"}>
                    Maven
                </div>
            </div>
        </Fragment>
    )
}

export default Skills;