import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Avatar, Button, Card, Dialog, H2, Image, Input, Label, Paragraph, ScrollView, Switch, Text, Tooltip, Unspaced, View, XStack, YStack, useTheme } from 'tamagui'
import { Ionicons } from '@expo/vector-icons';
import DeviceEnergy from '../components/ElectricityDeviceCards';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { X } from '@tamagui/lucide-icons';



export default function AddDevice() {
    const { top } = useSafeAreaInsets()
    const theme = useTheme()
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [scanned, setScanned] = useState('')
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)

    useEffect(() => {

    }, [open, open2])

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        requestPermission();
    }

    return (
        /*  <ScrollView showsVerticalScrollIndicator={false}>
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
                             <Text alignSelf="flex-start" fontSize={18} fontWeight={"700"}>Device Usage</Text>
                         </Label>
 
                     </XStack>
                     <View left={-30}>
 
                     </View>
 
                 </View>
                 <YStack w={"100%"} gap={10}>
                     <DeviceEnergy icon_name={"bulb"} icon_name2={"trending-down"} icon_name2_color={"green"} device={"Smart Lamp"} power={"10 kWh"} subtext={"10%"} power_loss={false} />
                     <DeviceEnergy icon_name={"tv-outline"} icon_name2={"trending-up"} icon_name2_color={"red"} device={"Smart TV"} power={"10 kWh"} subtext={"5%"} power_loss={true} />
 
                 </YStack>
             </View>
         </ScrollView> */
        <View flex={1} mt={20} mb={50} px={10}>

            <Text alignSelf="center" textAlign='center' fontSize={15} fontWeight={"500"}>To add, scan the QR code on the gadget/package or add manually</Text>
            <View flex={1} paddingVertical={50} paddingHorizontal={10}>
                <Camera focusDepth={0} onBarCodeScanned={(item) => {
                    setScanned(item.data)
                    setOpen(true)
                }} barCodeScannerSettings={{
                    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
                }} style={styles.camera} type={type}>

                </Camera>
            </View>
            <YStack gap={10}>
                <Button onPress={() => {
                    setOpen2(true)
                }} color={"#1ca655"} h={48} borderColor={"#1ca655"} fontWeight={"700"} variant="outlined">
                    Enter device code manually
                </Button>
            </YStack>
            <Dialog open={open} >
                <Dialog.Trigger />
                <Dialog.Portal>
                    <Dialog.Overlay />
                    <Dialog.Content w={"80%"}>
                        <Dialog.Title />
                        <Dialog.Description />
                        <YStack gap={30} >
                            <Text alignSelf="center" textAlign='center' fontSize={15} fontWeight={"500"}>{scanned}</Text>
                            <XStack gap={15}>

                                <Button onPress={() => {
                                    setOpen(false)
                                }} flex={1} h={48} color={"white"} borderColor={"gray.500"} fontWeight={"600"}>
                                    Cancel
                                </Button>
                                <Button flex={1} h={48} color={"white"} bg={"#1ca655"} fontWeight={"600"}>
                                    Submit
                                </Button>
                            </XStack>
                        </YStack>
                        <Unspaced>
                            <Dialog.Close asChild>
                                <Button
                                    onPress={() => {
                                        setOpen(false)
                                    }}
                                    position="absolute"
                                    top="$3"
                                    right="$3"
                                    size="$2"
                                    circular
                                    icon={X}
                                />
                            </Dialog.Close>
                        </Unspaced>

                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog>

            <Dialog open={open2} >
                <Dialog.Trigger />
                <Dialog.Portal>
                    <Dialog.Overlay />
                    <Dialog.Content w={"80%"}>
                        <Dialog.Title />
                        <Dialog.Description />
                        <YStack gap={30} >
                            <Text alignSelf="center" textAlign='center' fontSize={16} fontWeight={"700"}>Please, enter device code</Text>
                            <YStack gap={15}>
                                <Input bg={"$gray6"} h={48} placeholder='device code' />
                                <XStack gap={15}>

                                    <Button onPress={() => {
                                        setOpen2(false)
                                    }} flex={1} h={48} color={"white"} borderColor={"gray.500"} fontWeight={"600"}>
                                        Cancel
                                    </Button>
                                    <Button flex={1} h={48} color={"white"} bg={"#1ca655"} fontWeight={"600"}>
                                        Submit
                                    </Button>
                                </XStack>
                            </YStack>

                        </YStack>
                        <Unspaced>
                            <Dialog.Close asChild>
                                <Button
                                    onPress={() => {
                                        setOpen2(false)
                                    }}
                                    position="absolute"
                                    top="$3"
                                    right="$3"
                                    size="$2"
                                    circular
                                    icon={X}
                                />
                            </Dialog.Close>
                        </Unspaced>

                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog>
        </View >


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,

    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});