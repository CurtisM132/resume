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
    courseTitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    institutionDetails: PropTypes.string.isRequired,
    children: PropTypes.elementType
}

const EducationEntry = ({ courseTitle, date, institutionDetails, children }) => {
    return (
        <Fragment>
            <View>
                <View>
                    <Text>{courseTitle}</Text>
                    <Text>{date}</Text>
                </View>
                <Text>{institutionDetails}</Text>
            </View>

            <View>
                {children}
            </View>
        </Fragment>
    )
}

EducationEntry.propTypes = propTypes;

export default EducationEntry;