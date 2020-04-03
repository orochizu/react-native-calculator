import React, { useState } from 'react';

import { StyleSheet, View } from 'react-native';

import CalculatorResults from './CalculatorResults';
import CalculatorKeyboard from './CalculatorKeyboard';

export default function CalculatorView() {
    const [result, setResult] = useState<string>('');

    return (
        <View style={styles.container}>
            <CalculatorResults result={result} />
            <CalculatorKeyboard setValue={setResult} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyboardContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '80%',
        width: '100%',
    },
    numericKeyboard: {
        width: '75%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row-reverse',
        alignSelf: 'center',
    },
    operationsKeyboard: {
        width: '75%',
        display: 'flex',
        flexWrap: 'wrap',
        alignSelf: 'center',
    },
});
