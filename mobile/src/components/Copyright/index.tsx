import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../theme';

export function Copyright() {
    return (
        <View>
            <Text style={styles.text}>
                Feito com ♥ pela Rocketseat
            </Text>
        </View>
    )
}

