import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

interface Props {
    result: string;
}

export default function CalculatorResults({ result }: Props) {
    return (
        <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{result || 'Result'}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    resultContainer: {
        width: '100%',
        height: '20%',
        marginTop: 20,
        marginBottom: 20,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    resultText: {
        textAlign: 'center',
        margin: 'auto',
        fontSize: 30,

        marginRight: 10,
        marginLeft: 10,
    },
});
