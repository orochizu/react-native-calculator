import React, { Dispatch, SetStateAction } from 'react';

import { StyleSheet, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { numericButtons, operationButtons } from '../constants';

import CalculatorButton from './CalculatorButton';

interface Props {
    setValue: Dispatch<SetStateAction<string>>;
}

export default function CalculatorKeyboard({ setValue }: Props) {
    return (
        <View style={styles.keyboardContainer}>
            <View style={styles.numericKeyboard}>
                {numericButtons.map((number) => (
                    <CalculatorButton
                        key={number}
                        onPress={() => setValue((prev) => prev.concat(number))}
                    >
                        {number}
                    </CalculatorButton>
                ))}
                <CalculatorButton
                    onPress={() =>
                        setValue((prev) => {
                            try {
                                return (eval(prev) as number).toString();
                            } catch (e) {
                                return 'ERROR';
                            }
                        })
                    }
                >
                    =
                </CalculatorButton>
            </View>
            <View style={styles.operationsKeyboard}>
                <CalculatorButton
                    onPress={() =>
                        setValue((prev) => prev.slice(0, prev.length - 1))
                    }
                    onLongPress={() => setValue('')}
                >
                    <Ionicons name={'md-backspace'} size={30} />
                </CalculatorButton>
                {operationButtons.map((operation) => (
                    <CalculatorButton
                        key={operation}
                        onPress={() =>
                            setValue((prev) => prev.concat(operation))
                        }
                    >
                        {operation}
                    </CalculatorButton>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
