import React from 'react'

import { View, StyleSheet } from '@react-pdf/renderer';

import WorkHistory from "../work-history/WorkHistory";
import EducationHistory from "../education-history/EducationHistory";

const styles = StyleSheet.create({
    mainContent: {
        display: "flex",
        flexDirection: "column",

        height: "85vh",
        width: "100%",

        padding: "16px 8px",
    },
});

const MainContent = () => {
    return (
        <View style={styles.mainContent}>
            <WorkHistory />
            <EducationHistory />
        </View>
    )
}

export default MainContent;