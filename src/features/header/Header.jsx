import React, { Fragment } from 'react'

import { Text, View, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "column",

        minHeight: "10vh",
        width: "100%",
        padding: "25px 16px",

        backgroundColor: "#333333",
        color: "white",
    },
    name: {
        fontSize: "30px",
        fontWeight: "bold",
        marginBottom: "14px",
    },
    tag: {
        fontSize: "10px",
    },
});

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.name}>
                <Text>
                    Curtis Martin
                </Text>
            </View>
            <View style={styles.tag}>
                <Text>
                    Amazing tag line that makes HR managers want to hire you immediately.\\The tag line is aligned with the bottom of the picture to the right, so if you have\\multiple lines it fills the space to your name from the bottom. You might want to\\introduce manual line breaks to make this look nicer then simply filling up the lines.
                </Text>
            </View>
        </View>
    )
}

export default Header;