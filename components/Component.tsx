import React from 'react';

import { Text } from 'react-native';

interface Props {
    text: string;
}

export default function Hello(props: Props) {
    return <Text>Hello, {props.text}</Text>;
}
