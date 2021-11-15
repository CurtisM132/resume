import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    title: {
        color: "black",
        fontSize: "16px",
        borderBottom: "1px solid black",
        marginBottom: "5px",
    },
});

const propTypes = {
    text: PropTypes.string.isRequired,
}

const BodyTitle = ({ text }) => {
    return (
        <Fragment>
            <View style={styles.title}>
                <Text>{text}</Text>
            </View>
        </Fragment>
    )
}

BodyTitle.propTypes = propTypes;

export default BodyTitle;