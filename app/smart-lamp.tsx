import { FlatList, SafeAreaView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Avatar, Button, Card, H2, TabLayout, TabsTabProps, StackProps, styled, AnimatePresence, Image, Label, Paragraph, ScrollView, SizableText, Switch, Tabs, Text, Tooltip, View, XStack, YStack, useTheme, H5, Slider } from 'tamagui'
import { ArrowRight, Plus, Trash, Trash2 } from '@tamagui/lucide-icons'
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { RadialSlider } from 'react-native-radial-slider';
import Circular from '../packages/Circular';




export default function Energy() {
    const { top } = useSafeAreaInsets()
    const theme = useTheme()
    const [active, setActive] = useState(false)
    const [speed, setSpeed] = useState(20);
    const [stop, setStop] = useState<boolean>(true)
    const [Brightness, setBrightness] = useState(50)
    const [speed2, setSpeed2] = useState(10);

    const colorList = [
        { "offset": "0%", "color": "#0000FF" },
        { "offset": "1%", "color": "#0302FA" },
        { "offset": "2%", "color": "#0605F6" },
        { "offset": "3%", "color": "#0908F1" },
        { "offset": "4%", "color": "#0C0BEC" },
        { "offset": "5%", "color": "#0F0EE7" },
        { "offset": "6%", "color": "#1213E3" },
        { "offset": "7%", "color": "#1516DE" },
        { "offset": "8%", "color": "#1819D9" },
        { "offset": "9%", "color": "#1B1CD4" },
        { "offset": "10%", "color": "#1E1FCF" },
        { "offset": "11%", "color": "#2223CA" },
        { "offset": "12%", "color": "#2526C5" },
        { "offset": "13%", "color": "#2829C0" },
        { "offset": "14%", "color": "#2B2CBB" },
        { "offset": "15%", "color": "#2E2FB6" },
        { "offset": "16%", "color": "#3132B1" },
        { "offset": "17%", "color": "#3435AC" },
        { "offset": "18%", "color": "#3738A7" },
        { "offset": "19%", "color": "#3A3BA2" },
        { "offset": "20%", "color": "#3D3E9E" },
        { "offset": "21%", "color": "#404199" },
        { "offset": "22%", "color": "#434594" },
        { "offset": "23%", "color": "#46478F" },
        { "offset": "24%", "color": "#494A8A" },
        { "offset": "25%", "color": "#4C4D85" },
        { "offset": "26%", "color": "#4F5080" },
        { "offset": "27%", "color": "#52537B" },
        { "offset": "28%", "color": "#555676" },
        { "offset": "29%", "color": "#585871" },
        { "offset": "30%", "color": "#5B5E6C" },
        { "offset": "31%", "color": "#5E6167" },
        { "offset": "32%", "color": "#616462" },
        { "offset": "33%", "color": "#64675D" },
        { "offset": "34%", "color": "#676A58" },
        { "offset": "35%", "color": "#6A6D53" },
        { "offset": "36%", "color": "#6D7050" },
        { "offset": "37%", "color": "#70734B" },
        { "offset": "38%", "color": "#737646" },
        { "offset": "39%", "color": "#767941" },
        { "offset": "40%", "color": "#797C3C" },
        { "offset": "41%", "color": "#7C7F37" },
        { "offset": "42%", "color": "#7F8232" },
        { "offset": "43%", "color": "#82852D" },
        { "offset": "44%", "color": "#858828" },
        { "offset": "45%", "color": "#888B23" },
        { "offset": "46%", "color": "#8B8E1E" },
        { "offset": "47%", "color": "#8E9119" },
        { "offset": "48%", "color": "#919414" },
        { "offset": "49%", "color": "#94970F" },
        { "offset": "50%", "color": "#979A0A" },   // Yellow
        { "offset": "51%", "color": "#9A9D05" },
        { "offset": "52%", "color": "#9D9F00" },
        { "offset": "53%", "color": "#A0A300" },
        { "offset": "54%", "color": "#A3A600" },
        { "offset": "55%", "color": "#A6A900" },
        { "offset": "56%", "color": "#A9AC00" },
        { "offset": "57%", "color": "#ACAF00" },
        { "offset": "58%", "color": "#AFA200" },
        { "offset": "59%", "color": "#B2A500" },
        { "offset": "60%", "color": "#B5A800" },
        { "offset": "61%", "color": "#B8AB00" },
        { "offset": "62%", "color": "#BBAE00" },
        { "offset": "63%", "color": "#BEB100" },
        { "offset": "64%", "color": "#C1B400" },
        { "offset": "65%", "color": "#C4B700" },
        { "offset": "66%", "color": "#C7BA00" },
        { "offset": "67%", "color": "#CABD00" },
        { "offset": "68%", "color": "#CDC000" },
        { "offset": "69%", "color": "#D0C300" },
        { "offset": "70%", "color": "#D3C600" },
        { "offset": "71%", "color": "#D6C900" },
        { "offset": "72%", "color": "#D9CC00" },
        { "offset": "73%", "color": "#DCCF00" },
        { "offset": "74%", "color": "#DFD200" },
        { "offset": "75%", "color": "#E2D500" },
        { "offset": "76%", "color": "#E5D800" },
        { "offset": "77%", "color": "#E8DB00" },
        { "offset": "78%", "color": "#EBDE00" },
        { "offset": "79%", "color": "#EEE100" },
        { "offset": "80%", "color": "#F1E400" },
        { "offset": "81%", "color": "#F4E700" },
        { "offset": "82%", "color": "#F7EA00" },
        { "offset": "83%", "color": "#FAED00" },
        { "offset": "84%", "color": "#FDF000" },
        { "offset": "85%", "color": "#FFFF00" },    // Yellow (repeated for smooth transition)
        { "offset": "86%", "color": "#FFFF30" },
        { "offset": "87%", "color": "#FFFF60" },
        { "offset": "88%", "color": "#FFFF90" },
        { "offset": "89%", "color": "#FFFFBF" },
        { "offset": "90%", "color": "#FFFFEF" },    // White
        { "offset": "91%", "color": "#F7F7F7" },
        { "offset": "92%", "color": "#EEEEEE" },
        { "offset": "93%", "color": "#0000FF" },    // Blue
        { "offset": "94%", "color": "#800080" },    // Purple
        { "offset": "95%", "color": "#FF0000" },    // Red
        { "offset": "96%", "color": "#FFA500" },    // Orange
        { "offset": "97%", "color": "#FFFF00" },    // Yellow
        { "offset": "98%", "color": "#008000" },    // Green
        { "offset": "99%", "color": "#008000" },
        { "offset": "100%", "color": "#00FFFF" },    // Gray
    ]


    const colorList2 = [

        { "offset": "0%", "color": "#808080" },   // Gray
        { "offset": "1%", "color": "#818181" },
        { "offset": "2%", "color": "#828282" },
        { "offset": "3%", "color": "#838383" },
        { "offset": "4%", "color": "#848484" },
        { "offset": "5%", "color": "#858585" },
        { "offset": "6%", "color": "#868686" },
        { "offset": "7%", "color": "#878787" },
        { "offset": "8%", "color": "#888888" },
        { "offset": "9%", "color": "#898989" },
        { "offset": "10%", "color": "#8A8A8A" },
        { "offset": "11%", "color": "#8B8B8B" },
        { "offset": "12%", "color": "#8C8C8C" },
        { "offset": "13%", "color": "#8D8D8D" },
        { "offset": "14%", "color": "#8E8E8E" },
        { "offset": "15%", "color": "#8F8F8F" },
        { "offset": "16%", "color": "#909090" },
        { "offset": "17%", "color": "#919191" },
        { "offset": "18%", "color": "#929292" },
        { "offset": "19%", "color": "#939393" },
        { "offset": "20%", "color": "#949494" },
        { "offset": "21%", "color": "#959595" },
        { "offset": "22%", "color": "#969696" },
        { "offset": "23%", "color": "#979797" },
        { "offset": "24%", "color": "#989898" },
        { "offset": "25%", "color": "#999999" },
        { "offset": "26%", "color": "#9A9A9A" },
        { "offset": "27%", "color": "#9B9B9B" },
        { "offset": "28%", "color": "#9C9C9C" },
        { "offset": "29%", "color": "#9D9D9D" },
        { "offset": "30%", "color": "#9E9E9E" },
        { "offset": "31%", "color": "#9F9F9F" },
        { "offset": "32%", "color": "#A0A0A0" },
        { "offset": "33%", "color": "#A1A1A1" },
        { "offset": "34%", "color": "#A2A2A2" },
        { "offset": "35%", "color": "#A3A3A3" },
        { "offset": "36%", "color": "#A4A4A4" },
        { "offset": "37%", "color": "#A5A5A5" },
        { "offset": "38%", "color": "#A6A6A6" },
        { "offset": "39%", "color": "#A7A7A7" },
        { "offset": "40%", "color": "#A8A8A8" },
        { "offset": "41%", "color": "#A9A9A9" },
        { "offset": "42%", "color": "#AAAAAA" },
        { "offset": "43%", "color": "#ABABAB" },
        { "offset": "44%", "color": "#ACACAC" },
        { "offset": "45%", "color": "#ADADAD" },
        { "offset": "46%", "color": "#AEAEAE" },
        { "offset": "47%", "color": "#AFAFAF" },
        { "offset": "48%", "color": "#B0B0B0" },
        { "offset": "49%", "color": "#B1B1B1" },
        { "offset": "50%", "color": "#B2B2B2" },
        { "offset": "51%", "color": "#B3B3B3" },
        { "offset": "52%", "color": "#B4B4B4" },
        { "offset": "53%", "color": "#B5B5B5" },
        { "offset": "54%", "color": "#B6B6B6" },
        { "offset": "55%", "color": "#B7B7B7" },
        { "offset": "56%", "color": "#B8B8B8" },
        { "offset": "57%", "color": "#B9B9B9" },
        { "offset": "58%", "color": "#BABABA" },
        { "offset": "59%", "color": "#BBBBBB" },
        { "offset": "60%", "color": "#BCBCBC" },
        { "offset": "61%", "color": "#BDBDBD" },
        { "offset": "62%", "color": "#BEBEBE" },
        { "offset": "63%", "color": "#BFBFBF" },
        { "offset": "64%", "color": "#C0C0C0" },
        { "offset": "65%", "color": "#C1C1C1" },
        { "offset": "66%", "color": "#C2C2C2" },
        { "offset": "67%", "color": "#C3C3C3" },
        { "offset": "68%", "color": "#C4C4C4" },
        { "offset": "69%", "color": "#C5C5C5" },
        { "offset": "70%", "color": "#C6C6C6" },
        { "offset": "71%", "color": "#C7C7C7" },
        { "offset": "72%", "color": "#C8C8C8" },
        { "offset": "73%", "color": "#C9C9C9" },
        { "offset": "74%", "color": "#CACACA" },
        { "offset": "75%", "color": "#CBCBCB" },
        { "offset": "76%", "color": "#CCCCCC" },
        { "offset": "77%", "color": "#CDCDCD" },
        { "offset": "78%", "color": "#CECECE" },
        { "offset": "79%", "color": "#CFCFCF" },
        { "offset": "80%", "color": "#D0D0D0" },
        { "offset": "81%", "color": "#D1D1D1" },
        { "offset": "82%", "color": "#D2D2D2" },
        { "offset": "83%", "color": "#D3D3D3" },
        { "offset": "84%", "color": "#D4D4D4" },
        { "offset": "85%", "color": "#D5D5D5" },
        { "offset": "86%", "color": "#D6D6D6" },
        { "offset": "87%", "color": "#D7D7D7" },
        { "offset": "88%", "color": "#D8D8D8" },
        { "offset": "89%", "color": "#D9D9D9" },
        { "offset": "90%", "color": "#DADADA" },
        { "offset": "91%", "color": "#DBDBDB" },
        { "offset": "92%", "color": "#DCDCDC" },
        { "offset": "93%", "color": "#DDDDDD" },
        { "offset": "94%", "color": "#DEDEDE" },
        { "offset": "95%", "color": "#DFDFDF" },
        { "offset": "96%", "color": "#E0E0E0" },
        { "offset": "97%", "color": "#E1E1E1" },
        { "offset": "98%", "color": "#E2E2E2" },
        { "offset": "99%", "color": "#E3E3E3" },
        { "offset": "100%", "color": "#E4E4E4" } // Light Gray to White


    ]


    const CustomSliderTrack = styled(Slider.Track, {
        backgroundColor: "#262626",
    })


    useEffect(() => {

    }, [active])

    const [tabState, setTabState] = useState<{
        currentTab: string
        intentAt: TabLayout | null
        activeAt: TabLayout | null
        prevActiveAt: TabLayout | null
    }>({

        activeAt: null,

        currentTab: 'tab1',

        intentAt: null,

        prevActiveAt: null,

    })
    const setCurrentTab = (currentTab: string) => setTabState({ ...tabState, currentTab })

    const setIntentIndicator = (intentAt: any) => setTabState({ ...tabState, intentAt })

    const setActiveIndicator = (activeAt: any) => setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt })

    const { activeAt, intentAt, prevActiveAt, currentTab } = tabState

    const direction = (() => {

        if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {

            return 0

        }

        return activeAt.x > prevActiveAt.x ? -1 : 1

    })()

    const handleOnInteraction: TabsTabProps['onInteraction'] = (type, layout) => {

        if (type === 'select') {

            setActiveIndicator(layout)

        } else {

            setIntentIndicator(layout)

        }

    }




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


                <View flex={1} mx={30} w={'100%'}>

                    <View mt={30}>


                        <Tabs
                            value={currentTab}
                            onValueChange={setCurrentTab}
                            orientation="horizontal"
                            size="$4"
                            height={400}
                            flexDirection="column"
                            activationMode="manual"
                            backgroundColor="$colorTransparent"
                            borderRadius="$4"
                        >

                            <YStack>

                                <AnimatePresence>

                                    {intentAt && (

                                        <TabsRovingIndicator
                                            width={intentAt.width}
                                            height={2}
                                            x={intentAt.x}
                                            bottom={0}
                                        />

                                    )}

                                </AnimatePresence>

                                <AnimatePresence>

                                    {activeAt && (

                                        <TabsRovingIndicator
                                            theme="active"
                                            active
                                            width={activeAt.width}
                                            height={2}
                                            x={activeAt.x}
                                            bottom={0}

                                        />

                                    )}

                                </AnimatePresence>

                                <Tabs.List
                                    disablePassBorderRadius
                                    loop={false}
                                    aria-label="Manage your account"
                                    borderBottomLeftRadius={0}
                                    borderBottomRightRadius={0}
                                    paddingBottom="$1.5"
                                    borderColor="$color3"
                                    borderBottomWidth="$0.5"
                                    backgroundColor="transparent"
                                >

                                    <Tabs.Tab
                                        flex={1}
                                        unstyled
                                        value="tab1"
                                        onInteraction={handleOnInteraction}

                                    >

                                        <SizableText color={currentTab === "tab1" ? "#1ca655" : "white"}>White</SizableText>

                                    </Tabs.Tab>

                                    <Tabs.Tab
                                        flex={1}
                                        unstyled
                                        value="tab2"
                                        onInteraction={handleOnInteraction}
                                    >

                                        <SizableText color={currentTab === "tab2" ? "#1ca655" : "white"}>Color</SizableText>

                                    </Tabs.Tab>

                                </Tabs.List>

                            </YStack>
                            <AnimatePresence
                                exitBeforeEnter

                            >

                                <AnimatedYStack key={currentTab} animation="100ms" x={0} opacity={1} flex={1}>
                                    <Tabs.Content value="tab1" h={300} justifyContent="center">

                                        <XStack onTouchStart={() => {
                                            setStop(false)
                                        }} onTouchEnd={() => {
                                            setStop(true)
                                        }} justifyContent='center'>

                                            <RadialSlider
                                                contentStyle={{
                                                    shadowColor: colorList2[speed2].color,
                                                    shadowOffset: {
                                                        width: 10,
                                                        height: 30,
                                                    },
                                                    shadowOpacity: 1,
                                                    shadowRadius: 80.00,

                                                    elevation: 1,
                                                    zIndex: -10
                                                }}

                                                style={{
                                                    shadowColor: colorList2[speed2].color,
                                                    shadowOffset: {
                                                        width: 10,
                                                        height: 30,
                                                    },
                                                    shadowOpacity: 1,
                                                    shadowRadius: 80.00,

                                                    elevation: 1,
                                                    zIndex: -10
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
                                                value={speed2}
                                                min={0}
                                                max={100}

                                                markerLineSize={50}
                                                onChange={(val) => {
                                                    setSpeed2(val)
                                                }}
                                                thumbColor={colorList2[speed2].color}
                                                valueStyle={{
                                                    color: "white",
                                                    fontWeight: "700",
                                                    display: "none"

                                                }}
                                                unitStyle={{
                                                    color: "white",
                                                    fontWeight: "800",
                                                    fontSize: 30
                                                }}
                                                thumbRadius={16}
                                                sliderWidth={25}
                                                unit={`${Brightness} %`}
                                                subTitle='Brightness'
                                                subTitleStyle={{
                                                    color: "gray"
                                                }}
                                                linearGradient={colorList2}
                                                sliderTrackColor={"#45474B"}

                                                onComplete={() => {
                                                    setStop(true)
                                                }}
                                                isHideMarkerLine={true}
                                                isHideLines={true}
                                            />
                                        </XStack>


                                    </Tabs.Content>

                                    <Tabs.Content value="tab2" h={300} justifyContent="center">

                                        <XStack onTouchStart={() => {
                                            setStop(false)
                                        }} onTouchEnd={() => {
                                            setStop(true)
                                        }} justifyContent='center'>

                                            <RadialSlider
                                                contentStyle={{
                                                    shadowColor: colorList[speed].color,
                                                    shadowOffset: {
                                                        width: 10,
                                                        height: 30,
                                                    },
                                                    shadowOpacity: 1,
                                                    shadowRadius: 80.00,

                                                    elevation: 1,
                                                    zIndex: -10
                                                }}

                                                style={{
                                                    shadowColor: colorList[speed].color,
                                                    shadowOffset: {
                                                        width: 10,
                                                        height: 30,
                                                    },
                                                    shadowOpacity: 1,
                                                    shadowRadius: 80.00,

                                                    elevation: 1,
                                                    zIndex: -10
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
                                                thumbColor={colorList[speed].color}
                                                valueStyle={{
                                                    color: "white",
                                                    fontWeight: "700",
                                                    display: "none"

                                                }}
                                                unitStyle={{
                                                    color: "white",
                                                    fontWeight: "800",
                                                    fontSize: 30
                                                }}
                                                thumbRadius={16}
                                                sliderWidth={25}
                                                unit={`${Brightness} %`}
                                                subTitle='Brightness'
                                                subTitleStyle={{
                                                    color: "gray"
                                                }}
                                                linearGradient={colorList}
                                                sliderTrackColor={"#45474B"}

                                                onComplete={() => {
                                                    setStop(true)
                                                }}
                                                isHideMarkerLine={true}
                                                isHideLines={true}
                                            />
                                        </XStack>


                                    </Tabs.Content>

                                </AnimatedYStack>

                            </AnimatePresence>

                        </Tabs>
                    </View>

                </View>
                <View flex={1} mx={30} w={'100%'}>
                    <XStack width={"100%"} gap={"$4"} justifyContent='space-between' alignItems='center'>
                        <Ionicons name="sunny" size={24} color="white" />
                        <Label >
                            <Text alignSelf="flex-start" fontSize={18} color={"$gray11"} fontWeight={"500"}>0 %</Text>
                        </Label>
                        <Slider size="$6" flex={1} defaultValue={[Brightness]} max={100} step={1} onValueChange={(val: any) => {
                            setBrightness(val)
                        }}>
                            <CustomSliderTrack>
                                <Slider.TrackActive bg={"#1ca655"} />
                            </CustomSliderTrack>
                            <Slider.Thumb circular index={0} size={20} borderWidth={"$1.5"} borderColor={"white"} bg={"#1ca655"} />
                        </Slider>
                        <Label >
                            <Text alignSelf="flex-start" fontSize={18} color={"$gray11"} fontWeight={"500"}>100 %</Text>
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
                                <Text alignSelf="flex-start" fontSize={16} fontWeight={"400"}>08:00 AM - 09:00 AM</Text>
                            </Label>
                            <Text alignSelf="flex-start" color={"$gray10"} fontSize={14} fontWeight={"300"}>Monday - Friday</Text>
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
            </View>
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
const AnimatedYStack = styled(YStack, {

    variants: {

        isLeft: { true: { x: -25, opacity: 0 } },

        isRight: { true: { x: 25, opacity: 0 } },

        defaultFade: { true: { opacity: 0 } },

    } as const,

})