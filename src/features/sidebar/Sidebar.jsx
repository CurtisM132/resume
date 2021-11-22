import React from 'react';

import "./SideBar.css";
import Contact from "../contact/Contact";
import Skills from "../skills/Skills";
import Interests from "../interests/Interests";


const Sidebar = () => {
    return (
        <div className={"sidebar"}>
            <Contact />
            <Skills />
            <Interests />
        </div>
    )
}

export default Sidebar;