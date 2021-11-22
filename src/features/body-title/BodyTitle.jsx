import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import "./BodyTitle.css"

const propTypes = {
    text: PropTypes.string.isRequired,
}

const BodyTitle = ({ text }) => {
    return (
        <Fragment>
            <div className={"title"}>
                {text}
            </div>
        </Fragment>
    )
}

BodyTitle.propTypes = propTypes;

export default BodyTitle;