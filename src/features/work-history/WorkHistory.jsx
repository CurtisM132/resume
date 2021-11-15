import React, { Fragment } from 'react'

import { Text, View, StyleSheet } from '@react-pdf/renderer';

import BodyTitle from "../body-title/BodyTitle";
import JobEntry from "../work-history/JobEntry";

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

const WorkHistory = () => {
    return (
        <Fragment>
            <BodyTitle text="WORK HISTORY" />

            <JobEntry
                jobTitle="Software Engineer"
                date="09/2017 - Present"
                employerDetails="Thales UK" />
        </Fragment>
    )
}

export default WorkHistory;