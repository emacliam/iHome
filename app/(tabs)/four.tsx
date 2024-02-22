import { FlatList, SafeAreaView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Avatar, Button, Card, H2, TabLayout, TabsTabProps, StackProps, styled, AnimatePresence, Image, Label, Paragraph, ScrollView, SizableText, Switch, Tabs, Text, Tooltip, View, XStack, YStack, useTheme, H5, Slider } from 'tamagui'
import { ArrowRight, Plus, Trash, Trash2 } from '@tamagui/lucide-icons'
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';






export default function Energy() {
    const { top } = useSafeAreaInsets()
    const theme = useTheme()


    return (

        <View mt={0} px={10} flex={1} alignItems="center" top={top} >

            <View flex={1} mx={30} w={'100%'}>


                <XStack justifyContent="space-between" alignContent="center" alignItems="flex-start" >
                    <XStack justifyContent="space-between" alignContent="center" alignItems="flex-start" gap={15}>
                        <Avatar circular size={50}>
                            <Avatar.Image src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" />
                            <Avatar.Fallback bc="green" />
                        </Avatar>

                        <YStack gap={3}>
                            <Text fontSize={18} fontWeight={"700"}>Panashe</Text>
                            <Text fontSize={14} fontWeight={"500"} color={"$gray11"}  >panashe@gmail.com</Text>
                        </YStack>
                    </XStack>

                </XStack>
                <View>
                    <XStack w={"100%"} mt={20} alignItems='center' justifyContent='space-between'>
                        <Label >
                            <Text alignSelf="flex-start" fontSize={18} fontWeight={"700"}>General</Text>
                        </Label>
                        <View></View>
                    </XStack>

                    <XStack w={"100%"} mt={10} alignItems='center' justifyContent='space-between'>

                        <XStack gap={15} mt={15} alignItems='center' justifyContent='space-between'>
                            <Ionicons name={"home"} size={20} color={"gray"} />
                            <Text alignSelf="flex-start" fontSize={16} fontWeight={"400"} color={"$gray12"}>Home Management</Text>
                        </XStack>

                        <Ionicons name={"chevron-forward"} size={24} color={"gray"} />
                    </XStack>
                    <XStack w={"100%"} mt={20} alignItems='center' justifyContent='space-between'>

                        <XStack gap={15} alignItems='center' justifyContent='space-between'>
                            <Ionicons name={"cog"} size={20} color={"gray"} />
                            <Text alignSelf="flex-start" fontSize={16} fontWeight={"400"} color={"$gray12"}>Settings</Text>
                        </XStack>

                        <Ionicons name={"chevron-forward"} size={24} color={"gray"} />
                    </XStack>
                    <XStack w={"100%"} mt={20} alignItems='center' justifyContent='space-between'>

                        <XStack gap={15} alignItems='center' justifyContent='space-between'>
                            <Ionicons name={"chatbox-ellipses-sharp"} size={20} color={"gray"} />
                            <Text alignSelf="flex-start" fontSize={16} fontWeight={"400"} color={"$gray12"}>Message Center</Text>
                        </XStack>

                        <Ionicons name={"chevron-forward"} size={24} color={"gray"} />
                    </XStack>
                    <XStack w={"100%"} mt={20} alignItems='center' justifyContent='space-between'>

                        <XStack gap={15} alignItems='center' justifyContent='space-between'>
                            <Ionicons name={"help-circle-sharp"} size={20} color={"gray"} />
                            <Text alignSelf="flex-start" fontSize={16} fontWeight={"400"} color={"$gray12"}>FAQ & Feedback</Text>
                        </XStack>

                        <Ionicons name={"chevron-forward"} size={24} color={"gray"} />
                    </XStack>


                </View>



            </View>

        </View>



    )
}


