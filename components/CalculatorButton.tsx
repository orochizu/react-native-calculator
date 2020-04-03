import React from 'react';

import {
    GestureResponderEvent,
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface Props {
    children: React.ReactNode;

    onPress: (event: GestureResponderEvent) => void;
    onLongPress?: (event: GestureResponderEvent) => void;
}

export default function CalculatorButton({
    onPress,
    onLongPress,
    children,
}: Props) {
    return (
        <View style={styles.calculatorBtnContainer}>
            <TouchableHighlight
                underlayColor={'#f9f9f9'}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.calculatorBtn}
            >
                <Text style={styles.calculatorText}>{children}</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    calculatorBtnContainer: {
        width: '33%',

        padding: 5,
    },
    calculatorBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        aspectRatio: 1,
        borderRadius: 100,

        backgroundColor: '#ffffff',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        elevation: 8,
    },
    calculatorText: {
        textAlign: 'center',
        margin: 'auto',
        fontSize: 30,
    },
});
