import { router } from 'expo-router';
import { Button, Image, Text, View } from 'tamagui';
import { StyleSheet } from 'react-native';
import { OnboardFlow } from 'react-native-onboard';


export default function App() {
    const YourComponent = () => {
        return (
            <Image

                source={{ width: 200, height: 200, uri: 'https://frigade.com/img/demo.png' }}
                width="100%"
                height="70%"
                resizeMode="contain"
            />
        );
    };
    return (
        <View style={styles.container}>
            <OnboardFlow pages={[
                {
                    title: 'Welcome to my app',
                    imageComponent: <YourComponent />,
                    subtitle: 'Connect your bank account now and start saving money.',

                },
                {
                    title: 'Buy cool stuff',
                    imageComponent: <YourComponent />,
                    subtitle: 'Remember that ice cream you wanted to buy?',
                },
                {
                    title: 'The right tools',
                    imageComponent: <YourComponent />,
                    subtitle: 'Our app can do anything. Literally anything. We are that good.',
                }
            ]}
                type='fullscreen'
                onDone={() => {
                    router.push('/(tabs)')
                }}
                paginationSelectedColor="#1ca655"
                primaryColor="#1ca655"
                showDismissButton={true}
                pageStyle={{}}
                PrimaryButtonComponent={() => {
                    return (
                        <Button padded h={60} bg={"#1ca655"}>
                            <Text alignSelf="flex-start" fontSize={18} fontWeight={"600"}>Continue</Text>
                        </Button>
                    )
                }}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
