import React, { Fragment, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAt, faPhoneAlt, faAddressCard, faLink } from '@fortawesome/free-solid-svg-icons';

import "./Contact.css"
import BodyTitle from "../body-title/BodyTitle";


const Contact = () => {
    library.add(faAt);
    library.add(faPhoneAlt);
    library.add(faAddressCard);
    library.add(faLink);

    return (
        <Fragment>
            <div className={"textContainer"}>
                <BodyTitle text="CONTACT" />

                <div className={"flexRow"}>
                    <FontAwesomeIcon icon={"at"} />
                    <div>curtisastonmartin@hotmail.co.uk</div>
                </div>
                <div className={"flexRow"}>
                    <FontAwesomeIcon icon={"phone-alt"} />
                    <div>07400 282166</div>
                </div>
                <div className={"flexRow"}>
                    <FontAwesomeIcon icon={"address-card"} />
                    <div>Reading, Berkshire</div>
                </div>
                <div className={"flexRow"}>
                    <FontAwesomeIcon icon={"link"} />
                    <div>www.linkedin.com/in/curtismartin3</div>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact;