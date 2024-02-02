import React, { useEffect, useState } from 'react';
import { Avatar, Button, Card, H2, Image, Paragraph, ScrollView, Switch, Text, View, XStack, YStack, useTheme } from 'tamagui'
import { Ionicons } from '@expo/vector-icons';
import { IconProps } from '@tamagui/helpers-icon';
import { string } from 'yargs';
import { Link } from 'expo-router';

export default function Device(props: { icon_name: any, room: string, device: string, subtext?: string | undefined, subtext2?: string | undefined, link: any }) {
    const [active, setActive] = useState(false)
    useEffect(() => {

    }, [active])
    return (
        <Link href={props.link} asChild>
            <Card size="$4" flex={1} padded>

                <XStack justifyContent="space-between" alignItems='center'>
                    <Card padding={10} borderRadius={100} backgroundColor={"$gray8"} justifyContent='center' alignContent='center' alignItems='center'>
                        <Ionicons name={props.icon_name} size={24} color={active ? "#1ca655" : "white"} />
                    </Card>
                    <YStack alignItems='center' justifyContent='center' alignContent='center'>
                        <Paragraph fontSize={20}>{props.subtext}</Paragraph>
                        <Text fontSize={15} color={"$gray10"}>{props.subtext2}</Text>
                    </YStack>
                </XStack>
                <View mt={20}>
                    <Text fontSize={15} color={"$gray10"}>{props.room}</Text>
                    <Text fontSize={18} fontWeight={"300"}>{props.device}</Text>

                </View>
                <Card.Footer mt={8} >
                    <Switch backgroundColor={active ? "#1ca655" : '$gray1'} onCheckedChange={() => {
                        active == false ? setActive(true) : setActive(false)

                    }} size={'$3'} >
                        <Switch.Thumb animation="bouncy" backgroundColor={active ? "white" : '$gray10'} />
                    </Switch>
                </Card.Footer>

            </Card>
        </Link>

    )
}

