import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { FontAwesome as Icon, Ionicons } from '@expo/vector-icons';
import FloatingActionButton from '../FloatingActionButton';

type Props = BottomTabBarButtonProps & {
    bgColor?: string;
};

export const TabBarAdvancedButton: React.FC<Props> = ({
    bgColor,
    ...props
}) => (
    <FloatingActionButton />
);

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 75,
        alignItems: 'center',
    },
    background: {
        position: 'absolute',
        top: 0,
    },
    button: {
        top: -22.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        borderColor: "#00000000",
        borderWidth: 6,
        backgroundColor: '#1ca655',
        shadowColor: "#1ca655",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    buttonIcon: {
        fontSize: 24,
        color: '#F6F7EB'
    }
});


{/* <View
    style={styles.container}
    pointerEvents="box-none"
>

    <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}
    >
        <Ionicons
            name="add"
            style={styles.buttonIcon}
        />
    </TouchableOpacity>
    <FloatingActionButton />
</View> */}