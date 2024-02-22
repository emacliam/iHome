import { FlatList, SafeAreaView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Avatar, Button, Card, H2, TabLayout, TabsTabProps, StackProps, styled, AnimatePresence, Image, Label, Paragraph, ScrollView, SizableText, Switch, Tabs, Text, Tooltip, View, XStack, YStack, useTheme, H5, Slider, Separator } from 'tamagui'
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
      title: "Good Morning",
      calender: "Every Day",
      time: "7:00 AM - 8:00 AM",
      devices: "3",


    },
    {
      title: "House Keeping",
      calender: "Mon, Wed, Fri",
      time: "9:30 AM - 11:30 AM",
      devices: "5",


    },
    {
      title: "Movie Night",
      calender: "Fri",
      time: "10:00 PM - 11:30 AM",
      devices: "3",


    },
    {
      title: "Good Night",
      calender: "Everyday",
      time: "12:00 AM - 12:30 AM",
      devices: "2",


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

                  <SizableText color={currentTab === "tab1" ? "#1ca655" : "white"}>All</SizableText>

                </Tabs.Tab>

                <Tabs.Tab
                  flex={1}
                  unstyled
                  value="tab2"
                  onInteraction={handleOnInteraction}
                >

                  <SizableText color={currentTab === "tab2" ? "#1ca655" : "white"}>Today</SizableText>

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
                  }} data={Invitations} ListFooterComponent={<View />}
                    ListFooterComponentStyle={{ height: 150 }} ItemSeparatorComponent={() => {
                      return (<View width={10}></View>)
                    }} renderItem={({ item, index }) => {
                      return (
                        <Card gap={10}>

                          <XStack paddingHorizontal={20} paddingVertical={10} justifyContent="space-between" alignItems='center' width={"100%"}>
                            <Label f={1} fb={0}>
                              <Text alignSelf="flex-start" fontSize={18} fontWeight={"700"}>{item.title}</Text>
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
                          <Separator />

                          <XStack paddingHorizontal={20} paddingVertical={10} justifyContent="space-between" alignContent="center" alignItems="center" >






                            <View>
                              <XStack gap={10} alignContent="center" alignItems="center" >
                                <Ionicons name={"alarm-outline"} size={24} color={"gray"} />
                                <Text fontSize={14} fontWeight={"500"} color={"$gray11"}>{item.time}</Text>
                              </XStack>
                              <XStack gap={10} alignContent="center" alignItems="center" >

                                <Ionicons name={"calendar-outline"} size={24} color={"gray"} />
                                <Text fontSize={14} fontWeight={"500"} color={"$gray11"}>{item.calender}</Text>


                              </XStack>
                            </View>




                            <XStack gap={10} justifyContent="space-between" alignContent="center" alignItems="center">
                              <Text fontSize={13} fontWeight={"500"} color={"$gray11"} >{item.devices} devices</Text>
                              <Button>
                                <Ionicons name={"arrow-forward"} size={16} color={"white"} />
                              </Button>
                            </XStack>


                          </XStack>
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
                        <Card gap={10}>

                          <XStack paddingHorizontal={20} paddingVertical={10} justifyContent="space-between" alignItems='center' width={"100%"}>
                            <Label f={1} fb={0}>
                              <Text alignSelf="flex-start" fontSize={18} fontWeight={"700"}>{item.title}</Text>
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
                          <Separator />

                          <XStack paddingHorizontal={20} paddingVertical={10} justifyContent="space-between" alignContent="center" alignItems="center" >






                            <View>
                              <XStack gap={10} alignContent="center" alignItems="center" >
                                <Ionicons name={"alarm-outline"} size={24} color={"gray"} />
                                <Text fontSize={14} fontWeight={"500"} color={"$gray11"}>{item.time}</Text>
                              </XStack>
                              <XStack gap={10} alignContent="center" alignItems="center" >

                                <Ionicons name={"calendar-outline"} size={24} color={"gray"} />
                                <Text fontSize={14} fontWeight={"500"} color={"$gray11"}>{item.calender}</Text>


                              </XStack>
                            </View>




                            <XStack gap={10} justifyContent="space-between" alignContent="center" alignItems="center">
                              <Text fontSize={13} fontWeight={"500"} color={"$gray11"} >{item.devices} devices</Text>
                              <Button>
                                <Ionicons name={"arrow-forward"} size={16} color={"white"} />
                              </Button>
                            </XStack>


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
