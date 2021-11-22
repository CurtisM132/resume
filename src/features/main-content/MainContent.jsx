import React from 'react'

import "./MainContent.css"
import WorkHistory from "../work-history/WorkHistory";
import EducationHistory from "../education-history/EducationHistory";

const MainContent = () => {
    return (
        <div className={"mainContent"}>
            <div style={{ marginBottom: "20px" }} >
                <WorkHistory />
            </div>
            <EducationHistory />
        </div >
    )
}

export default MainContent;