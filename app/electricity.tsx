import { FlatList, SafeAreaView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Avatar, Button, Card, H2, Image, Label, Paragraph, ScrollView, Switch, Text, Tooltip, View, XStack, YStack, useTheme } from 'tamagui'
import { ArrowRight } from '@tamagui/lucide-icons'
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import Device from '../components/DeviceCards';
import { CustomSelect } from '../components/CustomSelect';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { Rect, Svg, Text as TextSVG } from 'react-native-svg';
import DeviceEnergy from '../components/ElectricityDeviceCards';



export default function Energy() {
    const { top } = useSafeAreaInsets()
    const theme = useTheme()
    const barData = [
        { value: 250, label: 'Mon', labelTextStyle: { color: "gray", fontWeight: "500" } },
        { value: 500, label: 'Tue', labelTextStyle: { color: "gray", fontWeight: "500" } },
        { value: 745, label: 'Wed', labelTextStyle: { color: "gray", fontWeight: "500" } },
        { value: 320, label: 'Tue', labelTextStyle: { color: "gray", fontWeight: "500" } },
        { value: 600, label: 'Fri', labelTextStyle: { color: "gray", fontWeight: "500" } },
        { value: 256, label: 'Sat', labelTextStyle: { color: "gray", fontWeight: "500" } },
        { value: 300, label: 'Sun', labelTextStyle: { color: "gray", fontWeight: "500" } },
    ];
    const [data, setData] = useState(barData);
    /*     const handleFocus = (dataPoint: any, index: number) => {
            console.log(index)
            // Customize the frontColor based on your requirements
            const updatedData = [...data];
            updatedData[index].labelTextStyle.color = 'white';
            
    
            setData(updatedData);
        }; */




    return (
        <ScrollView>
            <View mt={20} mb={100} px={10} flex={1} alignItems="center" top={top} >

                <Card mx={10} w={'100%'} p={14} borderRadius={10} backgroundColor={"$gray3"} padded padding={25}>
                    <XStack justifyContent="space-between" width={"100%"}>
                        <XStack gap={'$3'} >



                            <YStack>

                                <Text fontSize={14} color={"$gray10"}>{new Date().toDateString()}</Text>
                                <Text fontSize={17} fontWeight={"500"}>Energy Usage</Text>
                                <Text mt={20} fontSize={30} fontWeight={"700"}>10 kWh</Text>
                                <XStack mt={40} gap={'$2'} >
                                    <Ionicons name="trending-down" size={24} color="#1ca655" />
                                    <YStack>
                                        <Text fontSize={18} fontWeight={"700"}>15%</Text>
                                    </YStack>
                                </XStack>
                                <Text fontSize={14} color={"$gray10"}>Less than yesterday</Text>
                            </YStack>
                        </XStack>
                        <YStack justifyContent='space-between'>
                            <Ionicons name="flash-outline" size={24} color="#1ca655" />
                            <Ionicons name="flash" size={100} color="#1ca655" />
                            <View right={-70}>
                                <Ionicons name="flash-outline" size={24} color="#1ca655" />
                            </View>
                        </YStack>
                    </XStack>
                </Card>


                <View flex={1} mx={30} w={'100%'}>
                    <XStack ai="center" mt={30} mb={10} alignItems='center' alignContent='center' justifyContent='space-between'>


                        <Label f={1} fb={0}>
                            <Text alignSelf="flex-start" fontSize={18} fontWeight={"700"}>Electricity Usage</Text>
                        </Label>
                        <CustomSelect />
                    </XStack>
                    <View left={-30}>
                        <BarChart

                            barWidth={28}
                            xAxisThickness={1}
                            xAxisColor={"#787d79"}
                            noOfSections={1}
                            height={150}
                            yAxisOffset={10}
                            showYAxisIndices={false}
                            barBorderRadius={4}
                            frontColor="#222625"
                            isAnimated
                            maxValue={1000}
                            data={data}
                            dashGap={1000}
                            //onPress={handleFocus}

                            focusBarOnPress={true}
                            initialSpacing={10}
                            leftShiftForTooltip={11}
                            leftShiftForLastIndexTooltip={11}
                            focusedBarConfig={
                                {
                                    color: "#1ca655",
                                    width: 30,

                                }
                            }
                            renderTooltip={(item: any, index: number) => (


                                <View bottom={3} bg={"#22332a"} borderRadius={5} padding={4}>
                                    <Paragraph size="$1" lineHeight="$1" >
                                        {item.value}kWh
                                    </Paragraph>


                                </View>



                            )}


                        />
                    </View>

                </View>
                <View flex={1} mx={30} w={'100%'}>
                    <XStack ai="center" mt={30} mb={10} alignItems='center' alignContent='center' justifyContent='space-between'>


                        <Label f={1} fb={0}>
                            <Text alignSelf="flex-start" fontSize={18} fontWeight={"700"}>Device Usage</Text>
                        </Label>

                    </XStack>
                    <View left={-30}>

                    </View>

                </View>
                <YStack w={"100%"} gap={10}>
                    <DeviceEnergy icon_name={"bulb"} icon_name2={"trending-down"} icon_name2_color={"white"} device={"Smart Lamp"} power={"10 kWh"} subtext={"10%"} power_loss={false} />
                    <DeviceEnergy icon_name={"tv-outline"} icon_name2={"trending-up"} icon_name2_color={"red"} device={"Smart TV"} power={"10 kWh"} subtext={"5%"} power_loss={true} />

                </YStack>
            </View>
        </ScrollView>


    )
}
