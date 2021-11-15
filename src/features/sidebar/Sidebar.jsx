import React from 'react'

import { View, StyleSheet } from '@react-pdf/renderer';

import Contact from "../contact/Contact"
import Skills from "../skills/Skills"

const styles = StyleSheet.create({
    sidebar: {
        display: "flex",
        flexDirection: "column",

        height: "85vh",
        width: "175px",

        padding: "16px 16px",

        backgroundColor: "#BFBFBF",
    },
});

const Sidebar = () => {
    return (
        <View style={styles.sidebar}>
            <Contact />
            <Skills />
        </View>
    )
}

export default Sidebar;