import React from 'react';
import PropTypes from 'prop-types';

import "./ContentTitle.css"

const propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string.isRequired,
}

const ContentTitle = ({ icon, text }) => {
    return (
        <div className={"content-title-container"}>
            <div className={"content-title-icon"}>
                {icon}
            </div>
            <div className={"content-title-text"}>
                {text}
            </div>
        </div>
    )
}

ContentTitle.propTypes = propTypes;

export default ContentTitle;