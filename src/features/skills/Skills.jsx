import React, { Fragment } from 'react'

import { Text, View, StyleSheet } from '@react-pdf/renderer';

import BodyTitle from "../body-title/BodyTitle";

const styles = StyleSheet.create({
    subtitle: {
        color: "#DC3522",
        fontSize: "12px",
        fontStyle: "italic",
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "15px",
    },
    skillText: {
        fontSize: "8px",
        marginBottom: "2px",
    },
});

const Skills = () => {
    return (
        <Fragment>
            <BodyTitle text="SKILLS" />

            <View style={styles.textContainer}>
                <View style={styles.subtitle}>
                    <Text>Languages</Text>
                </View>
                <View style={styles.skillText}>
                    <Text>Go (Golang)</Text>
                </View>
                <View style={styles.skillText}>
                    <Text>Javascript</Text>
                </View>
                <View style={styles.skillText}>
                    <Text>HTML / CSS</Text>
                </View>
                <View style={styles.skillText}>
                    <Text>Typescript</Text>
                </View>
                <View style={styles.skillText}>
                    <Text>Python</Text>
                </View>
                <View style={styles.skillText}>
                    <Text>C</Text>
                </View>
            </View>

            <View style={styles.textContainer}>
                <View style={styles.subtitle}>
                    <Text>Frameworks</Text>
                </View>
                <View style={styles.skillText}>
                    <Text>React</Text>
                </View>
                <View style={styles.skillText}>
                    <Text>Angular</Text>
                </View>
            </View>

            <View style={styles.textContainer}>
                <View style={styles.subtitle}>
                    <Text>Software &#38; Tools</Text>
                </View>
                <View style={styles.skillText}>
                    <Text>Git</Text>
                </View>
                <View style={styles.skillText}>
                    <Text>Docker</Text>
                </View>
                <View style={styles.skillText}>
                    <Text>Office</Text>
                </View>
            </View>

            <View style={styles.textContainer}>
                <View style={styles.subtitle}>
                    <Text>CI / CD</Text>
                </View>
                <View style={styles.skillText}>
                    <Text>Jenkins</Text>
                </View>
                <View style={styles.skillText}>
                    <Text>Nexus</Text>
                </View>
                <View style={styles.skillText}>
                    <Text>Maven</Text>
                </View>
            </View>
        </Fragment>
    )
}

export default Skills;