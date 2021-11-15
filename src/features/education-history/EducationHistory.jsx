import React, { Fragment } from 'react'

import { Text, View, StyleSheet } from '@react-pdf/renderer';

import BodyTitle from "../body-title/BodyTitle";
import EducationEntry from "../education-history/EducationEntry";

const styles = StyleSheet.create({
    subtitle: {
        color: "#DC3522",
        fontSize: "12px",
        fontStyle: "italics",
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "15px",
    },
    skillText: {
        fontSize: "8px",
    },
});

const EducationHistory = () => {
    return (
        <Fragment>
            <BodyTitle text="EDUCATION" />

            <EducationEntry
                courseTitle="BSc Digital andTechnology Solutions (Computer Science)"
                date="09/2019 - Present"
                institutionDetails="University of Warwick" />
        </Fragment>
    )
}

export default EducationHistory;