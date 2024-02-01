import React, { useEffect, useState } from 'react';
import { Avatar, Button, Card, H2, Image, Paragraph, ScrollView, Switch, Text, View, XStack, YStack, useTheme } from 'tamagui'
import { Ionicons } from '@expo/vector-icons';
import { IconProps } from '@tamagui/helpers-icon';
import { string } from 'yargs';

export default function DeviceEnergy(props: { icon_name: any, icon_name2: any, icon_name2_color: string, device: string, power: string, subtext?: string | undefined, subtext2?: string | undefined, power_loss: boolean }) {
    const [active, setActive] = useState(false)
    useEffect(() => {

    }, [active])
    return (
        <Card size="$4" w={"100%"} padded>

            <XStack justifyContent="space-between" alignItems='center' >

                <XStack gap={10} alignItems='center' >
                    <Card padding={10} borderRadius={100} backgroundColor={"$gray8"} justifyContent='center' alignContent='center' alignItems='center'>
                        <Ionicons name={props.icon_name} size={24} color={active ? "#1ca655" : "white"} />
                    </Card>
                    <View>
                        <Text fontSize={15} color={"$gray10"}>{props.device}</Text>
                        <Text fontSize={18} fontWeight={"300"}>{props.power}</Text>
                    </View>

                </XStack>
                <XStack gap={3} >
                    <Ionicons name={props.icon_name2} size={24} color={props.icon_name2_color} />
                    <Text fontSize={15} color={"white"}>{props.subtext}</Text>
                </XStack>

            </XStack>

            {props.power_loss && <Card.Footer mt={20} >

                <Card bg={"$red5"} w={"100%"} padded>
                    <XStack gap={10}>
                        <Ionicons name={"warning"} size={24} color='red' />

                        <Paragraph color={"red"}>
                            Energy use increases by {props.subtext}
                        </Paragraph>
                    </XStack>
                </Card>

            </Card.Footer>
            }

        </Card>
    )
}

