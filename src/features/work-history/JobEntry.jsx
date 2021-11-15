import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet } from '@react-pdf/renderer';

import BodyTitle from "../body-title/BodyTitle";

const styles = StyleSheet.create({
    textContainer: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "15px",
    },
    skillText: {
        fontSize: "8px",
    },
});

const propTypes = {
    jobTitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    employerDetails: PropTypes.string.isRequired,
    children: PropTypes.elementType
}

const JobEntry = ({ jobTitle, date, employerDetails, children }) => {
    return (
        <Fragment>
            <View>
                <View>
                    <Text>{jobTitle}</Text>
                    <Text>{date}</Text>
                </View>
                <Text>{employerDetails}</Text>
            </View>

            <View>
                {children}
            </View>
        </Fragment>
    )
}

JobEntry.propTypes = propTypes;

export default JobEntry;