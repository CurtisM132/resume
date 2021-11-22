import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAt, faPhoneAlt, faHome, faLink } from '@fortawesome/free-solid-svg-icons';

import "./Contact.css"
import BodyTitle from "../body-title/BodyTitle";


const Contact = () => {
    library.add(faAt);
    library.add(faPhoneAlt);
    library.add(faHome);
    library.add(faLink);

    return (
        <div>
            <BodyTitle text="CONTACT" />

            <div className={"row-container"}>
                <FontAwesomeIcon icon={"at"} style={{ marginTop: "2px" }} />
                <div>curtisastonmartin@hotmail.co.uk</div>
            </div>
            <div className={"row-container"}>
                <FontAwesomeIcon icon={"phone-alt"} />
                <div>07400 282166</div>
            </div>
            <div className={"row-container"}>
                <FontAwesomeIcon icon={"home"} />
                <div>Reading, Berkshire</div>
            </div>
            <div className={"row-container"}>
                <FontAwesomeIcon icon={"link"} />
                <div>www.linkedin.com/in/curtismartin3</div>
            </div>
        </div>
    )
}

export default Contact;