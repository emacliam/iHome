import { FlatList, SafeAreaView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Avatar, Button, Card, H2, TabLayout, TabsTabProps, StackProps, styled, AnimatePresence, Image, Label, Paragraph, ScrollView, SizableText, Switch, Tabs, Text, Tooltip, View, XStack, YStack, useTheme, H5, Slider } from 'tamagui'
import { ArrowRight, Plus, Trash, Trash2 } from '@tamagui/lucide-icons'
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';






export default function Energy() {
    const { top } = useSafeAreaInsets()
    const theme = useTheme()
    const [active, setActive] = useState(false)
    const [stop, setStop] = useState<boolean>(true)

    const Invitations = [
        {
            username: "Darrell Steward",
            email: "Darrell_Steward@gmail.com",
            time: "1:00 PM",
            house: "My House",
            profile: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"

        },
        {
            username: "Brooklyn Simmons",
            email: "Brooklyn_Simmons@gmail.com",
            time: "15 Feb 2023",
            house: "House 2",
            profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2VzfGVufDB8fDB8fHww"

        },
        {
            username: "Darlene Robertson",
            email: "Darlene_Robertson@gmail.com",
            time: "18 Feb 2023",
            house: "House 3",
            profile: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2VzfGVufDB8fDB8fHww"

        }
    ]

    const General = [
        {
            icon_name: "bulb",
            message: "Lamp has been on for 24 hours",
            time: "1:00 PM",
            device: "Smart Lamp",
            profile: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"

        },
        {
            icon_name: "tv-outline",
            message: "Smart TV  has been switched off",
            time: "15 Feb 2023",
            device: "Smart TV",
            profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2VzfGVufDB8fDB8fHww"

        },
        {
            icon_name: "wifi",
            message: "John connected successfully",
            time: "18 Feb 2023",
            device: "Router",
            profile: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2VzfGVufDB8fDB8fHww"

        }
    ]


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

        <View mt={0} px={10} flex={1} alignItems="center" top={top} >

            <View flex={1} mx={30} w={'100%'}>

                <View>
                    <Tabs
                        value={currentTab}
                        onValueChange={setCurrentTab}
                        orientation="horizontal"
                        size="$4"
                        height={"100%"}
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

                                    <SizableText color={currentTab === "tab1" ? "#1ca655" : "white"}>General</SizableText>

                                </Tabs.Tab>

                                <Tabs.Tab
                                    flex={1}
                                    unstyled
                                    value="tab2"
                                    onInteraction={handleOnInteraction}
                                >

                                    <SizableText color={currentTab === "tab2" ? "#1ca655" : "white"}>Invitation</SizableText>

                                </Tabs.Tab>

                            </Tabs.List>

                        </YStack>
                        <AnimatePresence
                            exitBeforeEnter

                        >

                            <AnimatedYStack key={currentTab} animation="100ms" x={0} opacity={1} flex={1}>
                                <Tabs.Content value="tab1" h={"100%"} justifyContent="center">

                                    <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{
                                        marginBottom: 100,
                                        rowGap: 10,
                                        marginTop: 20
                                    }} data={General} ListFooterComponent={<View />}
                                        ListFooterComponentStyle={{ height: 150 }} ItemSeparatorComponent={() => {
                                            return (<View width={10}></View>)
                                        }} renderItem={({ item, index }) => {
                                            return (
                                                <Card padded gap={10}>
                                                    <XStack justifyContent="space-between" alignContent="center" alignItems="center" >


                                                        <Card padding={10} borderRadius={100} backgroundColor={"$gray8"} justifyContent='center' alignContent='center' alignItems='center'>
                                                            <Ionicons name={item.icon_name} size={24} color={active ? "#1ca655" : "white"} />
                                                        </Card>
                                                        <YStack gap={3}>
                                                            <Text fontSize={18} fontWeight={"700"}>{item.device}</Text>
                                                        </YStack>


                                                        <Text fontSize={12} fontWeight={"500"} color={"$gray11"} >{item.time}</Text>


                                                    </XStack>
                                                    <Text alignSelf='center' fontSize={15} fontWeight={"300"} color={"$gray11"}>{item.message}</Text>

                                                </Card>
                                            )
                                        }} />


                                </Tabs.Content>

                                <Tabs.Content value="tab2" h={"100%"} justifyContent="center">

                                    <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{
                                        marginBottom: 100,
                                        rowGap: 10,
                                        marginTop: 20
                                    }} data={Invitations} ListFooterComponent={<View />}
                                        ListFooterComponentStyle={{ height: 150 }} ItemSeparatorComponent={() => {
                                            return (<View width={10}></View>)
                                        }} renderItem={({ item, index }) => {
                                            return (
                                                <Card padded gap={10}>
                                                    <XStack justifyContent="space-between" alignContent="center" alignItems="flex-start" >
                                                        <XStack justifyContent="space-between" alignContent="center" alignItems="flex-start" gap={10}>
                                                            <Avatar circular size={48}>
                                                                <Avatar.Image src={item.profile} />
                                                                <Avatar.Fallback bc="green" />
                                                            </Avatar>

                                                            <YStack gap={3}>
                                                                <Text fontSize={18} fontWeight={"700"}>{item.username}</Text>
                                                                <Text fontSize={14} fontWeight={"500"} color={"$gray11"}  >{item.email}</Text>
                                                            </YStack>
                                                        </XStack>

                                                        <Text fontSize={12} fontWeight={"500"} color={"$gray11"} >{item.time}</Text>


                                                    </XStack>
                                                    <Text fontSize={15} fontWeight={"300"} color={"$gray11"}>Darrell Steward has extended an invitation to join "{item.house}"</Text>
                                                    <XStack gap={15}>
                                                        <Button flex={1} color={"white"} bg={"#1ca655"} fontWeight={"600"}>
                                                            Accept
                                                        </Button>
                                                        <Button flex={1} color={"white"} borderColor={"#1ca655"} fontWeight={"600"} variant="outlined">
                                                            Reject
                                                        </Button>
                                                    </XStack>
                                                </Card>
                                            )
                                        }} />


                                </Tabs.Content>

                            </AnimatedYStack>

                        </AnimatePresence>

                    </Tabs>
                </View>

            </View>

        </View>



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
