import React, { Fragment } from 'react'

import { Text, View, StyleSheet } from '@react-pdf/renderer';

import BodyTitle from "../body-title/BodyTitle";

const styles = StyleSheet.create({
    textContainer: {
        marginBottom: "10px",
    },
    flexRow: {
        display: "flex",
        flexDirection: "row",
        fontSize: "8px",
        marginBottom: "2px",
    },
});

const Contact = () => {
    return (
        <Fragment>
            <View style={styles.textContainer}>
                <BodyTitle text="CONTACT" />

                <View style={styles.flexRow}>
                    <Text>example@email.com</Text>
                </View>
                <View style={styles.flexRow}>
                    <Text>N / A</Text>
                </View>
                <View style={styles.flexRow}>
                    <Text>Coventry, United Kingdom</Text>
                </View>
                <View style={styles.flexRow}>
                    <Text>LinkedIn Profile</Text>
                </View>
            </View>
        </Fragment>
    )
}

export default Contact;