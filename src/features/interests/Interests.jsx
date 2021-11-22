import React from 'react'

import "./Interests.css"
import BodyTitle from "../body-title/BodyTitle";


const INTERESTS = [
    "Reading",
    "Weightlifting",
    "Archery",
    "Hiking",
    "Productivity"
]

const Interests = () => {
    return (
        <div>
            <BodyTitle text="INTERESTS" />
            
            {INTERESTS.map((i) => (
                <div className={"skill-text"}>
                    {i}
                </div>
            ))}
        </div>
    )
}

export default Interests;