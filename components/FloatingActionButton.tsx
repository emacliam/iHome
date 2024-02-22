import { Dimensions, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, XStack } from 'tamagui';

import {
    BlurView,
    VibrancyView,
    BlurViewProps,
} from '@react-native-community/blur';
import React, { useEffect, useState } from 'react';
import Animated, {
    Easing,
    Extrapolation,
    FadeIn,
    interpolate,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withDelay,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import { Link } from 'expo-router';

const FloatingActionButton = () => {
    const firstValue = useSharedValue(30);
    const secondValue = useSharedValue(30);
    const thirdValue = useSharedValue(30);
    const isOpen = useSharedValue(false);
    const progress = useDerivedValue(() =>
        isOpen.value ? withTiming(1) : withTiming(0),
    );
    const height = Dimensions.get('window').height
    const [containerHeight, setContainerHeight] = useState(0)
    useEffect(() => {

    }, [containerHeight])

    const handlePress = () => {
        const config = {
            easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
            duration: 500,
        };
        if (isOpen.value) {
            firstValue.value = withTiming(30, config);
            secondValue.value = withDelay(50, withTiming(30, config));
            thirdValue.value = withDelay(100, withTiming(30, config));
        } else {
            firstValue.value = withDelay(200, withSpring(110));
            secondValue.value = withDelay(100, withSpring(100));
            thirdValue.value = withSpring(110);
        }
        isOpen.value = !isOpen.value;
        if (containerHeight == 0) {
            setContainerHeight(height)
        } else {
            setContainerHeight(0)
        }
    };

    const firstIcon = useAnimatedStyle(() => {
        const scale = interpolate(
            firstValue.value,
            [30, 110],
            [0, 1],
            Extrapolation.CLAMP,
        );

        return {
            right: 80,
            bottom: 100,
            transform: [{ scale: scale }],
        };
    });

    const secondIcon = useAnimatedStyle(() => {
        const scale = interpolate(
            secondValue.value,
            [30, 100],
            [0, 1],
            Extrapolation.CLAMP,
        );

        return {
            bottom: 150,
            right: -35,
            transform: [{ scale: scale }],
        };
    });

    const thirdIcon = useAnimatedStyle(() => {
        const scale = interpolate(
            thirdValue.value,
            [30, 110],
            [0, 1],
            Extrapolation.CLAMP,
        );

        return {
            bottom: 100,
            right: -150,
            transform: [{ scale: scale }],
        };
    });

    const plusIcon = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${progress.value * 45}deg` }],
        };
    });

    return (

        <XStack position="absolute" bottom={0} h={containerHeight} justifyContent={"center"} right={0} left={0} >

            <BlurView
                blurType={"dark"}
                blurAmount={1}
                reducedTransparencyFallbackColor={'gray'}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            />

            <XStack justifyContent='center'   >
                <Animated.View style={[styles.contentContainer2, firstIcon]}>
                    <View style={styles.iconContainer} >
                        <Ionicons name="add" size={25} />
                        <Text fontSize={15} fontWeight={"300"} color={"$gray8"}>Scene</Text>
                    </View>
                </Animated.View>
                <Animated.View style={[styles.contentContainer2, secondIcon]}>
                    <Link href="/scan" asChild>
                        <View style={styles.iconContainer}>

                            <Ionicons name="scan" size={25} />
                            <Text fontSize={15} fontWeight={"300"} color={"$gray8"}>Scan</Text>
                        </View>
                    </Link>

                </Animated.View>
                <Animated.View style={[styles.contentContainer2, thirdIcon]}>
                    <Link href="/add-device" asChild>
                        <View style={styles.iconContainer}>
                            <Ionicons name="add" size={25} />
                            <Text fontSize={15} fontWeight={"300"} color={"$gray8"}>Device</Text>
                        </View>
                    </Link>
                </Animated.View>
                <Pressable
                    style={styles.contentContainer}
                    onPress={() => {
                        handlePress();
                    }}>
                    <Animated.View style={[styles.iconContainer2, plusIcon]}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="add" size={30} color={'white'} />
                        </View>
                    </Animated.View>
                </Pressable>
            </XStack>


        </XStack>

    );
};

export default FloatingActionButton;

const styles = StyleSheet.create({

    contentContainer: {
        backgroundColor: '#1ca655',
        shadowColor: "#1ca655",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        position: 'absolute',
        bottom: 30,
        right: -30,
        borderRadius: 50,
    },
    contentContainer2: {
        backgroundColor: 'white',
        elevation: 24,
        position: 'absolute',
        bottom: 30,

        borderRadius: 50,
    },
    iconContainer: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer2: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 50,
        height: 50,
    },
});