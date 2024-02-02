import { FlatList, SafeAreaView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Avatar, Button, Card, H2, TabLayout, TabsTabProps, StackProps, styled, AnimatePresence, Image, Label, Paragraph, ScrollView, SizableText, Switch, Tabs, Text, Tooltip, View, XStack, YStack, useTheme, H5, Slider } from 'tamagui'
import { ArrowRight, Droplet, Fan, Hand, HandMetal, Plus, Snowflake, Sun, Trash, Trash2 } from '@tamagui/lucide-icons'
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { RadialSlider } from 'react-native-radial-slider';
import Circular from '../packages/Circular';




export default function Energy() {
    const { top } = useSafeAreaInsets()
    const theme = useTheme()
    const [active, setActive] = useState(false)
    const [speed, setSpeed] = useState(22);
    const [stop, setStop] = useState<boolean>(true)
    const [Brightness, setBrightness] = useState(50)
    const [selectedMode, setSelectedMode] = useState(0)


    const mode = [
        { name: "Cool", icon: Snowflake }, { name: "Heat", icon: Sun }, { name: "Dry", icon: Droplet }, { name: "Auto", icon: Hand },
    ]




    const CustomSliderTrack = styled(Slider.Track, {
        backgroundColor: "#262626",
    })


    useEffect(() => {

    }, [active, selectedMode])






    return (
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={stop} onScroll={() => {
            setStop(true)
        }}>

            <View mt={20} mb={100} px={10} flex={1} alignItems="center" top={top} >

                <Card mx={10} w={'100%'} p={14} borderRadius={10} backgroundColor={"$gray3"} padded padding={25}>
                    <XStack justifyContent="space-between" alignItems='center' width={"100%"}>
                        <Label f={1} fb={0}>
                            <Text alignSelf="flex-start" fontSize={18} fontWeight={"700"}>Device Active</Text>
                        </Label>
                        <XStack gap={'$2'}>

                            <Text alignSelf="flex-start" fontSize={18} fontWeight={"400"}>{active ? 'On' : "Off"}</Text>

                            <Switch backgroundColor={active ? "#1ca655" : '$gray1'} onCheckedChange={() => {
                                active == false ? setActive(true) : setActive(false)

                            }} size={'$3'} >
                                <Switch.Thumb animation="bouncy" backgroundColor={active ? "white" : '$gray10'} />
                            </Switch>
                        </XStack>


                    </XStack>
                </Card>


                <View onTouchStart={() => {
                    setStop(false)
                }} onTouchEnd={() => {
                    setStop(true)
                }} flex={1} mx={30} w={'100%'}>

                    <View ai={"center"} mt={30}>

                        <RadialSlider
                            contentStyle={{
                                shadowColor: "#1ca655",
                                shadowOffset: {
                                    width: 10,
                                    height: 30,
                                },
                                shadowOpacity: 1,
                                shadowRadius: 80.00,

                                elevation: 1,
                                zIndex: -10,

                            }}

                            centerContentStyle={
                                {
                                    borderColor: "gray",
                                    padding: 4,
                                    borderWidth: 1,
                                    borderRadius: 100,
                                    height: 140,
                                    width: 140,
                                    top: 10,
                                    backgroundColor: "#262626"

                                }
                            }
                            variant={'radial-circle-slider'}
                            value={speed}
                            min={0}
                            max={100}

                            markerLineSize={50}
                            onChange={(val) => {
                                setSpeed(val)

                            }}

                            valueStyle={{
                                color: "white",
                                fontWeight: "700",
                            }}


                            style={{
                                shadowColor: "#1ca655",
                                shadowOffset: {
                                    width: 10,
                                    height: 30,
                                },
                                shadowOpacity: 1,
                                shadowRadius: 80.00,

                                elevation: 1,
                                zIndex: -10
                            }}
                            unitStyle={{
                                color: "white",
                                fontWeight: "800",
                                fontSize: 30
                            }}
                            thumbRadius={9}
                            thumbColor={"#1ca655"}
                            sliderWidth={4}
                            sliderTrackColor={"#527853"}
                            linearGradient={[{ offset: '0%', color: '#1ca655' }, { offset: '100%', color: '#1ca655' }]}
                            lineColor={"transparent"}
                            lineSpace={10}

                            markerValue={speed}
                            unit={`°C`}
                            subTitle='Cooling'
                            subTitleStyle={{
                                color: "gray"
                            }}



                            onComplete={() => {
                                setStop(true)
                            }}

                        />
                    </View>

                </View>

                <View flex={1} mx={30} w={'100%'} >
                    <YStack gap={"$3"} >
                        <Label >
                            <Text alignSelf="flex-start" fontSize={18} fontWeight={"700"}>Mode</Text>
                        </Label>

                        <View ai={'center'}>
                            <FlatList
                                ItemSeparatorComponent={() => {
                                    return (<View width={30}></View>)
                                }}
                                scrollEnabled={false}
                                horizontal={true}
                                data={mode}
                                renderItem={({ item, index }) => {
                                    return (
                                        <YStack alignItems='center' flex={1}>
                                            <Button onPress={() => {
                                                setSelectedMode(index)
                                            }} icon={item.icon} scaleIcon={2} width={60} height={60} bg={selectedMode === index ? "#1ca655" : "$gray4"}>
                                            </Button>
                                            <Label >
                                                <Text alignSelf="flex-start" fontSize={16} fontWeight={"300"}>{item.name}</Text>
                                            </Label>
                                        </YStack>
                                    )
                                }}


                            />
                        </View>

                    </YStack>
                </View>
                <View flex={1} mx={30} w={'100%'}>
                    <XStack mt={12} alignItems='center' gap={"$3"} >

                        <Fan color={"$gray12"} />
                        <Label >
                            <Text alignSelf="flex-start" fontSize={18} fontWeight={"700"}>Fan Speed</Text>
                        </Label>
                    </XStack>
                    <Slider size="$6" mt={10} flex={1} defaultValue={[Brightness]} max={100} step={1} onValueChange={(val: any) => {
                        setBrightness(val)
                    }}>
                        <CustomSliderTrack>
                            <Slider.TrackActive bg={"#1ca655"} />
                        </CustomSliderTrack>
                        <Slider.Thumb circular index={0} size={20} borderWidth={"$1.5"} borderColor={"white"} bg={"#1ca655"} />
                    </Slider>
                    <XStack width={"100%"} gap={"$4"} justifyContent='space-between' alignItems='center'>

                        <Label >
                            <Text alignSelf="flex-start" fontSize={18} color={"$gray11"} fontWeight={"500"}>Min</Text>
                        </Label>
                        <View></View>
                        <Label >
                            <Text alignSelf="flex-start" fontSize={18} color={"$gray11"} fontWeight={"500"}>Max</Text>
                        </Label>
                    </XStack>
                </View>
                <View>
                    <XStack w={"100%"} mt={20} alignItems='center' justifyContent='space-between'>


                        <Label >
                            <Text alignSelf="flex-start" fontSize={18} fontWeight={"700"}>Schedule</Text>
                        </Label>
                        <Button icon={Plus} scaleIcon={2} color={"green"} bg={"transparent"}>
                            Add New
                        </Button>
                    </XStack>
                    <XStack w={"100%"} mt={5} alignItems='center' justifyContent='space-between'>
                        <View>
                            <Label >
                                <Text alignSelf="flex-start" fontSize={16} fontWeight={"400"}>09:00 AM - 10:00 AM</Text>
                            </Label>
                            <Text alignSelf="flex-start" color={"$gray10"} fontSize={14} fontWeight={"300"}>Sunday, Monday, Tuesday</Text>
                        </View>




                        <Button icon={Trash2} scaleIcon={2} color={"red"} bg={"transparent"}>

                        </Button>
                    </XStack>
                </View>
                <View>
                    <XStack w={"100%"} mt={20} alignItems='center' justifyContent='space-between'>
                        <Label >
                            <Text alignSelf="flex-start" fontSize={18} fontWeight={"700"}>Details</Text>
                        </Label>
                        <View></View>
                    </XStack>

                    <XStack w={"100%"} mt={10} alignItems='center' justifyContent='space-between'>



                        <Text alignSelf="flex-start" fontSize={16} fontWeight={"400"}>Using Up Power</Text>

                        <Text alignSelf="flex-start" fontSize={16} fontWeight={"700"}>1 kWH</Text>
                    </XStack>
                    <XStack w={"100%"} mt={10} alignItems='center' justifyContent='space-between'>



                        <Text alignSelf="flex-start" fontSize={16} fontWeight={"400"}>Usage This Month</Text>

                        <Text alignSelf="flex-start" fontSize={16} fontWeight={"700"}>35 kWH</Text>
                    </XStack>
                    <XStack w={"100%"} mt={10} alignItems='center' justifyContent='space-between'>



                        <Text alignSelf="flex-start" fontSize={16} fontWeight={"400"}>Total Hours</Text>

                        <Text alignSelf="flex-start" fontSize={16} fontWeight={"700"}>100 hours</Text>
                    </XStack>

                </View>
            </View >
        </ScrollView >


    )
}

const TabsRovingIndicator = ({ active, ...props }: { active?: boolean } & StackProps) => {

    return (

        <YStack
            position="absolute"
            backgroundColor="$color5"
            opacity={0.7}
            animation="100ms"
            enterStyle={{
                opacity: 0,
            }}
            exitStyle={{
                opacity: 0,
            }}
            {...(active && {
                backgroundColor: "#1ca655",
                opacity: 0.6,
            })}
            {...props}
        />

    )

}
