import { FlatList, Pressable, SafeAreaView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Avatar, Button, Card, H2, Image, Paragraph, ScrollView, Switch, Text, View, XStack, YStack, useTheme } from 'tamagui'
import { ArrowRight } from '@tamagui/lucide-icons'
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import Device from '../../components/DeviceCards';
import { Link } from 'expo-router';
import { VibrancyView } from "@react-native-community/blur";



export default function TabOneScreen() {
  const { top } = useSafeAreaInsets()
  const theme = useTheme()
  const [selectedDevice, setSelectedDevice] = useState(0)
  const devices = [
    Device({ icon_name: "snow", room: "Living Room", device: "Air Conditioner", subtext: "20°C", link: "air-conditioner" }),
    Device({ icon_name: "bulb", room: "Living Room", device: "Smart Lamp", link: "smart-lamp" }),
    Device({ icon_name: "tv-outline", room: "Living Room", device: "Smart TV", link: "smart-lamp" }),
    Device({ icon_name: "wifi", room: "Living Room", device: "Router", subtext: "3", subtext2: "Users", link: "smart-lamp" })
  ]

  return (

    <View mt={20} px={10} flex={1} alignItems="center" top={top} >



      <XStack mx={10} justifyContent="space-between" width={"100%"}>
        <YStack>
          <Text fontSize={22} fontWeight={"900"}>👋 Hello, Panashe</Text>
          <Text fontSize={15} color={"$gray12"}>Welcome back to home</Text>
        </YStack>
        <Avatar circular size={48}>
          <Avatar.Image src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" />
          <Avatar.Fallback bc="green" />
        </Avatar>
      </XStack>




      <Card mx={10} w={'100%'} mt={30} p={14} backgroundColor={"$gray3"}>
        <XStack justifyContent="space-between" alignItems='center' alignContent='center' width={"100%"}>
          <XStack gap={'$3'} >
            <Card w={50} h={50} backgroundColor={"$gray8"} justifyContent='center' alignContent='center' alignItems='center'>
              <Ionicons name="flash-outline" size={24} color="white" />
            </Card>
            <YStack>
              <Text fontSize={18} fontWeight={"700"}>10 kWh</Text>
              <Text fontSize={14} color={"$gray10"}>Electricity usage this day</Text>
            </YStack>
          </XStack>

          <Link href="/electricity" asChild>
            <Pressable style={{
              backgroundColor: "#1ca655",
              width: 70,
              height: 50,
              justifyContent: "center",
              alignContent: 'center',
              alignItems: "center",
              borderRadius: 10
            }} >
              <Ionicons style={{ alignSelf: 'center' }} name={"arrow-forward"} size={24} color="white" />
            </Pressable>

          </Link>

        </XStack>
      </Card>



      <View flex={1} mx={30} w={'100%'}>
        <XStack mt={10} mb={10}>
          <Text alignSelf="flex-start" fontSize={18} fontWeight={"700"}>Devices</Text>
        </XStack>

        <FlatList ItemSeparatorComponent={() => {
          return (<View width={10}></View>)
        }} horizontal={true} showsHorizontalScrollIndicator={false} data={["Living Room", "Kitchen", "Bathroom", "Dining"]} renderItem={({ item, index }) => {
          return (
            <Button onPress={() => {
              setSelectedDevice(index)
            }} color={selectedDevice === index ? "white" : "$gray10"} backgroundColor={selectedDevice === index ? "#1ca655" : "$gray4"} height={30} borderRadius={"$12"}>{item}</Button>
          )
        }}>
        </FlatList>

        <View flex={50} mt={10} w={'100%'}>
          <FlatList contentContainerStyle={{ rowGap: 10 }} columnWrapperStyle={{ gap: 10 }} ListFooterComponent={<View />}
            ListFooterComponentStyle={{ height: 50 }} ItemSeparatorComponent={() => {
              return (<View width={10}></View>)
            }} showsVerticalScrollIndicator={false} numColumns={2} data={devices} renderItem={({ item, index }) => {
              return item
            }}>
          </FlatList>
        </View>
      </View>
    </View>

  )
}
