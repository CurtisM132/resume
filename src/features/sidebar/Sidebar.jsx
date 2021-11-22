import React from 'react'

import "./SideBar.css"
import Contact from "../contact/Contact"
import Skills from "../skills/Skills"


const Sidebar = () => {
    return (
        <div className={"sidebar"}>
            <Contact />
            <Skills />
        </div>
    )
}

export default Sidebar;