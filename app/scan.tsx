import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Avatar, Button, Card, Dialog, H2, Image, Input, Label, Paragraph, ScrollView, Switch, Text, Tooltip, Unspaced, View, XStack, YStack, useTheme } from 'tamagui'
import { Ionicons } from '@expo/vector-icons';
import DeviceEnergy from '../components/ElectricityDeviceCards';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { X } from '@tamagui/lucide-icons';



export default function Scan() {
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
        <View flex={1} mt={20} mb={50} px={10}>

            <Text alignSelf="center" textAlign='center' fontSize={15} fontWeight={"500"}>Scan the QR code</Text>
            <View flex={1} paddingVertical={50} paddingHorizontal={10}>
                <Camera focusDepth={0} onBarCodeScanned={(item) => {
                    setScanned(item.data)
                    setOpen(true)
                }} barCodeScannerSettings={{
                    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.code128],
                }} style={styles.camera} type={type}>

                </Camera>
            </View>

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